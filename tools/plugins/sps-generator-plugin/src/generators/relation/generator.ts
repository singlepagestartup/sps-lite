import { Tree } from "@nx/devkit";
import { RelationGeneratorSchema } from "./schema";
import { Coder } from "../../coder/Coder";

// npx nx generate @sps/sps-generator-plugin:sps-create-model-relation --left_model_name=project --left_model_relation_name=projects --right_model_name=portfolio --right_model_relation_name=portfolios --no-interactive --dry-run
// npx nx generate @sps/sps-generator-plugin:sps-create-model-relation --left_model_name=page --left_model_relation_name=pages --right_model_name=layout --right_model_relation_name=layouts --no-interactive --dry-run
export async function relationGenerator(
  tree: Tree,
  options: RelationGeneratorSchema,
) {
  const coder = new Coder({ tree });
  if (options.action === "remove") {
    await coder.removeRelations({
      leftModelName: options.left_model_name,
      rightModelName: options.right_model_name,
      moduleName: "sps-website-builder",
    });
  } else {
    await coder.createRelations({
      leftModelName: options.left_model_name,
      rightModelName: options.right_model_name,
      moduleName: "sps-website-builder",
    });
  }
}

export default relationGenerator;
