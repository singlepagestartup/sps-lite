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
  relations?: IRelationsCoderGeneratorProps[];
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
    relations: RelationsCoder[];
    root: RootCoder;
  } = {} as {
    table: TableCoder;
    relations: RelationsCoder[];
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

    if (props.relations) {
      this.project.relations = props.relations.map((relation) => {
        return new RelationsCoder({
          ...relation,
          parent: this,
          tree: this.tree,
        });
      });
    }

    this.project.root = new RootCoder({
      ...props.root,
      parent: this,
      tree: this.tree,
    });
  }

  async update() {
    await this.project.table.update();

    if (this.project.relations) {
      for (const relation of this.project.relations) {
        await relation.update();
      }
    }

    await this.project.root.update();
  }

  async create() {
    await this.project.table.create();

    if (this.project.relations) {
      for (const relation of this.project.relations) {
        await relation.create();
      }
    }

    await this.project.root.create();
  }

  async remove() {
    await this.project.root.remove();
    if (this.project.relations) {
      for (const relation of this.project.relations) {
        await relation.remove();
      }
    }
    await this.project.table.remove();
  }

  async addField(props: IEditFieldProps) {
    await this.project.table.addField(props);
  }

  async removeField(props: IEditFieldProps) {
    await this.project.table.removeField(props);
  }

  async createRelation() {
    for (const relation of this.project.relations) {
      await relation.createRelation();
    }
  }

  async removeRelation() {
    for (const relation of this.project.relations) {
      await relation.removeRelation();
    }
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
