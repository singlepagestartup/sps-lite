import {
  ProjectConfiguration,
  Tree,
  formatFiles,
  getProjects,
} from "@nx/devkit";
import path from "path";
import { util as createSpsTSLibrary } from "tools/plugins/sps-generator-plugin/src/utils/create-sps-ts-library";
import * as nxWorkspace from "@nx/workspace";
import { util as getModelByName } from "../../../../../../utils/get-model-by-name";
import { util as getNameStyles } from "../../../../../../utils/get-name-styles";
import { util as getModuleCuttedStyles } from "../../../../../../utils/get-module-cutted-styles";
import { RegexCreator } from "tools/plugins/sps-generator-plugin/src/utils/regex-utils/RegexCreator";
import {
  addToFile,
  replaceInFile,
} from "tools/plugins/sps-generator-plugin/src/utils/file-utils";

export class Coder {
  libName: string;
  root: string;
  rootRelationsSchemaProject: ProjectConfiguration;
  leftProjectImportPath: string;
  rightProjectImportPath: string;
  leftModelStyles: ReturnType<typeof getNameStyles>;
  rightModelStyles: ReturnType<typeof getNameStyles>;
  moduleStyles: ReturnType<typeof getModuleCuttedStyles>;
  relationNameStyles: ReturnType<typeof getNameStyles>;
  exportAll: ExportNamedVariables;

  constructor({
    tree,
    module,
    relationName,
    leftSchemaProject,
    rightSchemaProject,
  }: {
    tree: Tree;
    module: string;
    relationName: string;
    leftSchemaProject: ProjectConfiguration;
    rightSchemaProject: ProjectConfiguration;
  }) {
    const libName = `@sps/${module}-backend-schema-relations-${relationName}`;
    const root = `libs/modules/${module}/backend/schema/relations/${relationName}`;
    const rootRelationsSchemaProject = getProjects(tree).get(
      `@sps/${module}-backend-schema-relations`,
    );

    const leftProjectImportPath = leftSchemaProject.name;
    const rightProjectImportPath = rightSchemaProject.name;

    const leftModelName = getModelByName({ name: leftSchemaProject.name });
    const rightModelName = getModelByName({ name: rightSchemaProject.name });

    const leftModelStyles = getNameStyles({ name: leftModelName });
    const rightModelStyles = getNameStyles({ name: rightModelName });

    this.libName = libName;
    this.root = root;
    this.rootRelationsSchemaProject = rootRelationsSchemaProject;
    this.leftProjectImportPath = leftProjectImportPath;
    this.rightProjectImportPath = rightProjectImportPath;
    this.leftModelStyles = leftModelStyles;
    this.rightModelStyles = rightModelStyles;
    this.moduleStyles = getModuleCuttedStyles({ name: module });
    this.relationNameStyles = getNameStyles({ name: relationName });
    this.exportAll = new ExportNamedVariables({
      libName,
      moduleNamePascalCased: this.moduleStyles.pascalCased,
      relationNamePascalCased: this.relationNameStyles.pascalCased.base,
    });
  }

  async create({ tree }: { tree: Tree }) {
    await createSpsTSLibrary({
      tree,
      root: this.root,
      name: this.libName,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
        left_schema_project_import_path: this.leftProjectImportPath,
        left_schema_table_name: this.leftModelStyles.pascalCased.base,
        left_schema_model_name: this.leftModelStyles.propertyCased.base,
        left_schema_model_name_snake_cased:
          this.leftModelStyles.snakeCased.base,
        right_schema_project_import_path: this.rightProjectImportPath,
        right_schema_table_name: this.rightModelStyles.pascalCased.base,
        right_schema_model_name: this.rightModelStyles.propertyCased.base,
        right_schema_model_name_snake_cased:
          this.rightModelStyles.snakeCased.base,
        module_name_cutted_snake_cased: this.moduleStyles.snakeCased,
        module_name_cutted_pascal_cased: this.moduleStyles.pascalCased,
        relation_name_snake_cased: this.relationNameStyles.snakeCased.base,
        relation_name_pascal_cased: this.relationNameStyles.pascalCased.base,
      },
    });

    await this.attachToRoot({ tree });

    const createdLib = getProjects(tree).get(this.libName);

    return createdLib;
  }

  async attachToRoot({ tree }: { tree: Tree }) {
    const rootRelationsSchemaFilePath = `${this.rootRelationsSchemaProject.sourceRoot}/lib/schema.ts`;

    await addToFile({
      toTop: true,
      pathToFile: rootRelationsSchemaFilePath,
      content: this.exportAll.onCreate.content,
      tree,
    });
  }

  async detachFromRoot({ tree }: { tree: Tree }) {
    const rootRelationsSchemaFilePath = `${this.rootRelationsSchemaProject.sourceRoot}/lib/schema.ts`;

    try {
      await replaceInFile({
        tree,
        pathToFile: rootRelationsSchemaFilePath,
        regex: this.exportAll.onRemove.regex,
        content: "",
      });
    } catch (error) {
      if (!error.message.includes(`No expected value`)) {
        throw error;
      }
    }
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

    await this.detachFromRoot({ tree });

    await formatFiles(tree);
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
