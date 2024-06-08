import { Tree } from "@nx/devkit";
import { Coder as FrontendCoder } from "../Coder";
import {
  Coder as ClientCoder,
  IGeneratorProps as IClientCoderGeneratorProps,
} from "./client/Coder";
import {
  Coder as ServerCoder,
  IGeneratorProps as IServerCoderGeneratorProps,
} from "./server/Coder";
import {
  Coder as ModelCoder,
  IGeneratorProps as IModelCoderGeneratorProps,
} from "./model/Coder";

export type IGeneratorProps = {
  client?: IClientCoderGeneratorProps;
  server?: IServerCoderGeneratorProps;
  model?: IModelCoderGeneratorProps;
};

export class Coder {
  parent: FrontendCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  name: string;
  project: {
    client: ClientCoder;
    server: ServerCoder;
    model: ModelCoder;
  };

  constructor(props: { parent: FrontendCoder; tree: Tree } & IGeneratorProps) {
    this.name = "api";
    this.baseName = `${props.parent.baseName}-api`;
    this.baseDirectory = `${props.parent.baseDirectory}/api`;
    this.tree = props.tree;
    this.parent = props.parent;

    const model = new ModelCoder({
      ...props.model,
      tree: this.tree,
      parent: this,
    });

    const client = new ClientCoder({
      ...props.client,
      tree: this.tree,
      parent: this,
    });

    const server = new ServerCoder({
      ...props.server,
      tree: this.tree,
      parent: this,
    });

    this.project = {
      model,
      client,
      server,
    };
  }

  async update() {
    /**
     * That directory is just contains another packages
     * use methods from packages to update them separately
     */
    throw new Error(
      "Method not implemented, that directory just contains other packages.",
    );
  }

  async create() {
    await this.project.model.create();
    await this.project.client.create();
    await this.project.server.create();
  }

  async remove() {
    await this.project.client.remove();
    await this.project.server.remove();
    await this.project.model.remove();
  }
}
