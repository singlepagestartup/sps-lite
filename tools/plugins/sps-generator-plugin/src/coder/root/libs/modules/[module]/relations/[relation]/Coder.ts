import { Tree } from "@nx/devkit";
import { Coder as RelationsCoder } from "../Coder";
import { Coder as BackendCoder } from "./backend/Coder";
import { Coder as ContractsCoder } from "./contracts/Coder";
import { Coder as FrontendCoder } from "./frontend/Coder";
import { util as getNameStyles } from "../../../../../../utils/get-name-styles";

/**
 * Relation Coder
 */
export class Coder {
  tree: Tree;
  parent: RelationsCoder;
  baseName: string;
  baseDirectory: string;
  name: string;
  nameStyles: ReturnType<typeof getNameStyles>;
  project: {
    backend: BackendCoder;
    contracts: ContractsCoder;
    frontend: FrontendCoder;
  } = {} as {
    backend: BackendCoder;
    contracts: ContractsCoder;
    frontend: FrontendCoder;
  };

  constructor(props: { tree: Tree; parent: RelationsCoder }) {
    const { tree, parent } = props;
    this.tree = tree;
    this.parent = parent;

    const leftModel =
      this.parent.parent.project.models[0].project.model.nameStyles;
    const rightModel =
      this.parent.parent.project.models[1].project.model.nameStyles;

    this.name = `${leftModel.kebabCased.pluralized}-to-${rightModel.kebabCased.pluralized}`;

    this.nameStyles = getNameStyles({ name: this.name });

    this.baseName = `${parent.baseName}-${this.name}`;
    this.baseDirectory = `${parent.baseDirectory}/${this.name}`;

    this.project.backend = new BackendCoder({
      tree: this.tree,
      parent: this,
    });

    this.project.contracts = new ContractsCoder({
      tree: this.tree,
      parent: this,
    });

    this.project.frontend = new FrontendCoder({
      tree: this.tree,
      parent: this,
    });
  }

  async update() {
    await this.project.contracts.update();
    await this.project.backend.update();
    await this.project.frontend.update();
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
    templateName?: string;
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
