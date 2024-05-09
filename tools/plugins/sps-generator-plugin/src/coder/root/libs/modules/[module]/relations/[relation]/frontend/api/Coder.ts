import { Tree } from "@nx/devkit";
import { Coder as FrontendCoder } from "../Coder";
import { Coder as ClientCoder } from "./client/Coder";
import { Coder as ServerCoder } from "./server/Coder";

export class Coder {
  parent: FrontendCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  name: string;
  project: {
    client: ClientCoder;
    server: ServerCoder;
  };

  constructor({ parent, tree }: { parent: FrontendCoder; tree: Tree }) {
    this.name = "api";
    this.baseName = `${parent.baseName}-api`;
    this.baseDirectory = `${parent.baseDirectory}/api`;
    this.tree = tree;
    this.parent = parent;

    const client = new ClientCoder({
      tree: this.tree,
      parent: this,
    });

    const server = new ServerCoder({
      tree: this.tree,
      parent: this,
    });

    this.project = {
      client,
      server,
    };
  }

  async init() {
    await this.project.client.init();
    // await this.project.server.init();
  }

  async create() {
    await this.project.client.create();
    // await this.project.server.create();
  }

  async remove() {
    await this.project.client.remove();
    // await this.project.server.remove();
  }
}
