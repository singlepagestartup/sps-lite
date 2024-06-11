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
import { Migrator } from "./migrator/Migrator";

export type IGeneratorProps = {};

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
  project?: ProjectConfiguration;

  constructor(props: { parent: BackendCoder; tree: Tree } & IGeneratorProps) {
    this.name = "model";
    this.parent = props.parent;
    this.tree = props.tree;

    this.baseName = `${this.parent.baseName}-model`;
    this.baseDirectory = `${this.parent.baseDirectory}/model/root`;

    const modelName = this.parent.parent.name;
    const asPropertyModelName = names(modelName).propertyName;

    const moduleName = this.parent.parent.parent.parent.name;
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

    this.project = getProjects(this.tree).get(this.baseName);
  }

  async update() {
    const migrator = new Migrator({
      coder: this,
    });

    const version = "0.0.156";
    await migrator.execute({ version });
  }

  async create() {
    const moduleDbImportPath =
      this.parent.parent.parent.parent.project.backend.project.db.baseName;
    const schemaModuleLibName = this.parent.project.schema.baseName;
    const moduleBackendModelsRootPath =
      this.parent.parent.parent.parent.project.backend.project.models.project
        .root.baseDirectory;

    await createSpsTSLibrary({
      tree: this.tree,
      root: this.baseDirectory,
      name: this.baseName,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
        module_db_import_path: moduleDbImportPath,
        schema_module_lib_name: schemaModuleLibName,
        model_name: this.modelName,
        module_name: this.moduleName,
        schema_model_name: this.schemaModelName,
      },
    });

    await this.attach({
      indexPath: path.join(moduleBackendModelsRootPath, "/src/lib/index.ts"),
    });

    this.project = getProjects(this.tree).get(this.baseName);
  }

  async attach({ indexPath }: { indexPath: string }) {
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
    const moduleBackendModelsRootPath =
      this.parent.parent.parent.parent.project.backend.project.models.project
        .root.baseDirectory;

    await this.detach({
      indexPath: path.join(moduleBackendModelsRootPath, "/src/lib/index.ts"),
    });

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
