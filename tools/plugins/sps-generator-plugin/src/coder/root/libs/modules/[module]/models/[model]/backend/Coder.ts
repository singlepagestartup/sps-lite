import { Coder as SchemaCoder } from "./schema/Coder";
import { Tree } from "@nx/devkit";
import { Coder as ModelCoder } from "../Coder";
import { Coder as ModelRootCoder } from "./model/root/Coder";
import { Coder as AppCoder } from "./app/root/Coder";
import { IEditFieldProps } from "./schema/table/Coder";

export class Coder {
  parent: ModelCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  name: string;
  project: {
    app: AppCoder;
    schema: SchemaCoder;
    model: ModelRootCoder;
  };

  constructor({ parent, tree }: { parent: ModelCoder; tree: Tree }) {
    this.name = "backend";
    this.baseName = `${parent.baseName}-backend`;
    this.baseDirectory = `${parent.baseDirectory}/backend`;
    this.tree = tree;
    this.parent = parent;

    const schema = new SchemaCoder({
      tree: this.tree,
      parent: this,
    });

    const model = new ModelRootCoder({
      tree: this.tree,
      parent: this,
    });

    const app = new AppCoder({
      tree: this.tree,
      parent: this,
    });

    this.project = {
      schema,
      model,
      app,
    };
  }

  async init() {
    await this.project.schema.init();
    await this.project.model.init();
    await this.project.app.init();
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

  async addField(props: IEditFieldProps) {
    await this.project.schema.addField(props);
  }

  async removeField(props: IEditFieldProps) {
    await this.project.schema.removeField(props);
  }

  async createRelation(props: { relationName: string }) {
    await this.project.schema.createRelation(props);
  }

  async removeRelation(props: { relationName: string }) {
    await this.project.schema.removeRelation(props);
  }

  async createVariant(props: { variantName: string; variantLevel: string }) {
    await this.project.schema.createVariant(props);
  }

  async removeVariant(props: { variantName: string; variantLevel: string }) {
    await this.project.schema.removeVariant(props);
  }
}
