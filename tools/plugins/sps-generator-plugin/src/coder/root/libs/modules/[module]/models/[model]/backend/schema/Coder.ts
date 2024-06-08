import { Tree } from "@nx/devkit";
import {
  IEditFieldProps,
  Coder as TableCoder,
  IGeneratorProps as ITableCoderGeneratorProps,
} from "./table/Coder";
import {
  Coder as RelationsCoder,
  IGeneratorProps as IRelationsCoderGeneratorProps,
} from "./relations/Coder";
import {
  Coder as RootCoder,
  IGeneratorProps as IRootCoderGeneratorProps,
} from "./root/Coder";
import { Coder as BackendCoder } from "../Coder";

export type IGeneratorProps = {
  relations?: IRelationsCoderGeneratorProps;
  table?: ITableCoderGeneratorProps;
  root?: IRootCoderGeneratorProps;
};

export class Coder {
  parent: BackendCoder;
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  name: string;
  project: {
    table: TableCoder;
    relations: RelationsCoder;
    root: RootCoder;
  } = {} as {
    table: TableCoder;
    relations: RelationsCoder;
    root: RootCoder;
  };

  constructor(props: { parent: BackendCoder; tree: Tree } & IGeneratorProps) {
    this.name = "schema";
    this.parent = props.parent;
    this.tree = props.tree;
    this.baseName = `${props.parent.baseName}-schema`;
    this.baseDirectory = `${props.parent.baseDirectory}/schema`;

    this.project.table = new TableCoder({
      ...props.table,
      parent: this,
      tree: this.tree,
    });

    this.project.relations = new RelationsCoder({
      ...props.relations,
      parent: this,
      tree: this.tree,
    });

    this.project.root = new RootCoder({
      ...props.root,
      parent: this,
      tree: this.tree,
    });
  }

  async update() {
    await this.project.table.update();
    await this.project.relations.update();
    await this.project.root.update();
  }

  async create() {
    await this.project.table.create();
    await this.project.relations.create();
    await this.project.root.create();
  }

  async remove() {
    await this.project.root.remove();
    await this.project.relations.remove();
    await this.project.table.remove();
  }

  async addField(props: IEditFieldProps) {
    await this.project.table.addField(props);
  }

  async removeField(props: IEditFieldProps) {
    await this.project.table.removeField(props);
  }

  async createRelation() {
    await this.project.relations.createRelation();
  }

  async removeRelation() {
    await this.project.relations.removeRelation();
  }

  async createVariant(props: { variantName: string; variantLevel: string }) {
    await this.project.table.createVariant({
      level: props.variantLevel,
      variant: props.variantName,
    });
  }

  async removeVariant(props: { variantName: string; variantLevel: string }) {
    await this.project.table.removeVariant({
      level: props.variantLevel,
      variant: props.variantName,
    });
  }
}
