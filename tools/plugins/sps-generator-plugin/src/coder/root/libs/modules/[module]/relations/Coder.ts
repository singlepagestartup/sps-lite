import { Tree } from "@nx/devkit";
import { Coder as ModuleCoder } from "../Coder";
import { Coder as RelationCoder } from "./[relation]/Coder";

export interface IEditRelationsProps {
  leftModelRelationName: string;
  rightModelRelationName: string;
}

/**
 * Relations Coder
 */
export class Coder {
  tree: Tree;
  parent: ModuleCoder;
  baseName: string;
  baseDirectory: string;
  name: string;
  project: {
    relation?: RelationCoder;
  };

  constructor({ tree, parent }: { tree: Tree; parent: ModuleCoder }) {
    this.tree = tree;
    this.name = "relations";
    this.parent = parent;
    this.baseName = `${parent.baseName}-relations`;
    this.baseDirectory = `${parent.baseDirectory}/relations`;

    this.project = {
      relation: undefined,
    };
  }

  async init({
    leftModelRelationName,
    rightModelRelationName,
  }: {
    leftModelRelationName: string;
    rightModelRelationName: string;
  }) {
    const relation = new RelationCoder({
      tree: this.tree,
      leftModelRelationName,
      rightModelRelationName,
      parent: this,
    });

    this.project.relation = relation;

    await this.project.relation.init();
  }

  async createRelations({
    leftModelRelationName,
    rightModelRelationName,
  }: IEditRelationsProps) {
    await this.init({ leftModelRelationName, rightModelRelationName });

    await this.project.relation.create();
  }

  async removeRelations({
    leftModelRelationName,
    rightModelRelationName,
  }: IEditRelationsProps) {
    await this.init({ leftModelRelationName, rightModelRelationName });

    await this.project.relation.remove();
  }
}
