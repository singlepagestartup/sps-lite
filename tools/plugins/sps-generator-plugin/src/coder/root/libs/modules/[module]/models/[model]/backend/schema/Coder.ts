import { Tree } from "@nx/devkit";
import { IEditFieldProps, Coder as TableCoder } from "./table/Coder";
import { Coder as RelationsCoder } from "./relations/Coder";
import { Coder as RootCoder } from "./root/Coder";
import { Coder as BackendCoder } from "../Coder";

export class Coder {
  parent: BackendCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  name: string;
  project: {
    table: TableCoder;
    relations: RelationsCoder;
    root: RootCoder;
  };

  constructor({ parent, tree }: { parent: BackendCoder; tree: Tree }) {
    this.name = "schema";
    this.parent = parent;
    this.tree = tree;
    this.baseName = `${parent.baseName}-schema`;
    this.baseDirectory = `${parent.baseDirectory}/schema`;

    const table = new TableCoder({
      parent: this,
      tree,
    });

    const relations = new RelationsCoder({
      parent: this,
      tree,
    });

    const root = new RootCoder({
      parent: this,
      tree,
    });

    this.project = {
      table,
      relations,
      root,
    };
  }

  async update() {
    await this.project.table.update();
    await this.project.relations.update();
    await this.project.root.update();
  }

  async create() {
    await this.project.table.create();
    await this.project.relations.create();
    await this.project.root.create();
  }

  async remove() {
    await this.project.root.remove();
    await this.project.relations.remove();
    await this.project.table.remove();
  }

  async addField(props: IEditFieldProps) {
    await this.project.table.addField(props);
  }

  async removeField(props: IEditFieldProps) {
    await this.project.table.removeField(props);
  }

  async createRelation() {
    await this.project.relations.createRelation();
  }

  async removeRelation() {
    await this.project.relations.removeRelation();
  }

  async createVariant(props: { variantName: string; variantLevel: string }) {
    await this.project.table.createVariant({
      level: props.variantLevel,
      variant: props.variantName,
    });
  }

  async removeVariant(props: { variantName: string; variantLevel: string }) {
    await this.project.table.removeVariant({
      level: props.variantLevel,
      variant: props.variantName,
    });
  }
}
