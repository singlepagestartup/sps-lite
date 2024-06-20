import {
  ProjectConfiguration,
  Tree,
  getProjects,
  offsetFromRoot,
} from "@nx/devkit";
import { Coder as ContractsCoder } from "../Coder";
import { util as createSpsTSLibrary } from "../../../../../../../../../utils/create-sps-ts-library";
import { util as getNameStyles } from "../../../../../../../../utils/get-name-styles";
import * as nxWorkspace from "@nx/workspace";
import * as path from "path";
import { Migrator } from "./migrator/Migrator";

export type IGeneratorProps = {};

export class Coder {
  name: string;
  parent: ContractsCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  project?: ProjectConfiguration;
  absoluteName: string;

  constructor(props: { parent: ContractsCoder; tree: Tree } & IGeneratorProps) {
    this.name = "extended";
    this.parent = props.parent;
    this.tree = props.tree;
    this.baseName = `${this.parent.baseName}-extended`;
    this.baseDirectory = `${this.parent.baseDirectory}/extended`;
    this.absoluteName = `${this.parent.absoluteName}/extended`;

    this.project = getProjects(this.tree).get(this.baseName);
  }

  async migrate(props: { version: string }) {
    const migrator = new Migrator({
      coder: this,
    });

    const version = props.version as keyof typeof migrator.releases;
    await migrator.execute({ version });
  }

  async create() {
    if (this.project) {
      return;
    }

    const rootContractsImportPath = this.parent.project.root.baseName;
    const offsetFromRootProject = offsetFromRoot(this.baseDirectory);

    const leftModelContractsImportPath =
      this.parent.parent.parent.parent.project.models[0].project.model.project
        .contracts.project.root.baseName;
    const leftModelIsExternal =
      this.parent.parent.parent.parent.project.models[0].project.model
        .isExternal;
    const leftModelName =
      this.parent.parent.parent.parent.project.models[0].project.model.name;

    const rightModelContractsImportPath =
      this.parent.parent.parent.parent.project.models[1].project.model.project
        .contracts.project.root.baseName;
    const rightModelIsExternal =
      this.parent.parent.parent.parent.project.models[1].project.model
        .isExternal;
    const rightModelName =
      this.parent.parent.parent.parent.project.models[1].project.model.name;

    await createSpsTSLibrary({
      tree: this.tree,
      root: this.baseDirectory,
      name: this.baseName,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
        left_model_name_pascal_cased: getNameStyles({ name: leftModelName })
          .pascalCased.base,
        left_model_name_property_cased: getNameStyles({ name: leftModelName })
          .propertyCased.base,
        left_model_is_external: leftModelIsExternal,
        left_model_contracts_import_path: leftModelContractsImportPath,
        right_model_name_pascal_cased: getNameStyles({ name: rightModelName })
          .pascalCased.base,
        right_model_name_property_cased: getNameStyles({ name: rightModelName })
          .propertyCased.base,
        right_model_is_external: rightModelIsExternal,
        right_model_contracts_import_path: rightModelContractsImportPath,
        offset_from_root: offsetFromRootProject,
        root_contracts_import_path: rootContractsImportPath,
      },
    });

    this.project = getProjects(this.tree).get(this.baseName);
  }

  async remove() {
    const project = getProjects(this.tree).get(this.baseName);

    if (!project) {
      return;
    }

    await nxWorkspace.removeGenerator(this.tree, {
      projectName: this.baseName,
      skipFormat: true,
      forceRemove: true,
    });
  }
}
