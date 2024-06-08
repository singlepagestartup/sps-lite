import { ProjectConfiguration, Tree, getProjects } from "@nx/devkit";
import { Coder as SdkCoder } from "../Coder";
import { util as createSpsTSLibrary } from "../../../../../../../../utils/create-sps-ts-library";
import { util as getNameStyles } from "../../../../../../../utils/get-name-styles";
import * as nxWorkspace from "@nx/workspace";
import path from "path";

export type IGeneratorProps = {};

export class Coder {
  name: string;
  parent: SdkCoder;
  baseName: string;
  baseDirectory: string;
  tree: Tree;
  project: ProjectConfiguration;
  moduleNameStyles: ReturnType<typeof getNameStyles>;

  constructor(props: { tree: Tree; parent: SdkCoder } & IGeneratorProps) {
    this.name = "root";
    this.tree = props.tree;
    this.parent = props.parent;
    this.baseName = `${this.parent.baseName}`;
    this.baseDirectory = `${this.parent.baseDirectory}/root`;

    const moduleName = this.parent.parent.parent.name;
    const moduleNameStyles = getNameStyles({ name: moduleName });
    this.moduleNameStyles = moduleNameStyles;
  }

  async update() {
    // console.log("Update:", this.baseName);
  }

  async create() {
    await createSpsTSLibrary({
      tree: this.tree,
      root: this.baseDirectory,
      name: this.baseName,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
      },
    });

    const projects = getProjects(this.tree);

    this.project = projects.get(this.baseName);
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
