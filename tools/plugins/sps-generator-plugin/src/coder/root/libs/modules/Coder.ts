import { Tree } from "@nx/devkit";
import { Coder as ModuleCoder } from "./[module]/Coder";
import { Coder as ModulesCoder } from "../Coder";
import { IEditFieldProps } from "./[module]/models/[model]/backend/schema/table/Coder";
import { IEditRelationsProps } from "./[module]/relations/Coder";

/**
 * Modules Coder
 *
 * Can create modules
 */
export class Coder {
  tree: Tree;
  parent: ModulesCoder;
  baseName: string;
  baseDirectory: string;
  type: "modules" | "providers" | "shared";
  name: string;
  project: {
    module?: ModuleCoder;
  };

  constructor({
    tree,
    parent,
    type,
  }: {
    tree: Tree;
    parent: ModulesCoder;
    type: "modules" | "providers" | "shared";
  }) {
    this.baseName = `${parent.baseName}`;
    this.baseDirectory = `${parent.baseDirectory}/${type}`;
    this.name = type;
    this.tree = tree;
    this.parent = parent;
    this.project = {
      module: undefined,
    };
  }

  async init({ moduleName }: { moduleName: string }) {
    if (!moduleName) {
      throw new Error("Module name is required");
    }

    const moduleCoder = new ModuleCoder({
      tree: this.tree,
      parent: this,
      name: moduleName,
    });

    this.project.module = moduleCoder;

    await this.project.module.init();
  }

  async create({ moduleName }: { moduleName: string }) {
    await this.init({ moduleName });

    await this.project.module.create();
  }

  async remove({ moduleName }: { moduleName: string }) {
    await this.init({ moduleName });

    await this.project.module.remove();
  }

  async createModel({
    modelName,
    moduleName,
  }: {
    modelName: string;
    moduleName: string;
  }) {
    await this.init({
      moduleName,
    });

    await this.project.module.createModel({
      modelName,
    });
  }

  async removeModel({
    modelName,
    moduleName,
  }: {
    modelName: string;
    moduleName: string;
  }) {
    await this.init({
      moduleName,
    });

    await this.project.module.removeModel({
      modelName,
    });
  }

  async addField(
    props: IEditFieldProps & {
      modelName: string;
      moduleName: string;
    },
  ) {
    const { moduleName } = props;

    await this.init({
      moduleName,
    });

    await this.project.module.addField(props);
  }

  async removeField(
    props: IEditFieldProps & {
      modelName: string;
      moduleName: string;
    },
  ) {
    const { moduleName } = props;

    await this.init({
      moduleName,
    });

    await this.project.module.removeField(props);
  }

  async createRelations(
    props: IEditRelationsProps & {
      moduleName: string;
      leftModelName: string;
      rightModelName: string;
    },
  ) {
    const { moduleName } = props;
    await this.init({
      moduleName,
    });

    await this.project.module.createRelations(props);
  }

  async removeRelations(
    props: IEditRelationsProps & {
      moduleName: string;
      leftModelName: string;
      rightModelName: string;
    },
  ) {
    const { moduleName } = props;
    await this.init({
      moduleName,
    });

    await this.project.module.removeRelations(props);
  }

  async createModelFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
    moduleName: string;
    modelName: string;
    templateName?: string;
  }) {
    const { moduleName } = props;
    await this.init({
      moduleName,
    });

    await this.project.module.createModelFrontendComponentVariant(props);
  }

  async removeModelFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
    moduleName: string;
    modelName: string;
  }) {
    const { moduleName } = props;
    await this.init({
      moduleName,
    });

    await this.project.module.removeModelFrontendComponentVariant(props);
  }

  async createBackendVariant(props: {
    variantName: string;
    variantLevel: string;
    moduleName: string;
    entityName: string;
  }) {
    const { moduleName } = props;
    await this.init({
      moduleName,
    });

    await this.project.module.createBackendVariant(props);
  }

  async removeBackendVariant(props: {
    variantName: string;
    variantLevel: string;
    moduleName: string;
    entityName: string;
  }) {
    const { moduleName } = props;
    await this.init({
      moduleName,
    });

    await this.project.module.removeBackendVariant(props);
  }

  async createRelationFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
    moduleName: string;
    relationName: string;
    templateName?: string;
  }) {
    const { moduleName } = props;
    await this.init({
      moduleName,
    });

    await this.project.module.createRelationFrontendComponentVariant(props);
  }

  async removeRelationFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
    moduleName: string;
    relationName: string;
  }) {
    const { moduleName } = props;
    await this.init({
      moduleName,
    });

    await this.project.module.removeRelationFrontendComponentVariant(props);
  }
}
