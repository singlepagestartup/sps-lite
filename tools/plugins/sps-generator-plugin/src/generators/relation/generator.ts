import { Tree, formatFiles } from "@nx/devkit";
import { RelationGeneratorSchema } from "./schema";
import { Coder } from "../../coder/Coder";
import pluralize from "pluralize";
import { IGeneratorProps as IModelFrontendComponentVariantGeneratorProps } from "../../coder/root/libs/modules/[module]/relations/[relation]/frontend/component/variants/[level]/[variant]/Coder";

// npx nx generate @sps/sps-generator-plugin:relation --action=create --left_model_name=page --right_model_name=layout --left_model_is_external=false --right_model_is_external=false --module=sps-host --dry-run
export async function relationGenerator(
  tree: Tree,
  options: RelationGeneratorSchema,
) {
  const moduleName = options.module;
  const leftModelName = pluralize(options.left_model_name);
  const rightModelName = pluralize(options.right_model_name);

  const name = `${leftModelName}-to-${rightModelName}`;

  const relationAdminVariants: IModelFrontendComponentVariantGeneratorProps[] =
    [
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
    ];

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

  if (options.action === "remove") {
    const models =
      coder.project.root.project.libs.project.modules[0].project.module.project
        .models;

    for (const model of models) {
      if (model.project.model.isExternal) {
        continue;
      }

      const relations =
        model.project.model.project.backend.project.schema.project.relations
          .project.relations;

      if (relations) {
        for (const relation of relations) {
          await relation.remove();
        }
      }
    }

    const relations =
      coder.project.root.project.libs.project.modules[0].project.module.project
        .relations;
    if (relations) {
      for (const relation of relations) {
        await relation.project.relation.remove();
      }
    }
  } else {
    const models =
      coder.project.root.project.libs.project.modules[0].project.module.project
        .models;

    for (const model of models) {
      if (model.project.model.isExternal) {
        continue;
      }

      const relations =
        model.project.model.project.backend.project.schema.project.relations
          .project.relations;

      if (relations) {
        for (const relation of relations) {
          await relation.create();
        }
      }
    }

    const relations =
      coder.project.root.project.libs.project.modules[0].project.module.project
        .relations;

    if (relations) {
      for (const relation of relations) {
        await relation.project.relation.create();
      }
    }
  }

  await formatFiles(tree);
}

export default relationGenerator;
