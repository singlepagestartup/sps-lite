import {
  ProjectConfiguration,
  Tree,
  getProjects,
  offsetFromRoot,
} from "@nx/devkit";
import { Coder as ContractsCoder } from "../Coder";
import { util as createSpsTSLibrary } from "../../../../../../../../../utils/create-sps-ts-library";
import * as nxWorkspace from "@nx/workspace";
import * as path from "path";
import { Migrator } from "./migrator/Migrator";

export type IGeneratorProps = {};

export class Coder {
  name: string;
  parent: ContractsCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  project?: ProjectConfiguration;

  constructor(props: { parent: ContractsCoder; tree: Tree } & IGeneratorProps) {
    this.name = "extended";
    this.parent = props.parent;
    this.tree = props.tree;
    this.baseName = `${props.parent.baseName}-extended`;
    this.baseDirectory = `${props.parent.baseDirectory}/extended`;

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
    const rootContractsImportPath = this.parent.project.root.baseName;
    const offsetFromRootProject = offsetFromRoot(this.baseDirectory);

    await createSpsTSLibrary({
      tree: this.tree,
      root: this.baseDirectory,
      name: this.baseName,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
        offset_from_root: offsetFromRootProject,
        root_contracts_import_path: rootContractsImportPath,
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
