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

  constructor(
    props: {
      tree: Tree;
      parent: RelationsCoder;
    } & (
      | { leftModelRelationName: string; rightModelRelationName: string }
      | {
          name: string;
        }
    ),
  ) {
    const { tree, parent } = props;
    this.tree = tree;
    this.parent = parent;

    if ("name" in props && props.name) {
      this.name = props.name;

      const [leftModelRelationName, rightModelRelationName] =
        this.name.split("-to-");

      if (!leftModelRelationName || !rightModelRelationName) {
        throw new Error("Invalid relation name");
      }

      this.leftModelRelationName = leftModelRelationName;
      this.rightModelRelationName = rightModelRelationName;
    } else if ("leftModelRelationName" in props) {
      const { leftModelRelationName, rightModelRelationName } = props;

      this.name = `${leftModelRelationName}-to-${rightModelRelationName}`;
      this.leftModelRelationName = leftModelRelationName;
      this.rightModelRelationName = rightModelRelationName;
    }

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
    await this.project.contracts.create();
    await this.project.backend.create();
    await this.project.frontend.create();

    await this.project.frontend.createVariant({
      variantName: "default",
      variantLevel: "sps-lite",
    });
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

  async createRelationFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
  }) {
    await this.project.frontend.createVariant(props);
  }

  async removeRelationFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
  }) {
    await this.project.frontend.removeVariant(props);
  }
}
