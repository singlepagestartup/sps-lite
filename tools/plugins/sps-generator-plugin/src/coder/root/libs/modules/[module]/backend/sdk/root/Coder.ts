import { ProjectConfiguration, Tree, getProjects } from "@nx/devkit";
import { Coder as SdkCoder } from "../Coder";
import { util as createSpsTSLibrary } from "../../../../../../../../utils/create-sps-ts-library";
import * as nxWorkspace from "@nx/workspace";
import path from "path";
import { Migrator } from "./migrator/Migrator";

export type IGeneratorProps = unknown;

export class Coder {
  name: string;
  parent: SdkCoder;
  baseName: string;
  baseDirectory: string;
  tree: Tree;
  absoluteName: string;
  project?: ProjectConfiguration;
  importPath: string;

  constructor(props: { tree: Tree; parent: SdkCoder } & IGeneratorProps) {
    this.name = "root";
    this.tree = props.tree;
    this.parent = props.parent;
    this.baseName = `${this.parent.baseName}`;
    this.baseDirectory = `${this.parent.baseDirectory}/root`;
    this.absoluteName = `${this.parent.absoluteName}/root`;

    this.importPath = this.absoluteName;

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

    await createSpsTSLibrary({
      tree: this.tree,
      root: this.baseDirectory,
      name: this.baseName,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
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
