import { generateFiles, offsetFromRoot, updateJson } from "@nx/devkit";
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
    const absoluteName = this.parent.coder.absoluteName;

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

    // variants.ts
    const variantsPath =
      this.parent.coder.parent.project.root.baseDirectory +
      `/src/lib/${this.parent.coder.level}/variants.ts`;

    const newImportPath = `${this.parent.coder.absoluteName}`;

    const variantsContent = this.parent.coder.tree
      .read(variantsPath)
      .toString("utf8");

    const newVariantImportPathContent = variantsContent.replace(
      new RegExp(`"${this.parent.coder.baseName}"`, "g"),
      `"${newImportPath}"`,
    );

    this.parent.coder.tree.write(variantsPath, newVariantImportPathContent);

    // interface.ts
    const interfacesPath =
      this.parent.coder.parent.project.root.baseDirectory +
      `/src/lib/${this.parent.coder.level}/interface.ts`;

    const interfacesContent = this.parent.coder.tree
      .read(interfacesPath)
      .toString("utf8");

    const newInterfaceImportPathContent = interfacesContent.replace(
      new RegExp(`"${this.parent.coder.baseName}"`, "g"),
      `"${newImportPath}"`,
    );

    this.parent.coder.tree.write(interfacesPath, newInterfaceImportPathContent);

    // _index.scss
    const stylesPath =
      this.parent.coder.parent.project.root.baseDirectory +
      `/src/lib/${this.parent.coder.level}/_index.scss`;

    const stylesContent = this.parent.coder.tree
      .read(stylesPath)
      .toString("utf8");

    const newStylesImportPath = `${this.parent.coder.absoluteName}/src/lib/_index.scss`;

    const newStylesImportPathContent = stylesContent.replace(
      new RegExp(`"${this.parent.coder.baseName}"`, "g"),
      `"${newStylesImportPath}"`,
    );

    this.parent.coder.tree.write(stylesPath, newStylesImportPathContent);

    updateJson(this.parent.coder.tree, `tsconfig.base.json`, (json) => {
      const updatedJson = { ...json };
      const project = updatedJson.compilerOptions.paths[`${baseName}`];

      delete updatedJson.compilerOptions.paths[`${baseName}`];

      return updatedJson;
    });
  }
}
