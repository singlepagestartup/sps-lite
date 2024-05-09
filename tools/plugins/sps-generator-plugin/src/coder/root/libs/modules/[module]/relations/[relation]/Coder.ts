import { Tree } from "@nx/devkit";
import { Coder as RelationsCoder } from "../Coder";
import { Coder as BackendCoder } from "./backend/Coder";

/**
 * Relation Coder
 */
export class Coder {
  tree: Tree;
  parent: RelationsCoder;
  baseName: string;
  baseDirectory: string;
  name: string;
  leftName: string;
  rightName: string;
  project: {
    backend?: BackendCoder;
  };

  constructor({
    tree,
    parent,
    leftName,
    rightName,
  }: {
    tree: Tree;
    parent: RelationsCoder;
    leftName: string;
    rightName: string;
  }) {
    this.tree = tree;
    this.parent = parent;
    this.name = `${leftName}-to-${rightName}`;
    this.leftName = leftName;
    this.rightName = rightName;
    this.baseName = `${parent.baseName}-${this.name}`;
    this.baseDirectory = `${parent.baseDirectory}/${this.name}`;

    const backend = new BackendCoder({
      tree: this.tree,
      parent: this,
    });

    this.project = {
      backend,
    };
  }

  async create() {
    await this.project.backend.create();
  }

  async remove() {
    await this.project.backend.remove();
  }
}
