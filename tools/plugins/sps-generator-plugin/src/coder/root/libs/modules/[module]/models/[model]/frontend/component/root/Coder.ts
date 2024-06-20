import {
  ProjectConfiguration,
  Tree,
  generateFiles,
  getProjects,
  offsetFromRoot,
  updateJson,
  updateProjectConfiguration,
} from "@nx/devkit";
import { Coder as ComponentCoder } from "../Coder";
import * as nxWorkspace from "@nx/workspace";
import {
  libraryGenerator as reactLibraryGenerator,
  SupportedStyles,
} from "@nx/react";
import { Linter } from "@nx/eslint";
import { ProjectNameAndRootFormat } from "@nx/devkit/src/generators/project-name-and-root-utils";
import path from "path";
import { Migrator } from "./migrator/Migrator";

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
