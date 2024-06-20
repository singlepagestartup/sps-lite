import { Tree } from "@nx/devkit";
import { Coder as ModuleCoder } from "../Coder";
import {
  Coder as RootCoder,
  IGeneratorProps as IRootCoderGeneratorProps,
} from "./root/Coder";

export type IGeneratorProps = {
  root?: IRootCoderGeneratorProps;
};

export class Coder {
  parent: ModuleCoder;
  tree: Tree;
  name: string;
  baseName: string;
  baseDirectory: string;
  absoluteName: string;
  project: {
    root: RootCoder;
  };

  constructor(props: { tree: Tree; parent: ModuleCoder } & IGeneratorProps) {
    this.name = "frontend";
    this.tree = props.tree;
    this.parent = props.parent;
    this.baseName = `${this.parent.baseName}-frontend`;
    this.baseDirectory = `${this.parent.baseDirectory}/frontend`;
    this.absoluteName = `${this.parent.absoluteName}/frontend`;

    const root = new RootCoder({
      ...props.root,
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
