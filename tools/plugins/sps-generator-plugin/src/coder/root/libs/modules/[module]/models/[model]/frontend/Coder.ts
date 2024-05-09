import { Tree } from "@nx/devkit";
import { Coder as ModelCoder } from "../Coder";
import { Coder as ComponentCoder } from "./component/Coder";

export class Coder {
  parent: ModelCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  name: string;
  project: {
    component: ComponentCoder;
  };

  constructor({ parent, tree }: { parent: ModelCoder; tree: Tree }) {
    this.name = "frontend";
    this.baseName = `${parent.baseName}-frontend`;
    this.baseDirectory = `${parent.baseDirectory}/frontend`;
    this.tree = tree;
    this.parent = parent;
    const component = new ComponentCoder({
      tree: this.tree,
      parent: this,
    });

    this.project = {
      component,
    };
  }

  async createVariant(props: { variantName: string; variantLevel: string }) {
    await this.project.component.createVariant(props);
  }

  async removeVariant(props: { variantName: string; variantLevel: string }) {
    await this.project.component.removeVariant(props);
  }
}
