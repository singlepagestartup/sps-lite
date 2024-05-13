import { Tree } from "@nx/devkit";
import { Coder as ModuleCoder } from "../Coder";
import { Coder as AppCoder } from "./app/Coder";
import { Coder as ModelsCoder } from "./models/Coder";
import { Coder as SchemaCoder } from "./schema/Coder";

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
  };

  constructor({ tree, parent }: { tree: Tree; parent: ModuleCoder }) {
    this.name = "backend";
    this.baseName = `${parent.baseName}-backend`;
    this.baseDirectory = `${parent.baseDirectory}/backend`;
    this.tree = tree;
    this.parent = parent;

    const schema = new SchemaCoder({
      tree: this.tree,
      parent: this,
    });

    const models = new ModelsCoder({
      tree: this.tree,
      parent: this,
    });

    const app = new AppCoder({
      tree: this.tree,
      parent: this,
    });

    this.project = {
      schema,
      models,
      app,
    };
  }

  async create() {
    await this.project.schema.create();
    await this.project.models.create();
    await this.project.app.create();
  }

  async remove() {
    await this.project.app.remove();
    await this.project.models.remove();
    await this.project.schema.remove();
  }
}
