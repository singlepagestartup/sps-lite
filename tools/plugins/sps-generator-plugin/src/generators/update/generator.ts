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
                // {
                //   model: {
                //     name: options.model_name,
                //     frontend: {
                //       component: {
                //         variants: [
                //           {
                //             level: "sps-lite",
                //             name: "admin-form",
                //           },
                //           {
                //             level: "sps-lite",
                //             name: "admin-table",
                //           },
                //           {
                //             level: "sps-lite",
                //             name: "admin-panel",
                //           },
                //         ],
                //       },
                //     },
                //   },
                // },
              ],
              relations: [
                {
                  relation: {
                    name: "pages-to-layouts",
                    frontend: {
                      component: {
                        variants: [
                          {
                            name: "default",
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
  await coder.update();
  // const additions = new Coder({
  //   tree,
  //   root: {
  //     libs: {
  //       modules: [
  //         {
  //           module: {
  //             name: options.module,
  //             models: [
  //               {
  //                 model: {
  //                   name: "layout",
  //                 },
  //               },
  //             ],
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });
  // await additions.project.root.project.libs.project.modules[0].project.module.project.models[0].project.model.project.frontend.project.api.project.model.create();
}

export default updateGenerator;
