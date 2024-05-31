import { ProjectConfiguration, Tree, getProjects, names } from "@nx/devkit";
import * as path from "path";
import * as nxWorkspace from "@nx/workspace";
import { util as createSpsTSLibrary } from "../../../../../../../../../../utils/create-sps-ts-library";
import {
  addToFile,
  replaceInFile,
} from "../../../../../../../../../../utils/file-utils";
import { RegexCreator } from "../../../../../../../../../../utils/regex-utils/RegexCreator";
import { util as getModuleCuttedStyles } from "../../../../../../../../../utils/get-module-cutted-styles";
import { Coder as SchemaCoder } from "../Coder";

export class Coder {
  parent: SchemaCoder;
  baseName: string;
  baseDirectory: string;
  tree: Tree;
  name: string;
  project?: ProjectConfiguration;
  exportTableAndVaritantEnumTable: ExportTableAndVaritantEnumTable;

  constructor({ parent, tree }: { parent: SchemaCoder; tree: Tree }) {
    this.parent = parent;
    this.baseName = `${parent.baseName}`;
    this.baseDirectory = `${parent.baseDirectory}/root`;
    this.tree = tree;
    this.name = "schema";

    const moduleName = parent.parent.parent.parent.parent.name;
    const moduleNameCuttedAndPascalCased = getModuleCuttedStyles({
      name: moduleName,
    }).pascalCased;

    const modelName = parent.parent.parent.name;
    const modelNamePascalCased = names(modelName).className;

    this.exportTableAndVaritantEnumTable = new ExportTableAndVaritantEnumTable({
      moduleName: moduleNameCuttedAndPascalCased,
      modelNamePascalCased,
      libName: this.baseName,
    });

    this.project = getProjects(this.tree).get(this.baseName);
  }

  async update() {
    console.log("Update:", this.baseName);
  }

  async attach({ indexPath }: { indexPath: string }) {
    const backendAppProjectFileContent = await addToFile({
      toTop: true,
      pathToFile: indexPath,
      content: this.exportTableAndVaritantEnumTable.onCreate.content,
      tree: this.tree,
    });
  }

  async detach({ indexPath }: { indexPath: string }) {
    try {
      const replaceImportRoutes = await replaceInFile({
        tree: this.tree,
        pathToFile: indexPath,
        regex: this.exportTableAndVaritantEnumTable.onRemove.regex,
        content: "",
      });
    } catch (error) {
      if (!error.message.includes(`No expected value`)) {
        throw error;
      }
    }
  }

  async create() {
    const tableLibraryName = this.parent.project.table.baseName;
    const relationsLibraryName = this.parent.project.relations.baseName;

    await createSpsTSLibrary({
      tree: this.tree,
      root: this.baseDirectory,
      name: this.baseName,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
        table_library_name: tableLibraryName,
        relations_library_name: relationsLibraryName,
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
}

export class ExportTableAndVaritantEnumTable extends RegexCreator {
  string: string;
  regex: RegExp;

  constructor({
    moduleName,
    modelNamePascalCased,
    libName,
  }: {
    moduleName: string;
    modelNamePascalCased: string;
    libName: string;
  }) {
    const place = ``;
    const placeRegex = new RegExp(``);
    const content = `export {
      Table as ${moduleName}${modelNamePascalCased},\n
      Relations as ${moduleName}${modelNamePascalCased}Relations,\n
    } from "${libName}";`;

    const contentRegex = new RegExp(
      `export {([\\s]+?)?Table as ${moduleName}${modelNamePascalCased}([,]?)([\\s]+?)?Relations as ${moduleName}${modelNamePascalCased}Relations([,]?)([\\s]+?)?} from "${libName}";`,
    );

    super({
      place,
      placeRegex,
      content,
      contentRegex,
    });
  }
}
