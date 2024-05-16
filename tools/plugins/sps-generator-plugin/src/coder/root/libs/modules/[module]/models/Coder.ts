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
  project: {
    model?: ModelCoder;
  };

  constructor({ tree, parent }: { tree: Tree; parent: ModuleCoder }) {
    this.name = "models";
    this.baseName = `${parent.baseName}-models`;
    this.baseDirectory = `${parent.baseDirectory}/models`;
    this.tree = tree;
    this.parent = parent;

    this.project = {
      model: undefined,
    };
  }

  async init({
    modelName,
    isExternal = false,
  }: {
    modelName: string;
    isExternal?: boolean;
  }) {
    const model = new ModelCoder({
      tree: this.tree,
      name: modelName,
      parent: this,
    });

    this.project.model = model;

    await this.project.model.init();
  }

  async createModel({ modelName }: { modelName: string }) {
    await this.init({ modelName });

    await this.project.model.create();
  }

  async removeModel({ modelName }: { modelName: string }) {
    await this.init({ modelName });

    await this.project.model.remove();
  }

  async addField(props: IEditFieldProps & { modelName: string }) {
    const { modelName } = props;

    await this.init({ modelName });

    await this.project.model.addField(props);
  }

  async removeField(props: IEditFieldProps & { modelName: string }) {
    const { modelName } = props;

    await this.init({ modelName });

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
    modelName: string;
    templateName?: string;
  }) {
    const { modelName } = props;

    await this.init({ modelName });

    await this.project.model.createModelFrontendComponentVariant(props);
  }

  async removeModelFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
    modelName: string;
  }) {
    const { modelName } = props;

    await this.init({ modelName });

    await this.project.model.removeModelFrontendComponentVariant(props);
  }

  async createBackendVariant(props: {
    variantName: string;
    variantLevel: string;
    modelName: string;
  }) {
    const { modelName } = props;

    await this.init({ modelName });

    await this.project.model.createBackendVariant(props);
  }

  async removeBackendVariant(props: {
    variantName: string;
    variantLevel: string;
    modelName: string;
  }) {
    const { modelName } = props;

    await this.init({ modelName });

    await this.project.model.removeBackendVariant(props);
  }
}
