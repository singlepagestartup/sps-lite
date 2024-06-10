import { ProjectConfiguration, Tree, getProjects } from "@nx/devkit";
import { Coder as ComponentCoder } from "../Coder";
import * as nxWorkspace from "@nx/workspace";
import path from "path";
import { Migrator } from "./migrator/Migrator";
import { util as createSpsReactLibrary } from "../../../../../../../utils/create-sps-react-library";

export type IGeneratorProps = {};

export class Coder {
  parent: ComponentCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  name: string;
  project?: ProjectConfiguration;

  constructor(props: { parent: ComponentCoder; tree: Tree } & IGeneratorProps) {
    this.name = "root";
    this.parent = props.parent;
    this.baseName = `${this.parent.baseName}`;
    this.baseDirectory = `${this.parent.baseDirectory}/root`;
    this.tree = props.tree;

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
    const moduleName = this.parent.parent.baseName;

    await createSpsReactLibrary({
      generateFilesPath: path.join(__dirname, "files"),
      name: this.baseName,
      root: this.baseDirectory,
      templateParams: {
        module_name: moduleName,
      },
      tree: this.tree,
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
