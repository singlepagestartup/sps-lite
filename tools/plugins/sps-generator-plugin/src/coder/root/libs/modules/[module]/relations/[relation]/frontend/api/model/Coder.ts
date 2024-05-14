import {
  ProjectConfiguration,
  Tree,
  getProjects,
  offsetFromRoot,
} from "@nx/devkit";
import { Coder as ApiCoder } from "../Coder";
import { util as getNameStyles } from "../../../../../../../../../utils/get-name-styles";
import { util as createSpsReactLibrary } from "../../../../../../../../../../utils/create-sps-react-library";
import path from "path";
import * as nxWorkspace from "@nx/workspace";

export class Coder {
  parent: ApiCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  name: string;
  project: ProjectConfiguration;
  relationName: string;
  relationNamePluralized: string;
  moduleName: string;

  constructor({ parent, tree }: { parent: ApiCoder; tree: Tree }) {
    this.name = "model";
    this.baseName = `${parent.baseName}-model`;
    this.baseDirectory = `${parent.baseDirectory}/model`;
    this.tree = tree;
    this.parent = parent;

    const moduleName = this.parent.parent.parent.parent.parent.name;
    const relationName = this.parent.parent.parent.name;
    const relationNamePluralized = getNameStyles({ name: relationName })
      .kebabCased.pluralized;

    this.moduleName = moduleName;
    this.relationName = relationName;
    this.relationNamePluralized = relationNamePluralized;
  }

  async init() {
    this.project = getProjects(this.tree).get(this.baseName);
  }

  async create() {
    const rootContractsImportPath =
      this.parent.parent.parent.project.contracts.project.root.baseName;
    const extendedContractsImportPath =
      this.parent.parent.parent.project.contracts.project.extended.baseName;

    const offsetFromRootProject = offsetFromRoot(this.baseDirectory);

    await createSpsReactLibrary({
      root: this.baseDirectory,
      name: this.baseName,
      tree: this.tree,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
        module_name: this.moduleName,
        relation_name: this.relationName,
        root_contracts_import_path: rootContractsImportPath,
        extended_contracts_import_path: extendedContractsImportPath,
        relation_name_pluralized: this.relationNamePluralized,
        offset_from_root: offsetFromRootProject,
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