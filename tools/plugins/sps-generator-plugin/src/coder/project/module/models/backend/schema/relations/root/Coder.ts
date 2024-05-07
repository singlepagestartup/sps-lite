import { Tree, formatFiles, getProjects, names } from "@nx/devkit";
import pluralize from "pluralize";
import * as path from "path";
import * as nxWorkspace from "@nx/workspace";
import { util as createSpsTSLibrary } from "../../../../../../../../utils/create-sps-ts-library";

export class Coder {
  libName: string;
  root: string;
  snakeCaseModelName: string;
  modelName: string;
  parentModelName: string;

  constructor({
    modelName,
    module,
    tree,
  }: {
    modelName: string;
    module: string;
    tree: Tree;
  }) {
    const libName = `@sps/${module}-models-${modelName}-backend-schema-relations`;
    const baseDirectory = `libs/modules/${module}/models`;

    const root = `${baseDirectory}/${modelName}/backend/schema/relations/root`;
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

    const parentModelName = libName.replace("relations", "table");

    this.libName = libName;
    this.root = root;
    this.snakeCaseModelName = snakeCaseModelName;
    this.modelName = modelName;
    this.parentModelName = parentModelName;
  }

  async create({ tree }: { tree: Tree }) {
    await createSpsTSLibrary({
      tree,
      root: this.root,
      name: this.libName,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
        model: this.modelName,
        pluralized_model: this.snakeCaseModelName,
        parent_model_library: this.parentModelName,
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
