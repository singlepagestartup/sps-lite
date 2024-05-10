import {
  ProjectConfiguration,
  Tree,
  formatFiles,
  getProjects,
} from "@nx/devkit";
import { Coder as RootCoder } from "./root/Coder";
import { IEditFieldProps } from "./root/libs/modules/[module]/models/[model]/backend/schema/table/Coder";
import { IEditRelationsProps } from "./root/libs/modules/[module]/relations/Coder";

/**
 * Main coder class
 */
export class Coder {
  projects: Map<string, ProjectConfiguration>;
  tree: Tree;
  project: {
    root: RootCoder;
  };

  constructor({ tree }: { tree: Tree }) {
    this.projects = getProjects(tree);
    this.tree = tree;

    const root = new RootCoder({
      tree: this.tree,
    });

    this.project = {
      root,
    };
  }

  async createModel({
    moduleName,
    modelName,
  }: {
    moduleName: string;
    modelName: string;
  }) {
    await this.project.root.createModel({
      moduleName,
      modelName,
    });

    await formatFiles(this.tree);
  }

  async removeModel({
    moduleName,
    modelName,
  }: {
    moduleName: string;
    modelName: string;
  }) {
    await this.project.root.removeModel({
      moduleName,
      modelName,
    });

    await formatFiles(this.tree);
  }

  async addField(
    props: IEditFieldProps & {
      moduleName: string;
      modelName: string;
    },
  ) {
    await this.project.root.addField(props);

    await formatFiles(this.tree);
  }

  async removeField(
    props: IEditFieldProps & {
      moduleName: string;
      modelName: string;
    },
  ) {
    await this.project.root.removeField(props);

    await formatFiles(this.tree);
  }

  async createRelations(
    props: IEditRelationsProps & {
      moduleName: string;
      leftModelName: string;
      rightModelName: string;
    },
  ) {
    await this.project.root.createRelations(props);

    await formatFiles(this.tree);
  }

  async removeRelations(
    props: IEditRelationsProps & {
      moduleName: string;
      leftModelName: string;
      rightModelName: string;
    },
  ) {
    await this.project.root.removeRelations(props);

    await formatFiles(this.tree);
  }

  async createModelFrontendComponentVariant({
    name,
    level,
    modelName,
    moduleName,
  }: {
    name: string;
    level: string;
    modelName: string;
    moduleName: string;
  }) {
    await this.project.root.createModelFrontendComponentVariant({
      variantLevel: level,
      variantName: name,
      moduleName: moduleName,
      modelName: modelName,
    });
  }

  async removeModelFrontendComponentVariant({
    name,
    level,
    modelName,
    moduleName,
  }: {
    name: string;
    level: string;
    modelName: string;
    moduleName: string;
  }) {
    await this.project.root.removeModelFrontendComponentVariant({
      variantLevel: level,
      variantName: name,
      moduleName: moduleName,
      modelName: modelName,
    });
  }

  async createRelationFrontendComponentVariant({
    name,
    level,
    relationName,
    moduleName,
  }: {
    name: string;
    level: string;
    relationName: string;
    moduleName: string;
  }) {
    await this.project.root.createRelationFrontendComponentVariant({
      variantLevel: level,
      variantName: name,
      moduleName,
      relationName,
    });
  }

  async removeRelationFrontendComponentVariant({
    name,
    level,
    relationName,
    moduleName,
  }: {
    name: string;
    level: string;
    relationName: string;
    moduleName: string;
  }) {
    await this.project.root.removeRelationFrontendComponentVariant({
      variantLevel: level,
      variantName: name,
      moduleName,
      relationName,
    });
  }
}
