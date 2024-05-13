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

    const root = new RootCoder({
      parent: this,
      tree,
    });

    this.project = {
      root,
      relation: undefined,
    };
  }

  async init() {
    await this.project.root.init();
  }

  async create() {
    await this.project.root.create();
  }

  async remove() {
    await this.project.root.remove();
  }

  async createRelation({ relationName }: { relationName: string }) {
    this.project.relation = new RelationCoder({
      parent: this,
      tree: this.tree,
      name: relationName,
    });

    await this.project.relation.create();

    const rootRelationFolder = `${this.project.root.baseDirectory}/src/lib`;
    const configPath = `${rootRelationFolder}/config.ts`;
    const populatePath = `${rootRelationFolder}/populate.ts`;
    const schemaPath = `${rootRelationFolder}/schema.ts`;

    await this.project.relation.attach({
      configPath,
      schemaPath,
      populatePath,
    });
  }

  async removeRelation({ relationName }: { relationName: string }) {
    this.project.relation = new RelationCoder({
      parent: this,
      tree: this.tree,
      name: relationName,
    });

    const rootRelationFolder = `${this.project.root.baseDirectory}/src/lib`;
    const configPath = `${rootRelationFolder}/config.ts`;
    const populatePath = `${rootRelationFolder}/populate.ts`;
    const schemaPath = `${rootRelationFolder}/schema.ts`;

    await this.project.relation.detach({
      configPath,
      schemaPath,
      populatePath,
    });

    await this.project.relation.remove();
  }
}
