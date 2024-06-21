import { ProjectConfiguration, Tree, getProjects, names } from "@nx/devkit";
import {
  addToFile,
  replaceInFile,
} from "../../../../../../../../../../utils/file-utils";
import * as path from "path";
import * as nxWorkspace from "@nx/workspace";
import { util as createSpsTSLibrary } from "../../../../../../../../../../utils/create-sps-ts-library";
import { RegexCreator } from "../../../../../../../../../../utils/regex-utils/RegexCreator";
import { util as getNameStyles } from "../../../../../../../../../utils/get-name-styles";
import { Coder as BackendCoder } from "../../Coder";
import { Migrator } from "./migrator/Migrator";
import { comma } from "tools/plugins/sps-generator-plugin/src/utils/regex-utils/regex-elements";

export type IGeneratorProps = unknown;

export class Coder {
  name: string;
  parent: BackendCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  modelName: string;
  schemaModelName: string;
  moduleName: string;
  importModelAsAsPropertyModelName: ImportModelAsAsPropertyModelName;
  exportModel: ExportModel;
  absoluteName: string;
  project?: ProjectConfiguration;
  importPath: string;

  constructor(props: { parent: BackendCoder; tree: Tree } & IGeneratorProps) {
    this.name = "model";
    this.parent = props.parent;
    this.tree = props.tree;

    this.baseName = `${this.parent.baseName}-model`;
    this.baseDirectory = `${this.parent.baseDirectory}/model/root`;
    this.absoluteName = `${this.parent.absoluteName}/model/root`;

    this.importPath = this.absoluteName;

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
        importPath: this.importPath,
      });
    this.exportModel = new ExportModel({
      asPropertyModelName,
    });

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

    const schemaModuleImportPath =
      this.parent.project.schema.project.root.absoluteName;

    const leftModel = this.parent.parent.parent.parent.project.models[0];
    const rightModel = this.parent.parent.parent.parent.project.models[1];

    const rightModelIsExternal = rightModel.project.model.isExternal;

    const leftModelName = leftModel.project.model.name;
    const rightModelName = rightModel.project.model.name;

    const moduleLibName =
      this.parent.parent.parent.parent.parent.parent.project.modules[0].project
        .module.name;

    const moduleBackendRelationsRootPath =
      this.parent.parent.parent.parent.project.backend.project.models.project
        .root.baseDirectory;
    const moduleDbImportPath =
      this.parent.parent.parent.parent.project.backend.project.db.project.root
        .importPath;

    await createSpsTSLibrary({
      tree: this.tree,
      root: this.baseDirectory,
      name: this.baseName,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
        right_model_is_external: rightModelIsExternal,
        left_model_name_property_cased: getNameStyles({ name: leftModelName })
          .propertyCased.base,
        right_model_name_property_cased: getNameStyles({ name: rightModelName })
          .propertyCased.base,
        module_lib_name_property_cased: getNameStyles({ name: moduleLibName })
          .propertyCased.base,
        module_db_import_path: moduleDbImportPath,
        schema_module_import_path: schemaModuleImportPath,
      },
    });

    await this.attach({
      indexPath: path.join(moduleBackendRelationsRootPath, "/src/lib/index.ts"),
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
    } catch (error: any) {
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
    } catch (error: any) {
      if (!error.message.includes(`No expected value`)) {
        throw error;
      }
    }
  }

  async remove() {
    const project = getProjects(this.tree).get(this.baseName);

    const moduleBackendRelationsRootPath =
      this.parent.parent.parent.parent.project.backend.project.models.project
        .root.baseDirectory;

    if (!project) {
      return;
    }

    await this.detach({
      indexPath: path.join(moduleBackendRelationsRootPath, "/src/lib/index.ts"),
    });

    await nxWorkspace.removeGenerator(this.tree, {
      projectName: this.baseName,
      skipFormat: true,
      forceRemove: true,
    });
  }
}

export class ImportModelAsAsPropertyModelName extends RegexCreator {
  constructor(props: { asPropertyModelName: string; importPath: string }) {
    const place = "";
    const placeRegex = new RegExp("");

    const content = `import { model as ${props.asPropertyModelName} } from "${props.importPath}";`;

    const contentRegex = new RegExp(
      `import { model as ${props.asPropertyModelName} } from "${props.importPath}";`,
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
  constructor(props: { asPropertyModelName: string }) {
    const place = `export const models = {`;
    const placeRegex = new RegExp(`export const models = {`);

    const content = `${props.asPropertyModelName},`;
    const contentRegex = new RegExp(`${props.asPropertyModelName}${comma}`);

    super({
      place,
      placeRegex,
      content,
      contentRegex,
    });
  }
}
