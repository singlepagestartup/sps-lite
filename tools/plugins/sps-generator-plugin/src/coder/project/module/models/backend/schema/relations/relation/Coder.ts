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
import { createSpsJsLibrary } from "../../../../../../../../utils/js-lib-utils";

export class Coder {
  root: string;
  libName: string;
  relationNameKebabCased?: string;

  constructor({
    relationName,
    schemaRootProject,
    relationProject,
  }: {
    relationName?: string;
    relationProject?: ProjectConfiguration;
    schemaRootProject?: ProjectConfiguration;
  }) {
    if (relationProject) {
      this.libName = relationProject.name;
      this.root = relationProject.root;
      return;
    }
    const root =
      schemaRootProject.root.split("/").slice(0, -1).join("/") +
      `/${relationName}`;
    const libName = schemaRootProject.name + `-${relationName}`;

    this.root = root;
    this.libName = libName;
    this.relationNameKebabCased = names(relationName).fileName;
  }

  async create({ tree }: { tree: Tree }) {
    await createSpsJsLibrary({
      tree,
      root: this.root,
      name: this.libName,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
        relation_name_kebab_cased: this.relationNameKebabCased,
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
