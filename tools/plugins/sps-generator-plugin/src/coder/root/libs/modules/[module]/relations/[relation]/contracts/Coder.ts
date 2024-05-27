import { Tree } from "@nx/devkit";
import { Coder as RelationCoder } from "../Coder";
import { Coder as RootCoder } from "./root/Coder";
import { Coder as ExtendedCoder } from "./extended/Coder";

export class Coder {
  name: string;
  parent: RelationCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  project: {
    root: RootCoder;
    extended: ExtendedCoder;
  };

  constructor({ parent, tree }: { parent: RelationCoder; tree: Tree }) {
    this.name = "contracts";
    this.parent = parent;
    this.tree = tree;
    this.baseDirectory = `${parent.baseDirectory}/contracts`;
    this.baseName = `${parent.baseName}-contracts`;

    const root = new RootCoder({
      tree: this.tree,
      parent: this,
    });

    const extended = new ExtendedCoder({
      tree: this.tree,
      parent: this,
    });

    this.project = {
      root,
      extended,
    };
  }

  async update() {
    await this.project.root.update();
    await this.project.extended.update();
  }

  async init() {
    await this.project.root.init();
    await this.project.extended.init();
  }

  async create() {
    await this.project.root.create();
    await this.project.extended.create();
  }

  async remove() {
    await this.project.extended.remove();
    await this.project.root.remove();
  }
}
