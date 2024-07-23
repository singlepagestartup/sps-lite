import "reflect-metadata";
import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { ZodObject } from "zod";
import { getOperators } from "drizzle-orm";
import { injectable } from "inversify";

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

export interface ITransform {
  field: string;
  transform: (data: {
    seeds: ISeedResult[];
    entity: {
      dump: any;
    };
  }) => any;
}

export interface IFilter {
  column: string;
  method: keyof QueryBuilderFilterMethods;
  transformer: ITransform["transform"];
}

export interface IRepositoryConfiguration {
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
    transformers?: ITransform[];
    filters?: IFilter[];
  };
}

export interface IConfiguration {
  repository: IRepositoryConfiguration;
  getConfiguration: () => {
    repository: IRepositoryConfiguration;
  };
}

@injectable()
export class Configuration implements IConfiguration {
  repository: IRepositoryConfiguration;

  constructor(props: { repository: IRepositoryConfiguration }) {
    this.repository = props.repository;
  }

  getConfiguration() {
    return {
      repository: this.repository,
    };
  }
}
