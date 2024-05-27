import { Tree, formatFiles } from "@nx/devkit";
import { Coder as LibsCoder } from "./libs/Coder";
import { IEditFieldProps } from "./libs/modules/[module]/models/[model]/backend/schema/table/Coder";

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
  } = {} as {
    libs: LibsCoder;
  };

  constructor(props: {
    tree: Tree;
    moduleName: string;
    models?: { name: string; isExternal?: boolean }[];
    relations?: {}[];
  }) {
    this.name = "root";
    this.tree = props.tree;
    this.baseName = "@sps";
    this.baseDirectory = "";

    this.project.libs = new LibsCoder({
      tree: this.tree,
      parent: this,
      moduleName: props.moduleName,
      models: props.models,
      relations: props.relations,
    });
  }

  async update() {
    await this.project.libs.update();
  }

  async createModule() {
    await this.project.libs.createModule();
  }

  async removeModule() {
    await this.project.libs.removeModule();
  }
  async createModel() {
    await this.project.libs.createModel();
  }

  async removeModel() {
    await this.project.libs.removeModel();
  }

  async addField(props: IEditFieldProps) {
    await this.project.libs.addField(props);
  }

  async removeField(props: IEditFieldProps) {
    await this.project.libs.removeField(props);
  }

  async createRelations() {
    await this.project.libs.createRelations();
  }

  async removeRelations() {
    await this.project.libs.removeRelations();
  }

  async removeBackendVariant(props: {
    variantLevel: string;
    variantName: string;
  }) {
    await this.project.libs.removeBackendVariant(props);

    await formatFiles(this.tree);
  }

  async createBackendVariant(props: {
    variantLevel: string;
    variantName: string;
  }) {
    await this.project.libs.createBackendVariant(props);

    await formatFiles(this.tree);
  }

  async createModelFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
    templateName?: string;
  }) {
    await this.project.libs.createModelFrontendComponentVariant(props);

    await formatFiles(this.tree);
  }

  async removeModelFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
  }) {
    await this.project.libs.removeModelFrontendComponentVariant(props);

    await formatFiles(this.tree);
  }

  async createRelationFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
    relationName: string;
    templateName?: string;
  }) {
    await this.project.libs.createRelationFrontendComponentVariant(props);

    await formatFiles(this.tree);
  }

  async removeRelationFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
    relationName: string;
  }) {
    await this.project.libs.removeRelationFrontendComponentVariant(props);

    await formatFiles(this.tree);
  }
}
