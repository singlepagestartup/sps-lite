import { Tree } from "@nx/devkit";
import {
  Coder as ModulesCoder,
  IGeneratorProps as IModulesCoderGeneratorProps,
} from "./modules/Coder";
import { Coder as RootCoder } from "../Coder";
import { IEditFieldProps } from "./modules/[module]/models/[model]/backend/schema/table/Coder";

export type IGeneratorProps = {
  modules?: IModulesCoderGeneratorProps[];
};

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
    modules: ModulesCoder[];
  } = {} as {
    modules: ModulesCoder[];
  };

  constructor(
    props: {
      tree: Tree;
      parent: RootCoder;
    } & IGeneratorProps,
  ) {
    this.baseDirectory = `libs`;
    this.name = "libs";
    this.baseName = `${props.parent.baseName}`;
    this.tree = props.tree;
    this.parent = props.parent;

    this.project.modules = props.modules.map((module) => {
      return new ModulesCoder({
        ...module,
        tree: this.tree,
        parent: this,
        type: "modules",
      });
    });
  }

  async update() {
    for (const module of this.project.modules) {
      await module.update();
    }
  }

  async createModule() {
    for (const module of this.project.modules) {
      await module.create();
    }
  }

  async removeModule() {
    for (const module of this.project.modules) {
      await module.remove();
    }
  }

  async createModel() {
    for (const module of this.project.modules) {
      await module.createModel();
    }
  }

  async removeModel() {
    for (const module of this.project.modules) {
      await module.removeModel();
    }
  }

  async addField(props: IEditFieldProps) {
    for (const module of this.project.modules) {
      await module.addField(props);
    }
  }

  async removeField(props: IEditFieldProps) {
    for (const module of this.project.modules) {
      await module.removeField(props);
    }
  }

  async createRelations() {
    for (const module of this.project.modules) {
      await module.createRelations();
    }
  }

  async removeRelations() {
    for (const module of this.project.modules) {
      await module.removeRelations();
    }
  }

  async createModelFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
    templateName?: string;
  }) {
    for (const module of this.project.modules) {
      await module.createModelFrontendComponentVariant(props);
    }
  }

  async removeModelFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
  }) {
    for (const module of this.project.modules) {
      await module.removeModelFrontendComponentVariant(props);
    }
  }

  async createBackendVariant(props: {
    variantName: string;
    variantLevel: string;
  }) {
    for (const module of this.project.modules) {
      await module.createBackendVariant(props);
    }
  }

  async removeBackendVariant(props: {
    variantName: string;
    variantLevel: string;
  }) {
    for (const module of this.project.modules) {
      await module.removeBackendVariant(props);
    }
  }

  async createRelationFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
    templateName?: string;
  }) {
    for (const module of this.project.modules) {
      await module.createRelationFrontendComponentVariant(props);
    }
  }

  async removeRelationFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
  }) {
    for (const module of this.project.modules) {
      await module.removeRelationFrontendComponentVariant(props);
    }
  }
}
