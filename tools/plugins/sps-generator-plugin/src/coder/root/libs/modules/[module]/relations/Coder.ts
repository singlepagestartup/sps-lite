import { Tree } from "@nx/devkit";
import { Coder as ModuleCoder } from "../Coder";
import { Coder as RelationCoder } from "./[relation]/Coder";

export interface IEditRelationsProps {
  leftModelRelationName: string;
  rightModelRelationName: string;
}

/**
 * Relations Coder
 */
export class Coder {
  tree: Tree;
  parent: ModuleCoder;
  baseName: string;
  baseDirectory: string;
  name: string;
  project: {
    relation?: RelationCoder;
  };

  constructor({ tree, parent }: { tree: Tree; parent: ModuleCoder }) {
    this.tree = tree;
    this.name = "relations";
    this.parent = parent;
    this.baseName = `${parent.baseName}-relations`;
    this.baseDirectory = `${parent.baseDirectory}/relations`;

    this.project = {
      relation: undefined,
    };
  }

  async init(
    props:
      | {
          leftModelRelationName: string;
          rightModelRelationName: string;
        }
      | { relationName: string },
  ) {
    if ("relationName" in props && props.relationName) {
      const { relationName } = props;

      const relation = new RelationCoder({
        tree: this.tree,
        name: relationName,
        parent: this,
      });

      this.project.relation = relation;

      await this.project.relation.init();
    } else if ("leftModelRelationName" in props) {
      const { leftModelRelationName, rightModelRelationName } = props;
      const relation = new RelationCoder({
        tree: this.tree,
        leftModelRelationName,
        rightModelRelationName,
        parent: this,
      });

      this.project.relation = relation;

      await this.project.relation.init();
    } else {
      throw new Error(
        "Prop 'relationName' / 'leftModelRelationName and rightModelRelationName' are required",
      );
    }
  }

  async createRelations({
    leftModelRelationName,
    rightModelRelationName,
  }: IEditRelationsProps) {
    await this.init({ leftModelRelationName, rightModelRelationName });

    await this.project.relation.create();
  }

  async removeRelations({
    leftModelRelationName,
    rightModelRelationName,
  }: IEditRelationsProps) {
    await this.init({ leftModelRelationName, rightModelRelationName });

    await this.project.relation.remove();
  }

  async createRelationFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
    relationName: string;
    templateName?: string;
  }) {
    const { relationName } = props;

    await this.init({ relationName });

    await this.project.relation.createRelationFrontendComponentVariant(props);
  }

  async removeRelationFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
    relationName: string;
  }) {
    const { relationName } = props;

    await this.init({ relationName });

    await this.project.relation.removeRelationFrontendComponentVariant(props);
  }
}
