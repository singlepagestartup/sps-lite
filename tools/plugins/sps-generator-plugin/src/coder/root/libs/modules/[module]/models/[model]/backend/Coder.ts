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
  project: {
    app: AppCoder;
  };
  // children: (AppCoder | SchemaCoder | ModelCoder)[];

  constructor({ parent, tree }: { parent: ModelCoder; tree: Tree }) {
    this.baseName = `${parent.baseName}-backend`;
    this.baseDirectory = `${parent.baseDirectory}/backend`;
    this.tree = tree;
    this.parent = parent;
    const appCoder = new AppCoder({
      tree: this.tree,
      parent: this,
    });

    this.project = {
      app: appCoder,
    };
    // const schemaCoder = new SchemaCoder({
    //   modelName,
    //   module,
    //   tree,
    // });
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

  async create() {
    await this.project.app.create();
    // for (const children of this.children) {
    //   await children.create({ tree });
    // }
  }

  async remove() {
    await this.project.app.remove();
    // for (const children of this.children) {
    //   await children.delete({ tree });
    // }
  }
}

// @sps/sps-website-builder-models-project-backend-app
// @sps/sps-website-builder-models-project-backend-app
// @sps/sps-website-builder-models-project-backend-app
