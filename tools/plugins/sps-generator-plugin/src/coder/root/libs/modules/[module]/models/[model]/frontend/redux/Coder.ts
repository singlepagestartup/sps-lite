import { ProjectConfiguration, Tree, getProjects } from "@nx/devkit";
import * as nxWorkspace from "@nx/workspace";
import { Coder as FrontendCoder } from "../Coder";
import path from "path";
import { util as getNameStyles } from "../../../../../../../../utils/get-name-styles";
import { util as createSpsReactLibrary } from "../../../../../../../../../utils/create-sps-react-library";
import { Migrator } from "./migrator/Migrator";

export type IGeneratorProps = unknown;

export class Coder {
  parent: FrontendCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  name: string;
  project?: ProjectConfiguration;
  absoluteName: string;
  moduleName: string;
  modelName: string;
  modelNamePluralized: string;
  importPath: string;

  constructor(props: { parent: FrontendCoder; tree: Tree } & IGeneratorProps) {
    this.name = "redux";
    this.baseName = `${props.parent.baseName}-redux`;
    this.baseDirectory = `${props.parent.baseDirectory}/redux`;
    this.absoluteName = `${props.parent.absoluteName}/redux`;
    this.tree = props.tree;
    this.parent = props.parent;

    this.importPath = this.absoluteName;

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

    const apiClientImportPath =
      this.parent.project.api.project.client.importPath;

    await createSpsReactLibrary({
      root: this.baseDirectory,
      name: this.baseName,
      tree: this.tree,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
        module_name: this.moduleName,
        api_client_import_path: apiClientImportPath,
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
