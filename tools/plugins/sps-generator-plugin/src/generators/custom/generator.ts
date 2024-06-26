import { Tree } from "@nx/devkit";
import { CustomGeneratorSchema } from "./schema";
import { Coder } from "../../coder/Coder";
import { util as createSpsTsLibrary } from "../../utils/create-sps-ts-library";
import { IGeneratorProps as IModuleGeneratorProps } from "../../coder/root/libs/modules/Coder";
import { IGeneratorProps as IModelGeneratorProps } from "../../coder/root/libs/modules/[module]/models/Coder";
import { IGeneratorProps as IModelFrontendComponentVariantGeneratorProps } from "../../coder/root/libs/modules/[module]/models/[model]/frontend/component/variants/[level]/[variant]/Coder";
import { IGeneratorProps as IRelationGeneratorProps } from "../../coder/root/libs/modules/[module]/relations/Coder";
import { IGeneratorProps as IRelationFrontendComponentVariantGeneratorProps } from "../../coder/root/libs/modules/[module]/relations/[relation]/frontend/component/variants/[level]/[variant]/Coder";

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
  const modelAdminVariants: IModelFrontendComponentVariantGeneratorProps[] = [
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

  const relationAdminVariants: IRelationFrontendComponentVariantGeneratorProps[] =
    [
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

  const leftModel: IModelGeneratorProps = {
    model: {
      name: "layout",
      backend: {
        schema: {
          relations: {
            relations: [
              {
                name: "layouts-to-widgets",
              },
            ],
          },
        },
      },
    },
  };

  const rightModel: IModelGeneratorProps = {
    model: {
      name: "widget",
      backend: {
        schema: {
          relations: {
            relations: [
              {
                name: "layouts-to-widgets",
              },
            ],
          },
        },
      },
    },
  };

  const relation: IRelationGeneratorProps = {
    relation: {
      name: "layouts-to-widgets",
      frontend: {
        component: {
          variants: relationAdminVariants,
        },
      },
    },
  };

  const generateModule: IModuleGeneratorProps = {
    module: {
      name: "sps-host",
      models: [leftModel, rightModel],
      relations: [relation],
    },
  };

  const modules = [generateModule];

  const coder = new Coder({
    tree,
    root: {
      libs: {
        modules,
      },
    },
  });

  // await additions.project.root.project.libs.project.modules[0].project.module.project.models[0].project.model.create();
  await coder.create();

  // await createSpsTsLibrary({
  //   root: "libs/third-parties/telegram",
  //   name: "@sps/third-parties-telegram",
  //   templateParams: {},
  //   tree,
  // });
}

export default customGenerator;
