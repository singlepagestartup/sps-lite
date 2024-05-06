import { names } from "@nx/devkit";
import pluralize from "pluralize";

export function util({ name }: { name: string }) {
  const sanitizedName = name.replace(/-/g, " ");

  const result = {
    base: sanitizedName,
    snakeCased: {
      base: sanitizedName.replace(/ /g, "_"),
      pluralized: pluralize(sanitizedName).replace(/ /g, "_"),
    },
    propertyCased: {
      base: names(sanitizedName).propertyName,
      pluralized: names(pluralize(sanitizedName)).propertyName,
    },
    pascalCased: {
      base: names(sanitizedName).className,
      pluralized: names(pluralize(sanitizedName)).className,
    },
    kebabCased: {
      base: sanitizedName.replace(/ /g, "-"),
      pluralized: pluralize(sanitizedName).replace(/ /g, "-"),
    },
  };

  return result;
}
