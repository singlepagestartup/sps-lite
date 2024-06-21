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
  let fileContent = tree.read(pathToFile)?.toString();

  if (!fileContent) {
    throw new Error(`File "${pathToFile}" not found`);
  }

  if (toTop) {
    tree.write(pathToFile, `${content}\n${fileContent}`);
  } else {
    tree.write(pathToFile, `${fileContent}\n${content}`);
  }

  fileContent = tree.read(pathToFile)?.toString();

  if (!fileContent) {
    throw new Error(`File "${pathToFile}" not found`);
  }

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

  const fileContent = tree.read(pathToFile)?.toString();

  if (!fileContent) {
    throw new Error(`File "${pathToFile}" not found`);
  }

  const prevValue = regex
    ? fileContent.match(regex)
    : toReplaceString
      ? fileContent.match(toReplaceString)
      : null;

  if (!prevValue) {
    throw new Error(
      `No expected value "${regex ? regex : toReplaceString}" found in file "${fileContent}"`,
    );
  }

  const updatedContent = fileContent.replace(prevValue[0], content);

  tree.write(pathToFile, updatedContent);

  const fileContentAfter = tree.read(pathToFile)?.toString();

  if (!fileContentAfter) {
    throw new Error(`File "${pathToFile}" not found`);
  }

  return fileContentAfter;
};
