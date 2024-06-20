import { Tree } from "@nx/devkit";
import { Coder as ModuleCoder } from "../Coder";
import {
  Coder as AppCoder,
  IGeneratorProps as IAppCoderGeneratorProps,
} from "./app/Coder";
import {
  Coder as ModelsCoder,
  IGeneratorProps as IModelsCoderGeneratorProps,
} from "./models/Coder";
import {
  Coder as SchemaCoder,
  IGeneratorProps as ISchemaCoderGeneratorProps,
} from "./schema/Coder";
import {
  Coder as DbCoder,
  IGeneratorProps as IDbCoderGeneratorProps,
} from "./db/Coder";
import {
  Coder as SdkCoder,
  IGeneratorProps as ISdkCoderGeneratorProps,
} from "./sdk/Coder";

export type IGeneratorProps = {
  db?: IDbCoderGeneratorProps;
  app?: IAppCoderGeneratorProps;
  models?: IModelsCoderGeneratorProps;
  schema?: ISchemaCoderGeneratorProps;
  sdk?: ISdkCoderGeneratorProps;
};

export class Coder {
  parent: ModuleCoder;
  tree: Tree;
  name: string;
  baseName: string;
  baseDirectory: string;
  absoluteName: string;
  project: {
    db: DbCoder;
    app: AppCoder;
    models: ModelsCoder;
    schema: SchemaCoder;
    sdk: SdkCoder;
  };

  constructor(props: { tree: Tree; parent: ModuleCoder } & IGeneratorProps) {
    this.name = "backend";
    this.tree = props.tree;
    this.parent = props.parent;
    this.baseName = `${this.parent.baseName}-backend`;
    this.baseDirectory = `${this.parent.baseDirectory}/backend`;
    this.absoluteName = `${this.parent.absoluteName}/backend`;

    const db = new DbCoder({
      ...props.schema,
      tree: this.tree,
      parent: this,
    });

    const schema = new SchemaCoder({
      ...props.schema,
      tree: this.tree,
      parent: this,
    });

    const models = new ModelsCoder({
      ...props.models,
      tree: this.tree,
      parent: this,
    });

    const app = new AppCoder({
      ...props.app,
      tree: this.tree,
      parent: this,
    });

    const sdk = new SdkCoder({
      ...props.sdk,
      tree: this.tree,
      parent: this,
    });

    this.project = {
      db,
      schema,
      models,
      app,
      sdk,
    };
  }

  async migrate(props: { version: string }) {
    await this.project.db.migrate(props);
    await this.project.schema.migrate(props);
    await this.project.models.migrate(props);
    await this.project.app.migrate(props);
    await this.project.sdk.migrate(props);
  }

  async create() {
    await this.project.db.create();
    await this.project.schema.create();
    await this.project.models.create();
    await this.project.app.create();
    await this.project.sdk.create();
  }

  async remove() {
    await this.project.sdk.remove();
    await this.project.app.remove();
    await this.project.models.remove();
    await this.project.schema.remove();
    await this.project.db.remove();
  }
}
