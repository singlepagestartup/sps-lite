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
  project?: ProjectConfiguration;
  relationName: string;
  relationNamePluralized: string;
  absoluteName: string;
  moduleName: string;
  importPath: string;

  constructor(props: { parent: ApiCoder; tree: Tree } & IGeneratorProps) {
    this.name = "model";
    this.tree = props.tree;
    this.parent = props.parent;
    this.baseName = `${this.parent.baseName}-model`;
    this.baseDirectory = `${this.parent.baseDirectory}/model`;
    this.absoluteName = `${this.parent.absoluteName}/model`;

    this.importPath = this.absoluteName;

    const moduleName = this.parent.parent.parent.parent.parent.name;
    const relationName = this.parent.parent.parent.name;
    const relationNamePluralized = getNameStyles({ name: relationName })
      .kebabCased.pluralized;

    this.moduleName = moduleName;
    this.relationName = relationName;
    this.relationNamePluralized = relationNamePluralized;

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
        relation_name: this.relationName,
        root_contracts_import_path: rootContractsImportPath,
        extended_contracts_import_path: extendedContractsImportPath,
        relation_name_pluralized: this.relationNamePluralized,
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
