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

  async create() {
    await this.project.root.create();
  }

  async update() {
    await this.project.root.update();
  }

  async remove() {
    await this.project.root.remove();
  }

  async addField(props: IEditFieldProps) {
    await this.project.root.addField(props);

    await formatFiles(this.tree);
  }

  async removeField(props: IEditFieldProps) {
    await this.project.root.removeField(props);

    await formatFiles(this.tree);
  }
}
