import { CreateModelFrontendComponentVariantGeneratorSchema } from "./schema";
import { Coder } from "../../coder/Coder";
import { Tree } from "@nx/devkit";

// npx nx generate @sps/sps-generator-plugin:create-model-frontend-component-variant --name=test-variant --model_name=page --level=sps-lite --module_name=sps-website-builder --no-interactive --dry-run
export async function createModelFrontendComponentVariantGenerator(
  tree: Tree,
  options: CreateModelFrontendComponentVariantGeneratorSchema,
) {
  const name = options.name;
  const level = options.level;
  const modelName = options.model_name;
  const moduleName = options.module_name;

  const coder = new Coder({
    tree,
  });

  await coder.createModelFrontendComponentVariant({
    name,
    level,
    modelName,
    moduleName,
  });
}

export default createModelFrontendComponentVariantGenerator;
