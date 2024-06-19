import { Tree } from "@nx/devkit";
import { Coder as ModuleCoder } from "../Coder";
import {
  Coder as RelationCoder,
  IGeneratorProps as IRelationCoderGeneratorProps,
} from "./[relation]/Coder";

export type IGeneratorProps = {
  relation?: IRelationCoderGeneratorProps;
};

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
    relation: RelationCoder;
  } = {} as {
    relation: RelationCoder;
  };

  constructor(props: { tree: Tree; parent: ModuleCoder } & IGeneratorProps) {
    this.tree = props.tree;
    this.name = "relations";
    this.parent = props.parent;
    this.baseName = `${props.parent.baseName}-relations`;
    this.baseDirectory = `${props.parent.baseDirectory}/relations`;

    this.project.relation = new RelationCoder({
      ...props.relation,
      tree: this.tree,
      parent: this,
    });
  }

  async create() {
    await this.project.relation.create();
  }

  async update() {
    await this.project.relation.update();
  }

  async remove() {
    await this.project.relation.remove();
  }

  async removeRelations() {
    await this.project.relation.remove();
  }
}
