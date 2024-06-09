import { Tree } from "@nx/devkit";
import { Coder as RelationCoder } from "../Coder";
import {
  Coder as RootCoder,
  IGeneratorProps as IRootCoderGeneratorProps,
} from "./root/Coder";
import {
  Coder as ExtendedCoder,
  IGeneratorProps as IExtendedCoderGeneratorProps,
} from "./extended/Coder";

export type IGeneratorProps = {
  root?: IRootCoderGeneratorProps;
  extended?: IExtendedCoderGeneratorProps;
};

export class Coder {
  name: string;
  parent: RelationCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  project: {
    root: RootCoder;
    extended: ExtendedCoder;
  } = {} as {
    root: RootCoder;
    extended: ExtendedCoder;
  };

  constructor(props: { parent: RelationCoder; tree: Tree } & IGeneratorProps) {
    this.name = "contracts";
    this.parent = props.parent;
    this.tree = props.tree;
    this.baseDirectory = `${this.parent.baseDirectory}/contracts`;
    this.baseName = `${this.parent.baseName}-contracts`;

    this.project.root = new RootCoder({
      ...props.root,
      tree: this.tree,
      parent: this,
    });

    this.project.extended = new ExtendedCoder({
      ...props.extended,
      tree: this.tree,
      parent: this,
    });
  }

  async update() {
    await this.project.root.update();
    await this.project.extended.update();
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
