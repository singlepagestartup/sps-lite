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
import { Coder as BackendCoder } from "../../Coder";

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
  parent: BackendCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  project: ProjectConfiguration;

  constructor({ parent, tree }: { parent: BackendCoder; tree: Tree }) {
    // const libName = `@sps/${module}-models-${modelName}-backend-app`;
    // const baseDirectory = `libs/modules/${module}/models`;
    // const moduleApp = `@sps/${module}-backend-app`;
    // const moduleBackendAppProject = getProjects(tree).get(moduleApp);
    // const root = `${baseDirectory}/${modelName}/backend/app/root`;
    // const modelLibName = `@sps/${module}-models-${modelName}-backend-model`;
    // const modelSchemaLibName = `@sps/${module}-models-${modelName}-backend-schema`;

    // this.modelSchemaLibName = modelSchemaLibName;
    // this.libName = libName;
    // this.rootAppProject = moduleBackendAppProject;
    // this.root = root;
    // this.modelName = modelName;
    // this.modelLibName = modelLibName;
    this.baseName = `${parent.baseName}-app`;
    this.baseDirectory = `${parent.baseDirectory}/app`;
    this.parent = parent;
    this.tree = tree;

    const pluralNameModelName = pluralize(names(parent.parent.name).fileName);
    const asPropertyModelName = names(parent.parent.name).propertyName;
    this.importAppAsAsPropertyModelName = new ImportAppAsAsPropertyModelName({
      libName: this.baseName,
      asPropertyModelName,
    });
    this.exportRoute = new ExportRoute({
      route: `/${pluralNameModelName}`,
      asPropertyModelName,
    });
  }

  // async attachToRoot({ tree }: { tree: Tree }) {
  //   await this.attachToRoutes({ tree });
  // }

  async create() {
    await createSpsTSLibrary({
      tree: this.tree,
      root: this.baseDirectory,
      name: this.baseName,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
        model_lib_name: this.parent.parent.baseName,
        // model_schema_lib_name: this.modelSchemaLibName,
        model_schema_lib_name: "",
      },
    });

    const projects = getProjects(this.tree);

    this.project = projects.get(this.baseName);
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

  async attach({ routesPath }: { routesPath: string }) {
    await addToFile({
      toTop: true,
      pathToFile: routesPath,
      content: this.importAppAsAsPropertyModelName.onCreate.content,
      tree: this.tree,
    });

    await replaceInFile({
      tree: this.tree,
      pathToFile: routesPath,
      regex: this.exportRoute.onCreate.regex,
      content: this.exportRoute.onCreate.content,
    });
  }

  async detach({ routesPath }: { routesPath: string }) {
    try {
      const replaceExportRoutes = await replaceInFile({
        tree: this.tree,
        pathToFile: routesPath,
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
        tree: this.tree,
        pathToFile: routesPath,
        regex: this.importAppAsAsPropertyModelName.onRemove.regex,
        content: "",
      });
    } catch (error) {
      if (!error.message.includes(`No expected value`)) {
        throw error;
      }
    }
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
