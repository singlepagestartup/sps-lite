import { Tree, formatFiles, getProjects, names } from "@nx/devkit";
import * as path from "path";
import * as nxWorkspace from "@nx/workspace";
import { createSpsJsLibrary } from "../../../../utils/js-lib-utils";
import { addToFile } from "../../../../utils/file-utils";

export class Builder {
  libName: string;
  root: string;
  snakeCaseModelName: string;
  modelName: string;
  tableLibraryName: string;
  relationsLibraryName: string;
  moduleRootSchemaProject: any;
  pascalSaseModelName: string;
  exportTableVariableName: string;
  exportTableRelationsVariableName: string;

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

    const pascalCaseModelName = names(modelName).className;
    const exportTableVariableName = `${pascalCaseModelName}Table`;
    const exportTableRelationsVariableName = `${pascalCaseModelName}Relations`;

    this.libName = libName;
    this.root = root;
    this.modelName = modelName;
    this.tableLibraryName = tableLibraryName;
    this.relationsLibraryName = relationsLibraryName;
    this.moduleRootSchemaProject = moduleRootSchemaProject;
    this.pascalSaseModelName = pascalCaseModelName;
    this.exportTableVariableName = exportTableVariableName;
    this.exportTableRelationsVariableName = exportTableRelationsVariableName;
  }

  async attachToModule({ tree }: { tree: Tree }) {
    const backendAppProjectRoutesPath = `${this.moduleRootSchemaProject.sourceRoot}/lib/schema.ts`;

    const exportSchemaContent = `export {
      ${this.exportTableVariableName},
      ${this.exportTableRelationsVariableName},
    } from ${this.libName};`;

    const backendAppProjectFileContent = await addToFile({
      toTop: true,
      pathToFile: backendAppProjectRoutesPath,
      content: exportSchemaContent,
      tree,
    });

    // const routeExport = `"${this.route}": ${this.asPropertyName},`;

    // const replaceExportRoutes = await replaceInFile({
    //   tree,
    //   pathToFile: backendAppProjectRoutesPath,
    //   regex: /export const routes = {/,
    //   content: `export const routes = {${routeExport}`,
    // });
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
        export_table_variable_name: this.exportTableVariableName,
        export_relations_variable_name: this.exportTableRelationsVariableName,
        relations_library_name: this.relationsLibraryName,
        model_name: this.pascalSaseModelName,
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

    await formatFiles(tree);
  }
}
