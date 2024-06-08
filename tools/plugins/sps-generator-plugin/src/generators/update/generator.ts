import { Tree } from "@nx/devkit";
import { UpdateGeneratorSchema } from "./schema";
import { Coder } from "../../coder/Coder";

export async function updateGenerator(
  tree: Tree,
  options: UpdateGeneratorSchema,
) {
  const coder = new Coder({
    tree,
    root: {
      libs: {
        modules: [
          {
            module: {
              name: options.module,
              models: [
                {
                  model: {
                    name: options.model_name,
                    frontend: {
                      component: {
                        variants: [
                          {
                            level: "sps-lite",
                            name: "admin-select-input",
                          },
                        ],
                      },
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });

  await coder.update();
}

export default updateGenerator;
