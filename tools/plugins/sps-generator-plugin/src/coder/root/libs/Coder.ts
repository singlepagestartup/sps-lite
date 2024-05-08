import { Tree } from "@nx/devkit";
import { Coder as ModulesCoder } from "./modules/Coder";
import { Coder as RootCoder } from "../Coder";

/**
 * Libs Coder
 *
 * Can create libs
 */
export class Coder {
  tree: Tree;
  parent: RootCoder;
  baseName: string;
  baseDirectory: string;
  name: string;
  project: {
    modules: ModulesCoder;
  };

  constructor({ tree, parent }: { tree: Tree; parent: RootCoder }) {
    this.baseDirectory = `libs`;
    this.name = "libs";
    this.baseName = `${parent.baseName}`;
    this.tree = tree;
    this.parent = parent;
  }

  async init() {
    const modulesCoder = new ModulesCoder({
      tree: this.tree,
      parent: this,
      type: "modules",
    });

    this.project = {
      modules: modulesCoder,
    };
  }

  async createModel({
    modelName,
    moduleName,
  }: {
    modelName: string;
    moduleName: string;
  }) {
    await this.init();

    await this.project.modules.createModel({ modelName, moduleName });
  }

  async removeModel({
    modelName,
    moduleName,
  }: {
    modelName: string;
    moduleName: string;
  }) {
    await this.init();

    await this.project.modules.removeModel({ modelName, moduleName });
  }
}
