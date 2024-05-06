import { getProjects, Tree } from "@nx/devkit";
import { SpsDeleteModelRelationGeneratorSchema } from "./schema";
import { Coder } from "../../coder/Coder";

// npx nx generate @sps/sps-generator-plugin:sps-delete-model-relation --left_project_relation_name=pages --right_project_relation_name=slides --left_project=@sps/sps-website-builder-models-slide-backend-schema-relations --right_project=@sps/sps-website-builder-models-page-backend-schema-relations --no-interactive --dry-run
export async function spsDeleteModelRelationGenerator(
  tree: Tree,
  options: SpsDeleteModelRelationGeneratorSchema,
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
  await coder.deleteModelsRelations({
    tree,
    leftProjectRelationName: options.left_project_relation_name,
    rightProjectRelationName: options.right_project_relation_name,
    leftProject,
    rightProject,
  });
}

export default spsDeleteModelRelationGenerator;
