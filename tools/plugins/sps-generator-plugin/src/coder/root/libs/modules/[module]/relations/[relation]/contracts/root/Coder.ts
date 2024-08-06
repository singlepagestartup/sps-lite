import { ProjectConfiguration, Tree, getProjects } from "@nx/devkit";
import { Coder as ContractsCoder } from "../Coder";
import { util as createSpsTSLibrary } from "../../../../../../../../../utils/create-sps-ts-library";
import { util as getNameStyles } from "../../../../../../../../utils/get-name-styles";
import * as path from "path";
import * as nxWorkspace from "@nx/workspace";
import {
  addToFile,
  replaceInFile,
} from "../../../../../../../../../utils/file-utils";
import { RegexCreator } from "../../../../../../../../../utils/regex-utils/RegexCreator";
import { space } from "../../../../../../../../../utils/regex-utils/regex-elements";
import { Migrator } from "./migrator/Migrator";

export type IGeneratorProps = unknown;

export class Coder {
  name: string;
  parent: ContractsCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  project?: ProjectConfiguration;
  importContracts?: ImportContracts;
  exportNamedInterface?: ExportNamedInterface;
  absoluteName: string;
  importPath: string;

  constructor(props: { parent: ContractsCoder; tree: Tree } & IGeneratorProps) {
    this.name = "root";
    this.parent = props.parent;
    this.tree = props.tree;
    this.baseName = `${this.parent.baseName}`;
    this.baseDirectory = `${this.parent.baseDirectory}/root`;
    this.absoluteName = `${this.parent.absoluteName}/root`;

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

  async setReplacers() {
    const relationNameStyles = this.parent.parent.name;

    this.importContracts = new ImportContracts({
      importPath: this.importPath,
      relationNamePascalCased: getNameStyles({
        name: relationNameStyles,
      }).pascalCased.base,
    });
    this.exportNamedInterface = new ExportNamedInterface({
      relationNamePropertyCased: getNameStyles({
        name: relationNameStyles,
      }).propertyCased.base,
      relationNamePascalCased: getNameStyles({
        name: relationNameStyles,
      }).pascalCased.base,
    });
  }

  async attach() {
    await this.setReplacers();

    if (!this.importContracts || !this.exportNamedInterface) {
      throw new Error(`The replacers are not set`);
    }

    const models = this.parent.parent.parent.parent.project.models;

    for (const model of models) {
      if (model.project.model.isExternal) {
        continue;
      }

      const levelContractsPath = path.join(
        model.project.model.project.contracts.project.extended.baseDirectory,
        "/src/lib/interfaces/sps-lite.ts",
      );

      await addToFile({
        toTop: true,
        pathToFile: levelContractsPath,
        content: this.importContracts.onCreate.content,
        tree: this.tree,
      });

      await replaceInFile({
        tree: this.tree,
        pathToFile: levelContractsPath,
        regex: this.exportNamedInterface.onCreate.regex,
        content: this.exportNamedInterface.onCreate.content,
      });
    }
  }

  async detach() {
    await this.setReplacers();

    if (!this.importContracts || !this.exportNamedInterface) {
      throw new Error(`The replacers are not set`);
    }

    const models = this.parent.parent.parent.parent.project.models;

    for (const model of models) {
      if (model.project.model.isExternal) {
        continue;
      }

      const levelContractsPath = path.join(
        model.project.model.project.contracts.project.extended.baseDirectory,
        "/src/lib/interfaces/sps-lite.ts",
      );

      try {
        await replaceInFile({
          tree: this.tree,
          pathToFile: levelContractsPath,
          regex: this.exportNamedInterface.onRemove.regex,
          content: "",
        });
      } catch (error: any) {
        if (!error.message.includes(`No expected value`)) {
          throw error;
        }
      }

      try {
        await replaceInFile({
          tree: this.tree,
          pathToFile: levelContractsPath,
          regex: this.importContracts.onRemove.regex,
          content: "",
        });
      } catch (error: any) {
        if (!error.message.includes(`No expected value`)) {
          throw error;
        }
      }
    }
  }

  async create() {
    if (this.project) {
      return;
    }

    const leftModelName =
      this.parent.parent.parent.parent.project.models[0].project.model.name;
    const rightModelName =
      this.parent.parent.parent.parent.project.models[1].project.model.name;

    const rightModelIsExternal =
      this.parent.parent.parent.parent.project.models[1].project.model
        .isExternal;

    await createSpsTSLibrary({
      tree: this.tree,
      root: this.baseDirectory,
      name: this.baseName,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
        left_model_name_property_cased: getNameStyles({ name: leftModelName })
          .propertyCased.base,
        right_model_is_external: rightModelIsExternal,
        right_model_name_property_cased: getNameStyles({ name: rightModelName })
          .propertyCased.base,
      },
    });

    await this.attach();

    this.project = getProjects(this.tree).get(this.baseName);
  }

  async remove() {
    const project = getProjects(this.tree).get(this.baseName);

    if (!project) {
      return;
    }

    await this.detach();

    await nxWorkspace.removeGenerator(this.tree, {
      projectName: this.baseName,
      skipFormat: true,
      forceRemove: true,
    });
  }
}

export class ImportContracts extends RegexCreator {
  constructor(props: { importPath: string; relationNamePascalCased: string }) {
    const place = ``;
    const placeRegex = new RegExp(``);

    const content = `import { IModel as I${props.relationNamePascalCased} } from "${props.importPath}";`;
    const contentRegex = new RegExp(
      `import${space}{${space}IModel${space}as${space}I${props.relationNamePascalCased}${space}}${space}from${space}"${props.importPath}";`,
    );

    super({
      place,
      placeRegex,
      content,
      contentRegex,
    });
  }
}

export class ExportNamedInterface extends RegexCreator {
  constructor({
    relationNamePropertyCased,
    relationNamePascalCased,
  }: {
    relationNamePropertyCased: string;
    relationNamePascalCased: string;
  }) {
    const place = `export interface IModel extends IParentModel {`;
    const placeRegex = new RegExp(
      `export${space}interface${space}IModel${space}extends${space}IParentModel${space}{`,
    );

    const content = `${relationNamePropertyCased}: I${relationNamePascalCased}[];`;
    const contentRegex = new RegExp(
      `${relationNamePropertyCased}:${space}I${relationNamePascalCased}\\[\\];`,
    );

    super({
      place,
      placeRegex,
      content,
      contentRegex,
    });
  }
}
