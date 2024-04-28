import {
  formatFiles,
  generateFiles,
  offsetFromRoot,
  Tree,
  updateJson,
  updateProjectConfiguration,
} from "@nx/devkit";
import { libraryGenerator as jsLibraryGenerator } from "@nx/js";
import { CreateModuleGeneratorSchema } from "./schema";
import { Linter } from "@nx/eslint";
import {
  libraryGenerator as reactLibraryGenerator,
  SupportedStyles,
} from "@nx/react";
import { ProjectNameAndRootFormat } from "@nx/devkit/src/generators/project-name-and-root-utils";
import path from "path";
import { Hono } from "hono";

export async function createModuleGenerator(
  tree: Tree,
  options: CreateModuleGeneratorSchema,
) {
  const module = options.module;

  const baseName = `@sps/${module}`;
  const baseDirectory = `libs/modules/${module}`;

  // await createFrontendRoot({
  //   tree,
  //   baseName,
  //   baseDirectory,
  //   modelName: module,
  //   module,
  // });
  // await createFrontendComponents({
  //   tree,
  //   baseName,
  //   baseDirectory,
  //   modelName: module,
  //   module,
  // });

  await createBackendSchema({
    tree,
    baseName,
    baseDirectory,
    modelName: module,
    module,
  });

  await createBackendApp({
    tree,
    baseName,
    baseDirectory,
    modelName: module,
    module,
  });

  await formatFiles(tree);
}

export default createModuleGenerator;

async function createFrontendRoot({
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
  const frontendRootLibraryName = `${baseName}-frontend`;
  const directory = `${baseDirectory}/frontend/root`;
  const offsetFromRootProject = offsetFromRoot(directory);

  const libraryOptions = {
    name: frontendRootLibraryName,
    directory,
    linter: "none" as Linter.EsLint,
    minimal: true,
    style: "none" as SupportedStyles,
    projectNameAndRootFormat: "as-provided" as ProjectNameAndRootFormat,
    strict: true,
  };

  await reactLibraryGenerator(tree, libraryOptions);

  updateProjectConfiguration(tree, frontendRootLibraryName, {
    root: directory,
    sourceRoot: `${directory}/src`,
    projectType: "library",
    tags: [],
    targets: {
      lint: {},
    },
  });

  generateFiles(tree, path.join(__dirname, `files/frontend/root`), directory, {
    template: "",
    module,
    model: modelName,
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

async function createFrontendComponents({
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
  const frontendComponentsLibraryName = `${baseName}-frontend-components`;
  const directory = `${baseDirectory}/frontend/components`;
  const offsetFromRootProject = offsetFromRoot(directory);

  const libraryOptions = {
    name: frontendComponentsLibraryName,
    directory,
    linter: "none" as Linter.EsLint,
    minimal: true,
    style: "none" as SupportedStyles,
    projectNameAndRootFormat: "as-provided" as ProjectNameAndRootFormat,
    strict: true,
  };

  await reactLibraryGenerator(tree, libraryOptions);

  updateProjectConfiguration(tree, frontendComponentsLibraryName, {
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
    path.join(__dirname, `files/frontend/components`),
    directory,
    {
      template: "",
      module,
      model: modelName,
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

async function createBackendApp({
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
  const backendAppLibraryName = `${baseName}-backend-app`;
  const directory = `${baseDirectory}/backend/app/root`;

  await jsLibraryGenerator(tree, {
    name: backendAppLibraryName,
    bundler: "tsc",
    projectNameAndRootFormat: "as-provided",
    directory,
    minimal: true,
    unitTestRunner: "none",
    strict: true,
  });

  generateFiles(
    tree,
    path.join(__dirname, `files/backend/app/root`),
    directory,
    {
      template: "",
      module,
    },
  );

  updateProjectConfiguration(tree, backendAppLibraryName, {
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

  const defaultFileName = `${backendAppLibraryName}.ts`.replace("@sps/", "");

  updateJson(tree, `${directory}/package.json`, (json) => {
    delete json.type;

    return json;
  });

  tree.delete(`${directory}/src/lib/${defaultFileName}`);
}

async function createBackendSchema({
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
  const backendAppLibraryName = `${baseName}-backend-schema`;
  const directory = `${baseDirectory}/backend/schema/root`;

  await jsLibraryGenerator(tree, {
    name: backendAppLibraryName,
    bundler: "tsc",
    projectNameAndRootFormat: "as-provided",
    directory,
    minimal: true,
    unitTestRunner: "none",
    strict: true,
  });

  updateProjectConfiguration(tree, backendAppLibraryName, {
    root: directory,
    sourceRoot: `${directory}/src`,
    projectType: "library",
    tags: [],
    targets: {
      lint: {},
      build: {},
    },
  });

  generateFiles(
    tree,
    path.join(__dirname, `files/backend/schema/root`),
    directory,
    {
      template: "",
      module,
    },
  );

  updateJson(tree, `${directory}/tsconfig.lib.json`, (json) => {
    const compilerOptions = json.compilerOptions;
    delete compilerOptions.outDir;

    return json;
  });

  const defaultFileName = `${backendAppLibraryName}.ts`.replace("@sps/", "");

  updateJson(tree, `${directory}/package.json`, (json) => {
    delete json.type;

    return json;
  });

  tree.delete(`${directory}/src/lib/${defaultFileName}`);
}
