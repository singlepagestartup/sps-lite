import { Tree, formatFiles, getProjects, names } from "@nx/devkit";
import pluralize from "pluralize";
import * as path from "path";
import * as nxWorkspace from "@nx/workspace";
import { createSpsJsLibrary } from "../../../../utils/js-lib-utils";
import { replaceInFile } from "../../../../utils/file-utils";

export class Builder {
  libName: string;
  root: string;
  modelNameSnakeCase: string;
  modelName: string;
  modelNameSnakeCasePluralized: string;
  moduleNameSnakeCase: string;
  exportTable: ExportTable;

  constructor({
    modelName,
    module,
    tree,
  }: {
    modelName: string;
    module: string;
    tree: Tree;
  }) {
    const libName = `@sps/${module}-models-${modelName}-backend-schema-table`;
    const baseDirectory = `libs/modules/${module}/models`;

    const root = `${baseDirectory}/${modelName}/backend/schema/table`;
    const modelNameSplitted = names(modelName).fileName.split("-");
    const modelNameSnakeCasePluralized = modelNameSplitted.reduce(
      (acc, curr, index) => {
        if (index === modelNameSplitted.length - 1) {
          const plural = pluralize(curr);
          if (index === 0) {
            return plural;
          }

          return acc + "_" + plural;
        }

        if (index === 0) {
          return curr;
        }

        return acc + "_" + curr;
      },
      "",
    );

    this.exportTable = new ExportTable(modelNameSnakeCasePluralized);
    this.libName = libName;
    this.root = root;
    this.modelNameSnakeCasePluralized = modelNameSnakeCasePluralized;
    this.modelName = modelName;
    this.moduleNameSnakeCase = names(module).fileName.replaceAll(/-/g, "_");
  }

  async create({ tree }: { tree: Tree }) {
    await createSpsJsLibrary({
      tree,
      root: this.root,
      name: this.libName,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
        model_name_snake_case_pluralized: this.modelNameSnakeCasePluralized,
        module_name_snake_cased: this.moduleNameSnakeCase,
      },
    });
  }

  async createField({
    tree,
    name,
    type,
  }: {
    tree: Tree;
    name: string;
    type: string;
  }) {
    const schemaFilePath = `${this.root}/src/lib/schema.ts`;
    const fieldToAdd = new Field(name, type).string;

    const content = `${this.exportTable.string}${fieldToAdd}`;

    const regex = this.exportTable.regex;

    const replaceExportRoutes = await replaceInFile({
      tree,
      pathToFile: schemaFilePath,
      regex,
      content: content,
    });

    await formatFiles(tree);
  }

  async deleteField({
    tree,
    name,
    type,
  }: {
    tree: Tree;
    name: string;
    type: string;
  }) {
    const schemaFilePath = `${this.root}/src/lib/schema.ts`;
    const fieldToDelete = new Field(name, type).regex;

    const replaceExportRoutes = await replaceInFile({
      tree,
      pathToFile: schemaFilePath,
      regex: fieldToDelete,
      content: "",
    });

    await formatFiles(tree);
  }

  async delete({ tree }: { tree: Tree }) {
    const project = getProjects(tree).get(this.libName);

    if (!project) {
      return;
    }

    await nxWorkspace.removeGenerator(tree, {
      projectName: this.libName,
      skipFormat: true,
      forceRemove: true,
    });

    await formatFiles(tree);
  }
}

export class ExportTable {
  string: string;
  regex: RegExp;

  constructor(modelNameSnakeCasePluralized: string) {
    const exportTableContent = `export const Table = pgTable("${modelNameSnakeCasePluralized}", {`;

    const exportTableContentRegex = new RegExp(
      `export const Table = pgTable\\(([\\s]+)?"${modelNameSnakeCasePluralized}",([\\s]+)?{`,
    );

    this.string = exportTableContent;
    this.regex = exportTableContentRegex;
  }
}

export class Field {
  string: string;
  regex: RegExp;

  constructor(name: string, type: string) {
    const fieldNameCamelCase = names(name).propertyName;
    const field = `${fieldNameCamelCase}: ${type}("${name}"),`;

    const fieldContentRegex = new RegExp(
      `${fieldNameCamelCase}: ${type}\\("${name}"\\),`,
    );

    this.string = field;
    this.regex = fieldContentRegex;
  }
}
