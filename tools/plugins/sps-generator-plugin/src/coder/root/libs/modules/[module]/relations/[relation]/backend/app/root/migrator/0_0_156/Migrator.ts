import {
  Tree,
  generateFiles,
  offsetFromRoot,
  updateJson,
  updateProjectConfiguration,
} from "@nx/devkit";
import { Migrator as ParentMigrator } from "../Migrator";
import path from "path";
import { moveGenerator } from "@nx/workspace";

export class Migrator {
  parent: ParentMigrator;

  constructor({ parent }: { parent: ParentMigrator }) {
    this.parent = parent;
  }

  async execute() {
    await this.moveToRootFolder();
    return;

    const baseDirectory = this.parent.coder.baseDirectory;
    const baseName = this.parent.coder.baseName;
    const offsetFromRootProject = offsetFromRoot(baseDirectory);

    const exists = this.parent.coder.tree.exists(baseDirectory);

    if (!exists) {
      throw new Error(`The directory ${baseDirectory} does not exist`);
    }

    generateFiles(
      this.parent.coder.tree,
      path.join(__dirname, `files`),
      baseDirectory,
      {
        template: "",
        lib_name: baseName,
        offset_from_root: offsetFromRootProject,
      },
    );

    this.parent.coder.tree.delete(`${baseDirectory}/tsconfig.spec.json`);

    updateProjectConfiguration(this.parent.coder.tree, baseName, {
      ...this.parent.coder.project,
      targets: {
        "tsc:build": {},
      },
    });
  }

  async moveToRootFolder() {
    const baseDirectory = this.parent.coder.baseDirectory;
    const baseName = this.parent.coder.baseName;
    const offsetFromRootProject = offsetFromRoot(baseDirectory);
    const project = this.parent.coder.project;

    if (!project.root.endsWith("root")) {
      const tmpPath = project.root.split("/").slice(0, -1).join("/") + "/temp";

      await moveGenerator(this.parent.coder.tree, {
        projectName: project.name,
        newProjectName: project.name,
        destination: tmpPath,
        updateImportPath: false,
        projectNameAndRootFormat: "as-provided",
      });

      await moveGenerator(this.parent.coder.tree, {
        projectName: project.name,
        newProjectName: project.name,
        destination: baseDirectory,
        updateImportPath: false,
        projectNameAndRootFormat: "as-provided",
      });

      // updateJson(
      //   this.parent.coder.tree,
      //   `${baseDirectory}/project.json`,
      //   (json) => {
      //     return {
      //       ...json,
      //       extends: offsetFromRootProject + "/.eslintrc.json",
      //     };
      //   },
      // );

      // this.parent.coder.tree.write(
      //   baseDirectory + "/jest.config.ts",
      //   `/* eslint-disable */
      //   export default {
      //     displayName:
      //       "${baseName}",
      //     preset: "${offsetFromRootProject}jest.server-preset.js",
      //   };`,
      // );
    }
  }
}
