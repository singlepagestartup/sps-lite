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
  variant?: IVariantCoderGeneratorProps;
};

export class Coder {
  parent: FrontendCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  name: string;
  project: {
    root: RootCoder;
    variant?: VariantCoder;
  } = {} as {
    root: RootCoder;
    variant?: VariantCoder;
  };

  constructor(props: { parent: FrontendCoder; tree: Tree } & IGeneratorProps) {
    this.tree = props.tree;
    this.parent = props.parent;
    this.name = "component";
    this.baseName = `${this.parent.baseName}-component`;
    this.baseDirectory = `${this.parent.baseDirectory}/component`;

    this.project.root = new RootCoder({
      ...props.root,
      tree: this.tree,
      parent: this,
    });
  }

  async update() {
    await this.project.root.update();
    await this.project.variant?.update();
  }

  async create() {
    await this.project.root.create();
  }

  async remove() {
    await this.project.root.remove();
  }

  async createVariant({
    variantName,
    variantLevel,
    templateName,
  }: {
    variantName: string;
    variantLevel: string;
    templateName?: string;
  }) {
    const variant = new VariantCoder({
      tree: this.tree,
      parent: this,
      name: variantName,
      level: variantLevel,
      template: templateName,
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
