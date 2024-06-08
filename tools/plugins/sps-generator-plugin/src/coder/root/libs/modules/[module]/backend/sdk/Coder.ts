import { Tree } from "@nx/devkit";
import { Coder as BackendCoder } from "../Coder";
import {
  Coder as RootCoder,
  IGeneratorProps as IRootCoderGeneratorProps,
} from "./root/Coder";

export type IGeneratorProps = {
  root?: IRootCoderGeneratorProps;
};

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
    this.name = "sdk";
    this.tree = props.tree;
    this.parent = props.parent;
    this.baseName = `${this.parent.baseName}-sdk`;
    this.baseDirectory = `${this.parent.baseDirectory}/sdk`;

    const root = new RootCoder({
      ...props.root,
      tree: this.tree,
      parent: this,
    });

    this.project = {
      root,
    };
  }

  async update() {
    await this.project.root.update();
  }

  async create() {
    await this.project.root.create();
  }

  async remove() {
    await this.project.root.remove();
  }
}
