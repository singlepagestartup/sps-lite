import { Tree } from "@nx/devkit";
import { BackendVariantGeneratorSchema } from "./schema";
import { Coder } from "../../coder/Coder";

// npx nx generate @sps/sps-generator-plugin:create-model --name=project --module=sps-website-builder --dry-run
// npx nx generate @sps/sps-generator-plugin:create-model --name=portfolio --module=sps-website-builder --dry-run
export async function backendVariantGenerator(
  tree: Tree,
  options: BackendVariantGeneratorSchema,
) {
  const entityName = options.entity_name;
  const moduleName = options.module;
  const variant = options.variant;
  const level = options.level;

  const coder = new Coder({ tree });
  if (options.action === "remove") {
    await coder.removeBackendVariant({
      entityName,
      moduleName,
      variant,
      level,
    });
  } else {
    await coder.createBackendVariant({
      entityName,
      moduleName,
      variant,
      level,
    });
  }
}

export default backendVariantGenerator;
