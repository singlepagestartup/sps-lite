import { ProjectConfiguration, Tree, getProjects, names } from "@nx/devkit";
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
  parent: BackendCoder;
  tree: Tree;
  baseName: string;
  name: string;
  baseDirectory: string;
  project: ProjectConfiguration;
  importAppAsAsPropertyModelName: ImportAppAsAsPropertyModelName;
  exportRoute: ExportRoute;

  constructor({ parent, tree }: { parent: BackendCoder; tree: Tree }) {
    this.baseName = `${parent.baseName}-app`;
    this.baseDirectory = `${parent.baseDirectory}/app`;
    this.parent = parent;
    this.tree = tree;
    this.name = "app";

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

  async update() {
    console.log("Update:", this.baseName);
  }

  async init() {
    this.project = getProjects(this.tree).get(this.baseName);
  }

  async create() {
    const modelLibName = this.parent.project.model.baseName;
    const modelSchemaLibName = this.parent.project.schema.baseName;

    await createSpsTSLibrary({
      tree: this.tree,
      root: this.baseDirectory,
      name: this.baseName,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
        model_lib_name: modelLibName,
        model_schema_lib_name: modelSchemaLibName,
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
