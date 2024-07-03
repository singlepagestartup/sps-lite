import { Tree } from "@nx/devkit";
import { CustomGeneratorSchema } from "./schema";
import { Coder } from "../../coder/Coder";
import { util as createSpsTsLibrary } from "../../utils/create-sps-ts-library";
import { IGeneratorProps as IModuleGeneratorProps } from "../../coder/root/libs/modules/Coder";
import { IGeneratorProps as IModelGeneratorProps } from "../../coder/root/libs/modules/[module]/models/Coder";
import { IGeneratorProps as IModelFrontendComponentVariantGeneratorProps } from "../../coder/root/libs/modules/[module]/models/[model]/frontend/component/variants/[level]/[variant]/Coder";
import { IGeneratorProps as IRelationGeneratorProps } from "../../coder/root/libs/modules/[module]/relations/Coder";
import { IGeneratorProps as IRelationFrontendComponentVariantGeneratorProps } from "../../coder/root/libs/modules/[module]/relations/[relation]/frontend/component/variants/[level]/[variant]/Coder";

const relations = [];
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
  const moduleName = "sps-website-builder";
  const leftModelName = "features-section-block";
  const rightModelName = "feature";
  const relationName = "features-section-blocks-to-features";

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
      // {
      //   name: "default",
      //   level: "sps-lite",
      // },
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

  const leftModel: IModelGeneratorProps = {
    model: {
      name: leftModelName,
      backend: {
        schema: {
          relations: {
            relations: [
              {
                name: relationName,
              },
            ],
          },
        },
      },
    },
  };

  const rightModel: IModelGeneratorProps = {
    model: {
      name: rightModelName,
      backend: {
        schema: {
          relations: {
            relations: [
              {
                name: relationName,
              },
            ],
          },
        },
      },
    },
  };

  const relation: IRelationGeneratorProps = {
    relation: {
      name: relationName,
      frontend: {
        component: {
          variants: relationAdminVariants,
        },
      },
    },
  };

  const generateModule: IModuleGeneratorProps = {
    module: {
      name: moduleName,
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
  // await coder.create();

  const relationComponentVariants =
    coder.project.root.project.libs.project.modules[0].project.module.project
      .relations[0].project.relation.project.frontend.project.component.project
      .variants;

  if (relationComponentVariants) {
    for (const variant of relationComponentVariants) {
      await variant.create();
    }
  }

  // await createSpsTsLibrary({
  //   root: "libs/third-parties/telegram",
  //   name: "@sps/third-parties-telegram",
  //   templateParams: {},
  //   tree,
  // });
}

export default customGenerator;
