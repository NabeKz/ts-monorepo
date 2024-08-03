import { serve } from "@hono/node-server";
import { createFactory } from "hono/factory";
import { Env } from "@/types";
import { db } from "@/infra/db";
import { users } from "@/routes/users";

const factory = createFactory<Env>();

const app = factory.createApp().basePath("/api");

const dbMiddleware = factory.createMiddleware(async (c, next) => {
  c.set("db", db);
  await next();
});

app.use(dbMiddleware);

app.get("/", (c) => c.text("Hello Hono!"));
app.route("/users", users);

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
