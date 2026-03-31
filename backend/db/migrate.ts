import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { migrate } from "drizzle-orm/libsql/migrator";

const client = createClient({
  url: process.env.DATABASE_URL ?? "file:./db/local.db",
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

const db = drizzle(client);

await migrate(db, {
  migrationsFolder: "./db/migrations",
});

console.log("Migrations complete.");
