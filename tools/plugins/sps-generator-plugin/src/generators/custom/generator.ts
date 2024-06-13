import { Tree } from "@nx/devkit";
import { CustomGeneratorSchema } from "./schema";
import { Coder } from "../../coder/Coder";

/**
 * Custom logic inside the generator
 *
 * npx nx generate @sps/sps-generator-plugin:custom --dry-run
 *
 */
export async function customGenerator(
  tree: Tree,
  options: CustomGeneratorSchema,
) {
  const additions = new Coder({
    tree,
    root: {
      libs: {
        modules: [
          {
            module: {
              name: "sps-notification",
              models: [
                {
                  model: {
                    name: "notification",
                    frontend: {
                      component: {
                        variants: [
                          {
                            template: "admin-form",
                            name: "admin-form",
                            level: "sps-lite",
                          },
                          {
                            template: "admin-form-inputs",
                            name: "admin-form-inputs",
                            level: "sps-lite",
                          },
                          {
                            template: "admin-select-input",
                            name: "admin-select-input",
                            level: "sps-lite",
                          },
                          {
                            template: "admin-table",
                            name: "admin-table",
                            level: "sps-lite",
                          },
                          {
                            template: "admin-table-row",
                            name: "admin-table-row",
                            level: "sps-lite",
                          },
                          { template: "find", name: "find", level: "sps-lite" },
                          {
                            template: "find-by-id",
                            name: "find-by-id",
                            level: "sps-lite",
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

  await additions.project.root.project.libs.project.modules[0].project.module.project.models[0].project.model.create();
}

export default customGenerator;
