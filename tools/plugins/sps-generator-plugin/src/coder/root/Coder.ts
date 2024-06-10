import { Tree, formatFiles } from "@nx/devkit";
import {
  Coder as LibsCoder,
  IGeneratorProps as ILibsCoderGeneratorProps,
} from "./libs/Coder";
import { IEditFieldProps } from "./libs/modules/[module]/models/[model]/backend/schema/table/Coder";

export type IGeneratorProps = {
  libs?: ILibsCoderGeneratorProps;
};

/**
 * Root Coder
 *
 * Can create apps
 */
export class Coder {
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  name: string;
  project: {
    libs: LibsCoder;
  } = {} as {
    libs: LibsCoder;
  };

  constructor(
    props: {
      tree: Tree;
    } & IGeneratorProps,
  ) {
    this.name = "root";
    this.tree = props.tree;
    this.baseName = "@sps";
    this.baseDirectory = "";

    this.project.libs = new LibsCoder({
      ...props.libs,
      tree: this.tree,
      parent: this,
    });
  }

  async update() {
    await this.project.libs.update();
  }

  async addField(props: IEditFieldProps) {
    await this.project.libs.addField(props);
  }

  async removeField(props: IEditFieldProps) {
    await this.project.libs.removeField(props);
  }

  async createRelations() {
    await this.project.libs.createRelations();
  }

  async removeRelations() {
    await this.project.libs.removeRelations();
  }

  async createModelFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
    templateName?: string;
  }) {
    await this.project.libs.createModelFrontendComponentVariant(props);

    await formatFiles(this.tree);
  }

  async removeModelFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
  }) {
    await this.project.libs.removeModelFrontendComponentVariant(props);

    await formatFiles(this.tree);
  }

  async createRelationFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
    templateName?: string;
  }) {
    await this.project.libs.createRelationFrontendComponentVariant(props);

    await formatFiles(this.tree);
  }

  async removeRelationFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
  }) {
    await this.project.libs.removeRelationFrontendComponentVariant(props);

    await formatFiles(this.tree);
  }
}
