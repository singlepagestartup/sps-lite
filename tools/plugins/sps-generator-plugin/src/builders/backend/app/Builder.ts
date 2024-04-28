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

    const backendAppProject = getProjects(tree).get(moduleProject);
    const root = `${baseDirectory}/${modelName}/backend/app/root`;

    this.libName = libName;
    this.route = `/${pluralNameModelName}`;
    this.importPath = importPath;
    this.asPropertyName = propertyName;
    this.rootProject = backendAppProject;
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

    const replaceExportRoutes = await replaceInFile({
      tree,
      pathToFile: backendAppProjectRoutesPath,
      toReplaceString: routeExport,
      content: "",
    });

    const importPath = `${this.importPath};`;

    const replaceImportRoutes = await replaceInFile({
      tree,
      pathToFile: backendAppProjectRoutesPath,
      toReplaceString: importPath,
      content: "",
    });
  }

  async create({ tree }: { tree: Tree }) {
    await jsLibraryGenerator(tree, {
      name: this.libName,
      bundler: "tsc",
      projectNameAndRootFormat: "as-provided",
      directory: this.root,
      minimal: true,
      unitTestRunner: "none",
      strict: true,
    });

    generateFiles(tree, path.join(__dirname, `files`), this.root, {
      template: "",
      model: this.modelName,
      schema_model_name: this.schemaModelName,
    });

    updateProjectConfiguration(tree, this.libName, {
      root: this.root,
      sourceRoot: `${this.root}/src`,
      projectType: "library",
      tags: [],
      targets: {
        lint: {},
        build: {},
      },
    });

    updateJson(tree, `${this.root}/tsconfig.lib.json`, (json) => {
      const compilerOptions = json.compilerOptions;
      delete compilerOptions.outDir;

      return json;
    });

    const defaultFileName = `${this.libName}.ts`.replace("@sps/", "");

    updateJson(tree, `${this.root}/package.json`, (json) => {
      delete json.type;

      return json;
    });

    tree.delete(`${this.root}/src/lib/${defaultFileName}`);

    await formatFiles(tree);
  }

  async delete({ tree }: { tree: Tree }) {
    await nxWorkspace.removeGenerator(tree, {
      projectName: this.libName,
      skipFormat: true,
      forceRemove: true,
    });

    await formatFiles(tree);
  }
}
