import { Tree } from "@nx/devkit";
import { Coder as BackendCoder } from "../Coder";
import { Coder as RootCoder } from "./root/Coder";

export type IGeneratorProps = {};

export class Coder {
  name: string;
  tree: Tree;
  parent: BackendCoder;
  baseName: string;
  baseDirectory: string;
  project: {
    root: RootCoder;
  };

  constructor(props: { tree: Tree; parent: BackendCoder } & IGeneratorProps) {
    this.name = "db";
    this.tree = props.tree;
    this.parent = props.parent;
    this.baseName = `${this.parent.baseName}-db`;
    this.baseDirectory = `${this.parent.baseDirectory}/db`;

    const root = new RootCoder({
      tree: this.tree,
      parent: this,
    });

    this.project = {
      root,
    };
  }

  async migrate(props: { version: string }) {
    await this.project.root.migrate(props);
  }

  /**
   * @todo
   * Attach to main /apps/frontend project
   */
  async create() {
    await this.project.root.create();
  }

  async remove() {
    await this.project.root.remove();
  }
}
