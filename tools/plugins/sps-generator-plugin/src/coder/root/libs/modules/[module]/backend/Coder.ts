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
  Coder as SdkCoder,
  IGeneratorProps as ISdkCoderGeneratorProps,
} from "./sdk/Coder";

export type IGeneratorProps = {
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
  project: {
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
      schema,
      models,
      app,
      sdk,
    };
  }

  async update() {
    await this.project.schema.update();
    await this.project.models.update();
    await this.project.app.update();
    await this.project.sdk.update();
  }

  async create() {
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
  }
}
