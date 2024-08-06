import { Tree } from "@nx/devkit";
import { Coder as ModuleCoder } from "../Coder";
import {
  Coder as RelationCoder,
  IGeneratorProps as IModelCoderGeneratorProps,
} from "./[relation]/Coder";

export type IGeneratorProps = {
  relation: IModelCoderGeneratorProps;
};

/**
 * Relations Coder
 */
export class Coder {
  tree: Tree;
  parent: ModuleCoder;
  baseName: string;
  baseDirectory: string;
  absoluteName: string;
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
    this.absoluteName = `${props.parent.absoluteName}/relations`;

    this.project.relation = new RelationCoder({
      ...props.relation,
      tree: this.tree,
      parent: this,
    });
  }

  async create() {
    await this.project.relation.create();
  }

  async migrate(props: { version: string }) {
    await this.project.relation.migrate(props);
  }

  async remove() {
    await this.project.relation.remove();
  }

  async removeRelations() {
    await this.project.relation.remove();
  }
}
