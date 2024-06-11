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
  relations?: IRelationCoderGeneratorProps[];
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
    relations?: RelationCoder[];
  } = {} as {
    root: RootCoder;
    relations?: RelationCoder[];
  };

  constructor(props: { parent: SchemaCoder; tree: Tree } & IGeneratorProps) {
    this.name = "relations";
    this.parent = props.parent;
    this.tree = props.tree;
    this.baseName = `${props.parent.baseName}-relations`;
    this.baseDirectory = `${props.parent.baseDirectory}/relations`;

    this.project.root = new RootCoder({
      ...props.root,
      parent: this,
      tree: this.tree,
    });

    if (props.relations) {
      this.project.relations = props.relations.map((relation) => {
        return new RelationCoder({
          ...relation,
          parent: this,
          tree: this.tree,
        });
      });
    }
  }

  async update() {
    await this.project.root.update();

    if (this.project.relations) {
      for (const relation of this.project.relations) {
        await relation.update();
      }
    }
  }

  async create() {
    await this.project.root.create();

    if (this.project.relations) {
      for (const relation of this.project.relations) {
        await relation.create();
      }
    }
  }

  async remove() {
    if (this.project.relations) {
      for (const relation of this.project.relations) {
        await relation.remove();
      }
    }

    await this.project.root.remove();
  }

  async createRelation() {
    // this.project.relation = new RelationCoder({
    //   parent: this,
    //   tree: this.tree,
    // });
    // await this.project.relation.create();
    // const rootRelationFolder = `${this.project.root.baseDirectory}/src/lib`;
    // const populatePath = `${rootRelationFolder}/populate.ts`;
    // const schemaPath = `${rootRelationFolder}/schema.ts`;
    // await this.project.relation.attach({
    //   schemaPath,
    //   populatePath,
    // });
  }

  async removeRelation() {
    // this.project.relation = new RelationCoder({
    //   parent: this,
    //   tree: this.tree,
    // });
    // const rootRelationFolder = `${this.project.root.baseDirectory}/src/lib`;
    // const populatePath = `${rootRelationFolder}/populate.ts`;
    // const schemaPath = `${rootRelationFolder}/schema.ts`;
    // await this.project.relation.detach({
    //   schemaPath,
    //   populatePath,
    // });
    // await this.project.relation.remove();
  }
}
