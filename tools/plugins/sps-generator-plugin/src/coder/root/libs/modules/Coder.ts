import { Tree } from "@nx/devkit";
import { Coder as ModuleCoder } from "./[module]/Coder";
import { Coder as ModulesCoder } from "../Coder";

/**
 * Modules Coder
 *
 * Can create modules
 */
export class Coder {
  tree: Tree;
  parent: ModulesCoder;
  baseName: string;
  baseDirectory: string;
  type: "modules" | "providers" | "shared";
  name: string;

  constructor({
    tree,
    parent,
    type,
  }: {
    tree: Tree;
    parent: ModulesCoder;
    type: "modules" | "providers" | "shared";
  }) {
    this.baseName = `${parent.baseName}`;
    this.baseDirectory = `${parent.baseDirectory}/${type}`;
    this.name = type;
    this.tree = tree;
    this.parent = parent;
  }

  async createModel({
    modelName,
    moduleName,
  }: {
    modelName: string;
    moduleName: string;
  }) {
    const moduleCoder = new ModuleCoder({
      tree: this.tree,
      parent: this,
      name: moduleName,
    });

    await moduleCoder.createModel({
      modelName,
    });
  }

  async removeModel({
    modelName,
    moduleName,
  }: {
    modelName: string;
    moduleName: string;
  }) {
    const moduleCoder = new ModuleCoder({
      tree: this.tree,
      parent: this,
      name: moduleName,
    });

    await moduleCoder.removeModel({
      modelName,
    });
  }
}
