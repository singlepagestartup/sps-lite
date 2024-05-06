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
import { createSpsJsLibrary } from "../../../../../../../../utils/js-lib-utils";
import { util as getNameStyles } from "../../../../../../../utils/get-name-styles";
import { util as getModelByName } from "../../../../../../../utils/get-model-by-name";
import { util as getModuleByName } from "../../../../../../../utils/get-module-by-name";
import {
  addToFile,
  replaceInFile,
} from "tools/plugins/sps-generator-plugin/src/utils/file-utils";
import { RegexCreator } from "tools/plugins/sps-generator-plugin/src/utils/regex-utils/RegexCreator";
import {
  comma,
  space,
} from "tools/plugins/sps-generator-plugin/src/utils/regex-utils/regex-elements";

export class Coder {
  root: string;
  libName: string;
  moduleSchemaRelationsProject: ProjectConfiguration;
  rightProjectSchemaImportPath: string;
  rightModelStyles: ReturnType<typeof getNameStyles>;
  leftModelStyles: ReturnType<typeof getNameStyles>;
  leftProjectRelationName: string;
  rootRelationsSchemaProject: ProjectConfiguration;
  importConfig: ImportConfig;
  exportNamedConfig: ExportNamedConfig;

  constructor({
    tree,
    leftProjectRelationName,
    moduleSchemaRelationsProject,
    leftSchemaProject,
    rightSchemaProject,
  }: {
    tree: Tree;
    leftProjectRelationName: string;
    moduleSchemaRelationsProject: ProjectConfiguration;
    leftSchemaProject: ProjectConfiguration;
    rightSchemaProject: ProjectConfiguration;
  }) {
    const module = getModuleByName({ name: leftSchemaProject.name });
    const model = getModelByName({ name: leftSchemaProject.name });
    const rightProjectSchemaImportPath = rightSchemaProject.name;

    this.libName = `@sps/${module}-models-${model}-backend-schema-relations-${leftProjectRelationName}`;
    this.root = `libs/modules/${module}/models/${model}/backend/schema/relations/${leftProjectRelationName}`;

    const rootRelationsSchemaProject = getProjects(tree).get(
      `@sps/${module}-models-${model}-backend-schema-relations`,
    );

    const leftModelName = getModelByName({ name: leftSchemaProject.name });
    const rightModelName = getModelByName({ name: rightSchemaProject.name });

    const leftModelStyles = getNameStyles({ name: leftModelName });
    const rightModelStyles = getNameStyles({ name: rightModelName });

    const leftProjectRelationNameStyles = getNameStyles({
      name: leftProjectRelationName,
    });

    this.rightProjectSchemaImportPath = rightProjectSchemaImportPath;
    this.moduleSchemaRelationsProject = moduleSchemaRelationsProject;
    this.leftModelStyles = leftModelStyles;
    this.rightModelStyles = rightModelStyles;
    this.leftProjectRelationName = leftProjectRelationName;
    this.rootRelationsSchemaProject = rootRelationsSchemaProject;
    this.importConfig = new ImportConfig({
      leftProjectRelationNamePropertyCased:
        leftProjectRelationNameStyles.propertyCased.base,
      libName: this.libName,
    });
    this.exportNamedConfig = new ExportNamedConfig({
      leftProjectRelationNamePropertyCased:
        leftProjectRelationNameStyles.propertyCased.base,
    });
  }

  async create({ tree }: { tree: Tree }) {
    await createSpsJsLibrary({
      tree,
      root: this.root,
      name: this.libName,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
        relation_name_kebab_cased: this.leftProjectRelationName,
        right_schema_project_import_path: this.rightProjectSchemaImportPath,
        module_schema_relations_project_import_path:
          this.moduleSchemaRelationsProject.name,
        left_schema_model_name: this.leftModelStyles.propertyCased.base,
        right_schema_model_name: this.rightModelStyles.propertyCased.base,
      },
    });

    await this.attachToRoot({ tree });
  }

  async attachToRoot({ tree }: { tree: Tree }) {
    const rootRelationsSchemaFilePath = `${this.rootRelationsSchemaProject.sourceRoot}/lib/config.ts`;

    await addToFile({
      toTop: true,
      pathToFile: rootRelationsSchemaFilePath,
      content: this.importConfig.onCreate.content,
      tree,
    });

    await replaceInFile({
      tree,
      pathToFile: rootRelationsSchemaFilePath,
      regex: this.exportNamedConfig.onCreate.regex,
      content: this.exportNamedConfig.onCreate.content,
    });
  }

  async detachFromRoot({ tree }: { tree: Tree }) {
    const rootRelationsSchemaFilePath = `${this.rootRelationsSchemaProject.sourceRoot}/lib/config.ts`;

    try {
      await replaceInFile({
        tree,
        pathToFile: rootRelationsSchemaFilePath,
        regex: this.importConfig.onRemove.regex,
        content: "",
      });
    } catch (error) {
      if (!error.message.includes(`No expected value`)) {
        throw error;
      }
    }

    try {
      await replaceInFile({
        tree,
        pathToFile: rootRelationsSchemaFilePath,
        regex: this.exportNamedConfig.onRemove.regex,
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

    await this.detachFromRoot({ tree });

    await nxWorkspace.removeGenerator(tree, {
      projectName: this.libName,
      skipFormat: true,
      forceRemove: true,
    });
    await formatFiles(tree);
  }
}

export class ImportConfig extends RegexCreator {
  constructor({
    libName,
    leftProjectRelationNamePropertyCased,
  }: {
    libName: string;
    leftProjectRelationNamePropertyCased: string;
  }) {
    const place = ``;
    const placeRegex = new RegExp(``);

    const content = `import { config as ${leftProjectRelationNamePropertyCased} } from "${libName}";`;
    const contentRegex = new RegExp(
      `import${space}{${space}config${space}as${space}${leftProjectRelationNamePropertyCased}${space}}${space}from${space}"${libName}";`,
    );

    super({
      place,
      placeRegex,
      content,
      contentRegex,
    });
  }
}

export class ExportNamedConfig extends RegexCreator {
  constructor({
    leftProjectRelationNamePropertyCased,
  }: {
    leftProjectRelationNamePropertyCased: string;
  }) {
    const place = `export const config = {`;
    const placeRegex = new RegExp(`export const config = {`);

    const content = `[${leftProjectRelationNamePropertyCased}.name]: ${leftProjectRelationNamePropertyCased},`;
    const contentRegex = new RegExp(
      `\\[${leftProjectRelationNamePropertyCased}.name\\]:${space}${leftProjectRelationNamePropertyCased}${comma}${space}`,
    );

    super({
      place,
      placeRegex,
      content,
      contentRegex,
    });
  }
}
