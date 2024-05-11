import { Tree } from "@nx/devkit";
import { Coder as ModelsCoder } from "../Coder";
import { Coder as BackendCoder } from "./backend/Coder";
import { IEditFieldProps } from "./backend/schema/table/Coder";
import { Coder as FrontendCoder } from "./frontend/Coder";
import { Coder as ContractsCoder } from "./contracts/Coder";

/**
 * Model coder
 */
export class Coder {
  name: string;
  tree: Tree;
  parent: ModelsCoder;
  baseName: string;
  baseDirectory: string;
  project: {
    backend: BackendCoder;
    contracts: ContractsCoder;
    frontend: FrontendCoder;
  };

  constructor({
    tree,
    name,
    parent,
  }: {
    tree: Tree;
    name: string;
    parent: ModelsCoder;
  }) {
    this.baseName = `${parent.baseName}-${name}`;
    this.baseDirectory = `${parent.baseDirectory}/${name}`;
    this.name = name;
    this.parent = parent;
    this.tree = tree;
    const backend = new BackendCoder({
      tree: this.tree,
      parent: this,
    });

    const contracts = new ContractsCoder({
      tree: this.tree,
      parent: this,
    });

    const frontend = new FrontendCoder({
      tree: this.tree,
      parent: this,
    });

    this.project = {
      backend,
      contracts,
      frontend,
    };
  }

  async init() {
    await this.project.contracts.init();
    await this.project.backend.init();
    await this.project.frontend.init();
  }

  async create() {
    // await this.project.contracts.create();
    await this.project.backend.create();
    // await this.project.frontend.create();

    // await this.project.frontend.createVariant({
    //   variantName: "default",
    //   variantLevel: "sps-lite",
    // });
  }

  async remove() {
    await this.project.frontend.removeVariant({
      variantName: "default",
      variantLevel: "sps-lite",
    });

    await this.project.frontend.remove();
    await this.project.backend.remove();
    await this.project.contracts.remove();
  }

  async addField(props: IEditFieldProps) {
    await this.project.backend.addField(props);
  }

  async removeField(props: IEditFieldProps) {
    await this.project.backend.removeField(props);
  }

  async createRelation(props: { relationName: string }) {
    await this.project.backend.createRelation(props);
  }

  async removeRelation(props: { relationName: string }) {
    await this.project.backend.removeRelation(props);
  }

  async createModelFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
  }) {
    await this.project.frontend.createVariant(props);
  }

  async removeModelFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
  }) {
    await this.project.frontend.removeVariant(props);
  }
}
