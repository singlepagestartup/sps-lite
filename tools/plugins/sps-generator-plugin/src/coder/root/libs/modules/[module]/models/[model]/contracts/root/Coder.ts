import {
  ProjectConfiguration,
  Tree,
  getProjects,
  offsetFromRoot,
} from "@nx/devkit";
import { Coder as ContractsCoder } from "../Coder";
import { util as createSpsTSLibrary } from "../../../../../../../../../utils/create-sps-ts-library";
import { RegexCreator } from "../../../../../../../../../utils/regex-utils/RegexCreator";
import { util as getNameStyles } from "../../../../../../../../utils/get-name-styles";
import { replaceInFile } from "../../../../../../../../../utils/file-utils";
import { space } from "../../../../../../../../../utils/regex-utils/regex-elements";
import * as nxWorkspace from "@nx/workspace";
import * as path from "path";

export class Coder {
  name: string;
  parent: ContractsCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  project?: ProjectConfiguration;

  constructor({ parent, tree }: { parent: ContractsCoder; tree: Tree }) {
    this.name = "root";
    this.parent = parent;
    this.tree = tree;
    this.baseName = `${parent.baseName}`;
    this.baseDirectory = `${parent.baseDirectory}/root`;

    this.project = getProjects(this.tree).get(this.baseName);
  }

  async update() {
    console.log("Update:", this.baseName);
  }

  async create() {
    const offsetFromRootProject = offsetFromRoot(this.baseDirectory);

    await createSpsTSLibrary({
      tree: this.tree,
      root: this.baseDirectory,
      name: this.baseName,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
        offset_from_root: offsetFromRootProject,
      },
    });

    this.project = getProjects(this.tree).get(this.baseName);
  }

  async addField({
    name,
    level,
    isRequired,
  }: {
    name: string;
    level: string;
    isRequired: boolean;
  }) {
    const pathToFile = `${this.baseDirectory}/src/lib/interfaces/${level}.ts`;

    const exportInterfaceField = new ExportInterfaceField({
      name,
      type: "string",
      level,
      isRequired,
    });

    await replaceInFile({
      tree: this.tree,
      pathToFile: pathToFile,
      regex: exportInterfaceField.onCreate.regex,
      content: exportInterfaceField.onCreate.content,
    });
  }

  async removeField({
    name,
    level,
    isRequired,
  }: {
    name: string;
    level: string;
    isRequired: boolean;
  }) {
    const pathToFile = `${this.baseDirectory}/src/lib/interfaces/${level}.ts`;

    const exportInterfaceField = new ExportInterfaceField({
      name,
      type: "string",
      level,
      isRequired,
    });

    try {
      await replaceInFile({
        tree: this.tree,
        pathToFile: pathToFile,
        regex: exportInterfaceField.onRemove.regex,
        content: exportInterfaceField.onRemove.content,
      });
    } catch (error) {
      if (!error.message.includes(`No expected value`)) {
        throw error;
      }
    }
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

export class ExportInterfaceField extends RegexCreator {
  constructor({
    name,
    type,
    level,
    isRequired,
  }: {
    name: string;
    type: string;
    level: string;
    isRequired: boolean;
  }) {
    let place = `export interface IModel extends Omit<IParentModel, "variant"> {`;

    if (level === "sps-lite") {
      place = `export interface IModel {`;
    }

    let placeRegex = new RegExp(
      `export interface IModel${space}(extends Omit<IParentModel, \\"variant\\">)?${space}{`,
    );

    if (level === "sps-lite") {
      placeRegex = new RegExp(`export interface IModel${space}{`);
    }

    const propertyCaseName = getNameStyles({ name }).propertyCased.base;
    const content = `${propertyCaseName}${isRequired ? "" : "?"}: ${type};`;

    const contentRegex = new RegExp(
      `${propertyCaseName}${isRequired ? "" : "\\?"}: ${type};`,
    );

    super({
      place,
      placeRegex,
      content,
      contentRegex,
    });
  }
}
