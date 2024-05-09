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
import {
  libraryGenerator as reactLibraryGenerator,
  SupportedStyles,
} from "@nx/react";
import { Coder as ApiCoder } from "../Coder";
import { Linter } from "@nx/eslint";
import { ProjectNameAndRootFormat } from "@nx/devkit/src/generators/project-name-and-root-utils";
import { util as getNameStyles } from "../../../../../../../../../utils/get-name-styles";
import path from "path";

export class Coder {
  parent: ApiCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  name: string;
  project: ProjectConfiguration;
  modelName: string;
  modelNamePluralized: string;
  moduleName: string;

  constructor({ parent, tree }: { parent: ApiCoder; tree: Tree }) {
    this.name = "client";
    this.baseName = `${parent.baseName}-client`;
    this.baseDirectory = `${parent.baseDirectory}/client`;
    this.tree = tree;
    this.parent = parent;

    const modelName = this.parent.parent.name;

    const modelNamePluralized = getNameStyles({ name: modelName }).kebabCased
      .pluralized;

    const moduleName = this.parent.parent.parent.name;

    console.log(`🚀 ~ constructor ~ moduleName:`, moduleName);
    console.log(`🚀 ~ constructor ~ modelName:`, modelName);
    console.log(`🚀 ~ constructor ~ modelNamePluralized:`, modelNamePluralized);

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

    updateProjectConfiguration(this.tree, this.baseDirectory, {
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
        model_name_pluralized: this.modelNamePluralized,
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

    await this.init();
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
