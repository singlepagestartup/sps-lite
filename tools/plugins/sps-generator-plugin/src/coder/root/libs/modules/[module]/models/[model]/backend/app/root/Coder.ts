import {
  ProjectConfiguration,
  Tree,
  formatFiles,
  getProjects,
  names,
} from "@nx/devkit";
import pluralize from "pluralize";
import {
  addToFile,
  replaceInFile,
} from "../../../../../../../../../../utils/file-utils";
import * as path from "path";
import * as nxWorkspace from "@nx/workspace";
import { util as createSpsTSLibrary } from "../../../../../../../../../../utils/create-sps-ts-library";
import { RegexCreator } from "../../../../../../../../../../utils/regex-utils/RegexCreator";

export class Coder {
  libName: string;
  rootAppProject: ProjectConfiguration;
  rootSchemaProject: ProjectConfiguration;
  root: string;
  modelName: string;
  module: string;
  modelLibName: string;
  importAppAsAsPropertyModelName: ImportAppAsAsPropertyModelName;
  exportRoute: ExportRoute;
  modelSchemaLibName: string;

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
    const asPropertyModelName = names(modelName).propertyName;

    const moduleApp = `@sps/${module}-backend-app`;
    const moduleBackendAppProject = getProjects(tree).get(moduleApp);

    const root = `${baseDirectory}/${modelName}/backend/app/root`;

    const modelLibName = `@sps/${module}-models-${modelName}-backend-model`;
    const modelSchemaLibName = `@sps/${module}-models-${modelName}-backend-schema`;

    this.importAppAsAsPropertyModelName = new ImportAppAsAsPropertyModelName({
      libName,
      asPropertyModelName,
    });
    this.exportRoute = new ExportRoute({
      route: `/${pluralNameModelName}`,
      asPropertyModelName,
    });
    this.modelSchemaLibName = modelSchemaLibName;
    this.libName = libName;
    this.rootAppProject = moduleBackendAppProject;
    this.root = root;
    this.modelName = modelName;
    this.modelLibName = modelLibName;
  }

  async attachToRoot({ tree }: { tree: Tree }) {
    await this.attachToRoutes({ tree });
  }

  async detachFromRoot({ tree }: { tree: Tree }) {
    const backendAppProjectRoutesPath = `${this.rootAppProject.sourceRoot}/lib/routes.ts`;

    try {
      const replaceExportRoutes = await replaceInFile({
        tree,
        pathToFile: backendAppProjectRoutesPath,
        regex: this.exportRoute.onRemove.regex,
        content: "",
      });
    } catch (error) {
      if (!error.message.includes(`No expected value`)) {
        throw error;
      }
    }

    try {
      const replaceImportRoutes = await replaceInFile({
        tree,
        pathToFile: backendAppProjectRoutesPath,
        regex: this.importAppAsAsPropertyModelName.onRemove.regex,
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
        model_lib_name: this.modelLibName,
        model_schema_lib_name: this.modelSchemaLibName,
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

  async attachToRoutes({ tree }: { tree: Tree }) {
    const backendAppProjectRoutesPath = `${this.rootAppProject.sourceRoot}/lib/routes.ts`;

    const backendAppProjectFileContent = await addToFile({
      toTop: true,
      pathToFile: backendAppProjectRoutesPath,
      content: this.importAppAsAsPropertyModelName.onCreate.content,
      tree,
    });

    const replaceExportRoutes = await replaceInFile({
      tree,
      pathToFile: backendAppProjectRoutesPath,
      regex: this.exportRoute.onCreate.regex,
      content: this.exportRoute.onCreate.content,
    });
  }
}

export class ImportAppAsAsPropertyModelName extends RegexCreator {
  constructor({
    asPropertyModelName,
    libName,
  }: {
    asPropertyModelName: string;
    libName: string;
  }) {
    const place = "";
    const placeRegex = new RegExp("");

    const content = `import { app as ${asPropertyModelName} } from "${libName}";`;

    const contentRegex = new RegExp(
      `import { app as ${asPropertyModelName} } from "${libName}";`,
    );

    super({
      place,
      placeRegex,
      contentRegex,
      content,
    });
  }
}

export class ExportRoute extends RegexCreator {
  constructor({
    route,
    asPropertyModelName,
  }: {
    route: string;
    asPropertyModelName: string;
  }) {
    const place = `export const routes = {`;
    const placeRegex = new RegExp(`export const routes = {`);

    const content = `"${route}": ${asPropertyModelName},`;
    const contentRegex = new RegExp(
      `"${route}":([\\s]+?)${asPropertyModelName},`,
    );

    super({
      place,
      placeRegex,
      content,
      contentRegex,
    });
  }
}
