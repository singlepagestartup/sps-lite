import { Tree, getProjects } from "@nx/devkit";
import { UpdateGeneratorSchema } from "./schema";
import { Coder } from "../../coder/Coder";

/**
 * Update module to the new version
 *
 * sps-website-builder
 * npx nx generate @sps/sps-generator-plugin:update --module_name=sps-website-builder --right_external_models="sps-file-storage-widgets sps-file-storage-module-widgets sps-rbac-module-widgets startup-module-widgets" --no-interactive --dry-run
 *
 */
export async function updateGenerator(
  tree: Tree,
  options: UpdateGeneratorSchema,
) {
  const leftExternalModels = options.left_external_models?.split(" ") || [];
  const rightExternalModels = options.right_external_models?.split(" ") || [];

  const fullProjectSchema = getProjects(tree);

  const moduleName = options.module_name;

  const root = {
    libs: {
      modules: [
        {
          module: {
            name: moduleName,
            models: [],
            relations: [],
          },
        },
      ],
    },
  };

  fullProjectSchema.forEach((project) => {
    const splitted = project.root.split("/");
    if (splitted[0] !== "libs") {
      return;
    }

    if (splitted?.[1] !== "modules") {
      return;
    }

    if (splitted?.[2] !== moduleName) {
      return;
    }

    if (splitted?.[3] === "models") {
      const modelName = splitted?.[4];

      const modelExistsInRoot = root.libs.modules[0].module.models.find(
        (model) => {
          return model.model.name === modelName;
        },
      );

      if (!modelExistsInRoot) {
        root.libs.modules[0].module.models.push({
          model: {
            name: modelName,
          },
        });
      }

      if (splitted?.[7] === "variants") {
        const level = splitted?.[8];
        const variant = splitted?.[9];

        if (!variant || !level) {
          throw new Error("variant or level is missing:" + splitted);
        }

        const model = root.libs.modules[0].module.models.find((model) => {
          return model.model.name === modelName;
        });

        if (!model) {
          throw new Error("model not found:" + modelName);
        }

        if (!model.model.frontend) {
          model.model.frontend = {};
        }

        if (!model.model.frontend.component) {
          model.model.frontend.component = {};
        }

        if (!model.model.frontend.component.variants) {
          model.model.frontend.component.variants = [];
        }

        const variantExists = model.model.frontend.component.variants.find(
          (v: { name: string; level: string }) => {
            return v.name === variant;
          },
        );

        if (!variantExists) {
          model.model.frontend.component.variants.push({
            name: variant,
            level,
          });
        }
      }
    }

    if (splitted?.[3] === "relations") {
      const relationName = splitted?.[4];

      const relationExistsInRoot = root.libs.modules[0].module.relations.find(
        (relation) => {
          return relation.relation.name === relationName;
        },
      );

      if (!relationExistsInRoot) {
        let leftModelIsExternal = false;
        for (const externalModel of leftExternalModels) {
          if (relationName.includes(externalModel)) {
            leftModelIsExternal = true;
          }
        }
        let rightModelIsExternal = false;
        for (const externalModel of rightExternalModels) {
          if (relationName.includes(externalModel)) {
            rightModelIsExternal = true;
          }
        }

        root.libs.modules[0].module.relations.push({
          relation: {
            name: relationName,
            leftModelIsExternal,
            rightModelIsExternal,
          },
        });
      }

      if (splitted?.[7] === "variants") {
        const level = splitted?.[8];
        const variant = splitted?.[9];

        if (!variant || !level) {
          throw new Error("variant or level is missing:" + splitted);
        }

        const relation = root.libs.modules[0].module.relations.find(
          (relation) => {
            return relation.relation.name === relationName;
          },
        );

        if (!relation) {
          throw new Error("relation not found:" + relationName);
        }

        if (!relation.relation.frontend) {
          relation.relation.frontend = {};
        }

        if (!relation.relation.frontend.component) {
          relation.relation.frontend.component = {};
        }

        if (!relation.relation.frontend.component.variants) {
          relation.relation.frontend.component.variants = [];
        }

        const variantExists =
          relation.relation.frontend.component.variants.find(
            (v: { name: string; level: string }) => {
              return v.name === variant;
            },
          );

        if (!variantExists) {
          relation.relation.frontend.component.variants.push({
            name: variant,
            level,
          });
        }
      }
    }
  });

  const coder = new Coder({
    tree,
    root,
  });

  await coder.update();

  // const coder = new Coder({
  //   tree,
  //   root: {
  //     libs: {
  //       modules: [
  //         {
  //           module: {
  //             name: options.module,
  //             models: [
  //               // {
  //               //   model: {
  //               //     name: options.model_name,
  //               //     frontend: {
  //               //       component: {
  //               //         variants: [
  //               //           { name: "admin-form", level: "sps-lite" },
  //               //           { name: "admin-form-inputs", level: "sps-lite" },
  //               //           { name: "admin-panel", level: "sps-lite" },
  //               //           { name: "admin-select-input", level: "sps-lite" },
  //               //           { name: "admin-table", level: "sps-lite" },
  //               //           { name: "admin-table-row", level: "sps-lite" },
  //               //           { name: "default", level: "sps-lite" },
  //               //           { name: "get-by-url", level: "sps-lite" },
  //               //           { name: "get-query-from-url", level: "sps-lite" },
  //               //           { name: "get-url-model-id", level: "sps-lite" },
  //               //         ],
  //               //       },
  //               //     },
  //               //   },
  //               // },
  //             ],
  //             relations: [
  //               {
  //                 relation: {
  //                   name: "buttons-arrays-to-buttons",
  //                   rightModelIsExternal: true,
  //                   // frontend: {
  //                   //   component: {
  //                   //     variants: [
  //                   //       {
  //                   //         name: "default",
  //                   //         level: "sps-lite",
  //                   //       },
  //                   //     ],
  //                   //   },
  //                   // },
  //                 },
  //               },
  //             ],
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });
  // await coder.update();

  // const coder = new Coder({
  //   tree,
  //   root: {
  //     libs: {
  //       modules: [
  //         {
  //           module: {
  //             name: moduleName,
  //             models: [
  //               {
  //                 model: {
  //                   name: "button",
  //                 },
  //               },
  //             ],
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });
  // await coder.update();

  // const models = ["widget"];
  // for (const model of models) {
  //   await crateForgottenModules({
  //     moduleName: moduleName,
  //     tree,
  //     modelName: model,
  //   });
  // }
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
  const additions = new Coder({
    tree,
    root: {
      libs: {
        modules: [
          {
            module: {
              name: moduleName,
              models: [
                {
                  model: {
                    name: modelName,
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });

  await additions.project.root.project.libs.project.modules[0].project.module.project.backend.project.sdk.project.root.create();
  // await additions.project.root.project.libs.project.modules[0].project.module.project.models[0].project.model.project.frontend.project.api.project.model.create();
  // await additions.project.root.project.libs.project.modules[0].project.module.project.models[0].project.model.project.backend.create();
}
