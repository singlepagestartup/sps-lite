import { Tree, formatFiles } from "@nx/devkit";
import { RelationGeneratorSchema } from "./schema";
import { Coder } from "../../coder/Coder";
import pluralize from "pluralize";

// npx nx generate @sps/sps-generator-plugin:sps-create-model-relation --left_model_name=project --left_model_relation_name=projects --right_model_name=portfolio --right_model_relation_name=portfolios --no-interactive --dry-run
// npx nx generate @sps/sps-generator-plugin:sps-create-model-relation --left_model_name=page --left_model_relation_name=pages --right_model_name=layout --right_model_relation_name=layouts --no-interactive --dry-run
export async function relationGenerator(
  tree: Tree,
  options: RelationGeneratorSchema,
) {
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
