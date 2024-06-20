import { Tree, formatFiles } from "@nx/devkit";
import { RelationGeneratorSchema } from "./schema";
import { Coder } from "../../coder/Coder";
import pluralize from "pluralize";
// import { IGeneratorProps as IModuleGeneratorProps } from "../../coder/root/libs/modules/Coder";
// import { IGeneratorProps as IModelGeneratorProps } from "../../coder/root/libs/modules/[module]/models/Coder";
// import { IGeneratorProps as IModelFrontendComponentVariantGeneratorProps } from "../../coder/root/libs/modules/[module]/models/[model]/frontend/component/variants/[level]/[variant]/Coder";
// import { IGeneratorProps as IRelationGeneratorProps } from "../../coder/root/libs/modules/[module]/relations/Coder";
// import { IGeneratorProps as IRelationFrontendComponentVariantGeneratorProps } from "../../coder/root/libs/modules/[module]/relations/[relation]/frontend/component/variants/[level]/[variant]/Coder";

// npx nx generate @sps/sps-generator-plugin:relation --action=create --left_model_name=page --right_model_name=layout --left_model_is_external=false --right_model_is_external=false --module=sps-host --dry-run
export async function relationGenerator(
  tree: Tree,
  options: RelationGeneratorSchema,
) {
  /**
   * @todo Implement the relation generator
   */
  // const relationAdminVariants: IRelationFrontendComponentVariantGeneratorProps[] =
  //   [
  //     {
  //       name: "default",
  //       level: "sps-lite",
  //     },
  //     {
  //       name: "select-right",
  //       level: "sps-lite",
  //       template: "select-right",
  //     },
  //   ];

  // const leftModel: IModelGeneratorProps = {
  //   model: {
  //     name: "page",
  //     backend: {
  //       schema: {
  //         relations: {
  //           relations: [
  //             {
  //               name: "pages-to-layouts",
  //             },
  //           ],
  //         },
  //       },
  //     },
  //   },
  // };

  // const rightModel: IModelGeneratorProps = {
  //   model: {
  //     name: "layout",
  //     backend: {
  //       schema: {
  //         relations: {
  //           relations: [
  //             {
  //               name: "pages-to-layouts",
  //             },
  //           ],
  //         },
  //       },
  //     },
  //   },
  // };

  // const relation: IRelationGeneratorProps = {
  //   relation: {
  //     name: "pages-to-layouts",
  //     frontend: {
  //       component: {
  //         variants: relationAdminVariants,
  //       },
  //     },
  //   },
  // };

  // const generateModule: IModuleGeneratorProps = {
  //   module: {
  //     name: "sps-host",
  //     models: [leftModel, rightModel],
  //     relations: [relation],
  //   },
  // };

  // const modules = [generateModule];
  const moduleName = options.module;
  const leftModelName = pluralize(options.left_model_name);
  const rightModelName = pluralize(options.right_model_name);

  const name = `${leftModelName}-to-${rightModelName}`;

  const coder = new Coder({
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
                    name: options.left_model_name,
                    isExternal: options.left_model_is_external,
                    backend: {
                      schema: {
                        relations: {
                          relations: [
                            {
                              name,
                            },
                          ],
                        },
                      },
                    },
                  },
                },
                {
                  model: {
                    name: options.right_model_name,
                    isExternal: options.right_model_is_external,
                    backend: {
                      schema: {
                        relations: {
                          relations: [
                            {
                              name,
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
                    name,
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });

  if (options.action === "remove") {
    const models =
      coder.project.root.project.libs.project.modules[0].project.module.project
        .models;

    for (const model of models) {
      const relations =
        model.project.model.project.backend.project.schema.project.relations
          .project.relations;

      for (const relation of relations) {
        await relation.remove();
      }
    }

    const relations =
      coder.project.root.project.libs.project.modules[0].project.module.project
        .relations;
    for (const relation of relations) {
      await relation.project.relation.remove();
    }
  } else {
    await coder.create();
  }

  await formatFiles(tree);
}

export default relationGenerator;
