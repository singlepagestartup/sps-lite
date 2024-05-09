import { Tree } from "@nx/devkit";
import { Coder as RelationCoder } from "../Coder";
import { Coder as SchemaCoder } from "./schema/Coder";

/**
 * Backend Coder
 */
export class Coder {
  tree: Tree;
  parent: RelationCoder;
  baseName: string;
  baseDirectory: string;
  name: string;
  project: {
    schema?: SchemaCoder;
  };

  constructor({ tree, parent }: { tree: Tree; parent: RelationCoder }) {
    this.name = "backend";
    this.parent = parent;
    this.tree = tree;
    this.baseName = `${parent.baseName}-backend`;
    this.baseDirectory = `${parent.baseDirectory}/backend`;

    const schema = new SchemaCoder({
      tree: this.tree,
      parent: this,
    });

    this.project = {
      schema,
    };
  }

  async init() {
    await this.project.schema.init();
  }

  async create() {
    await this.project.schema.create();
  }

  async remove() {
    await this.project.schema.remove();
  }
}
