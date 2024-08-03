import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/infra/db/schemas/*",
  out: "./migrations",
  dialect: "sqlite",
  dbCredentials: {
    url: process.env.DB_URL ?? "",
  },
});
