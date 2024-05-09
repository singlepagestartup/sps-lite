import { Tree } from "@nx/devkit";
import { RemoveModelFrontendComponentVariantGeneratorSchema } from "./schema";
import { Coder } from "../../coder/Coder";

// npx nx generate @sps/sps-generator-plugin:remove-model-frontend-component-variant --name=test-variant --model_name=page --level=sps-lite --module_name=sps-website-builder --no-interactive --dry-run
export async function removeModelFrontendComponentVariantGenerator(
  tree: Tree,
  options: RemoveModelFrontendComponentVariantGeneratorSchema,
) {
  const name = options.name;
  const level = options.level;
  const modelName = options.model_name;
  const moduleName = options.module_name;

  const coder = new Coder({
    tree,
  });

  await coder.removeModelFrontendComponentVariant({
    name,
    level,
    modelName,
    moduleName,
  });
}

export default removeModelFrontendComponentVariantGenerator;
