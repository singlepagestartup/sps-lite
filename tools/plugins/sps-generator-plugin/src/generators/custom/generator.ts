import { Tree, formatFiles, getProjects } from "@nx/devkit";
import { CustomGeneratorSchema } from "./schema";
import { Coder } from "../../coder/Coder";

/**
 * Update module to the new version
 *
 * sps-website-builder
 * npx nx generate @sps/sps-generator-plugin:custom --dry-run
 *
 */
export async function updateGenerator(
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
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });

  await additions.project.root.project.libs.project.modules[0].project.module.project.backend.project.db.project.root.create();
}

export default updateGenerator;

async function crateForgottenModules({
  tree,
  modelName,
  moduleName,
}: {
  tree: Tree;
  moduleName: string;
  modelName: string;
}) {
  // await additions.project.root.project.libs.project.modules[0].project.module.project.models[0].project.model.project.frontend.project.api.project.model.create();
  // await additions.project.root.project.libs.project.modules[0].project.module.project.models[0].project.model.project.backend.create();
}
