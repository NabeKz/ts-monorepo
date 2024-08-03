import { Hono } from "hono";
import { Env } from "@/types";
import { users as schema } from "@/infra/db/schemas/user";

export const users = new Hono<Env>();

users.get("/", async (c) => {
  const rows = c.var.db.select().from(schema).all();
  return c.json(rows);
});
