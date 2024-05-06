import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  getProjects,
  Tree,
} from "@nx/devkit";
import * as path from "path";
import { SpsCreateModelRelationGeneratorSchema } from "./schema";
import { Coder as ModelsBackendSchemaRelationCoder } from "../../coder/project/module/models/backend/schema/relations/relation/Coder";
import { Coder } from "../../coder/Coder";

// npx nx generate @sps/sps-generator-plugin:sps-create-model-relation --left_project_relation_name=pages --right_project_relation_name=slides --left_project=@sps/sps-website-builder-models-slide-backend-schema-relations --right_project=@sps/sps-website-builder-models-page-backend-schema-relations --no-interactive --dry-run
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

  const coder = new Coder({ tree });
  await coder.createModelsRelations({
    tree,
    leftProjectRelationName: options.left_project_relation_name,
    rightProjectRelationName: options.right_project_relation_name,
    leftProject,
    rightProject,
  });

  // const leftProjectRelationBuilder = new ModelsBackendSchemaRelationCoder({
  //   relationName: options.left_project_relation_name,
  //   schemaRootProject: leftProject,
  // });
  // await leftProjectRelationBuilder.create({ tree });

  // console.log(`🚀 ~ options:`, options);
}

export default spsCreateModelRelationGenerator;
