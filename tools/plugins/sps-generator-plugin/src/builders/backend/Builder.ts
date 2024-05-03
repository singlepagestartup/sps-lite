import { Builder as AppBuilder } from "./app/Builder";
import { Builder as ModelBuilder } from "./model/Builder";
import { Builder as SchemaBuilder } from "./schema/Builder";
import { Tree } from "@nx/devkit";

export class Builder {
  children: (AppBuilder | SchemaBuilder | ModelBuilder)[];

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

    const modelBuilder = new ModelBuilder({
      modelName,
      module,
      tree,
    });

    // const children = [schemaBuilder, modelBuilder, appBuilder];
    const children = [schemaBuilder];

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
