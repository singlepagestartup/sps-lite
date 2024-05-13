import postgres from "postgres";
import { DATABASE_OPTIONS } from "@sps/shared-utils";

export const pg = postgres(DATABASE_OPTIONS);
