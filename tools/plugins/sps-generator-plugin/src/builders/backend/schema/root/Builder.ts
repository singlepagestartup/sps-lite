import { Tree, formatFiles, getProjects, names } from "@nx/devkit";
import * as path from "path";
import * as nxWorkspace from "@nx/workspace";
import { createSpsJsLibrary } from "../../../../utils/js-lib-utils";
import { addToFile, replaceInFile } from "../../../../utils/file-utils";

export class Builder {
  libName: string;
  root: string;
  snakeCaseModelName: string;
  modelName: string;
  tableLibraryName: string;
  relationsLibraryName: string;
  moduleRootSchemaProject: any;
  pascalCaseModelName: string;
  exportTableVariableName: string;
  exportVariantEnumTableVariableName: string;
  exportTableRelationsVariableName: string;
  moduleRootSchemaProjectPath: string;
  exportSchema: ExportSchema;
  module: string;
  moduleNameSnakeCase: string;

  constructor({
    modelName,
    module,
    tree,
  }: {
    modelName: string;
    module: string;
    tree: Tree;
  }) {
    const libName = `@sps/${module}-models-${modelName}-backend-schema`;
    const baseDirectory = `libs/modules/${module}/models`;

    const root = `${baseDirectory}/${modelName}/backend/schema/root`;
    const tableLibraryName = `${libName}-table`;
    const relationsLibraryName = `${libName}-relations`;

    const moduleRootSchema = `@sps/${module}-backend-schema`;
    const moduleRootSchemaProject = getProjects(tree).get(moduleRootSchema);
    const moduleRootSchemaProjectPath = `${moduleRootSchemaProject.sourceRoot}/lib/schema.ts`;

    const pascalCaseModelName = names(modelName).className;
    const exportTableVariableName = `Table as ${pascalCaseModelName}Table`;
    const exportTableRelationsVariableName = `Relations as ${pascalCaseModelName}Relations`;
    const exportVariantEnumTableVariableName = `VariantEnumTable as ${pascalCaseModelName}VariantEnumTable`;

    const exportSchema = new ExportSchema(
      exportTableVariableName,
      exportTableRelationsVariableName,
      exportVariantEnumTableVariableName,
      libName,
    );

    this.libName = libName;
    this.root = root;
    this.modelName = modelName;
    this.tableLibraryName = tableLibraryName;
    this.relationsLibraryName = relationsLibraryName;
    this.moduleRootSchemaProject = moduleRootSchemaProject;
    this.pascalCaseModelName = pascalCaseModelName;
    this.exportTableRelationsVariableName = exportTableRelationsVariableName;
    this.exportTableVariableName = exportTableVariableName;
    this.exportSchema = exportSchema;
    this.exportVariantEnumTableVariableName =
      exportVariantEnumTableVariableName;
    this.moduleRootSchemaProjectPath = moduleRootSchemaProjectPath;
  }

  async attachToModule({ tree }: { tree: Tree }) {
    const backendAppProjectFileContent = await addToFile({
      toTop: true,
      pathToFile: this.moduleRootSchemaProjectPath,
      content: this.exportSchema.string,
      tree,
    });
  }

  async detachFromModule({ tree }: { tree: Tree }) {
    try {
      const replaceImportRoutes = await replaceInFile({
        tree,
        pathToFile: this.moduleRootSchemaProjectPath,
        regex: this.exportSchema.regex,
        content: "",
      });
    } catch (error) {
      if (
        error.message !==
        `No expected value found in file: ${this.exportSchema.regex}`
      ) {
        throw error;
      }
    }
  }

  async create({ tree }: { tree: Tree }) {
    await createSpsJsLibrary({
      tree,
      root: this.root,
      name: this.libName,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
        table_library_name: this.tableLibraryName,
        relations_library_name: this.relationsLibraryName,
      },
    });

    await this.attachToModule({ tree });
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

    await this.detachFromModule({ tree });

    await formatFiles(tree);
  }
}

export class ExportSchema {
  string: string;
  regex: RegExp;

  constructor(
    exportTableVariableName: string,
    exportTableRelationsVariableName: string,
    exportVariantEnumTableVariableName: string,
    libName: string,
  ) {
    const exportSchemaContent = `export {
      ${exportTableVariableName},\n
      ${exportTableRelationsVariableName},\n
      ${exportVariantEnumTableVariableName},\n
    } from "${libName}";`;

    const exportSchemaContentRegex = new RegExp(
      `export {([\\s]+?)?${exportTableVariableName},([\\s]+?)?${exportTableRelationsVariableName},([\\s]+?)?${exportVariantEnumTableVariableName}([,])?([\\s]+?)?} from "${libName}";`,
    );

    this.string = exportSchemaContent;
    this.regex = exportSchemaContentRegex;
  }
}
