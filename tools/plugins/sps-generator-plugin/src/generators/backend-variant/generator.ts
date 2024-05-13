import { Tree } from "@nx/devkit";
import { BackendVariantGeneratorSchema } from "./schema";
import { Coder } from "../../coder/Coder";

// npx nx generate @sps/sps-generator-plugin:backend-variant --variant=simple-centered --entity_name=hero-section-block --action=create --level=sps-lite --module=sps-website-builder --no-interactive --dry-run
// npx nx generate @sps/sps-generator-plugin:backend-variant --variant=simple-centered --entity_name=hero-section-block --action=remove --level=sps-lite --module=sps-website-builder --no-interactive --dry-run
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
