import { Tree } from "@nx/devkit";
import { Coder as ModuleCoder } from "./[module]/Coder";
import { Coder as ModulesCoder } from "../Coder";
import { IEditFieldProps } from "./[module]/models/[model]/backend/schema/table/Coder";

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
    const moduleCoder = new ModuleCoder({
      tree: this.tree,
      parent: this,
      name: moduleName,
    });

    this.project.module = moduleCoder;

    await this.project.module.init();
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
}
