import { ProjectConfiguration, Tree, getProjects } from "@nx/devkit";
import { Coder as ModuleCoder } from "../../Coder";
import { Coder as BackendCoder } from "./backend/Coder";

export class Coder {
  name: string;
  tree: Tree;
  parent: ModuleCoder;
  baseName: string;
  baseDirectory: string;
  project: {
    backend: BackendCoder;
  };
  // rootProjects: {
  //   [key: string]: ProjectConfiguration;
  // };

  constructor({
    tree,
    name,
    parent,
  }: {
    tree: Tree;
    name: string;
    parent: ModuleCoder;
  }) {
    // const projects = getProjects(tree);

    // const backendAppProjectPath = `${parent.root}/backend/app/root`;
    // const frontendRootProjectPath = `${parent.root}/frontend/root`;

    // let backendAppProject: ProjectConfiguration;
    // projects.forEach((project) => {
    //   if (project.root === backendAppProjectPath) {
    //     backendAppProject = project;
    //   }
    // });

    // let frontendRootProject: ProjectConfiguration;
    // projects.forEach((project) => {
    //   if (project.root === frontendRootProjectPath) {
    //     frontendRootProject = project;
    //   }
    // });

    // if (!backendAppProject || !frontendRootProject) {
    //   throw new Error("The models must be in the same module");
    // }

    this.baseName = `${parent.baseName}-models-${name}`;
    this.baseDirectory = `${parent.baseDirectory}/models/${name}`;
    this.name = name;
    this.parent = parent;
    this.tree = tree;
    const backend = new BackendCoder({
      tree: this.tree,
      parent: this,
    });

    this.project = {
      backend: backend,
    };
    // this.rootProjects = {
    //   frontend: frontendRootProject,
    //   backend: backendAppProject,
    // };
  }

  async create() {
    await this.project.backend.create();
  }

  async remove() {
    await this.project.backend.remove();
  }
}
