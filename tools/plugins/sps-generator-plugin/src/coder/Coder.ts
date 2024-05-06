import { ProjectConfiguration, Tree, getProjects } from "@nx/devkit";
import { Coder as ModuleSchemaRelationsCoder } from "./project/module/backend/schema/relations/relation/Coder";
import { Coder as ModuleModelBackendSchemaRelationCoder } from "./project/module/models/backend/schema/relations/relation/Coder";
import { util as getModuleByName } from "./utils/get-module-by-name";

export class Coder {
  projects: Map<string, ProjectConfiguration>;

  constructor({ tree }: { tree: Tree }) {
    this.projects = getProjects(tree);
  }

  async createModelsRelations({
    tree,
    leftProjectRelationName,
    rightProjectRelationName,
    leftProject,
    rightProject,
  }: {
    tree: Tree;
    leftProjectRelationName: string;
    rightProjectRelationName: string;
    leftProject: ProjectConfiguration;
    rightProject: ProjectConfiguration;
  }) {
    const leftProjectModuleName = getModuleByName({ name: leftProject.name });
    const rightProjectModuleName = getModuleByName({ name: rightProject.name });

    if (leftProjectModuleName !== rightProjectModuleName) {
      throw new Error("The models must be in the same module");
    }

    const relationName = `${rightProjectRelationName}-to-${leftProjectRelationName}`;

    const leftProjectSchemaProject = this.projects.get(
      `${leftProject.name.replace("-backend-schema-relations", "-backend-schema-table")}`,
    );
    const rightProjectSchemaProject = this.projects.get(
      `${rightProject.name.replace("-backend-schema-relations", "-backend-schema-table")}`,
    );

    if (!leftProjectSchemaProject || !rightProjectSchemaProject) {
      throw new Error("The models must be in the same module");
    }

    const moduleSchemaRelationsCoder = new ModuleSchemaRelationsCoder({
      tree,
      module: leftProjectModuleName,
      leftSchemaProject: leftProjectSchemaProject,
      rightSchemaProject: rightProjectSchemaProject,
      relationName,
    });
    const moduleSchemaRelationsProject =
      await moduleSchemaRelationsCoder.create({ tree });

    const moduleModelBackendSchemaRelationCoder =
      new ModuleModelBackendSchemaRelationCoder({
        tree,
        leftSchemaProject: leftProjectSchemaProject,
        rightSchemaProject: rightProjectSchemaProject,
        leftProjectRelationName,
        moduleSchemaRelationsProject: moduleSchemaRelationsProject,
      });
    await moduleModelBackendSchemaRelationCoder.create({ tree });
  }

  async deleteModelsRelations({
    tree,
    leftProjectRelationName,
    rightProjectRelationName,
    leftProject,
    rightProject,
  }: {
    tree: Tree;
    leftProjectRelationName: string;
    rightProjectRelationName: string;
    leftProject: ProjectConfiguration;
    rightProject: ProjectConfiguration;
  }) {
    const leftProjectModuleName = getModuleByName({ name: leftProject.name });
    const rightProjectModuleName = getModuleByName({ name: rightProject.name });

    if (leftProjectModuleName !== rightProjectModuleName) {
      throw new Error("The models must be in the same module");
    }

    const relationName = `${rightProjectRelationName}-to-${leftProjectRelationName}`;

    const leftProjectSchemaProject = this.projects.get(
      `${leftProject.name.replace("-backend-schema-relations", "-backend-schema-table")}`,
    );
    const rightProjectSchemaProject = this.projects.get(
      `${rightProject.name.replace("-backend-schema-relations", "-backend-schema-table")}`,
    );

    const module = getModuleByName({ name: leftProject.name });

    const libName = `@sps/${module}-backend-schema-relations-${relationName}`;
    const moduleSchemaRelationsProject = getProjects(tree).get(libName);

    const moduleModelBackendSchemaRelationCoder =
      new ModuleModelBackendSchemaRelationCoder({
        tree,
        leftSchemaProject: leftProjectSchemaProject,
        rightSchemaProject: rightProjectSchemaProject,
        leftProjectRelationName,
        moduleSchemaRelationsProject,
      });
    await moduleModelBackendSchemaRelationCoder.delete({ tree });

    const moduleSchemaRelationsCoder = new ModuleSchemaRelationsCoder({
      tree,
      module: leftProjectModuleName,
      leftSchemaProject: leftProjectSchemaProject,
      rightSchemaProject: rightProjectSchemaProject,
      relationName,
    });
    await moduleSchemaRelationsCoder.delete({ tree });
  }
}
