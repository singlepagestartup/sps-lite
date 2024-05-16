import { Tree, getProjects, readCachedProjectGraph } from "@nx/devkit";
import { Coder as ModelsCoder } from "./models/Coder";
import { Coder as ModuleCoder } from "../Coder";
import { IEditFieldProps } from "./models/[model]/backend/schema/table/Coder";
import { Coder as RelationsCoder } from "./relations/Coder";
import { Coder as BackendCoder } from "./backend/Coder";

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

    const backend = new BackendCoder({
      tree: this.tree,
      parent: this,
    });

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
      backend,
    };
  }

  async init() {
    //
  }

  async create() {
    await this.project.backend.create();
  }

  async remove() {
    await this.project.backend.remove();
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

  async createRelations(props: {
    leftModelName: string;
    rightModelName: string;
    leftModelIsExternal: boolean;
    rightModelIsExternal: boolean;
  }) {
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

    await this.project.relations[0].init();
    await this.project.relations[0].createRelations();

    if (!props.leftModelIsExternal) {
      await this.project.models[1].createRelation();
    }

    if (!props.rightModelIsExternal) {
      await this.project.models[2].createRelation();
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

  async removeRelations(props: {
    leftModelName: string;
    rightModelName: string;
    leftModelIsExternal: boolean;
    rightModelIsExternal: boolean;
  }) {
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

    await this.project.relations[0].init();

    await this.project.models[2].removeRelation();
    await this.project.models[1].removeRelation();

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
    modelName: string;
    templateName?: string;
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

  async createBackendVariant(props: {
    variantName: string;
    variantLevel: string;
    entityName: string;
  }) {
    await this.project.models[0].createBackendVariant({
      variantLevel: props.variantLevel,
      variantName: props.variantName,
      modelName: props.entityName,
    });
  }

  async removeBackendVariant(props: {
    variantName: string;
    variantLevel: string;
    entityName: string;
  }) {
    await this.project.models[0].removeBackendVariant({
      variantLevel: props.variantLevel,
      variantName: props.variantName,
      modelName: props.entityName,
    });
  }

  async setRelatedModels(relationName: string) {
    const projects = getProjects(this.tree);
    const projectWithPassedRelationNameAndSchema = [];

    projects.forEach((project) => {
      if (
        project.name.includes(relationName) &&
        project.name.includes("schema")
      ) {
        projectWithPassedRelationNameAndSchema.push(project);
      }
    });

    const graph = readCachedProjectGraph();
    const dependenciesProjectNames = Object.keys(graph.dependencies);
    const relatedModels = [];

    dependenciesProjectNames.forEach((dependencyProjectName) => {
      graph.dependencies[dependencyProjectName].forEach((dependency) => {
        if (
          dependency.target === projectWithPassedRelationNameAndSchema[0].name
        ) {
          if (dependency.source.includes("models")) {
            relatedModels.push(dependency.source);
          }
        }
      });
    });

    /**
     * ! May be in wrong order! Here is just for fixing init problem
     * Need to be checked by relation schema
     */
    const modelNames = relatedModels.map((model) => {
      return model.split("models-")[1].split("-backend")[0];
    });

    const leftProject = new ModelsCoder({
      tree: this.tree,
      parent: this,
    });
    await leftProject.init({ modelName: modelNames[0] });
    this.project.models.push(leftProject);

    const rightProject = new ModelsCoder({
      tree: this.tree,
      parent: this,
    });
    await rightProject.init({ modelName: modelNames[1] });

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
