import {
  formatFiles,
  generateFiles,
  getProjects,
  names,
  offsetFromRoot,
  ProjectConfiguration,
  Tree,
  updateJson,
  updateProjectConfiguration,
} from "@nx/devkit";
import * as path from "path";
import { CreateModelGeneratorSchema } from "./schema";
import { libraryGenerator as jsLibraryGenerator } from "@nx/js";
import {
  libraryGenerator as reactLibraryGenerator,
  SupportedStyles,
} from "@nx/react";
import { Linter } from "@nx/eslint";
import { ProjectNameAndRootFormat } from "@nx/devkit/src/generators/project-name-and-root-utils";
import pluralize from "pluralize";
import { Coder } from "../../coder/Coder";
import { addToFile, replaceInFile } from "../../utils/file-utils";

// npx nx generate @sps/sps-generator-plugin:create-model --name=project --module=sps-website-builder --dry-run
// npx nx generate @sps/sps-generator-plugin:create-model --name=portfolio --module=sps-website-builder --dry-run
export async function createModelGenerator(
  tree: Tree,
  options: CreateModelGeneratorSchema,
) {
  const modelName = options.name;
  const moduleName = options.module;

  const baseName = `@sps/${moduleName}-models-${modelName}`;
  const baseDirectory = `libs/modules/${moduleName}/models`;

  const coder = new Coder({ tree });
  await coder.createModel({ modelName, moduleName });

  // const baseDirectory = `libs/modules/${module}/relations`;

  // const moduleProject = `@sps/${module}-backend-app`;

  // const backendAppProject = getProjects(tree).get(moduleProject);

  // await createFrontendRootComponent({
  //   tree,
  //   baseDirectory,
  //   baseName,
  //   modelName,
  //   module,
  // });

  // await formatFiles(tree);
}

export default createModelGenerator;

async function createFrontendRootComponent({
  tree,
  baseDirectory,
  baseName,
  modelName,
  module,
}: {
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  modelName: string;
  module: string;
}) {
  const apiLibraryName = `${baseName}-frontend-component`;
  const directory = `${baseDirectory}/${modelName}/frontend/component/root`;
  const modelNamePluralized = modelName;

  const offsetFromRootProject = offsetFromRoot(directory);

  const libraryOptions = {
    name: apiLibraryName,
    directory,
    linter: "none" as Linter.EsLint,
    minimal: true,
    style: "none" as SupportedStyles,
    projectNameAndRootFormat: "as-provided" as ProjectNameAndRootFormat,
    strict: true,
  };

  await reactLibraryGenerator(tree, libraryOptions);

  updateProjectConfiguration(tree, apiLibraryName, {
    root: directory,
    sourceRoot: `${directory}/src`,
    projectType: "library",
    tags: [],
    targets: {
      lint: {},
    },
  });

  generateFiles(
    tree,
    path.join(__dirname, `files/frontend/component/root`),
    directory,
    {
      template: "",
      module,
      model: modelName,
      model_pluralized: modelNamePluralized,
      offset_from_root: offsetFromRootProject,
    },
  );

  updateJson(tree, `${directory}/tsconfig.json`, (json) => {
    json.references = [];
    delete json.files;
    delete json.include;

    return json;
  });

  tree.delete(`${directory}/tsconfig.lib.json`);
}
