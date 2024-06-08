import { Tree } from "@nx/devkit";
import { ModuleGeneratorSchema } from "./schema";
import { Coder } from "../../coder/Coder";

export async function moduleGenerator(
  tree: Tree,
  options: ModuleGeneratorSchema,
) {
  const moduleName = options.module;

  const coder = new Coder({
    tree,
    root: {
      libs: {
        modules: [
          {
            module: {
              name: moduleName,
            },
          },
        ],
      },
    },
  });

  if (options.action === "remove") {
    await coder.removeModule();
  } else {
    await coder.createModule();
  }
}

export default moduleGenerator;
