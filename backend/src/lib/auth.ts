import { betterAuth } from "better-auth"

import { users } from "@/db/schema"
import { db } from "@/src/db/client"

function requireEnv(name: string): string {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing required env: ${name}`)
  }
  return value
}

type EmailMeta = {
  name: string
  year: string
  branch: string
}

type VjtiEmailResult =
  | {
      ok: true
      meta: EmailMeta
    }
  | {
      ok: false
    }

function isVjtiEmail(email: string): VjtiEmailResult {
  const normalizedEmail = email.trim().toLowerCase()

  const emailMatch = normalizedEmail.match(
    /^([a-z]+)_b([0-9]{2})@([a-z]{2})\.vjti\.ac\.in$/,
  )

  if (!emailMatch) {
    return { ok: false }
  }

  const name = emailMatch[1]
  const year = emailMatch[2]
  const branch = emailMatch[3]

  if (!name || !year || !branch) {
    return { ok: false }
  }
  // TODO: validate this from the vjti website!
  const allowedBranches = new Set([
    "ce",
    "me",
    "ee",
    "it",
    "cs",
    "ec",
    "ch",
    "pr",
    "cv",
  ])

  if (!allowedBranches.has(branch)) {
    return { ok: false }
  }

  return {
    ok: true,
    meta: {
      name,
      year,
      branch,
    },
  }
}

export const auth = betterAuth({
  baseURL: requireEnv("BETTER_AUTH_URL"),
  basePath: "/auth",
  secret: requireEnv("BETTER_AUTH_SECRET"),
  session: {
    cookieCache: {
      enabled: true,
      strategy: "jwt",
      refreshCache: true,
    },
  },
  account: {
    storeStateStrategy: "cookie",
    storeAccountCookie: true,
  },
  socialProviders: {
    google: {
      clientId: requireEnv("GOOGLE_CLIENT_ID"),
      clientSecret: requireEnv("GOOGLE_CLIENT_SECRET"),
    },
  },
  databaseHooks: {
    user: {
      create: {
        before: async (user) => {
          if (!user.emailVerified) {
            return false
          }
          const parsedVjtiEmail = isVjtiEmail(user.email)

          if (!parsedVjtiEmail.ok) {
            return false
          }
          return true
        },
        after: async (user) => {
          await db
            .insert(users)
            .values({
              email: user.email,
              name: user.name,
            })
            .onConflictDoNothing({ target: users.email })
        },
      },
    },
  },
})
