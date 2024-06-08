import { Tree } from "@nx/devkit";
import { Coder as ModuleCoder } from "../Coder";
import { readdir } from "fs/promises";
import {
  Coder as ModelCoder,
  IGeneratorProps as IModelCoderGeneratorProps,
} from "./[model]/Coder";
import { IEditFieldProps } from "./[model]/backend/schema/table/Coder";

export type IGeneratorProps = {
  name: IModelCoderGeneratorProps["name"];
  isExternal?: Coder["isExternal"];
};

/**
 * Models Coder
 *
 * Can create and remove models
 */
export class Coder {
  parent: ModuleCoder;
  tree: Tree;
  name: string;
  baseName: string;
  baseDirectory: string;
  isExternal: boolean;
  project: {
    model: ModelCoder;
  } = {} as {
    model: ModelCoder;
  };

  constructor(
    props: {
      tree: Tree;
      parent: ModuleCoder;
    } & IGeneratorProps,
  ) {
    this.name = "models";
    this.baseName = `${props.parent.baseName}-models`;
    this.baseDirectory = `${props.parent.baseDirectory}/models`;
    this.tree = props.tree;
    this.parent = props.parent;
    this.isExternal = props.isExternal;

    this.project.model = new ModelCoder({
      tree: this.tree,
      name: props.name,
      parent: this,
    });
  }

  async update() {
    await this.project.model?.update();
  }

  async createModel() {
    await this.project.model.create();
  }

  async removeModel() {
    await this.project.model.remove();
  }

  async addField(props: IEditFieldProps) {
    await this.project.model.addField(props);
  }

  async removeField(props: IEditFieldProps) {
    await this.project.model.removeField(props);
  }

  async createRelation() {
    await this.project.model.createRelation();
  }

  async removeRelation() {
    await this.project.model.removeRelation();
  }

  async createModelFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
    templateName?: string;
  }) {
    await this.project.model.createModelFrontendComponentVariant(props);
  }

  async removeModelFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
  }) {
    await this.project.model.removeModelFrontendComponentVariant(props);
  }

  async createBackendVariant(props: {
    variantName: string;
    variantLevel: string;
  }) {
    await this.project.model.createBackendVariant(props);
  }

  async removeBackendVariant(props: {
    variantName: string;
    variantLevel: string;
  }) {
    await this.project.model.removeBackendVariant(props);
  }
}
