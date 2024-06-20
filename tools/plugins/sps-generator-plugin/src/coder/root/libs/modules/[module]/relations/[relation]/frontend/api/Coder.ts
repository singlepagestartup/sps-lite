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
  } = {} as {
    client: ClientCoder;
    server: ServerCoder;
    model: ModelCoder;
  };

  constructor(props: { parent: FrontendCoder; tree: Tree } & IGeneratorProps) {
    this.tree = props.tree;
    this.parent = props.parent;
    this.name = "api";
    this.baseName = `${this.parent.baseName}-api`;
    this.baseDirectory = `${this.parent.baseDirectory}/api`;

    this.project.model = new ModelCoder({
      ...props.model,
      tree: this.tree,
      parent: this,
    });

    this.project.client = new ClientCoder({
      ...props.client,
      tree: this.tree,
      parent: this,
    });

    this.project.server = new ServerCoder({
      ...props.server,
      tree: this.tree,
      parent: this,
    });
  }

  async migrate(props: { version: string }) {
    await this.project.model.migrate(props);
    await this.project.client.migrate(props);
    await this.project.server.migrate(props);
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
