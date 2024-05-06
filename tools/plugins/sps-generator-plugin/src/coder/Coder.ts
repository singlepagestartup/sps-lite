import { ProjectConfiguration, Tree, getProjects } from "@nx/devkit";
import { Coder as ModuleSchemaRelationsCoder } from "./project/module/backend/schema/relations/relation/Coder";
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

    const relationName = `${leftProjectRelationName}-to-${rightProjectRelationName}`;

    const moduleSchemaRelationsCoder = new ModuleSchemaRelationsCoder({
      module: leftProjectModuleName,
      relationName,
    });
    await moduleSchemaRelationsCoder.create({ tree });
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

    const relationName = `${leftProjectRelationName}-to-${rightProjectRelationName}`;

    const moduleSchemaRelationsCoder = new ModuleSchemaRelationsCoder({
      module: leftProjectModuleName,
      relationName,
    });
    await moduleSchemaRelationsCoder.delete({ tree });
  }
}
