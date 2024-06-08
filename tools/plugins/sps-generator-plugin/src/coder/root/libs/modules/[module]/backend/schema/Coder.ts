import { Tree } from "@nx/devkit";
import { Coder as BackendCoder } from "../Coder";
import { Coder as RootCoder } from "./root/Coder";

export type IGeneratorProps = {};

export class Coder {
  name: string;
  tree: Tree;
  parent: BackendCoder;
  baseName: string;
  baseDirectory: string;
  project: {
    root: RootCoder;
  };

  constructor(props: { tree: Tree; parent: BackendCoder } & IGeneratorProps) {
    this.name = "schema";
    this.tree = props.tree;
    this.parent = props.parent;
    this.baseName = `${this.parent.baseName}-schema`;
    this.baseDirectory = `${this.parent.baseDirectory}/schema`;

    const root = new RootCoder({
      tree: this.tree,
      parent: this,
    });

    this.project = {
      root,
    };
  }

  async update() {
    await this.project.root.update();
  }

  /**
   * @todo
   * Attach to
   * libs/providers/sps-db-provider/src/lib/drizzle/index.ts
   * libs/providers/sps-db-provider/src/lib/drizzle/schema.ts
   */
  async create() {
    await this.project.root.create();
  }

  async remove() {
    await this.project.root.remove();
  }
}
