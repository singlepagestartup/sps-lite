import { Tree } from "@nx/devkit";
import { CustomGeneratorSchema } from "./schema";
import { Coder } from "../../coder/Coder";
import { util as createSpsTsLibrary } from "../../utils/create-sps-ts-library";

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
  const modelAdminVariants = [
    {
      name: "default",
      level: "sps-lite",
    },
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
  ];
  const relationAdminVariants = [
    {
      name: "default",
      level: "sps-lite",
    },
    {
      name: "select-right",
      level: "sps-lite",
      template: "select-right",
    },
  ];

  const leftModel = {
    model: {
      name: "metadata",
      frontend: {
        component: {
          variants: modelAdminVariants,
        },
      },
    },
  };

  const rightModel = {
    model: {
      name: "sps-file-storage-module-file",
      isExternal: true,
      frontend: {},
    },
  };

  const relation = {};

  const additions = new Coder({
    tree,
    root: {
      libs: {
        modules: [
          {
            module: {
              name: "sps-website-builder",
              models: [leftModel, rightModel],
              relations: [
                {
                  relation: {
                    name: "metadata-to-sps-file-storage-module-files",
                    frontend: {
                      component: {
                        variants: relationAdminVariants,
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
  // await additions.project.root.project.libs.project.modules[0].project.module.project.models[0].project.model.create();
  await additions.project.root.project.libs.project.modules[0].project.module.project.relations[0].project.relation.project.frontend.project.component.create();

  // await createSpsTsLibrary({
  //   root: "libs/third-parties/telegram",
  //   name: "@sps/third-parties-telegram",
  //   templateParams: {},
  //   tree,
  // });
}

export default customGenerator;
