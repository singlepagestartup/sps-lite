import { Tree } from "@nx/devkit";
import { Coder as RelationCoder } from "../Coder";
import { Coder as SchemaCoder } from "./schema/Coder";
import { Coder as ModelCoder } from "./model/root/Coder";
import { Coder as AppCoder } from "./app/root/Coder";

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
    schema: SchemaCoder;
    model: ModelCoder;
    app: AppCoder;
  } = {} as {
    schema: SchemaCoder;
    model: ModelCoder;
    app: AppCoder;
  };

  constructor({ tree, parent }: { tree: Tree; parent: RelationCoder }) {
    this.name = "backend";
    this.parent = parent;
    this.tree = tree;
    this.baseName = `${parent.baseName}-backend`;
    this.baseDirectory = `${parent.baseDirectory}/backend`;

    this.project.schema = new SchemaCoder({
      tree: this.tree,
      parent: this,
    });

    this.project.model = new ModelCoder({
      tree: this.tree,
      parent: this,
    });

    this.project.app = new AppCoder({
      tree: this.tree,
      parent: this,
    });
  }
  async update() {
    await this.project.schema.update();
    await this.project.model.update();
    await this.project.app.update();
  }

  async create() {
    await this.project.schema.create();
    await this.project.model.create();
    await this.project.app.create();
  }

  async remove() {
    await this.project.app.remove();
    await this.project.model.remove();
    await this.project.schema.remove();
  }
}
