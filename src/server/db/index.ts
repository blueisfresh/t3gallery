import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres"; // Vercel Postgres SQL client
import * as schema from "./schema";

// Pass the Vercel Postgres SQL client to Drizzle
export const db = drizzle(sql, { schema });
