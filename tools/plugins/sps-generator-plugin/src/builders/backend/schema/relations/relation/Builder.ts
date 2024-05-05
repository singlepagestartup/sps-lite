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
import { createSpsJsLibrary } from "../../../../../utils/js-lib-utils";

export class Builder {
  root: string;
  libName: string;
  relationNameCamelCased: string;

  constructor({
    name,
    schemaRootProject,
  }: {
    name: string;
    schemaRootProject: ProjectConfiguration;
  }) {
    console.log(`🚀 ~ schemaRootProject:`, schemaRootProject);
    console.log(`🚀 ~ name:`, name);
    const root =
      schemaRootProject.root.split("/").slice(0, -1).join("/") + `/${name}`;
    const libName = schemaRootProject.name + `-${name}`;

    console.log(`🚀 ~ root:`, root);
    console.log(`🚀 ~ libName:`, libName);
    this.root = root;
    this.libName = libName;
    this.relationNameCamelCased = names(name).className;
  }

  async create({ tree }: { tree: Tree }) {
    await createSpsJsLibrary({
      tree,
      root: this.root,
      name: this.libName,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
        relation_name_camel_cased: this.relationNameCamelCased,
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
