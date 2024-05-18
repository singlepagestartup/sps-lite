import { ProjectConfiguration, Tree, getProjects } from "@nx/devkit";
import path from "path";
import { util as createSpsTSLibrary } from "tools/plugins/sps-generator-plugin/src/utils/create-sps-ts-library";
import * as nxWorkspace from "@nx/workspace";
import { util as getNameStyles } from "../../../../../../../../../utils/get-name-styles";
import { util as getModuleCuttedStyles } from "../../../../../../../../../utils/get-module-cutted-styles";
import { RegexCreator } from "tools/plugins/sps-generator-plugin/src/utils/regex-utils/RegexCreator";
import {
  addToFile,
  replaceInFile,
} from "tools/plugins/sps-generator-plugin/src/utils/file-utils";
import { Coder as SchemaCoder } from "../Coder";

export class Coder {
  name: string;
  parent: SchemaCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  project: ProjectConfiguration;

  libName: string;
  root: string;
  rootRelationsSchemaProject: ProjectConfiguration;
  leftProjectImportPath: string;
  rightProjectImportPath: string;
  leftModelStyles: ReturnType<typeof getNameStyles>;
  rightModelStyles: ReturnType<typeof getNameStyles>;
  moduleNameStyles: ReturnType<typeof getModuleCuttedStyles>;
  relationNameStyles: ReturnType<typeof getNameStyles>;
  exportAll: ExportNamedVariables;
  tableName: string;
  leftModelTableUuidName: string;
  rightModelTableUuidName: string;

  constructor({ parent, tree }: { parent: SchemaCoder; tree: Tree }) {
    this.name = "schema";
    this.parent = parent;
    this.tree = tree;
    this.baseName = `${parent.baseName}`;
    this.baseDirectory = `${parent.baseDirectory}/root`;

    const moduleName = this.parent.parent.parent.parent.parent.name;

    const leftModelName =
      this.parent.parent.parent.parent.parent.project.models[1].project.model
        .project.backend.project.model.modelName;
    const rightModelName =
      this.parent.parent.parent.parent.parent.project.models[2].project.model
        .project.backend.project.model.modelName;

    const relationName = this.parent.parent.parent.name;

    const leftModelStyles = getNameStyles({
      name: leftModelName,
    });
    const rightModelStyles = getNameStyles({
      name: rightModelName,
    });

    this.leftModelStyles = leftModelStyles;
    this.rightModelStyles = rightModelStyles;
    this.moduleNameStyles = getModuleCuttedStyles({ name: moduleName });
    this.relationNameStyles = getNameStyles({ name: relationName });

    const tableName = this.relationNameStyles.base;

    if (tableName.length > 10) {
      const cuttedTableName = getNameStyles({ name: tableName }).snakeCased
        .baseCutted;

      const randomThreeLetters = Math.random().toString(36).substring(2, 5);

      // Cutted table names can be equal, thats why we add random three letters
      this.tableName = cuttedTableName + "_" + randomThreeLetters;
    } else {
      this.tableName = tableName;
    }

    this.leftModelTableUuidName = `${
      getNameStyles({
        name: this.leftModelStyles.snakeCased.base,
      }).snakeCased.baseCutted
    }_id`;

    this.rightModelTableUuidName = `${
      getNameStyles({
        name: this.rightModelStyles.snakeCased.base,
      }).snakeCased.baseCutted
    }_id`;

    this.exportAll = new ExportNamedVariables({
      libName: this.baseName,
      moduleNamePascalCased: this.moduleNameStyles.pascalCased,
      relationNamePascalCased: this.relationNameStyles.pascalCased.base,
    });
  }

  async init() {
    this.project = getProjects(this.tree).get(this.baseName);
  }

  async create() {
    const leftProjectSchemaTableImportPath =
      this.parent.parent.parent.parent.parent.project.models[1].project.model
        .project.backend.project.schema.project.table.baseName;
    const rightProjectSchemaImportPath =
      this.parent.parent.parent.parent.parent.project.models[2].project.model
        .project.backend.project.schema.project.table.baseName;

    const leftModelIsExternal =
      this.parent.parent.parent.parent.parent.project.models[1].isExternal;
    const rightModelIsExternal =
      this.parent.parent.parent.parent.parent.project.models[2].isExternal;

    await createSpsTSLibrary({
      tree: this.tree,
      root: this.baseDirectory,
      name: this.baseName,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
        left_schema_project_import_path: leftProjectSchemaTableImportPath,
        left_schema_table_name: this.leftModelStyles.pascalCased.base,
        left_schema_model_name: this.leftModelStyles.propertyCased.base,
        left_schema_model_name_snake_cased:
          this.leftModelStyles.snakeCased.base,
        left_model_is_external: leftModelIsExternal,
        right_model_is_external: rightModelIsExternal,
        left_model_table_uuid_name: this.leftModelTableUuidName,
        right_model_table_uuid_name: this.rightModelTableUuidName,
        right_schema_project_import_path: rightProjectSchemaImportPath,
        right_schema_table_name: this.rightModelStyles.pascalCased.base,
        right_schema_model_name: this.rightModelStyles.propertyCased.base,
        right_schema_model_name_snake_cased:
          this.rightModelStyles.snakeCased.base,
        module_name_cutted_snake_cased: this.moduleNameStyles.snakeCased,
        module_name_cutted_pascal_cased: this.moduleNameStyles.pascalCased,
        relation_name_snake_cased: this.relationNameStyles.snakeCased.base,
        table_name: this.tableName,
        relation_name_pascal_cased: this.relationNameStyles.pascalCased.base,
        relation_name_property_cased:
          this.relationNameStyles.propertyCased.base,
      },
    });
  }

  async attach({ indexPath }: { indexPath: string }) {
    // const rootRelationsSchemaFilePath = `${this.rootRelationsSchemaProject.sourceRoot}/lib/schema.ts`;

    await addToFile({
      toTop: true,
      pathToFile: indexPath,
      content: this.exportAll.onCreate.content,
      tree: this.tree,
    });
  }

  async detach({ indexPath }: { indexPath: string }) {
    // const rootRelationsSchemaFilePath = `${this.rootRelationsSchemaProject.sourceRoot}/lib/schema.ts`;

    try {
      await replaceInFile({
        tree: this.tree,
        pathToFile: indexPath,
        regex: this.exportAll.onRemove.regex,
        content: "",
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

export class ExportNamedVariables extends RegexCreator {
  constructor({
    libName,
    moduleNamePascalCased,
    relationNamePascalCased,
  }: {
    libName: string;
    moduleNamePascalCased: string;
    relationNamePascalCased: string;
  }) {
    const place = ``;
    const placeRegex = new RegExp(``);

    const content = `export { Table as ${moduleNamePascalCased}${relationNamePascalCased}, Relations as ${moduleNamePascalCased}${relationNamePascalCased}Relations } from "${libName}";`;
    const contentRegex = new RegExp(
      `export([\\s]+?)?{([\\s]+?)?Table([\\s]+?)?as([\\s]+?)?${moduleNamePascalCased}${relationNamePascalCased},([\\s]+?)?Relations as ${moduleNamePascalCased}${relationNamePascalCased}Relations([,]?)([\\s]+?)?}([\\s]+?)?from([\\s]+?)?"${libName}";`,
    );

    super({
      place,
      placeRegex,
      content,
      contentRegex,
    });
  }
}
