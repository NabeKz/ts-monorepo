import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }).notNull(),
  displayId: text("displayId").notNull(),
  name: text("name").notNull(),
});
