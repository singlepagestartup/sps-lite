import { Tree, formatFiles } from "@nx/devkit";
import { Coder as LibsCoder } from "./libs/Coder";
import { IEditFieldProps } from "./libs/modules/[module]/models/[model]/backend/schema/table/Coder";

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
  };

  constructor({ tree }: { tree: Tree }) {
    this.name = "root";
    this.tree = tree;
    this.baseName = "@sps";
    this.baseDirectory = "";

    const libs = new LibsCoder({
      tree: this.tree,
      parent: this,
    });

    this.project = {
      libs,
    };
  }

  async createModule({ moduleName }: { moduleName: string }) {
    await this.project.libs.createModule({
      moduleName,
    });
  }

  async removeModule({ moduleName }: { moduleName: string }) {
    await this.project.libs.removeModule({
      moduleName,
    });
  }
  async createModel({
    modelName,
    moduleName,
  }: {
    modelName: string;
    moduleName: string;
  }) {
    await this.project.libs.createModel({
      modelName,
      moduleName,
    });
  }

  async removeModel({
    modelName,
    moduleName,
  }: {
    modelName: string;
    moduleName: string;
  }) {
    await this.project.libs.removeModel({
      modelName,
      moduleName,
    });
  }

  async addField(
    props: IEditFieldProps & {
      modelName: string;
      moduleName: string;
    },
  ) {
    await this.project.libs.addField(props);
  }

  async removeField(
    props: IEditFieldProps & {
      modelName: string;
      moduleName: string;
    },
  ) {
    await this.project.libs.removeField(props);
  }

  async createRelations(props: {
    moduleName: string;
    leftModelName: string;
    rightModelName: string;
    leftModelIsExternal: boolean;
    rightModelIsExternal: boolean;
  }) {
    await this.project.libs.createRelations(props);
  }

  async removeRelations(props: {
    moduleName: string;
    leftModelName: string;
    rightModelName: string;
    leftModelIsExternal: boolean;
    rightModelIsExternal: boolean;
  }) {
    await this.project.libs.removeRelations(props);
  }

  async removeBackendVariant(props: {
    entityName: string;
    moduleName: string;
    variantLevel: string;
    variantName: string;
  }) {
    await this.project.libs.removeBackendVariant(props);

    await formatFiles(this.tree);
  }

  async createBackendVariant(props: {
    entityName: string;
    moduleName: string;
    variantLevel: string;
    variantName: string;
  }) {
    await this.project.libs.createBackendVariant(props);

    await formatFiles(this.tree);
  }

  async createModelFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
    moduleName: string;
    modelName: string;
    templateName?: string;
  }) {
    await this.project.libs.createModelFrontendComponentVariant(props);

    await formatFiles(this.tree);
  }

  async removeModelFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
    moduleName: string;
    modelName: string;
  }) {
    await this.project.libs.removeModelFrontendComponentVariant(props);

    await formatFiles(this.tree);
  }

  async createRelationFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
    moduleName: string;
    relationName: string;
    templateName?: string;
  }) {
    await this.project.libs.createRelationFrontendComponentVariant(props);

    await formatFiles(this.tree);
  }

  async removeRelationFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
    moduleName: string;
    relationName: string;
  }) {
    await this.project.libs.removeRelationFrontendComponentVariant(props);

    await formatFiles(this.tree);
  }
}
