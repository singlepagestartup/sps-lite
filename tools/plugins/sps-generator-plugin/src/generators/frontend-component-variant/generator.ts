import { FrontendComponentVariantGeneratorSchema } from "./schema";
import { Coder } from "../../coder/Coder";
import { Tree, formatFiles } from "@nx/devkit";
import pluralize from "pluralize";

// npx nx generate @sps/sps-generator-plugin:frontend-component-variant --name=main-feature --entity_name=widget --action=create --level=startup --module_name=startup --type=model --no-interactive --dry-run
export async function frontendComponentVariantGenerator(
  tree: Tree,
  options: FrontendComponentVariantGeneratorSchema,
) {
  const name = options.name;
  const level = options.level;
  const entityName = options.entity_name;
  const moduleName = options.module_name;
  const template = options.template || undefined;

  if (options.type === "model") {
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
                      name: entityName,
                      frontend: {
                        component: {
                          variants: [
                            {
                              name,
                              level,
                              template,
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

    if (options.action === "remove") {
      await coder.project.root.project.libs.project.modules[0].project.module.project.models[0].project.model.project.frontend.project.component.project.variants?.[0].remove();
    } else {
      await coder.project.root.project.libs.project.modules[0].project.module.project.models[0].project.model.project.frontend.project.component.project.variants?.[0].create();
    }
  } else if (options.type === "relation") {
    const leftModelPluralized = options.entity_name.split("-to-")[0];
    const rightModelPluralized = options.entity_name.split("-to-")[1];

    const leftModelName = pluralize.singular(leftModelPluralized);
    const rightModelName = pluralize.singular(rightModelPluralized);

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
                      name: leftModelName,
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
                      name: rightModelName,
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
                      name: entityName,
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
      await coder.project.root.project.libs.project.modules[0].project.module.project.relations[0].project.relation.project.frontend.project.component.project.variants?.[0].remove();
    } else {
      await coder.project.root.project.libs.project.modules[0].project.module.project.relations[0].project.relation.project.frontend.project.component.project.variants?.[0].create();
    }
  }

  await formatFiles(tree);
}

export default frontendComponentVariantGenerator;
