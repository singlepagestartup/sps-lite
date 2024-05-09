import {
  ProjectConfiguration,
  Tree,
  formatFiles,
  getProjects,
} from "@nx/devkit";
import { Coder as ModuleSchemaRelationsCoder } from "./root/libs/modules/[module]/relations/[relation]/backend/schema/Coder";
import { Coder as ModuleModelBackendSchemaRelationCoder } from "./root/libs/modules/[module]/models/[model]/backend/schema/relations/[relation]/Coder";
import { Coder as ModelFrontendComponentVariantCoder } from "./root/libs/modules/[module]/models/[model]/frontend/component/variants/[level]/[variant]/Coder";
import { util as getModuleByName } from "./utils/get-module-by-name";
import { Coder as RootCoder } from "./root/Coder";
import { IEditFieldProps } from "./root/libs/modules/[module]/models/[model]/backend/schema/table/Coder";
import { IEditRelationsProps } from "./root/libs/modules/[module]/relations/Coder";

/**
 * Main coder class
 */
export class Coder {
  projects: Map<string, ProjectConfiguration>;
  tree: Tree;
  project: {
    root: RootCoder;
  };

  constructor({ tree }: { tree: Tree }) {
    this.projects = getProjects(tree);
    this.tree = tree;

    const root = new RootCoder({
      tree: this.tree,
    });

    this.project = {
      root,
    };
  }

  async createModel({
    moduleName,
    modelName,
  }: {
    moduleName: string;
    modelName: string;
  }) {
    await this.project.root.createModel({
      moduleName,
      modelName,
    });

    await formatFiles(this.tree);
  }

  async removeModel({
    moduleName,
    modelName,
  }: {
    moduleName: string;
    modelName: string;
  }) {
    await this.project.root.removeModel({
      moduleName,
      modelName,
    });

    await formatFiles(this.tree);
  }

  async addField(
    props: IEditFieldProps & {
      moduleName: string;
      modelName: string;
    },
  ) {
    await this.project.root.addField(props);

    await formatFiles(this.tree);
  }

  async removeField(
    props: IEditFieldProps & {
      moduleName: string;
      modelName: string;
    },
  ) {
    await this.project.root.removeField(props);

    await formatFiles(this.tree);
  }

  async createRelations(
    props: IEditRelationsProps & {
      moduleName: string;
      leftModelName: string;
      rightModelName: string;
    },
  ) {
    await this.project.root.createRelations(props);

    await formatFiles(this.tree);
  }

  async removeRelations(
    props: IEditRelationsProps & {
      moduleName: string;
      leftModelName: string;
      rightModelName: string;
    },
  ) {
    await this.project.root.removeRelations(props);

    await formatFiles(this.tree);
  }

  // async createModelsRelations({
  //   tree,
  //   leftProjectRelationName,
  //   rightProjectRelationName,
  //   leftProject,
  //   rightProject,
  // }: {
  //   tree: Tree;
  //   leftProjectRelationName: string;
  //   rightProjectRelationName: string;
  //   leftProject: ProjectConfiguration;
  //   rightProject: ProjectConfiguration;
  // }) {
  //   const leftProjectModuleName = getModuleByName({ name: leftProject.name });
  //   const rightProjectModuleName = getModuleByName({ name: rightProject.name });

  //   if (leftProjectModuleName !== rightProjectModuleName) {
  //     throw new Error("The models must be in the same module");
  //   }

  //   const relationName = `${rightProjectRelationName}-to-${leftProjectRelationName}`;

  //   const leftProjectSchemaProject = this.projects.get(
  //     `${leftProject.name.replace("-backend-schema-relations", "-backend-schema-table")}`,
  //   );
  //   const rightProjectSchemaProject = this.projects.get(
  //     `${rightProject.name.replace("-backend-schema-relations", "-backend-schema-table")}`,
  //   );

  //   if (!leftProjectSchemaProject || !rightProjectSchemaProject) {
  //     throw new Error("The models must be in the same module");
  //   }

  //   const moduleSchemaRelationsCoder = new ModuleSchemaRelationsCoder({
  //     tree,
  //     module: leftProjectModuleName,
  //     leftSchemaProject: leftProjectSchemaProject,
  //     rightSchemaProject: rightProjectSchemaProject,
  //     relationName,
  //   });
  //   const moduleSchemaRelationsProject =
  //     await moduleSchemaRelationsCoder.create({ tree });

  //   const leftModuleModelBackendSchemaRelationCoder =
  //     new ModuleModelBackendSchemaRelationCoder({
  //       tree,
  //       leftSchemaProject: leftProjectSchemaProject,
  //       rightSchemaProject: rightProjectSchemaProject,
  //       leftProjectRelationName,
  //       moduleSchemaRelationsProject: moduleSchemaRelationsProject,
  //     });
  //   await leftModuleModelBackendSchemaRelationCoder.create({ tree });

  //   const rightModuleModelBackendSchemaRelationCoder =
  //     new ModuleModelBackendSchemaRelationCoder({
  //       tree,
  //       leftSchemaProject: rightProjectSchemaProject,
  //       rightSchemaProject: leftProjectSchemaProject,
  //       leftProjectRelationName: rightProjectRelationName,
  //       moduleSchemaRelationsProject: moduleSchemaRelationsProject,
  //     });
  //   await rightModuleModelBackendSchemaRelationCoder.create({ tree });
  // }

  // async deleteModelsRelations({
  //   tree,
  //   leftProjectRelationName,
  //   rightProjectRelationName,
  //   leftProject,
  //   rightProject,
  // }: {
  //   tree: Tree;
  //   leftProjectRelationName: string;
  //   rightProjectRelationName: string;
  //   leftProject: ProjectConfiguration;
  //   rightProject: ProjectConfiguration;
  // }) {
  //   const leftProjectModuleName = getModuleByName({ name: leftProject.name });
  //   const rightProjectModuleName = getModuleByName({ name: rightProject.name });

  //   if (leftProjectModuleName !== rightProjectModuleName) {
  //     throw new Error("The models must be in the same module");
  //   }

  //   const relationName = `${rightProjectRelationName}-to-${leftProjectRelationName}`;

  //   const leftProjectSchemaProject = this.projects.get(
  //     `${leftProject.name.replace("-backend-schema-relations", "-backend-schema-table")}`,
  //   );
  //   const rightProjectSchemaProject = this.projects.get(
  //     `${rightProject.name.replace("-backend-schema-relations", "-backend-schema-table")}`,
  //   );

  //   const module = getModuleByName({ name: leftProject.name });

  //   const libName = `@sps/${module}-backend-schema-relations-${relationName}`;
  //   const moduleSchemaRelationsProject = getProjects(tree).get(libName);

  //   const leftModuleModelBackendSchemaRelationCoder =
  //     new ModuleModelBackendSchemaRelationCoder({
  //       tree,
  //       leftSchemaProject: leftProjectSchemaProject,
  //       rightSchemaProject: rightProjectSchemaProject,
  //       leftProjectRelationName,
  //       moduleSchemaRelationsProject,
  //     });
  //   await leftModuleModelBackendSchemaRelationCoder.delete({ tree });

  //   const rightModuleModelBackendSchemaRelationCoder =
  //     new ModuleModelBackendSchemaRelationCoder({
  //       tree,
  //       leftSchemaProject: rightProjectSchemaProject,
  //       rightSchemaProject: leftProjectSchemaProject,
  //       leftProjectRelationName: rightProjectRelationName,
  //       moduleSchemaRelationsProject,
  //     });
  //   await rightModuleModelBackendSchemaRelationCoder.delete({ tree });

  //   const moduleSchemaRelationsCoder = new ModuleSchemaRelationsCoder({
  //     tree,
  //     module: leftProjectModuleName,
  //     leftSchemaProject: leftProjectSchemaProject,
  //     rightSchemaProject: rightProjectSchemaProject,
  //     relationName,
  //   });
  //   await moduleSchemaRelationsCoder.delete({ tree });
  // }

  async createModelFrontendComponentVariant({
    project,
    type,
    variant,
  }: {
    project: ProjectConfiguration;
    type: string;
    variant: string;
  }) {
    const modelFrontendComponentVariantCoder =
      new ModelFrontendComponentVariantCoder({
        project,
        type,
        variant,
      });

    await modelFrontendComponentVariantCoder.create({ tree: this.tree });
  }
}
