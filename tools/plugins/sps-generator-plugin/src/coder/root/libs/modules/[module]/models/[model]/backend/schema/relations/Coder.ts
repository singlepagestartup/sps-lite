import { Tree } from "@nx/devkit";
import {
  Coder as RootCoder,
  IGeneratorProps as IRootCoderGeneratorProps,
} from "./root/Coder";
import { Coder as SchemaCoder } from "../Coder";
import {
  Coder as RelationCoder,
  IGeneratorProps as IRelationCoderGeneratorProps,
} from "./[relation]/Coder";

export type IGeneratorProps = {
  relation?: IRelationCoderGeneratorProps;
  root?: IRootCoderGeneratorProps;
};

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

  constructor(props: { parent: SchemaCoder; tree: Tree } & IGeneratorProps) {
    this.name = "relations";
    this.parent = props.parent;
    this.tree = props.tree;
    this.baseName = `${props.parent.baseName}-relations`;
    this.baseDirectory = `${props.parent.baseDirectory}/relations`;

    // const relations = new RelationCoder({
    //   parent: this,
    //   tree,
    // });

    this.project.root = new RootCoder({
      ...props.root,
      parent: this,
      tree: this.tree,
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
