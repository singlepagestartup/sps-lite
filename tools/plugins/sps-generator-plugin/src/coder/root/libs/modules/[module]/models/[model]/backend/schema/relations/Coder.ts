import { Tree } from "@nx/devkit";
import { Coder as RootCoder } from "./root/Coder";
import { Coder as SchemaCoder } from "../Coder";
import { Coder as RelationCoder } from "./[relation]/Coder";

export class Coder {
  parent: SchemaCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  name: string;
  project: {
    root: RootCoder;
    relation?: RelationCoder;
  } = {} as {
    root: RootCoder;
    relation?: RelationCoder;
  };

  constructor({ parent, tree }: { parent: SchemaCoder; tree: Tree }) {
    this.name = "relations";
    this.parent = parent;
    this.tree = tree;
    this.baseName = `${parent.baseName}-relations`;
    this.baseDirectory = `${parent.baseDirectory}/relations`;

    // const relations = new RelationCoder({
    //   parent: this,
    //   tree,
    // });

    this.project.root = new RootCoder({
      parent: this,
      tree,
    });
  }

  async update() {
    await this.project.root.update();

    if (this.project.relation) {
      await this.project.relation.update();
    }
  }

  async create() {
    await this.project.root.create();
  }

  async remove() {
    await this.project.root.remove();
  }

  async createRelation() {
    this.project.relation = new RelationCoder({
      parent: this,
      tree: this.tree,
    });

    await this.project.relation.create();

    const rootRelationFolder = `${this.project.root.baseDirectory}/src/lib`;
    const populatePath = `${rootRelationFolder}/populate.ts`;
    const schemaPath = `${rootRelationFolder}/schema.ts`;

    await this.project.relation.attach({
      schemaPath,
      populatePath,
    });
  }

  async removeRelation() {
    this.project.relation = new RelationCoder({
      parent: this,
      tree: this.tree,
    });

    const rootRelationFolder = `${this.project.root.baseDirectory}/src/lib`;
    const populatePath = `${rootRelationFolder}/populate.ts`;
    const schemaPath = `${rootRelationFolder}/schema.ts`;

    await this.project.relation.detach({
      schemaPath,
      populatePath,
    });

    await this.project.relation.remove();
  }
}
