import {
  Tree,
  generateFiles,
  offsetFromRoot,
  updateJson,
  updateProjectConfiguration,
} from "@nx/devkit";
import { Linter } from "@nx/eslint";
import { ProjectNameAndRootFormat } from "@nx/devkit/src/generators/project-name-and-root-utils";
import {
  libraryGenerator as reactLibraryGenerator,
  SupportedStyles,
} from "@nx/react";

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
  const offsetFromRootProject = offsetFromRoot(root);
  const jestPreset = "jest.client-preset.js";

  await reactLibraryGenerator(tree, {
    name,
    directory: root,
    component: false,
    linter: "none" as Linter.EsLint,
    minimal: true,
    style: "none" as SupportedStyles,
    projectNameAndRootFormat: "as-provided" as ProjectNameAndRootFormat,
    strict: true,
  });

  updateProjectConfiguration(tree, name, {
    root,
    sourceRoot: `${root}/src`,
    projectType: "library",
    tags: [],
    targets: {
      lint: {},
      "tsc:build": {},
    },
  });

  generateFiles(tree, generateFilesPath, root, templateParams);

  generateFiles(tree, `${__dirname}/files`, root, {
    template: "",
    lib_name: name,
    offset_from_root: offsetFromRootProject,
    jest_preset: jestPreset,
  });

  updateJson(tree, `${root}/tsconfig.json`, (json) => {
    delete json.files;
    delete json.include;

    json.references = [
      {
        path: "./tsconfig.lib.json",
      },
    ];

    return json;
  });

  tree.delete(`${root}/tsconfig.lib.json`);
};
