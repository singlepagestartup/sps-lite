import { Tree } from "@nx/devkit";
import { SpsCreateModelRelationGeneratorSchema } from "./schema";
import { Coder } from "../../coder/Coder";

// npx nx generate @sps/sps-generator-plugin:sps-create-model-relation --left_model_name=project --left_model_relation_name=projects --right_model_name=portfolio --right_model_relation_name=portfolios --no-interactive --dry-run
// npx nx generate @sps/sps-generator-plugin:sps-create-model-relation --left_model_name=page --left_model_relation_name=pages --right_model_name=layout --right_model_relation_name=layouts --no-interactive --dry-run
export async function spsCreateModelRelationGenerator(
  tree: Tree,
  options: SpsCreateModelRelationGeneratorSchema,
) {
  const coder = new Coder({ tree });
  await coder.createRelations({
    leftModelName: options.left_model_name,
    rightModelName: options.right_model_name,
    leftModelRelationName: options.left_model_relation_name,
    rightModelRelationName: options.right_model_relation_name,
    moduleName: "sps-website-builder",
  });
}

export default spsCreateModelRelationGenerator;
