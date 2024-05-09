import { Tree } from "@nx/devkit";
import { CreateModelGeneratorSchema } from "./schema";
import { Coder } from "../../coder/Coder";

// npx nx generate @sps/sps-generator-plugin:create-model --name=project --module=sps-website-builder --dry-run
// npx nx generate @sps/sps-generator-plugin:create-model --name=portfolio --module=sps-website-builder --dry-run
export async function createModelGenerator(
  tree: Tree,
  options: CreateModelGeneratorSchema,
) {
  const modelName = options.name;
  const moduleName = options.module;

  const coder = new Coder({ tree });
  await coder.createModel({ modelName, moduleName });
}

export default createModelGenerator;
