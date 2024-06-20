import { offsetFromRoot, updateJson } from "@nx/devkit";
import { Migrator as ParentMigrator } from "../Migrator";

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

        this.parent.coder.tree.write(baseDirectory + "/" + libFile, content);
      }
    }

    this.parent.coder.tree.delete(baseDirectory + "/src");

    // variants.ts
    const variantsPath =
      this.parent.coder.parent.project.root.baseDirectory +
      `/src/lib/${this.parent.coder.level}/variants.ts`;

    const newVariantImportPath = `../variants/${this.parent.coder.level}/${this.parent.coder.name}`;

    const variantsContent = this.parent.coder.tree
      .read(variantsPath)
      .toString("utf8");

    const newVariantImportPathContent = variantsContent.replace(
      new RegExp(`"${this.parent.coder.baseName}"`, "g"),
      `"${newVariantImportPath}"`,
    );

    this.parent.coder.tree.write(variantsPath, newVariantImportPathContent);

    // interface.ts
    const interfacesPath =
      this.parent.coder.parent.project.root.baseDirectory +
      `/src/lib/${this.parent.coder.level}/interface.ts`;

    const newInterfaceImportPath = `../variants/${this.parent.coder.level}/${this.parent.coder.name}/interface.ts`;

    const interfacesContent = this.parent.coder.tree
      .read(interfacesPath)
      .toString("utf8");

    const newInterfaceImportPathContent = interfacesContent.replace(
      new RegExp(`"${this.parent.coder.baseName}"`, "g"),
      `"${newInterfaceImportPath}"`,
    );

    this.parent.coder.tree.write(interfacesPath, newInterfaceImportPathContent);

    // _index.scss
    const stylesPath =
      this.parent.coder.parent.project.root.baseDirectory +
      `/src/lib/${this.parent.coder.level}/_index.scss`;

    const stylesContent = this.parent.coder.tree
      .read(stylesPath)
      .toString("utf8");

    const newStylesImportPath = `../variants/${this.parent.coder.level}/${this.parent.coder.name}/_index.scss`;

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
