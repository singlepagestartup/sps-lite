import { CreateFrontendComponentVariantGeneratorSchema } from "./schema";
import { Coder } from "../../coder/Coder";
import { Tree } from "@nx/devkit";

// npx nx generate @sps/sps-generator-plugin:create-frontend-component-variant --name=test-variant --model_name=page --level=sps-lite --module_name=sps-website-builder --no-interactive --dry-run
export async function createFrontendComponentVariantGenerator(
  tree: Tree,
  options: CreateFrontendComponentVariantGeneratorSchema,
) {
  const name = options.name;
  const level = options.level;
  const entityName = options.entity_name;
  const moduleName = options.module_name;

  const coder = new Coder({
    tree,
  });

  if (options.type === "model") {
    await coder.createModelFrontendComponentVariant({
      name,
      level,
      moduleName,
      modelName: entityName,
    });
  } else if (options.type === "relation") {
    await coder.createRelationFrontendComponentVariant({
      name,
      level,
      moduleName,
      relationName: entityName,
    });
  }
}

export default createFrontendComponentVariantGenerator;
