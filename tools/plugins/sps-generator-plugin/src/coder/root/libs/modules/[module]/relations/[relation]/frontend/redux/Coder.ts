import { ProjectConfiguration, Tree } from "@nx/devkit";
import { Coder as FrontendCoder } from "../Coder";
import { util as getNameStyles } from "../../../../../../../../utils/get-name-styles";

export class Coder {
  parent: FrontendCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  name: string;
  project: ProjectConfiguration;
  moduleName: string;
  modelName: string;
  modelNamePluralized: string;

  constructor({ parent, tree }: { parent: FrontendCoder; tree: Tree }) {
    this.name = "redux";
    this.baseName = `${parent.baseName}-redux`;
    this.baseDirectory = `${parent.baseDirectory}/redux`;
    this.tree = tree;
    this.parent = parent;

    const moduleName = this.parent.parent.parent.parent.name;
    const modelName = this.parent.parent.name;
    const modelNamePluralized = getNameStyles({ name: modelName }).kebabCased
      .pluralized;

    this.moduleName = moduleName;
    this.modelName = modelName;
    this.modelNamePluralized = modelNamePluralized;
  }
}
