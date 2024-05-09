import { Tree } from "@nx/devkit";
import { Coder as ModelsCoder } from "./models/Coder";
import { Coder as ModuleCoder } from "../Coder";
import { IEditFieldProps } from "./models/[model]/backend/schema/table/Coder";
import {
  IEditRelationsProps,
  Coder as RelationsCoder,
} from "./relations/Coder";

/**
 * Module Coder
 *
 * Can work in specific module
 */
export class Coder {
  name: string;
  root: string;
  baseName: string;
  baseDirectory: string;
  tree: Tree;
  parent: ModuleCoder;
  project: {
    models?: ModelsCoder[];
    relations?: RelationsCoder[];
  };

  constructor({
    tree,
    name,
    parent,
  }: {
    tree: Tree;
    name: string;
    parent: ModuleCoder;
  }) {
    this.baseName = `${parent.baseName}/${name}`;
    this.baseDirectory = `${parent.baseDirectory}/${name}`;
    this.name = name;
    this.tree = tree;
    this.parent = parent;

    const models = new ModelsCoder({
      tree: this.tree,
      parent: this,
    });

    const relations = new RelationsCoder({
      tree: this.tree,
      parent: this,
    });

    this.project = {
      models: [models],
      relations: [relations],
    };
  }

  async init() {
    //
  }

  async createModel({ modelName }: { modelName: string }) {
    await this.project.models[0].createModel({
      modelName,
    });

    await this.project.models[0].project.model.project.backend.project.schema.project.root.attach(
      {
        indexPath: `${this.baseDirectory}/backend/schema/root/src/lib/index.ts`,
      },
    );
    await this.project.models[0].project.model.project.backend.project.model.attach(
      {
        indexPath: `${this.baseDirectory}/backend/models/root/src/lib/index.ts`,
      },
    );
    await this.project.models[0].project.model.project.backend.project.app.attach(
      {
        routesPath: `${this.baseDirectory}/backend/app/root/src/lib/routes.ts`,
      },
    );
  }

  async removeModel({ modelName }: { modelName: string }) {
    await this.project.models[0].init({ modelName });

    await this.project.models[0].project.model.project.backend.project.app.detach(
      {
        routesPath: `${this.baseDirectory}/backend/app/root/src/lib/routes.ts`,
      },
    );

    await this.project.models[0].project.model.project.backend.project.model.detach(
      {
        indexPath: `${this.baseDirectory}/backend/models/root/src/lib/index.ts`,
      },
    );

    await this.project.models[0].project.model.project.backend.project.schema.project.root.detach(
      {
        indexPath: `${this.baseDirectory}/backend/schema/root/src/lib/index.ts`,
      },
    );

    await this.project.models[0].removeModel({
      modelName,
    });
  }

  async addField(props: IEditFieldProps & { modelName: string }) {
    await this.project.models[0].addField(props);
  }

  async removeField(props: IEditFieldProps & { modelName: string }) {
    await this.project.models[0].init(props);

    await this.project.models[0].removeField(props);
  }

  async createRelations(
    props: IEditRelationsProps & {
      leftModelName: string;
      rightModelName: string;
    },
  ) {
    const leftProject = new ModelsCoder({
      tree: this.tree,
      parent: this,
    });
    await leftProject.init({ modelName: props.leftModelName });
    this.project.models.push(leftProject);

    const rightProject = new ModelsCoder({
      tree: this.tree,
      parent: this,
    });
    await rightProject.init({ modelName: props.rightModelName });

    this.project.models.push(rightProject);

    await this.project.relations[0].createRelations(props);

    await this.project.models[1].createRelation({
      relationName: props.rightName,
    });
    await this.project.models[2].createRelation({
      relationName: props.leftName,
    });

    await this.project.relations[0].project.relation.project.backend.project.schema.project.root.attach(
      {
        indexPath: `${this.baseDirectory}/backend/schema/root/src/lib/index.ts`,
      },
    );
    await this.project.relations[0].project.relation.project.backend.project.model.attach(
      {
        indexPath: `${this.baseDirectory}/backend/models/root/src/lib/index.ts`,
      },
    );
    await this.project.relations[0].project.relation.project.backend.project.app.attach(
      {
        routesPath: `${this.baseDirectory}/backend/app/root/src/lib/routes.ts`,
      },
    );
  }

  async removeRelations(
    props: IEditRelationsProps & {
      leftModelName: string;
      rightModelName: string;
    },
  ) {
    const leftProject = new ModelsCoder({
      tree: this.tree,
      parent: this,
    });
    await leftProject.init({ modelName: props.leftModelName });
    this.project.models.push(leftProject);

    const rightProject = new ModelsCoder({
      tree: this.tree,
      parent: this,
    });
    await rightProject.init({ modelName: props.rightModelName });
    this.project.models.push(rightProject);

    await this.project.relations[0].removeRelations(props);

    await this.project.models[2].removeRelation({
      relationName: props.leftName,
    });

    await this.project.models[1].removeRelation({
      relationName: props.rightName,
    });

    await this.project.relations[0].project.relation.project.backend.project.app.detach(
      {
        routesPath: `${this.baseDirectory}/backend/app/root/src/lib/routes.ts`,
      },
    );

    await this.project.relations[0].project.relation.project.backend.project.model.detach(
      {
        indexPath: `${this.baseDirectory}/backend/models/root/src/lib/index.ts`,
      },
    );

    await this.project.relations[0].project.relation.project.backend.project.schema.project.root.detach(
      {
        indexPath: `${this.baseDirectory}/backend/schema/root/src/lib/index.ts`,
      },
    );
  }

  async createModelFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
    modelName: string;
  }) {
    await this.project.models[0].createModelFrontendComponentVariant(props);
  }

  async removeModelFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
    modelName: string;
  }) {
    await this.project.models[0].removeModelFrontendComponentVariant(props);
  }
}
