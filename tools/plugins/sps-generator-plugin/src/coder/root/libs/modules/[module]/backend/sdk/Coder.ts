import { Tree } from "@nx/devkit";
import { Coder as BackendCoder } from "../Coder";
import { Coder as RootCoder } from "./root/Coder";

export class Coder {
  name: string;
  tree: Tree;
  parent: BackendCoder;
  baseName: string;
  baseDirectory: string;
  project: {
    root: RootCoder;
  };

  constructor({ tree, parent }: { tree: Tree; parent: BackendCoder }) {
    this.name = "sdk";
    this.baseName = `${parent.baseName}-sdk`;
    this.baseDirectory = `${parent.baseDirectory}/sdk`;
    this.tree = tree;
    this.parent = parent;

    const root = new RootCoder({
      tree: this.tree,
      parent: this,
    });

    this.project = {
      root,
    };
  }

  async update() {
    await this.project.root.update();
  }

  async create() {
    await this.project.root.create();
  }

  async remove() {
    await this.project.root.remove();
  }
}
