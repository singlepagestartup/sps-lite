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

    const exists = this.parent.coder.tree.exists(baseDirectory);

    if (!exists) {
      throw new Error(`The directory ${baseDirectory} does not exist`);
    }

    const rootFiles = this.parent.coder.tree.children(baseDirectory);

    for (const rootFile of rootFiles) {
      const pathToFile = `${baseDirectory}/${rootFile}`;
      const isFile = this.parent.coder.tree.isFile(pathToFile);

      if (isFile) {
        this.parent.coder.tree.delete(pathToFile);
      }
    }

    const libFiles = this.parent.coder.tree.children(
      `${baseDirectory}/src/lib`,
    );

    for (const libFile of libFiles) {
      const pathToFile = `${baseDirectory}/src/lib/${libFile}`;
      const isFile = this.parent.coder.tree.isFile(pathToFile);

      if (isFile) {
        const content = this.parent.coder.tree.read(pathToFile);

        const newFile = this.parent.coder.tree.write(
          baseDirectory + "/" + libFile,
          content,
        );
      }
    }

    const legacySrc = this.parent.coder.tree.delete(baseDirectory + "/src");

    // this.parent.coder.tree.delete(baseDirectory + "/package.json");
    // this.parent.coder.tree.delete(baseDirectory + "/project.json");
  }
}
