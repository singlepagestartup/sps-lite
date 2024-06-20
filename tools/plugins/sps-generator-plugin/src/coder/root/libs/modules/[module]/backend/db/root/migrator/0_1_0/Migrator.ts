import {
  generateFiles,
  offsetFromRoot,
  updateJson,
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

    const oldBackendSchemaImportPath = `${this.parent.coder.parent.parent.project.schema.project.root.baseName}`;
    const newBackendSchemaImportPath = `${this.parent.coder.parent.parent.project.schema.project.root.absoluteName}`;

    const schameFile = this.parent.coder.tree
      .read(`${baseDirectory}/src/lib/schema.ts`)
      .toString("utf8");

    const newSchemaFile = schameFile.replace(
      new RegExp(oldBackendSchemaImportPath, "g"),
      newBackendSchemaImportPath,
    );

    this.parent.coder.tree.write(
      `${baseDirectory}/src/lib/schema.ts`,
      newSchemaFile,
    );

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

    updateJson(this.parent.coder.tree, `tsconfig.base.json`, (json) => {
      const updatedJson = { ...json };
      const project = updatedJson.compilerOptions.paths[`${baseName}`];

      delete updatedJson.compilerOptions.paths[`${baseName}`];

      return updatedJson;
    });
  }
}
