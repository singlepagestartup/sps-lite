import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
} from "@nx/devkit";
import * as path from "path";
import { CreateModelGeneratorSchema } from "./schema";
import { libraryGenerator } from "@nx/js";

export async function createModelGenerator(
  tree: Tree,
  options: CreateModelGeneratorSchema,
) {
  // get name <string>
  // get module [sps-billing, sps-crm, ...]
  // get type [sps-lite, sps, startup]
  //
  // - create model contracts (root, extended)
  const name = options.name;
  const module = options.module;

  // @sps/sps-website-builder-models-button-contracts
  const baseName = `@sps/sps-${module}-models-${name}`;
  const contractsLibraryName = `${baseName}-contracts`;

  // console.log(`🚀 ~ contractsLibraryName:`, contractsLibraryName);

  // libraryGenerator(tree, {
  //   name: options.name,
  // });

  // const projectRoot = `libs/${options.name}`;
  // addProjectConfiguration(tree, options.name, {
  //   root: projectRoot,
  //   projectType: "library",
  //   sourceRoot: `${projectRoot}/src`,
  //   targets: {},
  // });
  // generateFiles(tree, path.join(__dirname, "files"), projectRoot, options);
  // await formatFiles(tree);
}

export default createModelGenerator;
