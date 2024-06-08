import { Tree } from "@nx/devkit";
import {
  Coder as ModelsCoder,
  IGeneratorProps as IModelsCoderGeneratorProps,
} from "./models/Coder";
import { Coder as ModuleCoder } from "../Coder";
import { IEditFieldProps } from "./models/[model]/backend/schema/table/Coder";
import {
  Coder as RelationsCoder,
  IGeneratorProps as IRelationsCoderGeneratorProps,
} from "./relations/Coder";
import {
  Coder as BackendCoder,
  IGeneratorProps as IBackendCoderGeneratorProps,
} from "./backend/Coder";
import pluralize from "pluralize";

export type IGeneratorProps = {
  name: Coder["name"];
  models?: IModelsCoderGeneratorProps[];
  relations?: IRelationsCoderGeneratorProps[];
  backend?: IBackendCoderGeneratorProps;
};

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
    models: ModelsCoder[];
    relations: RelationsCoder[];
    backend: BackendCoder;
  } = {
    models: [],
    relations: [],
    backend: {} as BackendCoder,
  };

  constructor(
    props: {
      tree: Tree;
      parent: ModuleCoder;
    } & IGeneratorProps,
  ) {
    this.baseName = `${props.parent.baseName}/${props.name}`;
    this.baseDirectory = `${props.parent.baseDirectory}/${props.name}`;
    this.name = props.name;
    this.tree = props.tree;
    this.parent = props.parent;

    this.project.backend = new BackendCoder({
      ...props.backend,
      tree: this.tree,
      parent: this,
    });

    props.models?.forEach((model) => {
      this.project.models.push(
        new ModelsCoder({
          ...model,
          tree: this.tree,
          parent: this,
        }),
      );
    });

    props.relations?.forEach((relation) => {
      this.project.relations.push(
        new RelationsCoder({
          ...relation,
          tree: this.tree,
          parent: this,
        }),
      );
    });
  }

  async update() {
    // for (const model of this.project.models) {
    //   await model.update();
    // }

    for (const relation of this.project.relations) {
      await relation.update();
    }

    // await this.project.backend.update();
  }

  async create() {
    await this.project.backend.create();
  }

  async remove() {
    await this.project.backend.remove();
  }

  async createModel() {
    await this.project.models[0].createModel();

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

  async removeModel() {
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

    await this.project.models[0].removeModel();
  }

  async addField(props: IEditFieldProps) {
    await this.project.models[0].addField(props);
  }

  async removeField(props: IEditFieldProps) {
    await this.project.models[0].removeField(props);
  }

  async createRelations() {
    if (!this.project.relations.length) {
      throw new Error("Relations are not defined");
    }

    await this.project.relations[0].createRelations();

    if (!this.project.models[0].project.model.isExternal) {
      await this.project.models[0].createRelation();
      const leftModelContractsPath =
        this.project.models[0].project.model.project.contracts.project.extended
          .baseDirectory;

      const levelContractsPath = `${leftModelContractsPath}/src/lib/interfaces/sps-lite.ts`;

      await this.project.relations[0].project.relation.project.contracts.project.root.attach(
        { levelContractsPath },
      );
    }

    if (!this.project.models[1].project.model.isExternal) {
      const rightModelContractsPath =
        this.project.models[1].project.model.project.contracts.project.extended
          .baseDirectory;

      const levelContractsPath = `${rightModelContractsPath}/src/lib/interfaces/sps-lite.ts`;

      await this.project.models[1].createRelation();
      await this.project.relations[0].project.relation.project.contracts.project.root.attach(
        { levelContractsPath },
      );
    }

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

  async removeRelations() {
    if (!this.project.models[1].project.model.isExternal) {
      await this.project.models[1].removeRelation();

      const rightModelContractsPath =
        this.project.models[1].project.model.project.contracts.project.extended
          .baseDirectory;

      const levelContractsPath = `${rightModelContractsPath}/src/lib/interfaces/sps-lite.ts`;

      await this.project.relations[0].project.relation.project.contracts.project.root.detach(
        { levelContractsPath },
      );
    }

    if (!this.project.models[0].project.model.isExternal) {
      await this.project.models[0].removeRelation();

      const leftModelContractsPath =
        this.project.models[0].project.model.project.contracts.project.extended
          .baseDirectory;

      const levelContractsPath = `${leftModelContractsPath}/src/lib/interfaces/sps-lite.ts`;

      await this.project.relations[0].project.relation.project.contracts.project.root.detach(
        { levelContractsPath },
      );
    }

    await this.project.relations[0].removeRelations();

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
    templateName?: string;
  }) {
    await this.project.models[0].createModelFrontendComponentVariant(props);
  }

  async removeModelFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
  }) {
    await this.project.models[0].removeModelFrontendComponentVariant(props);
  }

  async createBackendVariant(props: {
    variantName: string;
    variantLevel: string;
  }) {
    await this.project.models[0].createBackendVariant({
      variantLevel: props.variantLevel,
      variantName: props.variantName,
    });
  }

  async removeBackendVariant(props: {
    variantName: string;
    variantLevel: string;
  }) {
    await this.project.models[0].removeBackendVariant({
      variantLevel: props.variantLevel,
      variantName: props.variantName,
    });
  }

  async createRelationFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
    templateName?: string;
  }) {
    await this.project.relations[0].createRelationFrontendComponentVariant(
      props,
    );
  }

  async removeRelationFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
  }) {
    await this.project.relations[0].removeRelationFrontendComponentVariant(
      props,
    );
  }
}
