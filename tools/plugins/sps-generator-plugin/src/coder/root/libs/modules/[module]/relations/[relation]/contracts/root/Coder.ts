import {
  ProjectConfiguration,
  Tree,
  getProjects,
  offsetFromRoot,
} from "@nx/devkit";
import { Coder as ContractsCoder } from "../Coder";
import { util as createSpsTSLibrary } from "../../../../../../../../../utils/create-sps-ts-library";
import { util as getNameStyles } from "../../../../../../../../utils/get-name-styles";
import * as path from "path";
import * as nxWorkspace from "@nx/workspace";
import { Migrator } from "./migrator/Migrator";

export type IGeneratorProps = {};

export class Coder {
  name: string;
  parent: ContractsCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  project?: ProjectConfiguration;

  constructor(props: { parent: ContractsCoder; tree: Tree } & IGeneratorProps) {
    this.name = "root";
    this.parent = props.parent;
    this.tree = props.tree;
    this.baseName = `${this.parent.baseName}`;
    this.baseDirectory = `${this.parent.baseDirectory}/root`;

    this.project = getProjects(this.tree).get(this.baseName);
  }

  async update() {
    const migrator = new Migrator({
      coder: this,
    });

    const version = "0.0.156";
    await migrator.execute({ version });
  }

  async create() {
    if (this.project) {
      return;
    }

    const offsetFromRootProject = offsetFromRoot(this.baseDirectory);

    const leftModelName =
      this.parent.parent.parent.parent.project.models[0].project.model.name;
    const rightModelName =
      this.parent.parent.parent.parent.project.models[1].project.model.name;

    const leftModelIsExternal =
      this.parent.parent.parent.parent.project.models[0].project.model
        .isExternal;
    const rightModelIsExternal =
      this.parent.parent.parent.parent.project.models[1].project.model
        .isExternal;

    await createSpsTSLibrary({
      tree: this.tree,
      root: this.baseDirectory,
      name: this.baseName,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
        offset_from_root: offsetFromRootProject,
        left_model_is_external: leftModelIsExternal,
        left_model_name_property_cased: getNameStyles({ name: leftModelName })
          .propertyCased.base,
        right_model_is_external: rightModelIsExternal,
        right_model_name_property_cased: getNameStyles({ name: rightModelName })
          .propertyCased.base,
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
