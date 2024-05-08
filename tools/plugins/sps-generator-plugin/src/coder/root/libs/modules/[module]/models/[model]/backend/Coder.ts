// import { Coder as ModelCoder } from "./model/root/Coder";
import { Coder as SchemaCoder } from "./schema/Coder";
import { Tree, getProjects } from "@nx/devkit";
import { Coder as ModelCoder } from "../Coder";
import { Coder as AppCoder } from "./app/root/Coder";

export class Coder {
  parent: ModelCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  name: string;
  project: {
    app: AppCoder;
    schema: SchemaCoder;
  };
  // children: (AppCoder | SchemaCoder | ModelCoder)[];

  constructor({ parent, tree }: { parent: ModelCoder; tree: Tree }) {
    this.name = "backend";
    this.baseName = `${parent.baseName}-backend`;
    this.baseDirectory = `${parent.baseDirectory}/backend`;
    this.tree = tree;
    this.parent = parent;

    const schema = new SchemaCoder({
      tree: this.tree,
      parent: this,
    });

    const app = new AppCoder({
      tree: this.tree,
      parent: this,
    });

    this.project = {
      app,
      schema,
    };

    // const appCoder = new AppCoder({
    //   modelName,
    //   module,
    //   tree,
    // });
    // const modelCoder = new ModelCoder({
    //   modelName,
    //   module,
    //   tree,
    // });
    // const children = [schemaCoder, modelCoder, appCoder];
    // this.children = children;
  }

  async init() {
    await this.project.schema.init();
  }

  async create() {
    await this.project.schema.create();
    // await this.project.app.create();
  }

  async remove() {
    await this.project.schema.remove();
    // await this.project.app.remove();
  }
}
