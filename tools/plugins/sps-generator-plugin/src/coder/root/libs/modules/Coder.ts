import { Tree } from "@nx/devkit";
import { Coder as ModuleCoder } from "./[module]/Coder";
import { Coder as ModulesCoder } from "../Coder";
import { IEditFieldProps } from "./[module]/models/[model]/backend/schema/table/Coder";

/**
 * Modules Coder
 *
 * Can create modules
 */
export class Coder {
  tree: Tree;
  parent: ModulesCoder;
  baseName: string;
  baseDirectory: string;
  type: "modules" | "providers" | "shared";
  name: string;
  project: {
    module?: ModuleCoder;
  };

  constructor(props: {
    tree: Tree;
    parent: ModulesCoder;
    type: "modules" | "providers" | "shared";
    moduleName: string;
    models?: {
      name: string;
      isExternal?: boolean;
    }[];
  }) {
    this.baseName = `${props.parent.baseName}`;
    this.baseDirectory = `${props.parent.baseDirectory}/${props.type}`;
    this.name = props.type;
    this.tree = props.tree;
    this.parent = props.parent;

    const module = new ModuleCoder({
      tree: this.tree,
      parent: this,
      name: props.moduleName,
      models: props.models,
    });

    this.project = {
      module,
    };
  }

  async update() {
    await this.project.module?.update();
  }

  async create() {
    await this.project.module.create();
  }

  async remove() {
    await this.project.module.remove();
  }

  async createModel() {
    await this.project.module.createModel();
  }

  async removeModel() {
    await this.project.module.removeModel();
  }

  async addField(props: IEditFieldProps) {
    await this.project.module.addField(props);
  }

  async removeField(props: IEditFieldProps) {
    await this.project.module.removeField(props);
  }

  async createRelations() {
    await this.project.module.createRelations();
  }

  async removeRelations() {
    await this.project.module.removeRelations();
  }

  async createModelFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
    templateName?: string;
  }) {
    await this.project.module.createModelFrontendComponentVariant(props);
  }

  async removeModelFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
  }) {
    await this.project.module.removeModelFrontendComponentVariant(props);
  }

  async createBackendVariant(props: {
    variantName: string;
    variantLevel: string;
  }) {
    await this.project.module.createBackendVariant(props);
  }

  async removeBackendVariant(props: {
    variantName: string;
    variantLevel: string;
  }) {
    await this.project.module.removeBackendVariant(props);
  }

  async createRelationFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
    relationName: string;
    templateName?: string;
  }) {
    await this.project.module.createRelationFrontendComponentVariant(props);
  }

  async removeRelationFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
    relationName: string;
  }) {
    await this.project.module.removeRelationFrontendComponentVariant(props);
  }
}
