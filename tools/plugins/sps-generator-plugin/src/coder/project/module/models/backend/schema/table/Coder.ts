import { Tree, formatFiles, getProjects, names } from "@nx/devkit";
import pluralize from "pluralize";
import * as path from "path";
import * as nxWorkspace from "@nx/workspace";
import { createSpsJsLibrary } from "../../../../../../../utils/js-lib-utils";
import { replaceInFile } from "../../../../../../../utils/file-utils";
import { RegexCreator } from "../../../../../../../utils/regex-utils/RegexCreator";

export class Coder {
  libName: string;
  root: string;
  modelName: string;
  modelNameSnakeCased: string;
  modelNameSnakeCasedPluralized: string;
  moduleNameSnakeCased: string;
  moduleAndModelNamePascalCased: string;

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

    // wide-slide -> wide_slides
    const modelNameSnakeCasedPluralized = modelNameSplitted.reduce(
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

    // sps-website-builder -> sps_w_b
    // need to place table title to maximum allowed in postgres
    const moduleNameSnakeCased = names(module)
      .fileName.split("-")
      .map((word) => {
        if (word === "sps") {
          return word;
        }

        return word.charAt(0);
      })
      .join("_");

    // sps-website-builder -> SPSWB
    const moduleNameCuttedAndPascalCased = module
      .split("-")
      .map((word) => {
        // take only first letter
        if (word === "sps") {
          return "SPS";
        }

        return names(word[0]).className;
      })
      .join("");

    const modelNamePascalCased = names(modelName).className;

    // SPSWB + Slide = SPSWBSlide
    const moduleAndModelNamePascalCased = `${moduleNameCuttedAndPascalCased}${modelNamePascalCased}`;

    this.libName = libName;
    this.root = root;
    this.modelNameSnakeCasedPluralized = modelNameSnakeCasedPluralized;
    this.modelName = modelName;
    this.moduleNameSnakeCased = moduleNameSnakeCased;
    this.moduleAndModelNamePascalCased = moduleAndModelNamePascalCased;
  }

  async create({ tree }: { tree: Tree }) {
    await createSpsJsLibrary({
      tree,
      root: this.root,
      name: this.libName,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
        model_name_snake_cased_pluralized: this.modelNameSnakeCasedPluralized,
        module_name_snake_cased: this.moduleNameSnakeCased,
        module_and_model_name_pascal_cased: this.moduleAndModelNamePascalCased,
      },
    });
  }

  async createField({
    level,
    tree,
    name,
    type,
  }: {
    level: "sps-lite" | "startup";
    tree: Tree;
    name: string;
    type: string;
  }) {
    const schemaFilePath = `${this.root}/src/lib/fields/${level}.ts`;

    const fieldToAdd = new Field({
      name,
      type,
    });

    await replaceInFile({
      tree,
      pathToFile: schemaFilePath,
      regex: fieldToAdd.onCreate.regex,
      content: fieldToAdd.onCreate.content,
    });

    await formatFiles(tree);
  }

  async deleteField({
    level,
    tree,
    name,
    type,
  }: {
    level: "sps-lite" | "startup";
    tree: Tree;
    name: string;
    type: string;
  }) {
    const schemaFilePath = `${this.root}/src/lib/fields/${level}.ts`;

    const fieldToAdd = new Field({
      name,
      type,
    });

    await replaceInFile({
      tree,
      pathToFile: schemaFilePath,
      regex: fieldToAdd.onRemove.regex,
      content: fieldToAdd.onRemove.content,
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

export class Field extends RegexCreator {
  constructor({ name, type }: { name: string; type: string }) {
    const place = `export const fields = {`;
    const placeRegex = new RegExp(`export const fields = {`);

    const fieldNameCamelCase = names(name).propertyName;
    const content = `${fieldNameCamelCase}: pgCore.${type}("${name}"),`;

    const contentRegex = new RegExp(
      `${fieldNameCamelCase}: pgCore.${type}\\("${name}"\\),`,
    );

    super({
      place,
      placeRegex,
      content,
      contentRegex,
    });
  }
}
