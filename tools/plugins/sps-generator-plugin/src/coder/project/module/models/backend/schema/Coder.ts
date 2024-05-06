import { Tree } from "@nx/devkit";
import { Coder as TableCoder } from "./table/Coder";
import { Coder as RootRelationsCoder } from "./relations/root/Coder";
import { Coder as RootCoder } from "./root/Coder";

export class Coder {
  children: (TableCoder | RootRelationsCoder | RootCoder)[];

  constructor({
    modelName,
    module,
    tree,
  }: {
    modelName: string;
    module: string;
    tree: Tree;
  }) {
    const tableCoder = new TableCoder({
      modelName,
      module,
      tree,
    });

    const relationsCoder = new RootRelationsCoder({
      modelName,
      module,
      tree,
    });

    const rootCoder = new RootCoder({
      modelName,
      module,
      tree,
    });

    const children = [tableCoder, relationsCoder, rootCoder];

    this.children = children;
  }

  async create({ tree }: { tree: Tree }) {
    for (const children of this.children) {
      await children.create({ tree });
    }
  }

  async delete({ tree }: { tree: Tree }) {
    for (const children of this.children) {
      await children.delete({ tree });
    }
  }
}
