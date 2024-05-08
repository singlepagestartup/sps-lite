import {
  ProjectConfiguration,
  Tree,
  formatFiles,
  getProjects,
  names,
} from "@nx/devkit";
import pluralize from "pluralize";
import * as path from "path";
import * as nxWorkspace from "@nx/workspace";
import { util as createSpsTSLibrary } from "../../../../../../../../../../../utils/create-sps-ts-library";
import { Coder as SchemaCoder } from "../../Coder";

export class Coder {
  parent: SchemaCoder;
  baseName: string;
  baseDirectory: string;
  tree: Tree;
  name: string;
  project: ProjectConfiguration;
  modelName: string;
  snakeCasePluralizedModelName: string;

  constructor({ parent, tree }: { parent: SchemaCoder; tree: Tree }) {
    this.parent = parent;
    this.baseName = `${parent.baseName}-relations`;
    this.baseDirectory = `${parent.baseDirectory}/relations/root`;
    this.tree = tree;
    this.name = "relations";

    const modelName = parent.parent.parent.name;
    const modelNameSplitted = names(modelName).fileName.split("-");
    const snakeCasePluralizedModelName = modelNameSplitted.reduce(
      (acc, curr, index) => {
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
      },
      "",
    );

    this.snakeCasePluralizedModelName = snakeCasePluralizedModelName;
    this.modelName = modelName;
  }

  async init() {
    this.project = getProjects(this.tree).get(this.baseName);
  }

  async create() {
    const parentModelLibrary = this.parent.project.table.baseName;

    await createSpsTSLibrary({
      tree: this.tree,
      root: this.baseDirectory,
      name: this.baseName,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
        model: this.modelName,
        pluralized_model: this.snakeCasePluralizedModelName,
        parent_model_library: parentModelLibrary,
      },
    });

    await this.init();
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
}
