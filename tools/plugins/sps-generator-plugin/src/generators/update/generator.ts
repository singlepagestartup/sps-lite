import { Tree } from "@nx/devkit";
import { UpdateGeneratorSchema } from "./schema";
import { Coder } from "../../coder/Coder";

export async function updateGenerator(
  tree: Tree,
  options: UpdateGeneratorSchema,
) {
  const coder = new Coder({
    tree,
    moduleName: options.module,
    models: [
      {
        name: options.model_name,
      },
    ],
  });

  await coder.update();
}

export default updateGenerator;
