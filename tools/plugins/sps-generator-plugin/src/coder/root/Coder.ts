import { Tree } from "@nx/devkit";
import { Coder as LibsCoder } from "./libs/Coder";
import { IEditFieldProps } from "./libs/modules/[module]/models/[model]/backend/schema/table/Coder";
import { IEditRelationsProps } from "./libs/modules/[module]/relations/Coder";

/**
 * Root Coder
 *
 * Can create apps
 */
export class Coder {
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  name: string;
  project: {
    libs: LibsCoder;
  };

  constructor({ tree }: { tree: Tree }) {
    this.name = "root";
    this.tree = tree;
    this.baseName = "@sps";
    this.baseDirectory = "";

    const libs = new LibsCoder({
      tree: this.tree,
      parent: this,
    });

    this.project = {
      libs,
    };
  }

  async createModel({
    modelName,
    moduleName,
  }: {
    modelName: string;
    moduleName: string;
  }) {
    await this.project.libs.createModel({
      modelName,
      moduleName,
    });
  }

  async removeModel({
    modelName,
    moduleName,
  }: {
    modelName: string;
    moduleName: string;
  }) {
    await this.project.libs.removeModel({
      modelName,
      moduleName,
    });
  }

  async addField(
    props: IEditFieldProps & {
      modelName: string;
      moduleName: string;
    },
  ) {
    await this.project.libs.addField(props);
  }

  async removeField(
    props: IEditFieldProps & {
      modelName: string;
      moduleName: string;
    },
  ) {
    await this.project.libs.removeField(props);
  }

  async createRelations(
    props: IEditRelationsProps & {
      moduleName: string;
      leftModelName: string;
      rightModelName: string;
    },
  ) {
    await this.project.libs.createRelations(props);
  }

  async removeRelations(
    props: IEditRelationsProps & {
      moduleName: string;
      leftModelName: string;
      rightModelName: string;
    },
  ) {
    await this.project.libs.removeRelations(props);
  }
}
