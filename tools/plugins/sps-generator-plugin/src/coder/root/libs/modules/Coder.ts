import { Tree } from "@nx/devkit";
import {
  Coder as ModuleCoder,
  IGeneratorProps as IModuleCoderGeneratorProps,
} from "./[module]/Coder";
import { Coder as ModulesCoder } from "../Coder";
import { IEditFieldProps } from "./[module]/models/[model]/backend/schema/table/Coder";

export type IGeneratorProps = {
  module: IModuleCoderGeneratorProps;
};

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
  } = {};

  constructor(
    props: {
      tree: Tree;
      parent: ModulesCoder;
      type: "modules" | "providers" | "shared";
    } & IGeneratorProps,
  ) {
    this.baseName = `${props.parent.baseName}`;
    this.baseDirectory = `${props.parent.baseDirectory}/${props.type}`;
    this.name = props.type;
    this.tree = props.tree;
    this.parent = props.parent;

    this.project.module = new ModuleCoder({
      ...props.module,
      tree: this.tree,
      parent: this,
    });
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

  async createRelationFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
    templateName?: string;
  }) {
    await this.project.module.createRelationFrontendComponentVariant(props);
  }

  async removeRelationFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
  }) {
    await this.project.module.removeRelationFrontendComponentVariant(props);
  }
}
