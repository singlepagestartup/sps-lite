import { Tree } from "@nx/devkit";
import { Coder as ModuleCoder } from "../Coder";
import { readdir } from "fs/promises";
import { Coder as AppCoder } from "./app/Coder";

export class Coder {
  parent: ModuleCoder;
  tree: Tree;
  name: string;
  baseName: string;
  baseDirectory: string;
  project: {
    app: AppCoder;
  };

  constructor({ tree, parent }: { tree: Tree; parent: ModuleCoder }) {
    this.name = "backend";
    this.baseName = `${parent.baseName}-backend`;
    this.baseDirectory = `${parent.baseDirectory}/backend`;
    this.tree = tree;
    this.parent = parent;

    const app = new AppCoder({
      tree: this.tree,
      parent: this,
    });

    this.project = {
      app,
    };
  }

  async create() {
    await this.project.app.create();
  }
}
