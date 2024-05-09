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

    const rootBaseDirectory = this.baseDirectory;
    const rootVariantsPath = `${rootBaseDirectory}/root/src/lib/${variantLevel}/variants.ts`;
    const rootInterfacePath = `${rootBaseDirectory}/root/src/lib/${variantLevel}/interface.ts`;
    const rootScssPath = `${rootBaseDirectory}/root/src/lib/${variantLevel}/_index.scss`;

    await this.project.variant.attach({
      variantsPath: rootVariantsPath,
      interfacePath: rootInterfacePath,
      indexScssPath: rootScssPath,
    });
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

    const rootBaseDirectory = this.baseDirectory;
    const rootVariantsPath = `${rootBaseDirectory}/root/src/lib/${variantLevel}/variants.ts`;
    const rootInterfacePath = `${rootBaseDirectory}/root/src/lib/${variantLevel}/interface.ts`;
    const rootScssPath = `${rootBaseDirectory}/root/src/lib/${variantLevel}/_index.scss`;

    await this.project.variant.detach({
      variantsPath: rootVariantsPath,
      interfacePath: rootInterfacePath,
      indexScssPath: rootScssPath,
    });
  }
}
