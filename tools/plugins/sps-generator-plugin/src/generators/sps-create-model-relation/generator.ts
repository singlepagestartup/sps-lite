import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  getProjects,
  Tree,
} from "@nx/devkit";
import * as path from "path";
import { SpsCreateModelRelationGeneratorSchema } from "./schema";
import { Builder as ModelsBackendSchemaRelationBuilder } from "../../builders/backend/schema/relations/relation/Builder";

export async function spsCreateModelRelationGenerator(
  tree: Tree,
  options: SpsCreateModelRelationGeneratorSchema,
) {
  if (
    !options.left_project.includes("-backend-schema-relations") ||
    !options.right_project.includes("-backend-schema-relations")
  ) {
    throw new Error("The model must be a *-backend-schema-relations module");
  }

  const projects = getProjects(tree);

  const leftProject = projects.get(options.left_project);
  const rightProject = projects.get(options.right_project);

  // console.log(`🚀 ~ leftProject:`, leftProject);

  const leftProjectRelationBuilder = new ModelsBackendSchemaRelationBuilder({
    name: options.left_project_relation_name,
    schemaRootProject: leftProject,
  });
  await leftProjectRelationBuilder.create({ tree });

  // console.log(`🚀 ~ options:`, options);
}

export default spsCreateModelRelationGenerator;
