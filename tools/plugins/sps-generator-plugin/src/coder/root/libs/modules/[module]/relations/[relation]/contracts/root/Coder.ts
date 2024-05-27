import {
  ProjectConfiguration,
  Tree,
  getProjects,
  offsetFromRoot,
} from "@nx/devkit";
import { Coder as ContractsCoder } from "../Coder";
import { util as createSpsTSLibrary } from "../../../../../../../../../utils/create-sps-ts-library";
import { util as getNameStyles } from "../../../../../../../../utils/get-name-styles";
import * as path from "path";
import * as nxWorkspace from "@nx/workspace";
import { RegexCreator } from "../../../../../../../../../utils/regex-utils/RegexCreator";
import { space } from "../../../../../../../../../utils/regex-utils/regex-elements";
import {
  addToFile,
  replaceInFile,
} from "../../../../../../../../../utils/file-utils";

export class Coder {
  name: string;
  parent: ContractsCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  project?: ProjectConfiguration;
  importContracts: ImportContracts;
  exportNamedInterface: ExportNamedInterface;

  constructor({ parent, tree }: { parent: ContractsCoder; tree: Tree }) {
    this.name = "root";
    this.parent = parent;
    this.tree = tree;
    this.baseName = `${parent.baseName}`;
    this.baseDirectory = `${parent.baseDirectory}/root`;

    const relationName = this.parent.parent.name;

    this.importContracts = new ImportContracts({
      libName: this.baseName,
      relationNamePascalCased: getNameStyles({
        name: relationName,
      }).pascalCased.base,
    });
    this.exportNamedInterface = new ExportNamedInterface({
      relationNamePropertyCased: getNameStyles({
        name: relationName,
      }).propertyCased.base,
      relationNamePascalCased: getNameStyles({
        name: relationName,
      }).pascalCased.base,
    });

    this.project = getProjects(this.tree).get(this.baseName);
  }

  async update() {
    console.log("Update:", this.baseName);
  }

  async create() {
    const offsetFromRootProject = offsetFromRoot(this.baseDirectory);

    const leftModelName =
      this.parent.parent.parent.parent.project.models[0].project.model.name;
    const rightModelName =
      this.parent.parent.parent.parent.project.models[1].project.model.name;

    const leftModelIsExternal =
      this.parent.parent.parent.parent.project.models[0].isExternal;
    const rightModelIsExternal =
      this.parent.parent.parent.parent.project.models[1].isExternal;

    await createSpsTSLibrary({
      tree: this.tree,
      root: this.baseDirectory,
      name: this.baseName,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
        offset_from_root: offsetFromRootProject,
        left_model_is_external: leftModelIsExternal,
        left_model_name_property_cased: getNameStyles({ name: leftModelName })
          .propertyCased.base,
        right_model_is_external: rightModelIsExternal,
        right_model_name_property_cased: getNameStyles({ name: rightModelName })
          .propertyCased.base,
      },
    });

    this.project = getProjects(this.tree).get(this.baseName);
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

  async attach({ levelContractsPath }: { levelContractsPath: string }) {
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

  async detach({ levelContractsPath }: { levelContractsPath: string }) {
    try {
      await replaceInFile({
        tree: this.tree,
        pathToFile: levelContractsPath,
        regex: this.exportNamedInterface.onRemove.regex,
        content: "",
      });
    } catch (error) {
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
    } catch (error) {
      if (!error.message.includes(`No expected value`)) {
        throw error;
      }
    }
  }
}

export class ImportContracts extends RegexCreator {
  constructor({
    libName,
    relationNamePascalCased,
  }: {
    libName: string;
    relationNamePascalCased: string;
  }) {
    const place = ``;
    const placeRegex = new RegExp(``);

    const content = `import { IRelation as I${relationNamePascalCased} } from "${libName}";`;
    const contentRegex = new RegExp(
      `import${space}{${space}IRelation${space}as${space}I${relationNamePascalCased}${space}}${space}from${space}"${libName}";`,
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
