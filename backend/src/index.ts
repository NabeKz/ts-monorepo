import { serve } from "@hono/node-server";
import { createFactory, createMiddleware } from "hono/factory";
import { Env } from "./types";
import { db } from "./infra/db";

const factory = createFactory<Env>();

const app = factory.createApp();

const dbMiddleware = createMiddleware<Env>(async (c, next) => {
  c.set("db", db);
  await next();
});

app.use(dbMiddleware);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/users", async (c) => {
  const rows = c.var.db.select();
  return c.json(rows);
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
