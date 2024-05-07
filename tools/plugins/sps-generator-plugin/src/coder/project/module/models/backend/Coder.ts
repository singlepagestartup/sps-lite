import { Coder as AppCoder } from "./app/Coder";
import { Coder as ModelCoder } from "./model/Coder";
import { Coder as SchemaCoder } from "./schema/Coder";
import { Tree } from "@nx/devkit";

export class Coder {
  children: (AppCoder | SchemaCoder | ModelCoder)[];

  constructor({
    modelName,
    module,
    tree,
  }: {
    modelName: string;
    module: string;
    tree: Tree;
  }) {
    const schemaCoder = new SchemaCoder({
      modelName,
      module,
      tree,
    });

    const appCoder = new AppCoder({
      modelName,
      module,
      tree,
    });

    const modelCoder = new ModelCoder({
      modelName,
      module,
      tree,
    });

    // const children = [schemaCoder, modelCoder, appCoder];
    const children = [modelCoder];

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
