import { names } from "@nx/devkit";

export function util({ name }: { name: string }) {
  const baseName = name
    .split("-")
    .map((word) => {
      // take only first letter
      if (word === "sps") {
        return "s p s";
      }

      return word[0];
    })
    .join(" ");

  const result = {
    base: baseName.replace("s p s", "sps"),
    pascalCased: names(baseName).className,
    snakeCased: baseName.replace("s p s", "sps").replace(/ /g, "_"),
  };

  return result;
}
