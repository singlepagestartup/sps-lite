import { ProjectConfiguration, Tree, getProjects } from "@nx/devkit";
import { Coder as ApiCoder } from "../Coder";
import { util as getNameStyles } from "../../../../../../../../../utils/get-name-styles";
import { util as createSpsReactLibrary } from "../../../../../../../../../../utils/create-sps-react-library";
import path from "path";
import * as nxWorkspace from "@nx/workspace";
import { Migrator } from "./migrator/Migrator";

export type IGeneratorProps = unknown;

export class Coder {
  parent: ApiCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  name: string;
  absoluteName: string;
  project?: ProjectConfiguration;
  modelName: string;
  modelNamePluralized: string;
  moduleName: string;
  importPath: string;

  constructor(props: { parent: ApiCoder; tree: Tree } & IGeneratorProps) {
    this.name = "model";
    this.baseName = `${props.parent.baseName}-model`;
    this.baseDirectory = `${props.parent.baseDirectory}/model`;
    this.absoluteName = `${props.parent.absoluteName}/model`;
    this.tree = props.tree;
    this.parent = props.parent;

    this.importPath = this.absoluteName;

    const moduleName = this.parent.parent.parent.parent.parent.name;
    const modelName = this.parent.parent.parent.name;
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

    const rootContractsImportPath =
      this.parent.parent.parent.project.contracts.project.root.importPath;
    const extendedContractsImportPath =
      this.parent.parent.parent.project.contracts.project.extended.importPath;

    await createSpsReactLibrary({
      root: this.baseDirectory,
      name: this.baseName,
      tree: this.tree,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
        model_name: this.modelName,
        root_contracts_import_path: rootContractsImportPath,
        extended_contracts_import_path: extendedContractsImportPath,
        model_name_pluralized: this.modelNamePluralized,
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
