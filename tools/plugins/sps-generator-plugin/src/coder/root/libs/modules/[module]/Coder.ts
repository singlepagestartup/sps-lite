import { ProjectConfiguration, Tree, getProjects } from "@nx/devkit";
import { readdir } from "fs/promises";
import { Coder as ModelCoder } from "./models/[model]/Coder";
import { Coder as ModuleCoder } from "../Coder";

export class Coder {
  name: string;
  root: string;
  baseName: string;
  baseDirectory: string;
  tree: Tree;
  parent: ModuleCoder;

  constructor({
    tree,
    name,
    parent,
  }: {
    tree: Tree;
    name: string;
    parent: ModuleCoder;
  }) {
    this.baseName = `${parent.baseName}/${name}`;
    this.baseDirectory = `${parent.baseDirectory}/${name}`;
    this.name = name;
    this.tree = tree;
    this.parent = parent;
  }

  async check() {
    const dirExists = await readdir(this.baseDirectory);
  }

  async createModel({ modelName }: { modelName: string }) {
    await this.check();

    const modelCoder = new ModelCoder({
      tree: this.tree,
      name: modelName,
      parent: this,
    });

    await modelCoder.create();

    await modelCoder.project.backend.project.app.attach({
      routesPath: `${this.baseDirectory}/backend/app/root/src/lib/routes.ts`,
    });
    // console.log(
    //   `🚀 ~ createModel ~ this.baseDirectory:`,
    //   this.baseDirectory + "/backend/app/root/routes.ts",
    // );
    // console.log(
    //   `🚀 ~ createModel ~ modelCoder.project:`,
    //   modelCoder.project.backend.project.app.project,
    // );
    // attach routes to @sps/sps-website-builder-backend-app
    // libs/modules/sps-website-builder/backend/app/root/src/lib/routes.ts
  }

  async removeModel({ modelName }: { modelName: string }) {
    await this.check();

    const modelCoder = new ModelCoder({
      tree: this.tree,
      name: modelName,
      parent: this,
    });

    await modelCoder.project.backend.project.app.detach({
      routesPath: `${this.baseDirectory}/backend/app/root/src/lib/routes.ts`,
    });

    await modelCoder.remove();

    // console.log(
    //   `🚀 ~ createModel ~ this.baseDirectory:`,
    //   this.baseDirectory + "/backend/app/root/routes.ts",
    // );
    // console.log(
    //   `🚀 ~ createModel ~ modelCoder.project:`,
    //   modelCoder.project.backend.project.app.project,
    // );
    // attach routes to @sps/sps-website-builder-backend-app
    // libs/modules/sps-website-builder/backend/app/root/src/lib/routes.ts
  }
}
