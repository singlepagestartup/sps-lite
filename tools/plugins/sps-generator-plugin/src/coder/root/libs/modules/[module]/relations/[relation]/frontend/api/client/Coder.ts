import { ProjectConfiguration, Tree, getProjects } from "@nx/devkit";
import { Coder as ApiCoder } from "../Coder";
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
  absoluteName: string;
  moduleName: string;
  importPath: string;

  constructor(props: { parent: ApiCoder; tree: Tree } & IGeneratorProps) {
    this.tree = props.tree;
    this.parent = props.parent;
    this.name = "client";
    this.baseName = `${this.parent.baseName}-client`;
    this.baseDirectory = `${this.parent.baseDirectory}/client`;
    this.absoluteName = `${this.parent.absoluteName}/client`;

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
