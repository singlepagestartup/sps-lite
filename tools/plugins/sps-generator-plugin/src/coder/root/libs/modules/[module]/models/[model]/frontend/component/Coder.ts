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
  variants?: IVariantCoderGeneratorProps[];
  root?: IRootCoderGeneratorProps;
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
  };

  constructor(props: { parent: FrontendCoder; tree: Tree } & IGeneratorProps) {
    this.name = "component";
    this.baseName = `${props.parent.baseName}-component`;
    this.baseDirectory = `${props.parent.baseDirectory}/component`;
    this.tree = props.tree;
    this.parent = props.parent;

    const root = new RootCoder({
      ...props.root,
      tree: this.tree,
      parent: this,
    });

    this.project = {
      root,
      variants: undefined,
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
  }

  async remove() {
    await this.project.root.remove();
  }

  async createVariant({
    variantName,
    variantLevel,
    templateName,
  }: {
    variantName: IVariantCoderGeneratorProps["name"];
    variantLevel: IVariantCoderGeneratorProps["level"];
    templateName?: IVariantCoderGeneratorProps["template"];
  }) {
    const variant = new VariantCoder({
      tree: this.tree,
      parent: this,
      name: variantName,
      level: variantLevel,
      template: templateName,
    });

    this.project.variants[0] = variant;

    await this.project.variants[0].create();

    const rootBaseDirectory = this.baseDirectory;
    const rootVariantsPath = `${rootBaseDirectory}/root/src/lib/${variantLevel}/variants.ts`;
    const rootInterfacePath = `${rootBaseDirectory}/root/src/lib/${variantLevel}/interface.ts`;
    const rootScssPath = `${rootBaseDirectory}/root/src/lib/${variantLevel}/_index.scss`;

    await this.project.variants[0].attach({
      variantsPath: rootVariantsPath,
      interfacePath: rootInterfacePath,
      indexScssPath: rootScssPath,
    });
  }

  async removeVariant({
    variantName,
    variantLevel,
  }: {
    variantName: IVariantCoderGeneratorProps["name"];
    variantLevel: IVariantCoderGeneratorProps["level"];
  }) {
    const variant = new VariantCoder({
      tree: this.tree,
      parent: this,
      name: variantName,
      level: variantLevel,
    });

    this.project.variants[0] = variant;

    await this.project.variants[0].remove();

    const rootBaseDirectory = this.baseDirectory;
    const rootVariantsPath = `${rootBaseDirectory}/root/src/lib/${variantLevel}/variants.ts`;
    const rootInterfacePath = `${rootBaseDirectory}/root/src/lib/${variantLevel}/interface.ts`;
    const rootScssPath = `${rootBaseDirectory}/root/src/lib/${variantLevel}/_index.scss`;

    await this.project.variants[0].detach({
      variantsPath: rootVariantsPath,
      interfacePath: rootInterfacePath,
      indexScssPath: rootScssPath,
    });
  }
}
