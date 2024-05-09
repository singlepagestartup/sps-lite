import { Tree } from "@nx/devkit";
import { Coder as FrontendCoder } from "../Coder";
import { Coder as RootCoder } from "./root/Coder";
import { Coder as VariantCoder } from "./variants/[level]/[variant]/Coder";

export class Coder {
  parent: FrontendCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  name: string;
  project: {
    root: RootCoder;
    variant?: VariantCoder;
  };

  constructor({ parent, tree }: { parent: FrontendCoder; tree: Tree }) {
    this.name = "component";
    this.baseName = `${parent.baseName}-component`;
    this.baseDirectory = `${parent.baseDirectory}/component`;
    this.tree = tree;
    this.parent = parent;
    const root = new RootCoder({
      tree: this.tree,
      parent: this,
    });

    this.project = {
      root,
      variant: undefined,
    };
  }

  async createVariant({
    variantName,
    variantLevel,
  }: {
    variantName: string;
    variantLevel: string;
  }) {
    const variant = new VariantCoder({
      tree: this.tree,
      parent: this,
      name: variantName,
      level: variantLevel,
    });

    this.project.variant = variant;

    await this.project.variant.create();
  }

  async removeVariant({
    variantName,
    variantLevel,
  }: {
    variantName: string;
    variantLevel: string;
  }) {
    const variant = new VariantCoder({
      tree: this.tree,
      parent: this,
      name: variantName,
      level: variantLevel,
    });

    this.project.variant = variant;

    await this.project.variant.remove();
  }
}
