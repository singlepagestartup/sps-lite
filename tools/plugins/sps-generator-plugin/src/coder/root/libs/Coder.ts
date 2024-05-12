import { Tree } from "@nx/devkit";
import { Coder as ModulesCoder } from "./modules/Coder";
import { Coder as RootCoder } from "../Coder";
import { IEditFieldProps } from "./modules/[module]/models/[model]/backend/schema/table/Coder";
import { IEditRelationsProps } from "./modules/[module]/relations/Coder";

/**
 * Libs Coder
 *
 * Can create libs
 */
export class Coder {
  tree: Tree;
  parent: RootCoder;
  baseName: string;
  baseDirectory: string;
  name: string;
  project: {
    modules: ModulesCoder;
  };

  constructor({ tree, parent }: { tree: Tree; parent: RootCoder }) {
    this.baseDirectory = `libs`;
    this.name = "libs";
    this.baseName = `${parent.baseName}`;
    this.tree = tree;
    this.parent = parent;
  }

  async init() {
    const modulesCoder = new ModulesCoder({
      tree: this.tree,
      parent: this,
      type: "modules",
    });

    this.project = {
      modules: modulesCoder,
    };
  }

  async createModel({
    modelName,
    moduleName,
  }: {
    modelName: string;
    moduleName: string;
  }) {
    await this.init();

    await this.project.modules.createModel({ modelName, moduleName });
  }

  async removeModel({
    modelName,
    moduleName,
  }: {
    modelName: string;
    moduleName: string;
  }) {
    await this.init();

    await this.project.modules.removeModel({ modelName, moduleName });
  }

  async addField(
    props: IEditFieldProps & {
      modelName: string;
      moduleName: string;
    },
  ) {
    await this.init();

    await this.project.modules.addField(props);
  }

  async removeField(
    props: IEditFieldProps & {
      modelName: string;
      moduleName: string;
    },
  ) {
    await this.init();

    await this.project.modules.removeField(props);
  }

  async createRelations(
    props: IEditRelationsProps & {
      moduleName: string;
      leftModelName: string;
      rightModelName: string;
    },
  ) {
    await this.init();

    await this.project.modules.createRelations(props);
  }

  async removeRelations(
    props: IEditRelationsProps & {
      moduleName: string;
      leftModelName: string;
      rightModelName: string;
    },
  ) {
    await this.init();

    await this.project.modules.removeRelations(props);
  }

  async createModelFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
    moduleName: string;
    modelName: string;
    templateName?: string;
  }) {
    await this.init();

    await this.project.modules.createModelFrontendComponentVariant(props);
  }

  async removeModelFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
    moduleName: string;
    modelName: string;
  }) {
    await this.init();

    await this.project.modules.removeModelFrontendComponentVariant(props);
  }

  async createBackendVariant(props: {
    variantName: string;
    variantLevel: string;
    moduleName: string;
    entityName: string;
  }) {
    await this.init();

    await this.project.modules.createBackendVariant(props);
  }

  async removeBackendVariant(props: {
    variantName: string;
    variantLevel: string;
    moduleName: string;
    entityName: string;
  }) {
    await this.init();

    await this.project.modules.removeBackendVariant(props);
  }

  async createRelationFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
    moduleName: string;
    relationName: string;
    templateName?: string;
  }) {
    await this.init();

    await this.project.modules.createRelationFrontendComponentVariant(props);
  }

  async removeRelationFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
    moduleName: string;
    relationName: string;
  }) {
    await this.init();

    await this.project.modules.removeRelationFrontendComponentVariant(props);
  }
}
