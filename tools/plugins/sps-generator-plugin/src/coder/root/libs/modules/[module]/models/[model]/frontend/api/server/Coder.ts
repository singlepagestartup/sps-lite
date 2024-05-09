import { ProjectConfiguration, Tree, getProjects } from "@nx/devkit";
import { Coder as ApiCoder } from "../Coder";

export class Coder {
  parent: ApiCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  name: string;
  project: ProjectConfiguration;

  constructor({ parent, tree }: { parent: ApiCoder; tree: Tree }) {
    this.name = "server";
    this.baseName = `${parent.baseName}-server`;
    this.baseDirectory = `${parent.baseDirectory}/server`;
    this.tree = tree;
    this.parent = parent;
  }

  async init() {
    this.project = getProjects(this.tree).get(this.baseName);
  }
}
