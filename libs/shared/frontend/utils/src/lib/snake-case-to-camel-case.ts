export function snakeCaseToCamelCase(str: string) {
  if (str[0] === "_") {
    return str;
  }

  return str.replace(/([-_][a-z])/gi, (char) => {
    return char.toUpperCase().replace("-", "").replace("_", "");
  });
}
