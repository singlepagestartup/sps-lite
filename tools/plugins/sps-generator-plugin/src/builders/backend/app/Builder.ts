import {
  ProjectConfiguration,
  Tree,
  formatFiles,
  generateFiles,
  getProjects,
  names,
  updateJson,
  updateProjectConfiguration,
} from "@nx/devkit";
import pluralize from "pluralize";
import { addToFile, replaceInFile } from "../../../utils/file-utils";
import { libraryGenerator as jsLibraryGenerator } from "@nx/js";
import * as path from "path";
import * as nxWorkspace from "@nx/workspace";
import { createSpsJsLibrary } from "../../../utils/js-lib-utils";

export class Builder {
  route: string;
  importPath: string;
  libName: string;
  asPropertyName: string;
  rootProject: ProjectConfiguration;
  root: string;
  modelName: string;
  schemaModelName: string;

  constructor({
    modelName,
    module,
    tree,
  }: {
    modelName: string;
    module: string;
    tree: Tree;
  }) {
    const libName = `@sps/${module}-models-${modelName}-backend-app`;
    const baseDirectory = `libs/modules/${module}/models`;
    const pluralNameModelName = pluralize(names(modelName).fileName);
    const propertyName = names(modelName).propertyName;
    const importPath = `import { app as ${propertyName} } from "${libName}"`;
    const pascalCaseName = names(modelName).className;
    const moduleNamePascalCase = names(module).className;
    const schemaModelName = `${moduleNamePascalCase}${pascalCaseName}`;

    const moduleProject = `@sps/${module}-backend-app`;

    const moduleBackendAppProject = getProjects(tree).get(moduleProject);
    const root = `${baseDirectory}/${modelName}/backend/app/root`;

    this.libName = libName;
    this.route = `/${pluralNameModelName}`;
    this.importPath = importPath;
    this.asPropertyName = propertyName;
    this.rootProject = moduleBackendAppProject;
    this.root = root;
    this.modelName = modelName;
    this.schemaModelName = schemaModelName;
  }

  async attachToRoot({ tree }: { tree: Tree }) {
    const backendAppProjectRoutesPath = `${this.rootProject.sourceRoot}/lib/routes.ts`;

    const backendAppProjectFileContent = await addToFile({
      toTop: true,
      pathToFile: backendAppProjectRoutesPath,
      content: this.importPath,
      tree,
    });

    const routeExport = `"${this.route}": ${this.asPropertyName},`;

    const replaceExportRoutes = await replaceInFile({
      tree,
      pathToFile: backendAppProjectRoutesPath,
      regex: /export const routes = {/,
      content: `export const routes = {${routeExport}`,
    });
  }

  async detachFromRoot({ tree }: { tree: Tree }) {
    const backendAppProjectRoutesPath = `${this.rootProject.sourceRoot}/lib/routes.ts`;

    const routeExport = `"${this.route}": ${this.asPropertyName},`;

    try {
      const replaceExportRoutes = await replaceInFile({
        tree,
        pathToFile: backendAppProjectRoutesPath,
        toReplaceString: routeExport,
        content: "",
      });
    } catch (error) {
      if (error.message !== `No expected value found in file: ${routeExport}`) {
        throw error;
      }
    }

    const importPath = `${this.importPath};`;
    try {
      const replaceImportRoutes = await replaceInFile({
        tree,
        pathToFile: backendAppProjectRoutesPath,
        toReplaceString: importPath,
        content: "",
      });
    } catch (error) {
      if (error.message !== `No expected value found in file: ${importPath}`) {
        throw error;
      }
    }
  }

  async create({ tree }: { tree: Tree }) {
    await createSpsJsLibrary({
      tree,
      root: this.root,
      name: this.libName,
      generateFilesPath: path.join(__dirname, `files/plain`),
      templateParams: {
        template: "",
        model: this.modelName,
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
