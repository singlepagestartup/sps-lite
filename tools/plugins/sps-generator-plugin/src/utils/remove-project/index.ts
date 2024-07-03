import { getProjects, Tree } from "@nx/devkit";
import * as nxWorkspace from "@nx/workspace";

export const util = async ({
  root,
  tree,
  name,
}: {
  root: string;
  tree: Tree;
  name: string;
}) => {
  const project = getProjects(tree).get(name);
  const exists = tree.exists(root);

  if (project) {
    await nxWorkspace.removeGenerator(tree, {
      projectName: name,
      skipFormat: true,
      forceRemove: true,
    });

    return true;
  }

  if (exists) {
    tree.delete(root);

    return true;
  }

  return false;
};
