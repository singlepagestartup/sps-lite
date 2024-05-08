import { Tree } from "@nx/devkit";
import { Coder as LibsCoder } from "./libs/Coder";

export class Coder {
  tree: Tree;
  baseName: string;
  baseDirectory: string;

  constructor({ tree }: { tree: Tree }) {
    this.tree = tree;
    this.baseName = "@sps";
    this.baseDirectory = "";
  }

  async createModel({
    modelName,
    moduleName,
  }: {
    modelName: string;
    moduleName: string;
  }) {
    const libsCoder = new LibsCoder({
      tree: this.tree,
      parent: this,
    });

    await libsCoder.createModel({
      modelName,
      moduleName,
    });
  }

  async removeModel({
    modelName,
    moduleName,
  }: {
    modelName: string;
    moduleName: string;
  }) {
    const libsCoder = new LibsCoder({
      tree: this.tree,
      parent: this,
    });

    await libsCoder.removeModel({
      modelName,
      moduleName,
    });
  }
}
