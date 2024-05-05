import { Tree, formatFiles, getProjects, names } from "@nx/devkit";
import * as path from "path";
import * as nxWorkspace from "@nx/workspace";
import { createSpsJsLibrary } from "../../../../utils/js-lib-utils";
import { addToFile, replaceInFile } from "../../../../utils/file-utils";
import { RegexCreator } from "../../../../utils/regex-utils/RegexCreator";

export class Builder {
  libName: string;
  root: string;
  tableLibraryName: string;
  relationsLibraryName: string;
  moduleRootSchemaProjectPath: string;
  exportTableAndVaritantEnumTable: ExportTableAndVaritantEnumTable;

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
    const moduleRootSchemaProjectPath = `${moduleRootSchemaProject.sourceRoot}/lib/index.ts`;

    // sps-website-builder -> SPSWB
    const moduleNameCuttedAndPascalCased = module
      .split("-")
      .map((word) => {
        // take only first letter
        if (word === "sps") {
          return "SPS";
        }

        return names(word[0]).className;
      })
      .join("");

    const modelNamePascalCased = names(modelName).className;

    this.libName = libName;
    this.root = root;
    this.tableLibraryName = tableLibraryName;
    this.relationsLibraryName = relationsLibraryName;
    this.exportTableAndVaritantEnumTable = new ExportTableAndVaritantEnumTable({
      moduleName: moduleNameCuttedAndPascalCased,
      modelNamePascalCased,
      libName,
    });
    this.moduleRootSchemaProjectPath = moduleRootSchemaProjectPath;
  }

  async attachToModule({ tree }: { tree: Tree }) {
    const backendAppProjectFileContent = await addToFile({
      toTop: true,
      pathToFile: this.moduleRootSchemaProjectPath,
      content: this.exportTableAndVaritantEnumTable.onCreate.content,
      tree,
    });
  }

  async detachFromModule({ tree }: { tree: Tree }) {
    try {
      const replaceImportRoutes = await replaceInFile({
        tree,
        pathToFile: this.moduleRootSchemaProjectPath,
        regex: this.exportTableAndVaritantEnumTable.onRemove.regex,
        content: "",
      });
    } catch (error) {
      if (!error.message.includes(`No expected value`)) {
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
      VariantEnumTable as ${moduleName}${modelNamePascalCased}VariantEnumTable,\n
    } from "${libName}";`;

    const contentRegex = new RegExp(
      `export {([\\s]+?)?Table as ${moduleName}${modelNamePascalCased}([,]?)([\\s]+?)?Relations as ${moduleName}${modelNamePascalCased}Relations([,]?)([\\s]+?)?VariantEnumTable as ${moduleName}${modelNamePascalCased}VariantEnumTable([,]?)([\\s]+?)?} from "${libName}";`,
    );

    super({
      place,
      placeRegex,
      content,
      contentRegex,
    });
  }
}
