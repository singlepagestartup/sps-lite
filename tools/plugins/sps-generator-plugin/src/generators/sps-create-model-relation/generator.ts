import { Tree } from "@nx/devkit";
import { SpsCreateModelRelationGeneratorSchema } from "./schema";
import { Coder } from "../../coder/Coder";

// npx nx generate @sps/sps-generator-plugin:sps-create-model-relation --left_model_name=project --left_model_relation_name=projects --right_model_name=portfolio --right_model_relation_name=portfolios --no-interactive --dry-run
export async function spsCreateModelRelationGenerator(
  tree: Tree,
  options: SpsCreateModelRelationGeneratorSchema,
) {
  const coder = new Coder({ tree });
  await coder.createRelations({
    leftModelName: options.left_model_name,
    rightModelName: options.right_model_name,
    leftName: options.left_model_relation_name,
    rightName: options.right_model_relation_name,
    moduleName: "sps-website-builder",
  });
}

export default spsCreateModelRelationGenerator;
