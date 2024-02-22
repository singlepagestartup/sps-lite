import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
} from "@nx/devkit";
import * as path from "path";
import { ModelFrontendComponentVariantGeneratorSchema } from "./schema";
import type { Linter } from "@nx/eslint";
import { libraryGenerator } from "@nx/react";
import type { SupportedStyles } from "@nx/react/typings/style";
import type { ProjectNameAndRootFormat } from "@nx/devkit/src/generators/project-name-and-root-utils";
import * as fs from "fs/promises";

export async function modelFrontendComponentVariantGenerator(
  tree: Tree,
  options: ModelFrontendComponentVariantGeneratorSchema,
) {
  const workspace = await fs.readdir(__dirname);
  console.log(`🚀 ~ workspace:`, workspace);

  // select module
  // select model
  // select variant type: sps-lite or startup
  //
  // - create react library
  // - create files for the selected type
  // - add component to model libs/modules/<module>/models/<model>/frontend/component/root/src/lib/<variant_type>/variants.ts
  // - add styles to libs/modules/<module>/models/<model>/frontend/component/root/src/lib/<variant_type>/_index.scss
  // - add interface to libs/modules/<module>/models/<model>/frontend/component/root/src/lib/<variant_type>/interface.ts
  console.log(`🚀 ~ tree:`, tree);
  console.log(`🚀 ~ options:`, options);

  const projectRoot = `libs/${options.name}`;

  console.log(`🚀 ~ projectRoot:`, projectRoot);

  const libraryOptions = {
    name: options.name,
    directory: projectRoot,
    linter: "eslint" as Linter.EsLint,
    minimal: true,
    style: "none" as SupportedStyles,
    projectNameAndRootFormat: "as-provided" as ProjectNameAndRootFormat,
  };

  console.log(`🚀 ~ libraryOptions:`, libraryOptions);

  // await libraryGenerator(tree, libraryOptions);

  // addProjectConfiguration(tree, options.name, {
  //   root: projectRoot,
  //   projectType: "library",
  //   sourceRoot: `${projectRoot}/src`,
  //   targets: {},
  // });
  // generateFiles(tree, path.join(__dirname, "files"), projectRoot, options);
  // await formatFiles(tree);
}

export default modelFrontendComponentVariantGenerator;
