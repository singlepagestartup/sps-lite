import { generateFiles } from "@nx/devkit";
import { Migrator as ParentMigrator } from "../Migrator";
import path from "path";

export class Migrator {
  parent: ParentMigrator;

  constructor({ parent }: { parent: ParentMigrator }) {
    this.parent = parent;
  }

  async execute() {
    const baseDirectory = this.parent.coder.baseDirectory;
    const libName = this.parent.coder.baseName;

    console.log(`🚀 ~ execute ~ libName:`, libName);

    generateFiles(
      this.parent.coder.tree,
      path.join(__dirname, `files`),
      baseDirectory,
      {
        template: "",
        lib_name: libName,
      },
    );

    this.parent.coder.tree.delete(`${baseDirectory}/tsconfig.spec.json`);

    const createdPackage = this.parent.coder.tree.read(
      `${baseDirectory}/package.json`,
    );

    console.log(`🚀 ~ execute ~ createdPackage:`, createdPackage?.toString());
  }
}
