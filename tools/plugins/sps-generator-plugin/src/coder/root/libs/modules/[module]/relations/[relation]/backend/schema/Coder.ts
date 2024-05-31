import { Tree } from "@nx/devkit";
import { Coder as BackendCoder } from "../Coder";
import { Coder as RootCoder } from "./root/Coder";

/**
 * Backend Coder
 */
export class Coder {
  tree: Tree;
  parent: BackendCoder;
  baseName: string;
  baseDirectory: string;
  name: string;
  project: {
    root: RootCoder;
  };

  constructor({ tree, parent }: { tree: Tree; parent: BackendCoder }) {
    this.name = "schema";
    this.parent = parent;
    this.tree = tree;
    this.baseName = `${parent.baseName}-schema`;
    this.baseDirectory = `${parent.baseDirectory}/schema`;

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
