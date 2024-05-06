import { Tree, formatFiles, getProjects } from "@nx/devkit";
import path from "path";
import { createSpsJsLibrary } from "tools/plugins/sps-generator-plugin/src/utils/js-lib-utils";
import * as nxWorkspace from "@nx/workspace";

export class Coder {
  libName: string;
  root: string;

  constructor({
    module,
    relationName,
  }: {
    module: string;
    relationName: string;
  }) {
    const libName = `@sps/${module}-backend-schema-relations-${relationName}`;
    const root = `libs/modules/${module}/backend/schema/relations/${relationName}`;

    this.libName = libName;
    this.root = root;
  }

  async create({ tree }: { tree: Tree }) {
    await createSpsJsLibrary({
      tree,
      root: this.root,
      name: this.libName,
      generateFilesPath: path.join(__dirname, `files`),
      templateParams: {
        template: "",
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
