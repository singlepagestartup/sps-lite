import { Tree } from "@nx/devkit";
import { Coder as ModelsCoder } from "./models/Coder";
import { Coder as ModuleCoder } from "../Coder";
import { IEditFieldProps } from "./models/[model]/backend/schema/table/Coder";
import { Coder as RelationsCoder } from "./relations/Coder";
import { Coder as BackendCoder } from "./backend/Coder";
import pluralize from "pluralize";

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
    backend?: BackendCoder;
  };

  constructor(props: {
    tree: Tree;
    name: string;
    parent: ModuleCoder;
    models?: {
      name: string;
      isExternal?: boolean;
    }[];
  }) {
    this.baseName = `${props.parent.baseName}/${props.name}`;
    this.baseDirectory = `${props.parent.baseDirectory}/${props.name}`;
    this.name = props.name;
    this.tree = props.tree;
    this.parent = props.parent;

    const backend = new BackendCoder({
      tree: this.tree,
      parent: this,
    });

    const models: ModelsCoder[] = [];

    props.models?.forEach((model) => {
      models.push(
        new ModelsCoder({
          tree: this.tree,
          parent: this,
          modelName: model.name,
          isExternal: model.isExternal,
        }),
      );
    });

    const relations = new RelationsCoder({
      tree: this.tree,
      parent: this,
    });

    this.project = {
      models,
      relations: [relations],
      backend,
    };
  }

  async update() {
    for (const model of this.project.models) {
      await model.update();
    }

    for (const relation of this.project.relations) {
      await relation.update();
    }

    await this.project.backend.update();
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
    await this.project.relations[0].init();
    await this.project.relations[0].createRelations();

    if (!this.project.models[0].isExternal) {
      await this.project.models[0].createRelation();
      const leftModelContractsPath =
        this.project.models[0].project.model.project.contracts.project.extended
          .baseDirectory;

      const levelContractsPath = `${leftModelContractsPath}/src/lib/interfaces/sps-lite.ts`;

      await this.project.relations[0].project.relation.project.contracts.project.root.attach(
        { levelContractsPath },
      );
    }

    if (!this.project.models[1].isExternal) {
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
    await this.project.relations[0].init();

    if (!this.project.models[1].isExternal) {
      await this.project.models[1].removeRelation();

      const rightModelContractsPath =
        this.project.models[1].project.model.project.contracts.project.extended
          .baseDirectory;

      const levelContractsPath = `${rightModelContractsPath}/src/lib/interfaces/sps-lite.ts`;

      await this.project.relations[0].project.relation.project.contracts.project.root.detach(
        { levelContractsPath },
      );
    }

    if (!this.project.models[0].isExternal) {
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

  async setRelatedModels(relationName: string) {
    const modelNamesPluralized = relationName.split("-to-");

    const unpluralizedModelNames = modelNamesPluralized.map((modelName) => {
      return pluralize.singular(modelName);
    });

    // const projects = getProjects(this.tree);
    // const projectWithPassedRelationNameAndSchema = [];

    // projects.forEach((project) => {
    //   if (
    //     project.name.includes(relationName) &&
    //     project.name.includes("schema")
    //   ) {
    //     projectWithPassedRelationNameAndSchema.push(project);
    //   }
    // });

    // const graph = readCachedProjectGraph();
    // const dependenciesProjectNames = Object.keys(graph.dependencies);
    // const relatedModels = [];

    // dependenciesProjectNames.forEach((dependencyProjectName) => {
    //   graph.dependencies[dependencyProjectName].forEach((dependency) => {
    //     if (
    //       dependency.target === projectWithPassedRelationNameAndSchema[0].name
    //     ) {
    //       if (dependency.source.includes("models")) {
    //         relatedModels.push(dependency.source);
    //       }
    //     }
    //   });
    // });

    // /**
    //  * ! May be in wrong order! Here is just for fixing init problem
    //  * Need to be checked by relation schema
    //  */
    // const modelNames = relatedModels.map((model) => {
    //   return model.split("models-")[1].split("-backend")[0];
    // });

    const leftProject = new ModelsCoder({
      tree: this.tree,
      parent: this,
      modelName: unpluralizedModelNames[0],
    });
    this.project.models.push(leftProject);

    const rightProject = new ModelsCoder({
      tree: this.tree,
      parent: this,
      modelName: unpluralizedModelNames[1],
    });

    this.project.models.push(rightProject);
  }

  async createRelationFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
    relationName: string;
    templateName?: string;
  }) {
    await this.setRelatedModels(props.relationName);

    await this.project.relations[0].createRelationFrontendComponentVariant(
      props,
    );
  }

  async removeRelationFrontendComponentVariant(props: {
    variantName: string;
    variantLevel: string;
    relationName: string;
  }) {
    await this.setRelatedModels(props.relationName);

    await this.project.relations[0].removeRelationFrontendComponentVariant(
      props,
    );
  }
}
