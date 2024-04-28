import { ProjectConfiguration, Tree, getProjects, names } from "@nx/devkit";
import pluralize from "pluralize";
import { addToFile, replaceInFile } from "../utils/file-utils";

export class ModelBackendAppBuilder {
  route: string;
  importPath: string;
  libName: string;
  asPropertyName: string;
  rootProject: ProjectConfiguration;

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
    const pluralNameModelName = pluralize(names(modelName).fileName);
    const propertyName = names(modelName).propertyName;
    const importPath = `import { app as ${propertyName} } from "${libName}"`;

    const moduleProject = `@sps/${module}-backend-app`;

    const backendAppProject = getProjects(tree).get(moduleProject);

    this.libName = libName;
    this.route = `/${pluralNameModelName}`;
    this.importPath = importPath;
    this.asPropertyName = propertyName;
    this.rootProject = backendAppProject;
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
}
