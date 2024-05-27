import {
  ProjectConfiguration,
  Tree,
  getProjects,
  offsetFromRoot,
} from "@nx/devkit";
import { Coder as FrontendCoder } from "../Coder";
import { util as getNameStyles } from "../../../../../../../../utils/get-name-styles";
import path from "path";
import { util as createSpsReactLibrary } from "../../../../../../../../../utils/create-sps-react-library";
import * as nxWorkspace from "@nx/workspace";

export class Coder {
  parent: FrontendCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  name: string;
  project?: ProjectConfiguration;
  moduleName: string;
  modelName: string;
  modelNamePluralized: string;

  constructor({ parent, tree }: { parent: FrontendCoder; tree: Tree }) {
    this.name = "redux";
    this.baseName = `${parent.baseName}-redux`;
    this.baseDirectory = `${parent.baseDirectory}/redux`;
    this.tree = tree;
    this.parent = parent;

    const moduleName = this.parent.parent.parent.parent.name;
    const modelName = this.parent.parent.name;
    const modelNamePluralized = getNameStyles({ name: modelName }).kebabCased
      .pluralized;

    this.moduleName = moduleName;
    this.modelName = modelName;
    this.modelNamePluralized = modelNamePluralized;

    this.project = getProjects(this.tree).get(this.baseName);
  }

  async update() {
    console.log("Update:", this.baseName);
  }

  async create() {
    const clientApiImportPath = this.parent.project.api.project.client.baseName;
    const offsetFromRootProject = offsetFromRoot(this.baseDirectory);

    await createSpsReactLibrary({
      root: this.baseDirectory,
      name: this.baseName,
      tree: this.tree,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
        module_name: this.moduleName,
        model_name: this.modelName,
        client_api_import_path: clientApiImportPath,
        offset_from_root: offsetFromRootProject,
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
