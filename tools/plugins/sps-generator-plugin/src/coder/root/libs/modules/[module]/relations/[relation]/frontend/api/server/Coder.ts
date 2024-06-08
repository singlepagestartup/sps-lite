import {
  ProjectConfiguration,
  Tree,
  getProjects,
  offsetFromRoot,
} from "@nx/devkit";
import { Coder as ApiCoder } from "../Coder";
import path from "path";
import * as nxWorkspace from "@nx/workspace";
import { util as createSpsReactLibrary } from "../../../../../../../../../../utils/create-sps-react-library";
import { Migrator } from "./migrator/Migrator";

export type IGeneratorProps = {};

export class Coder {
  parent: ApiCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  name: string;
  project?: ProjectConfiguration;
  moduleName: string;

  constructor(props: { parent: ApiCoder; tree: Tree } & IGeneratorProps) {
    this.tree = props.tree;
    this.parent = props.parent;
    this.name = "server";
    this.baseName = `${this.parent.baseName}-server`;
    this.baseDirectory = `${this.parent.baseDirectory}/server`;

    const moduleName = this.parent.parent.parent.parent.parent.name;

    this.moduleName = moduleName;

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
