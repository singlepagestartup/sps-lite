import { Tree, formatFiles, generateFiles, offsetFromRoot } from "@nx/devkit";

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
  generateFilesPath?: string;
  templateParams: {
    [key: string]: string | boolean | number | undefined;
  };
}) => {
  if (generateFilesPath) {
    generateFiles(tree, generateFilesPath, root, {
      ...templateParams,
      offset_from_root: offsetFromRoot(root),
      lib_name: name,
    });
  }

  const offsetFromRootProject = offsetFromRoot(root);

  generateFiles(tree, `${__dirname}/files`, root, {
    template: "",
    lib_name: name,
    offset_from_root: offsetFromRootProject,
  });

  const defaultFileName = `${name}.ts`.replace("@sps/", "");

  tree.delete(`${root}/src/lib/${defaultFileName}`);
  tree.delete(`${root}/jest.config.ts`);
  tree.delete(`${root}/package.json`);
  tree.delete(`${root}/tsconfig.spec.json`);
  tree.delete(`${root}/tsconfig.json`);
  tree.delete(`${root}/tsconfig.lib.json`);
  tree.delete(`${root}/.babelrc`);
  tree.delete(`${root}/.eslintrc.json`);
  tree.delete(`${root}/project.json`);
  tree.delete(`${root}/README.md`);

  await formatFiles(tree);
};
