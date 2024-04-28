import {
  Tree,
  formatFiles,
  generateFiles,
  updateJson,
  updateProjectConfiguration,
} from "@nx/devkit";
import { libraryGenerator as jsLibraryGenerator } from "@nx/js";

export const createSpsJsLibrary = async ({
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
  await jsLibraryGenerator(tree, {
    name,
    bundler: "tsc",
    projectNameAndRootFormat: "as-provided",
    directory: root,
    minimal: true,
    unitTestRunner: "none",
    strict: true,
  });

  generateFiles(tree, generateFilesPath, root, templateParams);

  updateProjectConfiguration(tree, name, {
    root,
    sourceRoot: `${root}/src`,
    projectType: "library",
    tags: [],
    targets: {
      lint: {},
      build: {},
    },
  });

  updateJson(tree, `${root}/tsconfig.lib.json`, (json) => {
    const compilerOptions = json.compilerOptions;
    delete compilerOptions.outDir;

    return json;
  });

  const defaultFileName = `${name}.ts`.replace("@sps/", "");

  updateJson(tree, `${root}/package.json`, (json) => {
    delete json.type;

    return json;
  });

  tree.delete(`${root}/src/lib/${defaultFileName}`);

  await formatFiles(tree);
};
