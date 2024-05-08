import { Tree } from "@nx/devkit";
import { Coder as TableCoder } from "./table/Coder";
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
  };

  // children: (TableCoder | RootRelationsCoder | RootCoder)[];

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

    // const relationsCoder = new RootRelationsCoder({
    //   modelName,
    //   module,
    //   tree,
    // });

    // const rootCoder = new RootCoder({
    //   modelName,
    //   module,
    //   tree,
    // });

    // const children = [tableCoder, relationsCoder, rootCoder];

    // this.children = children;
    this.project = {
      table,
    };
  }

  async init() {
    await this.project.table.init();
  }

  async create() {
    await this.project.table.create();
  }

  async remove() {
    await this.project.table.remove();
  }
}
