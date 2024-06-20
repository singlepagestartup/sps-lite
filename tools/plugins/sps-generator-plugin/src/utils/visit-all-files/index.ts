import { Tree } from "@nx/devkit";

/**
 * Run the callback on all files inside the specified path
 */
export function util(
  tree: Tree,
  path: string,
  callback: (filePath: string) => void,
) {
  tree.children(path).forEach((fileName) => {
    const filePath = `${path}/${fileName}`;
    if (!tree.isFile(filePath)) {
      util(tree, filePath, callback);
    } else {
      callback(filePath);
    }
  });
}
