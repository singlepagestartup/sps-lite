import { Tree } from "@nx/devkit";
import { Coder as RelationsCoder } from "../Coder";
import {
  Coder as BackendCoder,
  IGeneratorProps as IBackendCoderGeneratorProps,
} from "./backend/Coder";
import {
  Coder as ContractsCoder,
  IGeneratorProps as IContractsCoderGeneratorProps,
} from "./contracts/Coder";
import {
  Coder as FrontendCoder,
  IGeneratorProps as IFrontendCoderGeneratorProps,
} from "./frontend/Coder";
import { util as getNameStyles } from "../../../../../../utils/get-name-styles";
import { Coder as ModelCoder } from "../../models/Coder";
import pluralize from "pluralize";

export type IGeneratorProps = {
  name?: string;
  leftModelIsExternal?: boolean;
  rightModelIsExternal?: boolean;
  frontend?: IFrontendCoderGeneratorProps;
  backend?: IBackendCoderGeneratorProps;
  contracts?: IContractsCoderGeneratorProps;
};

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

  constructor(props: { tree: Tree; parent: RelationsCoder } & IGeneratorProps) {
    this.tree = props.tree;
    this.parent = props.parent;

    if (!props.name) {
      const leftModel =
        this.parent.parent.project.models[0].project.model.nameStyles;
      const rightModel =
        this.parent.parent.project.models[1].project.model.nameStyles;

      this.name = `${leftModel.kebabCased.pluralized}-to-${rightModel.kebabCased.pluralized}`;
    } else {
      this.name = props.name;
      const modelNamesPluralized = this.name.split("-to-");

      const unpluralizedModelNames = modelNamesPluralized.map((modelName) => {
        return pluralize.singular(modelName);
      });

      const leftProject = new ModelCoder({
        tree: this.tree,
        parent: this.parent.parent,
        model: {
          name: unpluralizedModelNames[0],
          isExternal: props.leftModelIsExternal,
        },
      });

      this.parent.parent.project.models.push(leftProject);

      const rightProject = new ModelCoder({
        tree: this.tree,
        parent: this.parent.parent,
        model: {
          name: unpluralizedModelNames[1],
          isExternal: props.rightModelIsExternal,
        },
      });

      this.parent.parent.project.models.push(rightProject);
    }

    this.nameStyles = getNameStyles({ name: this.name });

    this.baseName = `${this.parent.baseName}-${this.name}`;
    this.baseDirectory = `${this.parent.baseDirectory}/${this.name}`;

    this.project.backend = new BackendCoder({
      ...props.backend,
      tree: this.tree,
      parent: this,
    });

    this.project.contracts = new ContractsCoder({
      ...props.contracts,
      tree: this.tree,
      parent: this,
    });

    this.project.frontend = new FrontendCoder({
      ...props.frontend,
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
