import {
  ProjectConfiguration,
  Tree,
  getProjects,
  offsetFromRoot,
} from "@nx/devkit";
import * as nxWorkspace from "@nx/workspace";
import { Coder as ApiCoder } from "../Coder";
import path from "path";
import { util as createSpsReactLibrary } from "../../../../../../../../../../utils/create-sps-react-library";

export class Coder {
  parent: ApiCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  name: string;
  project?: ProjectConfiguration;
  moduleName: string;

  constructor({ parent, tree }: { parent: ApiCoder; tree: Tree }) {
    this.name = "server";
    this.baseName = `${parent.baseName}-server`;
    this.baseDirectory = `${parent.baseDirectory}/server`;
    this.tree = tree;
    this.parent = parent;

    const moduleName = this.parent.parent.parent.parent.parent.name;

    this.moduleName = moduleName;

    this.project = getProjects(this.tree).get(this.baseName);
  }

  async update() {
    console.log("Update:", this.baseName);
  }

  async create() {
    const offsetFromRootProject = offsetFromRoot(this.baseDirectory);
    const apiModelImportPath = this.parent.project.model.baseName;

    await createSpsReactLibrary({
      root: this.baseDirectory,
      name: this.baseName,
      tree: this.tree,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
        module_name: this.moduleName,
        api_model_import_path: apiModelImportPath,
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
