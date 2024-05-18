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

export class Coder {
  name: string;
  parent: ContractsCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  project: ProjectConfiguration;

  constructor({ parent, tree }: { parent: ContractsCoder; tree: Tree }) {
    this.name = "root";
    this.parent = parent;
    this.tree = tree;
    this.baseName = `${parent.baseName}`;
    this.baseDirectory = `${parent.baseDirectory}/root`;
  }

  async init() {
    this.project = getProjects(this.tree).get(this.baseName);
  }

  async create() {
    const offsetFromRootProject = offsetFromRoot(this.baseDirectory);

    const leftModelName =
      this.parent.parent.parent.parent.project.models[1].project.model.name;
    const rightModelName =
      this.parent.parent.parent.parent.project.models[2].project.model.name;

    const leftModelIsExternal =
      this.parent.parent.parent.parent.project.models[1].isExternal;
    const rightModelIsExternal =
      this.parent.parent.parent.parent.project.models[2].isExternal;

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

    await this.init();
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
