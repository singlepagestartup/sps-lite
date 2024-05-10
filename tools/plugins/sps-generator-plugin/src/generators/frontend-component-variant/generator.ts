import { FrontendComponentVariantGeneratorSchema } from "./schema";
import { Coder } from "../../coder/Coder";
import { Tree } from "@nx/devkit";

// npx nx generate @sps/sps-generator-plugin:frontend-component-variant --name=get-layout --entity_name=pages-to-layouts --action=create --level=sps-lite --module_name=sps-website-builder --type=relation --no-interactive --dry-run
export async function frontendComponentVariantGenerator(
  tree: Tree,
  options: FrontendComponentVariantGeneratorSchema,
) {
  const name = options.name;
  const level = options.level;
  const entityName = options.entity_name;
  const moduleName = options.module_name;

  const coder = new Coder({
    tree,
  });

  if (options.type === "model") {
    if (options.action === "remove") {
      await coder.removeModelFrontendComponentVariant({
        name,
        level,
        moduleName,
        modelName: entityName,
      });
    } else {
      await coder.createModelFrontendComponentVariant({
        name,
        level,
        moduleName,
        modelName: entityName,
      });
    }
  } else if (options.type === "relation") {
    if (options.action === "remove") {
      await coder.removeRelationFrontendComponentVariant({
        name,
        level,
        moduleName,
        relationName: entityName,
      });
    } else {
      await coder.createRelationFrontendComponentVariant({
        name,
        level,
        moduleName,
        relationName: entityName,
      });
    }
  }
}

export default frontendComponentVariantGenerator;
