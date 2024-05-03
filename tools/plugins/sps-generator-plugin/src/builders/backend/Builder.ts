import { Builder as AppBuilder } from "./app/Builder";
import { Builder as SchemaBuilder } from "./schema/Builder";
import { Tree } from "@nx/devkit";

export class Builder {
  children: (AppBuilder | SchemaBuilder)[];

  constructor({
    modelName,
    module,
    tree,
  }: {
    modelName: string;
    module: string;
    tree: Tree;
  }) {
    const schemaBuilder = new SchemaBuilder({
      modelName,
      module,
      tree,
    });

    const appBuilder = new AppBuilder({
      modelName,
      module,
      tree,
    });

    // const children = [schemaBuilder, appBuilder];
    const children = [appBuilder];

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
