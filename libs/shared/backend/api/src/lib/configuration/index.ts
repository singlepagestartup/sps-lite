import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { ZodObject } from "zod";

export interface IConfiguration {
  repository: {
    type: "database";
    schema: any;
    Table: PgTableWithColumns<any>;
    insertSchema: ZodObject<any>;
    selectSchema: ZodObject<any>;
    dump: {
      type: "json";
      directory: string;
    };
    seed: {
      module: string;
      name: string;
      type: "model" | "relation";
      compare?: {
        type: "field";
        value: string;
      };
    };
  };
}
