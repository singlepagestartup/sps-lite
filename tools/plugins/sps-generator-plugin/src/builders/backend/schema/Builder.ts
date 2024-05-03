import { Tree } from "@nx/devkit";
import { Builder as TableBuilder } from "./table/Builder";
import { Builder as RootRelationsBuilder } from "./relations/root/Builder";
import { Builder as RootBuilder } from "./root/Builder";

export class Builder {
  children: (TableBuilder | RootRelationsBuilder | RootBuilder)[];

  constructor({
    modelName,
    module,
    tree,
  }: {
    modelName: string;
    module: string;
    tree: Tree;
  }) {
    const tableBuilder = new TableBuilder({
      modelName,
      module,
      tree,
    });

    const relationsBuilder = new RootRelationsBuilder({
      modelName,
      module,
      tree,
    });

    const rootBuilder = new RootBuilder({
      modelName,
      module,
      tree,
    });

    // const children = [tableBuilder, relationsBuilder, rootBuilder];
    const children = [tableBuilder];

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
