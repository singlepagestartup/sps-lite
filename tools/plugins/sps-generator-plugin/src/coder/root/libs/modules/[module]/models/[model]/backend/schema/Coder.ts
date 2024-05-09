import { Tree } from "@nx/devkit";
import { IEditFieldProps, Coder as TableCoder } from "./table/Coder";
import { Coder as RootRelationsCoder } from "./relations/root/Coder";
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
    relations: RootRelationsCoder;
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

    const relations = new RootRelationsCoder({
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

  async init() {
    await this.project.table.init();
    await this.project.relations.init();
    await this.project.root.init();
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
}
