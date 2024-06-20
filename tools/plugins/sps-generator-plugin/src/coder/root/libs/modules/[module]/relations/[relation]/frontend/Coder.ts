import { Tree } from "@nx/devkit";
import { Coder as RelationCoder } from "../Coder";
import {
  Coder as ApiCoder,
  IGeneratorProps as IApiCoderGeneratorProps,
} from "./api/Coder";
import {
  Coder as ComponentCoder,
  IGeneratorProps as IComponentCoderGeneratorProps,
} from "./component/Coder";
import {
  Coder as ReduxCoder,
  IGeneratorProps as IReduxCoderGeneratorProps,
} from "./redux/Coder";

export type IGeneratorProps = {
  api?: IApiCoderGeneratorProps;
  component?: IComponentCoderGeneratorProps;
  redux?: IReduxCoderGeneratorProps;
};

export class Coder {
  parent: RelationCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  name: string;
  absoluteName: string;
  project: {
    component: ComponentCoder;
    api: ApiCoder;
    redux: ReduxCoder;
  } = {} as {
    component: ComponentCoder;
    api: ApiCoder;
    redux: ReduxCoder;
  };

  constructor(props: { parent: RelationCoder; tree: Tree } & IGeneratorProps) {
    this.tree = props.tree;
    this.parent = props.parent;
    this.name = "frontend";
    this.baseName = `${this.parent.baseName}-frontend`;
    this.baseDirectory = `${this.parent.baseDirectory}/frontend`;
    this.absoluteName = `${this.parent.absoluteName}/frontend`;

    this.project.component = new ComponentCoder({
      ...props.component,
      tree: this.tree,
      parent: this,
    });

    this.project.api = new ApiCoder({
      ...props.api,
      tree: this.tree,
      parent: this,
    });

    this.project.redux = new ReduxCoder({
      ...props.redux,
      tree: this.tree,
      parent: this,
    });
  }

  async migrate(props: { version: string }) {
    await this.project.api.migrate(props);
    await this.project.redux.migrate(props);
    await this.project.component.migrate(props);
  }

  async create() {
    await this.project.api.create();
    await this.project.redux.create();
    await this.project.component.create();
  }

  async remove() {
    await this.project.component.remove();
    await this.project.redux.remove();
    await this.project.api.remove();
  }
}
