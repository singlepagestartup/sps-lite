import { Tree } from "@nx/devkit";
import { Coder as BackendCoder } from "../Coder";
import {
  Coder as RootCoder,
  IGeneratorProps as IRootCoderGeneratorProps,
} from "./root/Coder";

export type IGeneratorProps = {
  root?: IRootCoderGeneratorProps;
};

/**
 * Backend Coder
 */
export class Coder {
  tree: Tree;
  parent: BackendCoder;
  baseName: string;
  baseDirectory: string;
  name: string;
  project: {
    root: RootCoder;
  };

  constructor(props: { tree: Tree; parent: BackendCoder } & IGeneratorProps) {
    this.name = "schema";
    this.parent = props.parent;
    this.tree = props.tree;
    this.baseName = `${this.parent.baseName}-schema`;
    this.baseDirectory = `${this.parent.baseDirectory}/schema`;

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

  async create() {
    await this.project.root.create();
  }

  async remove() {
    await this.project.root.remove();
  }
}
