import {
  ProjectConfiguration,
  Tree,
  generateFiles,
  getProjects,
  offsetFromRoot,
  updateJson,
  updateProjectConfiguration,
} from "@nx/devkit";
import * as nxWorkspace from "@nx/workspace";
import { Coder as FrontendCoder } from "../Coder";
import { Linter } from "@nx/eslint";
import { ProjectNameAndRootFormat } from "@nx/devkit/src/generators/project-name-and-root-utils";
import {
  libraryGenerator as reactLibraryGenerator,
  SupportedStyles,
} from "@nx/react";
import path from "path";
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

  async init() {
    this.project = getProjects(this.tree).get(this.baseName);
  }

  async create() {
    const offsetFromRootProject = offsetFromRoot(this.baseDirectory);

    const libraryOptions = {
      name: this.baseName,
      directory: this.baseDirectory,
      linter: "none" as Linter.EsLint,
      minimal: true,
      style: "none" as SupportedStyles,
      projectNameAndRootFormat: "as-provided" as ProjectNameAndRootFormat,
      strict: true,
    };

    await reactLibraryGenerator(this.tree, libraryOptions);

    updateProjectConfiguration(this.tree, this.baseName, {
      root: this.baseDirectory,
      sourceRoot: `${this.baseDirectory}/src`,
      projectType: "library",
      tags: [],
      targets: {
        lint: {},
      },
    });

    generateFiles(
      this.tree,
      path.join(__dirname, `files`),
      this.baseDirectory,
      {
        template: "",
        module_name: this.moduleName,
        model_name: this.modelName,
        offset_from_root: offsetFromRootProject,
      },
    );

    updateJson(this.tree, `${this.baseDirectory}/tsconfig.json`, (json) => {
      json.references = [];
      delete json.files;
      delete json.include;

      return json;
    });

    this.tree.delete(`${this.baseDirectory}/tsconfig.lib.json`);
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
