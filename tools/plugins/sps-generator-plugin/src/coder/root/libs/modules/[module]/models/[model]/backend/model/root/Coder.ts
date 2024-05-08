import { ProjectConfiguration, Tree, getProjects, names } from "@nx/devkit";
import {
  addToFile,
  replaceInFile,
} from "../../../../../../../../../../utils/file-utils";
import * as path from "path";
import * as nxWorkspace from "@nx/workspace";
import { util as createSpsTSLibrary } from "../../../../../../../../../../utils/create-sps-ts-library";
import { RegexCreator } from "../../../../../../../../../../utils/regex-utils/RegexCreator";
import { Coder as BackendCoder } from "../../Coder";

export class Coder {
  name: string;
  parent: BackendCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;

  libName: string;
  rootAppProject: ProjectConfiguration;
  rootSchemaProject: ProjectConfiguration;
  root: string;
  modelName: string;
  schemaModelName: string;
  moduleName: string;
  importModelAsAsPropertyModelName: ImportModelAsAsPropertyModelName;
  exportModel: ExportModel;
  schemaModuleLibName: string;
  project: ProjectConfiguration;

  constructor({ parent, tree }: { parent: BackendCoder; tree: Tree }) {
    this.name = "model";
    this.parent = parent;
    this.tree = tree;

    this.baseName = `${parent.baseName}-model`;
    this.baseDirectory = `${parent.baseDirectory}/model/root`;

    const modelName = parent.parent.name;
    const asPropertyModelName = names(modelName).propertyName;

    const moduleName = parent.parent.parent.parent.name;
    const pascalCaseName = names(modelName).className;
    const moduleNamePascalCase = names(moduleName).className;
    const schemaModelName = `${moduleNamePascalCase}${pascalCaseName}`;

    this.moduleName = moduleName;
    this.schemaModelName = schemaModelName;
    this.modelName = modelName;
    this.importModelAsAsPropertyModelName =
      new ImportModelAsAsPropertyModelName({
        asPropertyModelName,
        libName: this.baseName,
      });
    this.exportModel = new ExportModel({
      asPropertyModelName,
    });
  }

  async init() {
    this.project = getProjects(this.tree).get(this.baseName);
  }

  async create() {
    const schemaModuleLibName = this.parent.project.schema.baseName;

    await createSpsTSLibrary({
      tree: this.tree,
      root: this.baseDirectory,
      name: this.baseName,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
        schema_module_lib_name: schemaModuleLibName,
        model_name: this.modelName,
        module_name: this.moduleName,
        schema_model_name: this.schemaModelName,
      },
    });
  }

  async attach({ indexPath }: { indexPath: string }) {
    // const rootProjectPath = `${this.rootAppProject.sourceRoot}/lib/index.ts`;

    await addToFile({
      toTop: true,
      pathToFile: indexPath,
      content: this.importModelAsAsPropertyModelName.onCreate.content,
      tree: this.tree,
    });

    await replaceInFile({
      tree: this.tree,
      pathToFile: indexPath,
      regex: this.exportModel.onCreate.regex,
      content: this.exportModel.onCreate.content,
    });
  }

  async detach({ indexPath }: { indexPath: string }) {
    // const rootProjectPath = `${this.rootAppProject.sourceRoot}/lib/index.ts`;

    try {
      await replaceInFile({
        tree: this.tree,
        pathToFile: indexPath,
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
        tree: this.tree,
        pathToFile: indexPath,
        regex: this.importModelAsAsPropertyModelName.onRemove.regex,
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
