import {
  formatFiles,
  generateFiles,
  names,
  offsetFromRoot,
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

export async function createModelGenerator(
  tree: Tree,
  options: CreateModelGeneratorSchema,
) {
  const modelName = options.name;
  const module = options.module;

  const baseName = `@sps/${module}-models-${modelName}`;
  const baseDirectory = `libs/modules/${module}/models`;

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
