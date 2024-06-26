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
import { Migrator } from "./migrator/Migrator";

export type IGeneratorProps = unknown;

export class Coder {
  name: string;
  parent: ContractsCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  absoluteName: string;
  project?: ProjectConfiguration;
  importPath: string;

  constructor(props: { parent: ContractsCoder; tree: Tree } & IGeneratorProps) {
    this.name = "root";
    this.parent = props.parent;
    this.tree = props.tree;
    this.baseName = `${props.parent.baseName}`;
    this.baseDirectory = `${props.parent.baseDirectory}/root`;
    this.absoluteName = `${props.parent.absoluteName}/root`;

    this.importPath = this.absoluteName;

    this.project = getProjects(this.tree).get(this.baseName);
  }

  async migrate(props: { version: string }) {
    const migrator = new Migrator({
      coder: this,
    });

    const version = props.version as keyof typeof migrator.releases;
    await migrator.execute({ version });
  }

  async create() {
    if (this.project) {
      return;
    }

    await createSpsTSLibrary({
      tree: this.tree,
      root: this.baseDirectory,
      name: this.baseName,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
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
    } catch (error: any) {
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
  constructor(props: {
    name: string;
    type: string;
    level: string;
    isRequired: boolean;
  }) {
    let place = `export interface IModel extends Omit<IParentModel, "variant"> {`;

    if (props.level === "sps-lite") {
      place = `export interface IModel {`;
    }

    let placeRegex = new RegExp(
      `export interface IModel${space}(extends Omit<IParentModel, \\"variant\\">)?${space}{`,
    );

    if (props.level === "sps-lite") {
      placeRegex = new RegExp(`export interface IModel${space}{`);
    }

    const propertyCaseName = getNameStyles({ name: props.name }).propertyCased
      .base;
    const content = `${propertyCaseName}${props.isRequired ? "" : "?"}: ${props.type};`;

    const contentRegex = new RegExp(
      `${propertyCaseName}${props.isRequired ? "" : "\\?"}: ${props.type};`,
    );

    super({
      place,
      placeRegex,
      content,
      contentRegex,
    });
  }
}
