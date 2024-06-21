import {
  Coder as SchemaCoder,
  IGeneratorProps as ISchemaCoderGeneratorProps,
} from "./schema/Coder";
import { Tree } from "@nx/devkit";
import { Coder as ModelCoder } from "../Coder";
import {
  Coder as ModelRootCoder,
  IGeneratorProps as IModelRootCoderGeneratorProps,
} from "./model/root/Coder";
import {
  Coder as AppRootCoder,
  IGeneratorProps as IAppRootCoderGeneratorProps,
} from "./app/root/Coder";
import { IEditFieldProps } from "./schema/table/Coder";

export type IGeneratorProps = {
  app?: IAppRootCoderGeneratorProps;
  model?: IModelRootCoderGeneratorProps;
  schema?: ISchemaCoderGeneratorProps;
};

export class Coder {
  parent: ModelCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  absoluteName: string;
  name: string;
  project: {
    app: AppRootCoder;
    schema: SchemaCoder;
    model: ModelRootCoder;
  } = {} as {
    app: AppRootCoder;
    schema: SchemaCoder;
    model: ModelRootCoder;
  };

  constructor(props: { parent: ModelCoder; tree: Tree } & IGeneratorProps) {
    this.name = "backend";
    this.baseName = `${props.parent.baseName}-backend`;
    this.baseDirectory = `${props.parent.baseDirectory}/backend`;
    this.absoluteName = `${props.parent.absoluteName}/backend`;
    this.tree = props.tree;
    this.parent = props.parent;

    this.project.schema = new SchemaCoder({
      ...props.schema,
      tree: this.tree,
      parent: this,
    });

    this.project.model = new ModelRootCoder({
      tree: this.tree,
      parent: this,
    });

    this.project.app = new AppRootCoder({
      tree: this.tree,
      parent: this,
    });
  }

  async migrate(props: { version: string }) {
    await this.project.schema.migrate(props);
    await this.project.model.migrate(props);
    await this.project.app.migrate(props);
  }

  async create() {
    await this.project.schema.create();
    await this.project.model.create();
    await this.project.app.create();
  }

  async remove() {
    await this.project.app.remove();
    await this.project.model.remove();
    await this.project.schema.remove();
  }

  async addField(props: IEditFieldProps) {
    await this.project.schema.addField(props);
  }

  async removeField(props: IEditFieldProps) {
    await this.project.schema.removeField(props);
  }
}
