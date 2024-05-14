import { Tree } from "@nx/devkit";
import { Coder as RelationCoder } from "../Coder";
import { Coder as ApiCoder } from "./api/Coder";
import { Coder as ComponentCoder } from "./component/Coder";
import { Coder as ReduxCoder } from "./redux/Coder";

export class Coder {
  parent: RelationCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  name: string;
  project: {
    component: ComponentCoder;
    api: ApiCoder;
    redux: ReduxCoder;
  };

  constructor({ parent, tree }: { parent: RelationCoder; tree: Tree }) {
    this.name = "frontend";
    this.baseName = `${parent.baseName}-frontend`;
    this.baseDirectory = `${parent.baseDirectory}/frontend`;
    this.tree = tree;
    this.parent = parent;

    const component = new ComponentCoder({
      tree: this.tree,
      parent: this,
    });

    const api = new ApiCoder({
      tree: this.tree,
      parent: this,
    });

    const redux = new ReduxCoder({
      tree: this.tree,
      parent: this,
    });

    this.project = {
      component,
      api,
      redux,
    };
  }

  async init() {
    await this.project.api.init();
    await this.project.redux.init();
    await this.project.component.init();
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

  async createVariant(props: {
    variantName: string;
    variantLevel: string;
    templateName?: string;
  }) {
    await this.project.component.createVariant(props);
  }

  async removeVariant(props: { variantName: string; variantLevel: string }) {
    await this.project.component.removeVariant(props);
  }
}