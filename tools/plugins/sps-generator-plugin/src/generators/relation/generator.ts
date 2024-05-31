import { Tree } from "@nx/devkit";
import { RelationGeneratorSchema } from "./schema";
import { Coder } from "../../coder/Coder";

// npx nx generate @sps/sps-generator-plugin:sps-create-model-relation --left_model_name=project --left_model_relation_name=projects --right_model_name=portfolio --right_model_relation_name=portfolios --no-interactive --dry-run
// npx nx generate @sps/sps-generator-plugin:sps-create-model-relation --left_model_name=page --left_model_relation_name=pages --right_model_name=layout --right_model_relation_name=layouts --no-interactive --dry-run
export async function relationGenerator(
  tree: Tree,
  options: RelationGeneratorSchema,
) {
  const moduleName = options.module;

  const coder = new Coder({
    tree,
    moduleName,
    models: [
      {
        name: options.left_model_name,
        isExternal: options.left_model_is_external,
      },
      {
        name: options.right_model_name,
        isExternal: options.right_model_is_external,
      },
    ],
    relations: [{}],
  });

  if (options.action === "remove") {
    await coder.removeRelations();
  } else {
    await coder.createRelations();
  }
}

export default relationGenerator;
