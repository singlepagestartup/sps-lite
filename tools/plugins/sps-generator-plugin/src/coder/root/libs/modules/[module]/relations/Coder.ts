import { Tree } from "@nx/devkit";
import { Coder as ModuleCoder } from "../Coder";
import { Coder as RelationCoder } from "./[relation]/Coder";

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

  constructor(props: { tree: Tree; parent: ModuleCoder }) {
    this.tree = props.tree;
    this.name = "relations";
    this.parent = props.parent;
    this.baseName = `${props.parent.baseName}-relations`;
    this.baseDirectory = `${props.parent.baseDirectory}/relations`;

    this.project.relation = new RelationCoder({
      tree: this.tree,
      parent: this,
    });
  }

  async update() {
    await this.project.relation?.update();
  }

  async createRelations() {
    await this.project.relation.create();
  }

  async removeRelations() {
    await this.project.relation.remove();
  }

  async createRelationFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
    templateName?: string;
  }) {
    await this.project.relation.createRelationFrontendComponentVariant(props);
  }

  async removeRelationFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
  }) {
    await this.project.relation.removeRelationFrontendComponentVariant(props);
  }
}
