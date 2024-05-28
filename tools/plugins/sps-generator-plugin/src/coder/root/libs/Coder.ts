import { Tree } from "@nx/devkit";
import { Coder as ModulesCoder } from "./modules/Coder";
import { Coder as RootCoder } from "../Coder";
import { IEditFieldProps } from "./modules/[module]/models/[model]/backend/schema/table/Coder";

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
  } = {} as {
    modules: ModulesCoder;
  };

  constructor(props: {
    tree: Tree;
    parent: RootCoder;
    moduleName: string;
    models?: {
      name: string;
      isExternal?: boolean;
    }[];
    relations?: {
      name?: string;
    }[];
  }) {
    this.baseDirectory = `libs`;
    this.name = "libs";
    this.baseName = `${props.parent.baseName}`;
    this.tree = props.tree;
    this.parent = props.parent;

    this.project.modules = new ModulesCoder({
      tree: this.tree,
      parent: this,
      type: "modules",
      moduleName: props.moduleName,
      models: props.models,
      relations: props.relations,
    });
  }

  async update() {
    await this.project.modules.update();
  }

  async createModule() {
    await this.project.modules.create();
  }

  async removeModule() {
    await this.project.modules.remove();
  }
  async createModel() {
    await this.project.modules.createModel();
  }

  async removeModel() {
    await this.project.modules.removeModel();
  }

  async addField(props: IEditFieldProps) {
    await this.project.modules.addField(props);
  }

  async removeField(props: IEditFieldProps) {
    await this.project.modules.removeField(props);
  }

  async createRelations() {
    await this.project.modules.createRelations();
  }

  async removeRelations() {
    await this.project.modules.removeRelations();
  }

  async createModelFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
    templateName?: string;
  }) {
    await this.project.modules.createModelFrontendComponentVariant(props);
  }

  async removeModelFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
  }) {
    await this.project.modules.removeModelFrontendComponentVariant(props);
  }

  async createBackendVariant(props: {
    variantName: string;
    variantLevel: string;
  }) {
    await this.project.modules.createBackendVariant(props);
  }

  async removeBackendVariant(props: {
    variantName: string;
    variantLevel: string;
  }) {
    await this.project.modules.removeBackendVariant(props);
  }

  async createRelationFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
    templateName?: string;
  }) {
    await this.project.modules.createRelationFrontendComponentVariant(props);
  }

  async removeRelationFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
  }) {
    await this.project.modules.removeRelationFrontendComponentVariant(props);
  }
}
