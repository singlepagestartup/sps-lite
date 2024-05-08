import { Tree } from "@nx/devkit";
import { Coder as ModelsCoder } from "./models/Coder";
import { Coder as ModuleCoder } from "../Coder";

/**
 * Module Coder
 *
 * Can work in specific module
 */
export class Coder {
  name: string;
  root: string;
  baseName: string;
  baseDirectory: string;
  tree: Tree;
  parent: ModuleCoder;
  project: {
    models?: ModelsCoder;
  };

  constructor({
    tree,
    name,
    parent,
  }: {
    tree: Tree;
    name: string;
    parent: ModuleCoder;
  }) {
    this.baseName = `${parent.baseName}/${name}`;
    this.baseDirectory = `${parent.baseDirectory}/${name}`;
    this.name = name;
    this.tree = tree;
    this.parent = parent;

    const models = new ModelsCoder({
      tree: this.tree,
      parent: this,
    });

    this.project = {
      models,
    };
  }

  async init() {
    //
  }

  async createModel({ modelName }: { modelName: string }) {
    await this.project.models.createModel({
      modelName,
    });

    await this.project.models.project.model.project.backend.project.app.attach({
      routesPath: `${this.baseDirectory}/backend/app/root/src/lib/routes.ts`,
    });
  }

  async removeModel({ modelName }: { modelName: string }) {
    await this.project.models.init({ modelName });

    await this.project.models.project.model.project.backend.project.app.detach({
      routesPath: `${this.baseDirectory}/backend/app/root/src/lib/routes.ts`,
    });

    await this.project.models.removeModel({
      modelName,
    });
  }
}
