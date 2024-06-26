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
  moduleName: string;
  importPath: string;

  constructor({
    parent,
    tree,
  }: { parent: ApiCoder; tree: Tree } & IGeneratorProps) {
    this.name = "client";
    this.baseName = `${parent.baseName}-client`;
    this.baseDirectory = `${parent.baseDirectory}/client`;
    this.absoluteName = `${parent.absoluteName}/client`;
    this.tree = tree;
    this.parent = parent;

    this.importPath = this.absoluteName;

    const moduleName = this.parent.parent.parent.parent.parent.name;

    this.moduleName = moduleName;

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

    const apiModelImportPath = this.parent.project.model.importPath;

    await createSpsReactLibrary({
      root: this.baseDirectory,
      name: this.baseName,
      tree: this.tree,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
        api_model_import_path: apiModelImportPath,
        module_name: this.moduleName,
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
