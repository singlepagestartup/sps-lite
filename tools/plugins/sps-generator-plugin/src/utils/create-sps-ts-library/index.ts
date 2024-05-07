import {
  Tree,
  formatFiles,
  generateFiles,
  offsetFromRoot,
  updateJson,
  updateProjectConfiguration,
} from "@nx/devkit";
import { libraryGenerator as jsLibraryGenerator } from "@nx/js";

export const util = async ({
  root,
  name,
  tree,
  generateFilesPath,
  templateParams,
}: {
  root: string;
  name: string;
  tree: Tree;
  generateFilesPath: string;
  templateParams: {
    [key: string]: string;
  };
}) => {
  const createdLibrary = await jsLibraryGenerator(tree, {
    name,
    bundler: "tsc",
    projectNameAndRootFormat: "as-provided",
    directory: root,
    minimal: true,
    unitTestRunner: "none",
    strict: true,
  });

  generateFiles(tree, generateFilesPath, root, templateParams);

  const offsetFromRootProject = offsetFromRoot(root);

  const jestPreset = name.includes("frontend")
    ? "jest.client-preset.js"
    : "jest.server-preset.js";

  generateFiles(tree, `${__dirname}/files`, root, {
    template: "",
    lib_name: name,
    offset_from_root: offsetFromRootProject,
    jest_preset: jestPreset,
  });

  updateProjectConfiguration(tree, name, {
    root,
    sourceRoot: `${root}/src`,
    projectType: "library",
    tags: [],
    targets: {
      lint: {},
      build: {},
      "test:watch": {},
    },
  });

  updateJson(tree, `${root}/tsconfig.lib.json`, (json) => {
    const compilerOptions = json.compilerOptions;
    delete compilerOptions.outDir;

    return json;
  });

  updateJson(tree, `${root}/tsconfig.json`, (json) => {
    json.references = [
      ...json.references,
      {
        path: "./tsconfig.spec.json",
      },
    ];

    return json;
  });

  const defaultFileName = `${name}.ts`.replace("@sps/", "");

  updateJson(tree, `${root}/package.json`, (json) => {
    delete json.type;

    return json;
  });

  tree.delete(`${root}/src/lib/${defaultFileName}`);

  await formatFiles(tree);

  return createdLibrary;
};
