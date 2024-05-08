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
import { addToFile, replaceInFile } from "../../utils/file-utils";
import { Coder as ModelBackendAppCoder } from "../../coder/root/libs/modules/[module]/models/[model]/backend/app/root/Coder";
import { Coder as ModelBackendSchemaCoder } from "../../coder/root/libs/modules/[module]/models/[model]/backend/schema/Coder";
import { Coder as ModelBackendCoder } from "../../coder/root/libs/modules/[module]/models/[model]/backend/Coder";

export async function createModelGenerator(
  tree: Tree,
  options: CreateModelGeneratorSchema,
) {
  const modelName = options.name;
  const module = options.module;

  const baseName = `@sps/${module}-models-${modelName}`;
  const baseDirectory = `libs/modules/${module}/models`;
  // const baseDirectory = `libs/modules/${module}/relations`;

  // const moduleProject = `@sps/${module}-backend-app`;

  // const backendAppProject = getProjects(tree).get(moduleProject);

  // const backendBuilder = new ModelBackendCoder({
  //   modelName,
  //   module,
  //   tree,
  // });
  // await backendBuilder.create({ tree });

  await createContracts({
    tree,
    baseName,
    baseDirectory,
    modelName,
    type: "root",
    module,
  });

  await createContracts({
    tree,
    baseName,
    baseDirectory,
    modelName,
    type: "extended",
    module,
  });

  await createFrontendApi({
    tree,
    baseDirectory,
    baseName,
    modelName,
    module,
    origin: "server",
  });

  await createFrontendApi({
    tree,
    baseDirectory,
    baseName,
    modelName,
    module,
    origin: "client",
  });

  await createFrontendRedux({
    tree,
    baseDirectory,
    baseName,
    modelName,
    module,
  });

  await createFrontendRootComponent({
    tree,
    baseDirectory,
    baseName,
    modelName,
    module,
  });

  await formatFiles(tree);
}

export default createModelGenerator;

async function createContracts({
  tree,
  baseName,
  baseDirectory,
  modelName,
  type,
  module,
}: {
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  modelName: string;
  type: "root" | "extended";
  module: string;
}) {
  if (!type) {
    throw new Error("type is required");
  }

  const contractsLibraryName = `${baseName}-contracts${type === "extended" ? "-extended" : ""}`;
  const directory = `${baseDirectory}/${modelName}/contracts/${type}`;

  const offsetFromRootProject = offsetFromRoot(directory);

  await jsLibraryGenerator(tree, {
    name: contractsLibraryName,
    bundler: "tsc",
    projectNameAndRootFormat: "as-provided",
    directory,
    minimal: true,
    unitTestRunner: "none",
    strict: true,
  });

  generateFiles(
    tree,
    path.join(__dirname, `files/contracts/${type}`),
    directory,
    {
      template: "",
      module,
      model: modelName,
      offset_from_root: offsetFromRootProject,
    },
  );

  updateProjectConfiguration(tree, contractsLibraryName, {
    root: directory,
    sourceRoot: `${directory}/src`,
    projectType: "library",
    tags: [],
    targets: {
      lint: {},
      build: {},
    },
  });

  updateJson(tree, `${directory}/tsconfig.lib.json`, (json) => {
    const compilerOptions = json.compilerOptions;
    delete compilerOptions.outDir;

    return json;
  });

  const defaultFileName = `${contractsLibraryName}.ts`.replace("@sps/", "");

  updateJson(tree, `${directory}/package.json`, (json) => {
    delete json.type;

    return json;
  });

  tree.delete(`${directory}/src/lib/${defaultFileName}`);
}

async function createFrontendApi({
  tree,
  baseDirectory,
  baseName,
  modelName,
  module,
  origin,
}: {
  tree: Tree;
  baseName: string;
  baseDirectory: string;
  modelName: string;
  module: string;
  origin: "server" | "client";
}) {
  const apiLibraryName = `${baseName}-frontend-api-${origin}`;
  const directory = `${baseDirectory}/${modelName}/frontend/api/${origin}`;
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
    path.join(__dirname, `files/frontend/api/${origin}`),
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

async function createFrontendRedux({
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
  const apiLibraryName = `${baseName}-frontend-redux`;
  const directory = `${baseDirectory}/${modelName}/frontend/redux`;
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

  generateFiles(tree, path.join(__dirname, `files/frontend/redux`), directory, {
    template: "",
    module,
    model: modelName,
    model_pluralized: modelNamePluralized,
    offset_from_root: offsetFromRootProject,
  });

  updateJson(tree, `${directory}/tsconfig.json`, (json) => {
    json.references = [];
    delete json.files;
    delete json.include;

    return json;
  });

  tree.delete(`${directory}/tsconfig.lib.json`);
}

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
