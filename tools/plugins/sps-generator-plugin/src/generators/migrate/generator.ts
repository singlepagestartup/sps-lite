import { Tree, formatFiles, getProjects } from "@nx/devkit";
import { MigrateGeneratorSchema } from "./schema";
import { Coder } from "../../coder/Coder";

/**
 * Migrate module to the new version
 *
 * sps-website-builder
 * npx nx generate @sps/sps-generator-plugin:migrate --modules=sps-website-builder,startup,sps-file-storage,sps-rbac --right_external_models=sps-file-storage-widgets,sps-file-storage-module-widgets,sps-rbac-module-widgets,startup-module-widgets --no-interactive --dry-run
 *
 * npx nx generate @sps/sps-generator-plugin:migrate --modules=sps-host --no-interactive --dry-run
 */
export async function migrateGenerator(
  tree: Tree,
  options: MigrateGeneratorSchema,
) {
  // const leftExternalModels = options.left_external_models?.split(",") || [];
  // const rightExternalModels = options.right_external_models?.split(",") || [];

  // const fullProjectSchema = getProjects(tree);
  // for (const moduleName of options.modules) {
  //   const root = {
  //     libs: {
  //       modules: [
  //         {
  //           module: {
  //             name: moduleName,
  //             models: [],
  //             relations: [],
  //           },
  //         },
  //       ],
  //     },
  //   };
  //   fullProjectSchema.forEach((project) => {
  //     const splitted = project.root.split("/");
  //     if (splitted[0] !== "libs") {
  //       return;
  //     }
  //     if (splitted?.[1] !== "modules") {
  //       return;
  //     }
  //     if (splitted?.[2] !== moduleName) {
  //       return;
  //     }
  //     if (splitted?.[3] === "models") {
  //       const modelName = splitted?.[4];
  //       const modelExistsInRoot = root.libs.modules[0].module.models.find(
  //         (model) => {
  //           return model.model.name === modelName;
  //         },
  //       );
  //       if (!modelExistsInRoot) {
  //         root.libs.modules[0].module.models.push({
  //           model: {
  //             name: modelName,
  //           },
  //         });
  //       }
  //       if (
  //         splitted?.[6] === "schema" &&
  //         splitted?.[7] === "relations" &&
  //         splitted?.[8] !== "root"
  //       ) {
  //         const relationName = splitted?.[8];
  //         const relationExistsInRoot =
  //           root.libs.modules[0].module.relations.find((relation) => {
  //             return relation.relation.name === relationName;
  //           });
  //         if (!relationExistsInRoot) {
  //           const modelIndex = root.libs.modules[0].module.models.findIndex(
  //             (model) => {
  //               return model.model.name === modelName;
  //             },
  //           );
  //           const model = root.libs.modules[0].module.models[modelIndex];
  //           if (!model) {
  //             throw new Error("model not found:" + modelName);
  //           }
  //           if (!model.model.backend) {
  //             model.model.backend = {};
  //           }
  //           if (!model.model.backend.schema) {
  //             model.model.backend.schema = {};
  //           }
  //           if (!model.model.backend.schema.relations) {
  //             model.model.backend.schema.relations = [];
  //           }
  //           root.libs.modules[0].module.models[
  //             modelIndex
  //           ].model.backend.schema.relations.push({
  //             relation: {
  //               name: relationName,
  //             },
  //           });
  //           const r = root.libs.modules[0].module.models;
  //         }
  //       }
  //       if (splitted?.[7] === "variants") {
  //         const level = splitted?.[8];
  //         const variant = splitted?.[9];
  //         if (!variant || !level) {
  //           throw new Error("variant or level is missing:" + splitted);
  //         }
  //         const model = root.libs.modules[0].module.models.find((model) => {
  //           return model.model.name === modelName;
  //         });
  //         if (!model) {
  //           throw new Error("model not found:" + modelName);
  //         }
  //         if (!model.model.frontend) {
  //           model.model.frontend = {};
  //         }
  //         if (!model.model.frontend.component) {
  //           model.model.frontend.component = {};
  //         }
  //         if (!model.model.frontend.component.variants) {
  //           model.model.frontend.component.variants = [];
  //         }
  //         const variantExists = model.model.frontend.component.variants.find(
  //           (v: { name: string; level: string }) => {
  //             return v.name === variant;
  //           },
  //         );
  //         if (!variantExists) {
  //           model.model.frontend.component.variants.push({
  //             name: variant,
  //             level,
  //           });
  //         }
  //       }
  //     }
  //     if (splitted?.[3] === "relations") {
  //       const relationName = splitted?.[4];
  //       const relationExistsInRoot = root.libs.modules[0].module.relations.find(
  //         (relation) => {
  //           return relation.relation.name === relationName;
  //         },
  //       );
  //       if (!relationExistsInRoot) {
  //         let leftModelIsExternal = false;
  //         for (const externalModel of leftExternalModels) {
  //           if (relationName.includes(externalModel)) {
  //             leftModelIsExternal = true;
  //           }
  //         }
  //         let rightModelIsExternal = false;
  //         for (const externalModel of rightExternalModels) {
  //           if (relationName.includes(externalModel)) {
  //             rightModelIsExternal = true;
  //           }
  //         }
  //         root.libs.modules[0].module.relations.push({
  //           relation: {
  //             name: relationName,
  //             leftModelIsExternal,
  //             rightModelIsExternal,
  //           },
  //         });
  //       }
  //       if (splitted?.[7] === "variants") {
  //         const level = splitted?.[8];
  //         const variant = splitted?.[9];
  //         if (!variant || !level) {
  //           throw new Error("variant or level is missing:" + splitted);
  //         }
  //         const relation = root.libs.modules[0].module.relations.find(
  //           (relation) => {
  //             return relation.relation.name === relationName;
  //           },
  //         );
  //         if (!relation) {
  //           throw new Error("relation not found:" + relationName);
  //         }
  //         if (!relation.relation.frontend) {
  //           relation.relation.frontend = {};
  //         }
  //         if (!relation.relation.frontend.component) {
  //           relation.relation.frontend.component = {};
  //         }
  //         if (!relation.relation.frontend.component.variants) {
  //           relation.relation.frontend.component.variants = [];
  //         }
  //         const variantExists =
  //           relation.relation.frontend.component.variants.find(
  //             (v: { name: string; level: string }) => {
  //               return v.name === variant;
  //             },
  //           );
  //         if (!variantExists) {
  //           relation.relation.frontend.component.variants.push({
  //             name: variant,
  //             level,
  //           });
  //         }
  //       }
  //     }
  //   });

  //   const coder = new Coder({
  //     tree,
  //     root,
  //   });

  //   await coder.migrate({
  //     version: "0.1.0",
  //   });

  //   // await crateForgottenModules({
  //   //   moduleName,
  //   //   tree,
  //   //   modelName: "widget",
  //   // });
  // }

  // await formatFiles(tree);

  const relations = [
    {
      name: "buttons-arrays-to-buttons",
      left: {
        name: "buttons-array",
      },
      right: {
        name: "button",
      },
    },
    {
      name: "footer-blocks-to-buttons-arrays",
      left: {
        name: "footer-block",
      },
      right: {
        name: "buttons-array",
      },
    },
    {
      name: "hero-section-blocks-to-buttons-arrays",
      left: {
        name: "hero-section-block",
      },
      right: {
        name: "buttons-array",
      },
    },
    {
      name: "navbar-blocks-to-buttons-arrays",
      left: {
        name: "navbar-block",
      },
      right: {
        name: "buttons-array",
      },
    },
    {
      name: "slides-to-buttons-arrays",
      left: {
        name: "slide",
      },
      right: {
        name: "buttons-array",
      },
    },
    {
      name: "features-section-blocks-to-features",
      left: {
        name: "features-section-block",
      },
      right: {
        name: "feature",
      },
    },
    {
      name: "features-section-blocks-to-features",
      left: {
        name: "features-section-block",
      },
      right: {
        name: "feature",
      },
    },
    {
      name: "widgets-to-features-section-blocks",
      left: {
        name: "widget",
      },
      right: {
        name: "features-section-block",
      },
    },
    {
      name: "footers-to-widgets",
      left: {
        name: "footer",
      },
      right: {
        name: "widget",
      },
    },
    {
      name: "layouts-to-footers",
      left: {
        name: "layout",
      },
      right: {
        name: "footer",
      },
    },
    {
      name: "footer-blocks-to-buttons-arrays",
      left: {
        name: "footer-block",
      },
      right: {
        name: "buttons-array",
      },
    },
    {
      name: "footer-blocks-to-logotypes",
      left: {
        name: "footer-block",
      },
      right: {
        name: "logotype",
      },
    },
    {
      name: "widgets-to-footer-blocks",
      left: {
        name: "widget",
      },
      right: {
        name: "footer-block",
      },
    },
    {
      name: "hero-section-blocks-to-buttons-arrays",
      left: {
        name: "hero-section-block",
      },
      right: {
        name: "buttons-array",
      },
    },
    {
      name: "widgets-to-hero-section-blocks",
      left: {
        name: "widget",
      },
      right: {
        name: "hero-section-block",
      },
    },
    {
      name: "layouts-to-footers",
      left: {
        name: "layout",
      },
      right: {
        name: "footer",
      },
    },
    {
      name: "layouts-to-navbars",
      left: {
        name: "layout",
      },
      right: {
        name: "navbar",
      },
    },
    {
      name: "pages-to-layouts",
      left: {
        name: "page",
      },
      right: {
        name: "layout",
      },
    },
    {
      name: "footer-blocks-to-logotypes",
      left: {
        name: "footer-block",
      },
      right: {
        name: "logotype",
      },
    },
    {
      name: "navbar-blocks-to-logotypes",
      left: {
        name: "navbar-block",
      },
      right: {
        name: "logotype",
      },
    },
    {
      name: "pages-to-metadata",
      left: {
        name: "page",
      },
      right: {
        name: "metadata",
      },
    },
    {
      name: "layouts-to-navbars",
      left: {
        name: "layout",
      },
      right: {
        name: "navbar",
      },
    },
    {
      name: "navbars-to-widgets",
      left: {
        name: "navbar",
      },
      right: {
        name: "widget",
      },
    },
    {
      name: "navbar-blocks-to-buttons-arrays",
      left: {
        name: "navbar-block",
      },
      right: {
        name: "buttons-array",
      },
    },
    {
      name: "navbar-blocks-to-logotypes",
      left: {
        name: "navbar-block",
      },
      right: {
        name: "logotype",
      },
    },
    {
      name: "widgets-to-navbar-blocks",
      left: {
        name: "widget",
      },
      right: {
        name: "navbar-block",
      },
    },
    {
      name: "pages-to-layouts",
      left: {
        name: "page",
      },
      right: {
        name: "layout",
      },
    },
    {
      name: "pages-to-metadata",
      left: {
        name: "page",
      },
      right: {
        name: "metadata",
      },
    },
    {
      name: "pages-to-widgets",
      left: {
        name: "page",
      },
      right: {
        name: "widget",
      },
    },
    {
      name: "sliders-to-slides",
      left: {
        name: "slider",
      },
      right: {
        name: "slide",
      },
    },
    {
      name: "slides-to-buttons-arrays",
      left: {
        name: "slide",
      },
      right: {
        name: "buttons-array",
      },
    },
    {
      name: "slider-blocks-to-sliders",
      left: {
        name: "slider-block",
      },
      right: {
        name: "slider",
      },
    },
    {
      name: "sliders-to-slides",
      left: {
        name: "slider",
      },
      right: {
        name: "slide",
      },
    },
    {
      name: "slider-blocks-to-sliders",
      left: {
        name: "slider-block",
      },
      right: {
        name: "slider",
      },
    },
    {
      name: "widgets-to-slider-blocks",
      left: {
        name: "widget",
      },
      right: {
        name: "slider-block",
      },
    },
    {
      name: "footers-to-widgets",
      left: {
        name: "footer",
      },
      right: {
        name: "widget",
      },
    },
    {
      name: "navbars-to-widgets",
      left: {
        name: "navbar",
      },
      right: {
        name: "widget",
      },
    },
    {
      name: "pages-to-widgets",
      left: {
        name: "page",
      },
      right: {
        name: "widget",
      },
    },
    {
      name: "widgets-to-features-section-blocks",
      left: {
        name: "widget",
      },
      right: {
        name: "features-section-block",
      },
    },
    {
      name: "widgets-to-footer-blocks",
      left: {
        name: "widget",
      },
      right: {
        name: "footer-block",
      },
    },
    {
      name: "widgets-to-hero-section-blocks",
      left: {
        name: "widget",
      },
      right: {
        name: "hero-section-block",
      },
    },
    {
      name: "widgets-to-navbar-blocks",
      left: {
        name: "widget",
      },
      right: {
        name: "navbar-block",
      },
    },
    {
      name: "widgets-to-slider-blocks",
      left: {
        name: "widget",
      },
      right: {
        name: "slider-block",
      },
    },
  ];

  for (const relation of relations) {
    const coder = new Coder({
      tree,
      root: {
        libs: {
          modules: [
            {
              module: {
                name: "sps-website-builder",
                models: [
                  {
                    model: {
                      name: relation.left.name,
                      backend: {
                        schema: {
                          relations: {
                            relations: [
                              {
                                name: relation.name,
                              },
                            ],
                          },
                        },
                      },
                    },
                  },
                  {
                    model: {
                      name: relation.right.name,
                      backend: {
                        schema: {
                          relations: {
                            relations: [
                              {
                                name: relation.name,
                              },
                            ],
                          },
                        },
                      },
                    },
                  },
                ],
                relations: [
                  {
                    relation: {
                      name: relation.name,
                      frontend: {
                        component: {
                          variants: [
                            {
                              name: "default",
                              level: "sps-lite",
                            },
                            {
                              name: "select-right",
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

    await coder.project.root.project.libs.project.modules[0].migrate({
      version: "0.1.0",
    });
  }
}

export default migrateGenerator;

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

  await additions.project.root.project.libs.project.modules[0].project.module.project.backend.project.db.project.root.create();
  // await additions.project.root.project.libs.project.modules[0].project.module.project.models[0].project.model.project.frontend.project.api.project.model.create();
  // await additions.project.root.project.libs.project.modules[0].project.module.project.models[0].project.model.project.backend.create();
}
