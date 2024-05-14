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
    this.name = "models";
    this.baseName = `${parent.baseName}-models`;
    this.baseDirectory = `${parent.baseDirectory}/models`;
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

  async create() {
    await this.project.root.create();
  }

  async remove() {
    await this.project.root.remove();
  }
}