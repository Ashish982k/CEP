import { createClient } from "@libsql/client"
import { drizzle } from "drizzle-orm/libsql"

import * as schema from "@/db/schema"

const env =
  (globalThis as { process?: { env?: Record<string, string | undefined> } })
    .process?.env ?? {}

const client = createClient({
  url: env.DATABASE_URL ?? "file:./db/local.db",
  authToken: env.DATABASE_AUTH_TOKEN,
})

export const db = drizzle(client, { schema })
