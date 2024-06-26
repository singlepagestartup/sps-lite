import { Coder as ModelCoder } from "../Coder";
import { Tree } from "@nx/devkit";
import {
  Coder as RootCoder,
  IGeneratorProps as IRootCoderGeneratorProps,
} from "./root/Coder";
import {
  Coder as ExtendedCoder,
  IGeneratorProps as IExtendedCoderGeneratorProps,
} from "./extended/Coder";

export type IGeneratorProps = {
  extended?: IExtendedCoderGeneratorProps;
  root?: IRootCoderGeneratorProps;
};

export class Coder {
  name: string;
  parent: ModelCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  absoluteName: string;
  project: {
    root: RootCoder;
    extended: ExtendedCoder;
  };

  constructor(props: { parent: ModelCoder; tree: Tree } & IGeneratorProps) {
    this.name = "contracts";
    this.parent = props.parent;
    this.tree = props.tree;
    this.baseDirectory = `${props.parent.baseDirectory}/contracts`;
    this.baseName = `${props.parent.baseName}-contracts`;
    this.absoluteName = `${props.parent.absoluteName}/contracts`;

    const root = new RootCoder({
      tree: this.tree,
      parent: this,
    });

    const extended = new ExtendedCoder({
      tree: this.tree,
      parent: this,
    });

    this.project = {
      root,
      extended,
    };
  }

  async migrate(props: { version: string }) {
    await this.project.root.migrate(props);
    await this.project.extended.migrate(props);
  }

  async create() {
    await this.project.root.create();
    await this.project.extended.create();
  }

  async remove() {
    await this.project.extended.remove();
    await this.project.root.remove();
  }
}
