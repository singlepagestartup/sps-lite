import { Tree } from "@nx/devkit";
import { Coder as RelationCoder } from "../Coder";
import {
  Coder as SchemaCoder,
  IGeneratorProps as ISchemaCoderGeneratorProps,
} from "./schema/Coder";
import {
  Coder as ModelCoder,
  IGeneratorProps as IModelCoderGeneratorProps,
} from "./model/root/Coder";
import {
  Coder as AppCoder,
  IGeneratorProps as IAppCoderGeneratorProps,
} from "./app/root/Coder";

export type IGeneratorProps = {
  schema?: ISchemaCoderGeneratorProps;
  model?: IModelCoderGeneratorProps;
  app?: IAppCoderGeneratorProps;
};

/**
 * Backend Coder
 */
export class Coder {
  tree: Tree;
  parent: RelationCoder;
  baseName: string;
  baseDirectory: string;
  name: string;
  project: {
    schema: SchemaCoder;
    model: ModelCoder;
    app: AppCoder;
  } = {} as {
    schema: SchemaCoder;
    model: ModelCoder;
    app: AppCoder;
  };

  constructor(props: { tree: Tree; parent: RelationCoder } & IGeneratorProps) {
    this.name = "backend";
    this.parent = props.parent;
    this.tree = props.tree;
    this.baseName = `${this.parent.baseName}-backend`;
    this.baseDirectory = `${this.parent.baseDirectory}/backend`;

    this.project.schema = new SchemaCoder({
      ...props.schema,
      tree: this.tree,
      parent: this,
    });

    this.project.model = new ModelCoder({
      ...props.model,
      tree: this.tree,
      parent: this,
    });

    this.project.app = new AppCoder({
      ...props.app,
      tree: this.tree,
      parent: this,
    });
  }

  async create() {
    await this.project.schema.create();
    await this.project.model.create();
    await this.project.app.create();
  }

  async update() {
    await this.project.schema.update();
    await this.project.model.update();
    await this.project.app.update();
  }

  async remove() {
    await this.project.app.remove();
    await this.project.model.remove();
    await this.project.schema.remove();
  }
}
