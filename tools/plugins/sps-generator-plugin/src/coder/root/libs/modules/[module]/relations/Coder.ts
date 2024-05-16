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

  async init() {
    const relation = new RelationCoder({
      tree: this.tree,
      parent: this,
    });

    this.project.relation = relation;

    await this.project.relation.init();
  }

  async createRelations() {
    await this.init();

    await this.project.relation.create();
  }

  async removeRelations() {
    await this.init();

    await this.project.relation.remove();
  }

  async createRelationFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
    templateName?: string;
  }) {
    await this.init();

    await this.project.relation.createRelationFrontendComponentVariant(props);
  }

  async removeRelationFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
  }) {
    await this.init();

    await this.project.relation.removeRelationFrontendComponentVariant(props);
  }
}
