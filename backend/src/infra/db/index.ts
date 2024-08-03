import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

const client = new Database(process.env.DB_URL ?? "");

export const db = drizzle(client, {
  logger: process.env.NODE_ENV !== "production",
});
