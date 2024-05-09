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
  leftModelRelationName: string;
  rightModelRelationName: string;
  project: {
    backend?: BackendCoder;
  };

  constructor({
    tree,
    parent,
    leftModelRelationName,
    rightModelRelationName,
  }: {
    tree: Tree;
    parent: RelationsCoder;
    leftModelRelationName: string;
    rightModelRelationName: string;
  }) {
    this.tree = tree;
    this.parent = parent;
    this.name = `${leftModelRelationName}-to-${rightModelRelationName}`;
    this.leftModelRelationName = leftModelRelationName;
    this.rightModelRelationName = rightModelRelationName;
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

  async init() {
    await this.project.backend.init();
  }

  async create() {
    await this.project.backend.create();
  }

  async remove() {
    await this.project.backend.remove();
  }
}
