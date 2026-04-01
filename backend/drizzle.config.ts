import { defineConfig } from "drizzle-kit"

const env =
  (globalThis as { process?: { env?: Record<string, string | undefined> } })
    .process?.env ?? {}

export default defineConfig({
  dialect: "sqlite",
  schema: "./db/schema.ts",
  out: "./db/migrations",
  dbCredentials: {
    url: env.DATABASE_URL ?? "file:./db/local.db",
  },
})
