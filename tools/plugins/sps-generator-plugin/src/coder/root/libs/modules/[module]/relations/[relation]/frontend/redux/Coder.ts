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
import { Migrator } from "./migrator/Migrator";

export type IGeneratorProps = unknown;

export class Coder {
  parent: FrontendCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  name: string;
  project?: ProjectConfiguration;
  moduleName: string;
  modelName: string;
  absoluteName: string;
  modelNamePluralized: string;
  importPath: string;

  constructor(props: { parent: FrontendCoder; tree: Tree } & IGeneratorProps) {
    this.name = "redux";
    this.parent = props.parent;
    this.baseName = `${this.parent.baseName}-redux`;
    this.baseDirectory = `${this.parent.baseDirectory}/redux`;
    this.absoluteName = `${this.parent.absoluteName}/redux`;

    this.importPath = this.absoluteName;

    this.tree = props.tree;

    const moduleName = this.parent.parent.parent.parent.name;
    const modelName = this.parent.parent.name;
    const modelNamePluralized = getNameStyles({ name: modelName }).kebabCased
      .pluralized;

    this.moduleName = moduleName;
    this.modelName = modelName;
    this.modelNamePluralized = modelNamePluralized;

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

    const clientApiImportPath =
      this.parent.project.api.project.client.importPath;
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
