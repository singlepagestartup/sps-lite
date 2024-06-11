import {
  ProjectConfiguration,
  Tree,
  formatFiles,
  getProjects,
} from "@nx/devkit";
import {
  Coder as RootCoder,
  IGeneratorProps as IRootCoderGeneratorProps,
} from "./root/Coder";
import { IEditFieldProps } from "./root/libs/modules/[module]/models/[model]/backend/schema/table/Coder";

export type IGeneratorProps = {
  root: IRootCoderGeneratorProps;
};

/**
 * Main coder class
 */
export class Coder {
  projects: Map<string, ProjectConfiguration>;
  tree: Tree;
  project: {
    root: RootCoder;
  } = {} as {
    root: RootCoder;
  };

  constructor(
    props: {
      tree: Tree;
    } & IGeneratorProps,
  ) {
    this.projects = getProjects(props.tree);
    this.tree = props.tree;

    this.project.root = new RootCoder({
      ...props.root,
      tree: this.tree,
    });
  }

  async update() {
    await this.project.root.update();
  }

  async addField(props: IEditFieldProps) {
    await this.project.root.addField(props);

    await formatFiles(this.tree);
  }

  async removeField(props: IEditFieldProps) {
    await this.project.root.removeField(props);

    await formatFiles(this.tree);
  }

  async createRelations() {
    await this.project.root.createRelations();

    await formatFiles(this.tree);
  }

  async removeRelations() {
    await this.project.root.removeRelations();

    await formatFiles(this.tree);
  }

  async createModelFrontendComponentVariant({
    name,
    level,
    templateName,
  }: {
    name: string;
    level: string;
    templateName?: string;
  }) {
    await this.project.root.createModelFrontendComponentVariant({
      variantLevel: level,
      variantName: name,
      templateName: templateName,
    });
  }

  async removeModelFrontendComponentVariant({
    name,
    level,
  }: {
    name: string;
    level: string;
  }) {
    await this.project.root.removeModelFrontendComponentVariant({
      variantLevel: level,
      variantName: name,
    });
  }

  async createRelationFrontendComponentVariant(props: {
    name: string;
    level: string;
    templateName?: string;
  }) {
    await this.project.root.createRelationFrontendComponentVariant({
      variantLevel: props.level,
      variantName: props.name,
      templateName: props.templateName,
    });
  }

  async removeRelationFrontendComponentVariant({
    name,
    level,
  }: {
    name: string;
    level: string;
  }) {
    await this.project.root.removeRelationFrontendComponentVariant({
      variantLevel: level,
      variantName: name,
    });
  }
}
