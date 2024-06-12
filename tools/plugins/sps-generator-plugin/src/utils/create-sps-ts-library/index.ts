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
    [key: string]: string | boolean | number | undefined;
  };
}) => {
  const createdLibrary = await jsLibraryGenerator(tree, {
    name,
    bundler: "tsc",
    projectNameAndRootFormat: "as-provided",
    directory: root,
    minimal: true,
    linter: "none",
    unitTestRunner: "none",
    strict: true,
  });

  generateFiles(tree, generateFilesPath, root, {
    ...templateParams,
    offset_from_root: offsetFromRoot(root),
    lib_name: name,
  });

  const offsetFromRootProject = offsetFromRoot(root);

  generateFiles(tree, `${__dirname}/files`, root, {
    template: "",
    lib_name: name,
    offset_from_root: offsetFromRootProject,
  });

  updateProjectConfiguration(tree, name, {
    root,
    sourceRoot: `${root}/src`,
    projectType: "library",
    tags: [],
    targets: {
      "tsc:build": {},
    },
  });

  updateJson(tree, `${root}/tsconfig.json`, (json) => {
    json.references = [
      {
        path: "./tsconfig.lib.json",
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
  tree.delete(`${root}/jest.config.ts`);
  tree.delete(`${root}/tsconfig.spec.json`);
  tree.delete(`${root}/.babelrc`);
  tree.delete(`${root}/.eslintrc.json`);

  await formatFiles(tree);

  return createdLibrary;
};
