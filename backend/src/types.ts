import { type BetterSQLite3Database } from "drizzle-orm/better-sqlite3";

type DB = BetterSQLite3Database;
export type Env = {
  Variables: {
    db: DB;
  };
};
