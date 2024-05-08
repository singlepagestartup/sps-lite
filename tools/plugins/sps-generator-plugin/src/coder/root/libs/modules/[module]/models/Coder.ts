import { Tree } from "@nx/devkit";
import { Coder as ModuleCoder } from "../Coder";
import { readdir } from "fs/promises";
import { Coder as ModelCoder } from "./[model]/Coder";

/**
 * Models Coder
 *
 * Can create and remove models
 */
export class Coder {
  parent: ModuleCoder;
  tree: Tree;
  name: string;
  baseName: string;
  baseDirectory: string;
  project: {
    model?: ModelCoder;
  };

  constructor({ tree, parent }: { tree: Tree; parent: ModuleCoder }) {
    this.name = "models";
    this.baseName = `${parent.baseName}-models`;
    this.baseDirectory = `${parent.baseDirectory}/models`;
    this.tree = tree;
    this.parent = parent;

    this.project = {
      model: undefined,
    };
  }

  async check() {
    await readdir(this.baseDirectory);
  }

  async init({ modelName }: { modelName: string }) {
    const model = new ModelCoder({
      tree: this.tree,
      name: modelName,
      parent: this,
    });

    this.project.model = model;

    await this.project.model.init();
  }

  async createModel({ modelName }: { modelName: string }) {
    await this.check();
    await this.init({ modelName });

    await this.project.model.create();
  }

  async removeModel({ modelName }: { modelName: string }) {
    await this.init({ modelName });

    await this.project.model.remove();
  }
}
