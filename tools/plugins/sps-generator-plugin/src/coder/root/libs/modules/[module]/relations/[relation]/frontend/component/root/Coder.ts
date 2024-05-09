import { ProjectConfiguration, Tree } from "@nx/devkit";
import { Coder as ComponentCoder } from "../Coder";

export class Coder {
  parent: ComponentCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  name: string;
  project: ProjectConfiguration;

  constructor({ parent, tree }: { parent: ComponentCoder; tree: Tree }) {
    this.name = "root";
    this.baseName = `${parent.baseName}`;
    this.baseDirectory = `${parent.baseDirectory}/root`;
    this.tree = tree;
    this.parent = parent;
  }
}
