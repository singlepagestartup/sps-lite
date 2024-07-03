import { Tree } from "@nx/devkit";
import { Coder as ModelCoder } from "../Coder";
import {
  Coder as ComponentCoder,
  IGeneratorProps as IComponentCoderGeneratorProps,
} from "./component/Coder";
import {
  Coder as ApiCoder,
  IGeneratorProps as IApiCoderGeneratorProps,
} from "./api/Coder";

export type IGeneratorProps = {
  component?: IComponentCoderGeneratorProps;
  api?: IApiCoderGeneratorProps;
};

export class Coder {
  parent: ModelCoder;
  absoluteName: string;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  name: string;
  project: {
    component: ComponentCoder;
    api: ApiCoder;
  };

  constructor(props: { parent: ModelCoder; tree: Tree } & IGeneratorProps) {
    this.name = "frontend";
    this.baseName = `${props.parent.baseName}-frontend`;
    this.baseDirectory = `${props.parent.baseDirectory}/frontend`;
    this.absoluteName = `${props.parent.absoluteName}/frontend`;
    this.tree = props.tree;
    this.parent = props.parent;

    const component = new ComponentCoder({
      ...props.component,
      tree: this.tree,
      parent: this,
    });

    const api = new ApiCoder({
      ...props.api,
      tree: this.tree,
      parent: this,
    });

    this.project = {
      component,
      api,
    };
  }

  async migrate(props: { version: string }) {
    await this.project.api.migrate(props);
    await this.project.component.migrate(props);
  }

  async create() {
    await this.project.api.create();
    await this.project.component.create();
  }

  async remove() {
    await this.project.component.remove();
    await this.project.api.remove();
  }
}
