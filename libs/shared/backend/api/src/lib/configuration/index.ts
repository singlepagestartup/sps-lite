import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { ZodObject } from "zod";
import { getOperators } from "drizzle-orm";

export interface QueryBuilderFilterMethods
  extends ReturnType<typeof getOperators> {}

export interface ISeedResult {
  module: string;
  name: string;
  type: "model" | "relation";
  seeds: {
    new: any;
    dump: any;
    old?: any;
  }[];
}

export interface ICompare {
  field: string;
  transform: (data: {
    seeds: ISeedResult[];
    entity: {
      dump: any;
    };
  }) => any;
}

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
      transformers?: ICompare[];
    };
  };
}
