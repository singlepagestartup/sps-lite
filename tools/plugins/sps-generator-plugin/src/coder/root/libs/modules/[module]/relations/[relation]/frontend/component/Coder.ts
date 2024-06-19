import { Tree } from "@nx/devkit";
import { Coder as FrontendCoder } from "../Coder";
import {
  Coder as RootCoder,
  IGeneratorProps as IRootCoderGeneratorProps,
} from "./root/Coder";
import {
  Coder as VariantCoder,
  IGeneratorProps as IVariantCoderGeneratorProps,
} from "./variants/[level]/[variant]/Coder";

export type IGeneratorProps = {
  root?: IRootCoderGeneratorProps;
  variants?: IVariantCoderGeneratorProps[];
};

export class Coder {
  parent: FrontendCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  name: string;
  project: {
    root: RootCoder;
    variants?: VariantCoder[];
  } = {} as {
    root: RootCoder;
    variants?: VariantCoder[];
  };

  constructor(props: { parent: FrontendCoder; tree: Tree } & IGeneratorProps) {
    this.tree = props.tree;
    this.parent = props.parent;
    this.name = "component";
    this.baseName = `${this.parent.baseName}-component`;
    this.baseDirectory = `${this.parent.baseDirectory}/component`;

    const root = new RootCoder({
      ...props.root,
      tree: this.tree,
      parent: this,
    });

    this.project = {
      root,
      variants: [] as VariantCoder[],
    };

    if (props.variants) {
      this.project.variants = props.variants.map((variant) => {
        return new VariantCoder({
          ...variant,
          tree: this.tree,
          parent: this,
        });
      });
    }
  }

  async update() {
    await this.project.root.update();

    for (const variant of this.project.variants) {
      await variant.update();
    }
  }

  async create() {
    await this.project.root.create();

    for (const variant of this.project.variants) {
      await variant.create();
    }
  }

  async remove() {
    await this.project.root.remove();

    for (const variant of this.project.variants) {
      await variant.remove();
    }
  }
}
