import {
  generateFiles,
  offsetFromRoot,
  updateProjectConfiguration,
} from "@nx/devkit";
import { Migrator as ParentMigrator } from "../Migrator";
import path from "path";

export class Migrator {
  parent: ParentMigrator;

  constructor({ parent }: { parent: ParentMigrator }) {
    this.parent = parent;
  }

  async execute() {
    const baseDirectory = this.parent.coder.baseDirectory;
    const baseName = this.parent.coder.baseName;
    const offsetFromRootProject = offsetFromRoot(baseDirectory);

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
}
