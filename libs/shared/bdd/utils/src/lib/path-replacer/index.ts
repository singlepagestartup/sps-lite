const R = require("ramda");

export function pathReplacer({ parent, path }: { parent: any; path: string }) {
  const replacedPath = path.replace(/\[/g, ".").replace(/\]/g, "");
  const result = R.path(replacedPath.split("."), parent);

  return result;
}
