import { Tree, formatFiles, getProjects, names } from "@nx/devkit";
import pluralize from "pluralize";
import * as path from "path";
import * as nxWorkspace from "@nx/workspace";
import { createSpsJsLibrary } from "../../../../utils/js-lib-utils";

export class Builder {
  libName: string;
  root: string;
  snakeCaseModelName: string;
  modelName: string;
  moduleName: string;

  constructor({
    modelName,
    module,
    tree,
  }: {
    modelName: string;
    module: string;
    tree: Tree;
  }) {
    const libName = `@sps/${module}-models-${modelName}-backend-schema-table`;
    const baseDirectory = `libs/modules/${module}/models`;

    const root = `${baseDirectory}/${modelName}/backend/schema/table`;
    const modelNameSplitted = names(modelName).fileName.split("-");
    const snakeCaseModelName = modelNameSplitted.reduce((acc, curr, index) => {
      if (index === modelNameSplitted.length - 1) {
        const plural = pluralize(curr);
        if (index === 0) {
          return plural;
        }

        return acc + "_" + plural;
      }

      if (index === 0) {
        return curr;
      }

      return acc + "_" + curr;
    }, "");

    this.libName = libName;
    this.root = root;
    this.snakeCaseModelName = snakeCaseModelName;
    this.modelName = modelName;
    this.moduleName = module.replaceAll(/-/g, "_");
  }

  async create({ tree }: { tree: Tree }) {
    await createSpsJsLibrary({
      tree,
      root: this.root,
      name: this.libName,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
        model_name: this.modelName,
        module_name: this.moduleName,
        pluralized_model: this.snakeCaseModelName,
      },
    });
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
