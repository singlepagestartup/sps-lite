import { Tree, formatFiles } from "@nx/devkit";

export const addToFile = async ({
  toTop = true,
  pathToFile,
  content,
  tree,
}: {
  toTop: boolean;
  pathToFile: string;
  content: string;
  tree: Tree;
}): Promise<string> => {
  let fileContent = tree.read(pathToFile).toString();

  if (toTop) {
    tree.write(pathToFile, `${content}\n${fileContent}`);
  } else {
    tree.write(pathToFile, `${fileContent}\n${content}`);
  }

  await formatFiles(tree);

  fileContent = tree.read(pathToFile).toString();

  return fileContent;
};

export const replaceInFile = async ({
  tree,
  pathToFile,
  content,
  regex,
  toReplaceString,
}: {
  tree: Tree;
  pathToFile: string;
  content: string;
  regex?: RegExp;
  toReplaceString?: string;
}): Promise<string> => {
  if (!regex && !toReplaceString) {
    throw new Error("Either regex or toReplaceString should be provided");
  }

  let fileContent = tree.read(pathToFile).toString();

  const prevValue = regex
    ? fileContent.match(regex)
    : fileContent.match(toReplaceString);

  if (!prevValue) {
    throw new Error(
      `No expected value "${regex ? regex : toReplaceString}" found in file "${fileContent}"`,
    );
  }

  const updatedContent = fileContent.replace(prevValue[0], content);

  tree.write(pathToFile, updatedContent);

  return tree.read(pathToFile).toString();
};