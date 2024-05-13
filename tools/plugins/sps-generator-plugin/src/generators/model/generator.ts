import { Tree } from "@nx/devkit";
import { ModelGeneratorSchema } from "./schema";
import { Coder } from "../../coder/Coder";

// npx nx generate @sps/sps-generator-plugin:create-model --name=project --module=sps-website-builder --dry-run
// npx nx generate @sps/sps-generator-plugin:create-model --name=portfolio --module=sps-website-builder --dry-run
export async function modelGenerator(
  tree: Tree,
  options: ModelGeneratorSchema,
) {
  const modelName = options.name;
  const moduleName = options.module;

  const coder = new Coder({ tree });
  if (options.action === "remove") {
    await coder.removeModel({ modelName, moduleName });
  } else {
    await coder.createModel({ modelName, moduleName });
  }
}

export default modelGenerator;
