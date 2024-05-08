import {
  ProjectConfiguration,
  Tree,
  formatFiles,
  getProjects,
  names,
} from "@nx/devkit";
import pluralize from "pluralize";
import * as path from "path";
import * as nxWorkspace from "@nx/workspace";
import { util as createSpsTSLibrary } from "../../../../../../../../../../utils/create-sps-ts-library";
import { replaceInFile } from "../../../../../../../../../../utils/file-utils";
import { RegexCreator } from "../../../../../../../../../../utils/regex-utils/RegexCreator";
import { Coder as SchemaCoder } from "../Coder";

export class Coder {
  parent: SchemaCoder;
  baseName: string;
  baseDirectory: string;
  tree: Tree;
  modelName: string;
  modelNameSnakeCased: string;
  modelNameSnakeCasedPluralized: string;
  moduleNameSnakeCased: string;
  moduleAndModelNamePascalCased: string;
  project: ProjectConfiguration;

  constructor({ parent, tree }: { parent: SchemaCoder; tree: Tree }) {
    this.parent = parent;
    this.baseName = `${parent.baseName}-table`;
    this.baseDirectory = `${parent.baseDirectory}/table`;
    this.tree = tree;

    // // wide-slide -> wide_slides
    const modelName = parent.parent.parent.name;
    const modelNameSplitted = names(modelName).fileName.split("-");
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

    const moduleName = parent.parent.parent.parent.parent.name;
    // sps-website-builder -> sps_w_b
    // need to place table title to maximum allowed in postgres
    const moduleNameSnakeCased = names(moduleName)
      .fileName.split("-")
      .map((word) => {
        if (word === "sps") {
          return word;
        }

        return word.charAt(0);
      })
      .join("_");

    // sps-website-builder -> SPSWB
    const moduleNameCuttedAndPascalCased = moduleName
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

    this.modelNameSnakeCasedPluralized = modelNameSnakeCasedPluralized;
    this.moduleNameSnakeCased = moduleNameSnakeCased;
    this.moduleAndModelNamePascalCased = moduleAndModelNamePascalCased;
  }

  async init() {
    this.project = getProjects(this.tree).get(this.baseName);
  }

  async create() {
    await createSpsTSLibrary({
      tree: this.tree,
      root: this.baseDirectory,
      name: this.baseName,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
        model_name_snake_cased_pluralized: this.modelNameSnakeCasedPluralized,
        module_name_snake_cased: this.moduleNameSnakeCased,
        module_and_model_name_pascal_cased: this.moduleAndModelNamePascalCased,
      },
    });

    await this.init();
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
    const schemaFilePath = `${this.baseDirectory}/src/lib/fields/${level}.ts`;

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
    const schemaFilePath = `${this.baseDirectory}/src/lib/fields/${level}.ts`;

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
