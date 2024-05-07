import {
  ProjectConfiguration,
  Tree,
  formatFiles,
  getProjects,
  names,
} from "@nx/devkit";
import { addToFile, replaceInFile } from "../../../../../../utils/file-utils";
import * as path from "path";
import * as nxWorkspace from "@nx/workspace";
import { util as createSpsTSLibrary } from "../../../../../../utils/create-sps-ts-library";
import { RegexCreator } from "../../../../../../utils/regex-utils/RegexCreator";

export class Coder {
  libName: string;
  rootAppProject: ProjectConfiguration;
  rootSchemaProject: ProjectConfiguration;
  root: string;
  modelName: string;
  schemaModelName: string;
  module: string;
  importModelAsAsPropertyModelName: ImportModelAsAsPropertyModelName;
  exportModel: ExportModel;
  schemaModuleLibName: string;
  schemaTableModuleLibName: string;

  constructor({
    modelName,
    module,
    tree,
  }: {
    modelName: string;
    module: string;
    tree: Tree;
  }) {
    const libName = `@sps/${module}-models-${modelName}-backend-model`;
    const baseDirectory = `libs/modules/${module}/models`;
    const asPropertyModelName = names(modelName).propertyName;

    const pascalCaseName = names(modelName).className;
    const moduleNamePascalCase = names(module).className;
    const schemaModelName = `${moduleNamePascalCase}${pascalCaseName}`;

    const moduleApp = `@sps/${module}-backend-models`;
    const moduleBackendAppProject = getProjects(tree).get(moduleApp);

    const schemaModuleLibName = `@sps/${module}-models-${modelName}-backend-schema`;
    const schemaTableModuleLibName = `@sps/${module}-models-${modelName}-backend-schema-table`;

    const root = `${baseDirectory}/${modelName}/backend/model/root`;

    this.libName = libName;
    this.rootAppProject = moduleBackendAppProject;
    this.module = module;
    this.root = root;
    this.modelName = modelName;
    this.schemaModelName = schemaModelName;
    this.schemaModuleLibName = schemaModuleLibName;
    this.schemaTableModuleLibName = schemaTableModuleLibName;
    this.importModelAsAsPropertyModelName =
      new ImportModelAsAsPropertyModelName({
        asPropertyModelName,
        libName,
      });
    this.exportModel = new ExportModel({
      asPropertyModelName,
    });
  }

  async attachToRoot({ tree }: { tree: Tree }) {
    const rootProjectPath = `${this.rootAppProject.sourceRoot}/lib/index.ts`;

    await addToFile({
      toTop: true,
      pathToFile: rootProjectPath,
      content: this.importModelAsAsPropertyModelName.onCreate.content,
      tree,
    });

    await replaceInFile({
      tree,
      pathToFile: rootProjectPath,
      regex: this.exportModel.onCreate.regex,
      content: this.exportModel.onCreate.content,
    });
  }

  async detachFromRoot({ tree }: { tree: Tree }) {
    const rootProjectPath = `${this.rootAppProject.sourceRoot}/lib/index.ts`;

    try {
      await replaceInFile({
        tree,
        pathToFile: rootProjectPath,
        regex: this.exportModel.onRemove.regex,
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
        pathToFile: rootProjectPath,
        regex: this.importModelAsAsPropertyModelName.onRemove.regex,
        content: "",
      });
    } catch (error) {
      if (!error.message.includes(`No expected value`)) {
        throw error;
      }
    }
  }

  async create({ tree }: { tree: Tree }) {
    await createSpsTSLibrary({
      tree,
      root: this.root,
      name: this.libName,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
        schema_module_lib_name: this.schemaModuleLibName,
        schema_table_module_lib_name: this.schemaTableModuleLibName,
        model_name: this.modelName,
        module_name: this.module,
        schema_model_name: this.schemaModelName,
      },
    });

    await this.attachToRoot({ tree });
  }

  async delete({ tree }: { tree: Tree }) {
    await this.detachFromRoot({ tree });

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

export class ImportModelAsAsPropertyModelName extends RegexCreator {
  constructor({
    asPropertyModelName,
    libName,
  }: {
    asPropertyModelName: string;
    libName: string;
  }) {
    const place = "";
    const placeRegex = new RegExp("");

    const content = `import { model as ${asPropertyModelName} } from "${libName}";`;

    const contentRegex = new RegExp(
      `import { model as ${asPropertyModelName} } from "${libName}";`,
    );

    super({
      place,
      placeRegex,
      contentRegex,
      content,
    });
  }
}

export class ExportModel extends RegexCreator {
  constructor({ asPropertyModelName }: { asPropertyModelName: string }) {
    const place = `export const models = {`;
    const placeRegex = new RegExp(`export const models = {`);

    const content = `${asPropertyModelName},`;
    const contentRegex = new RegExp(`${asPropertyModelName},`);

    super({
      place,
      placeRegex,
      content,
      contentRegex,
    });
  }
}
