import { createClient } from "@libsql/client"
import { drizzle } from "drizzle-orm/libsql"
import { migrate } from "drizzle-orm/libsql/migrator"

const env =
  (globalThis as { process?: { env?: Record<string, string | undefined> } })
    .process?.env ?? {}

const client = createClient({
  url: env.DATABASE_URL ?? "file:./db/local.db",
  authToken: env.DATABASE_AUTH_TOKEN,
})

const db = drizzle(client)

await migrate(db, {
  migrationsFolder: "./db/migrations",
})

console.log("Migrations complete")
