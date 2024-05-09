import { Tree } from "@nx/devkit";
import { Coder as RelationsCoder } from "../Coder";
import { Coder as BackendCoder } from "./backend/Coder";
import { Coder as ContractsCoder } from "./contracts/Coder";
import { Coder as FrontendCoder } from "./frontend/Coder";

/**
 * Relation Coder
 */
export class Coder {
  tree: Tree;
  parent: RelationsCoder;
  baseName: string;
  baseDirectory: string;
  name: string;
  leftModelRelationName: string;
  rightModelRelationName: string;
  project: {
    backend: BackendCoder;
    contracts: ContractsCoder;
    frontend: FrontendCoder;
  };

  constructor({
    tree,
    parent,
    leftModelRelationName,
    rightModelRelationName,
  }: {
    tree: Tree;
    parent: RelationsCoder;
    leftModelRelationName: string;
    rightModelRelationName: string;
  }) {
    this.tree = tree;
    this.parent = parent;
    this.name = `${leftModelRelationName}-to-${rightModelRelationName}`;
    this.leftModelRelationName = leftModelRelationName;
    this.rightModelRelationName = rightModelRelationName;
    this.baseName = `${parent.baseName}-${this.name}`;
    this.baseDirectory = `${parent.baseDirectory}/${this.name}`;

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
    // await this.project.backend.create();
    await this.project.frontend.create();
  }

  async remove() {
    await this.project.frontend.remove();
    // await this.project.backend.remove();
    // await this.project.contracts.remove();
  }
}
