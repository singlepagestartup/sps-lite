import { Tree } from "@nx/devkit";
import { Coder as ModuleCoder } from "../Coder";
import { readdir } from "fs/promises";
import { Coder as ModelCoder } from "./[model]/Coder";
import { IEditFieldProps } from "./[model]/backend/schema/table/Coder";

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
    model?: ModelCoder;
  };

  constructor({
    tree,
    parent,
    isExternal = false,
    modelName,
  }: {
    tree: Tree;
    parent: ModuleCoder;
    isExternal?: boolean;
    modelName: string;
  }) {
    this.name = "models";
    this.baseName = `${parent.baseName}-models`;
    this.baseDirectory = `${parent.baseDirectory}/models`;
    this.tree = tree;
    this.parent = parent;
    this.isExternal = isExternal;

    const model = new ModelCoder({
      tree: this.tree,
      name: modelName,
      parent: this,
    });

    this.project = {
      model,
    };
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
