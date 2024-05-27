import { Tree } from "@nx/devkit";
import { Coder as BackendCoder } from "../Coder";
import { Coder as RootCoder } from "./root/Coder";

export class Coder {
  name: string;
  tree: Tree;
  parent: BackendCoder;
  baseName: string;
  baseDirectory: string;
  project: {
    root: RootCoder;
  };

  constructor({ tree, parent }: { tree: Tree; parent: BackendCoder }) {
    this.name = "schema";
    this.baseName = `${parent.baseName}-schema`;
    this.baseDirectory = `${parent.baseDirectory}/schema`;
    this.tree = tree;
    this.parent = parent;

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
