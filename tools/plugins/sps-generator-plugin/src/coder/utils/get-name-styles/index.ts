import { names } from "@nx/devkit";
import pluralize from "pluralize";

export function util({ name }: { name: string }) {
  const sanitizedName = name.replace(/-/g, " ");

  const result = {
    base: sanitizedName,
    snakeCased: {
      // wide slide -> wide_slide
      base: sanitizedName.replace(/ /g, "_"),
      // wide slide -> wese
      baseCutted: sanitizedName
        .split(" ")
        .map((word) => `${word[0]}${word[word.length - 1]}`)
        .join(""),
      // wide slide -> wide_slides
      pluralized: pluralize(sanitizedName).replace(/ /g, "_"),
      // wide slide -> wess
      pluralizedCutted: pluralize(sanitizedName)
        .split(" ")
        .map((word) => `${word[0]}${word[word.length - 1]}`)
        .join(""),
    },
    propertyCased: {
      // wide slide -> wideSlide
      base: names(sanitizedName).propertyName,
      // wide slide -> weSe
      baseCutted: names(
        sanitizedName
          .split(" ")
          .map((word) => `${word[0]}${word[word.length - 1]}`)
          .join(" "),
      ).propertyName,
      // wide slide -> wideSlides
      pluralized: names(pluralize(sanitizedName)).propertyName,
      // wide slide -> weSs
      pluralizedCutted: names(
        pluralize(sanitizedName)
          .split(" ")
          .map((word) => `${word[0]}${word[word.length - 1]}`)
          .join(" "),
      ).propertyName,
    },
    pascalCased: {
      // wide slide -> WideSlide
      base: names(sanitizedName).className,
      // wide slide -> WeSe
      baseCutted: sanitizedName
        .split(" ")
        .map((word) => `${word[0].toUpperCase()}${word[word.length - 1]}`)
        .join(""),
      // wide slide -> WideSlides
      pluralized: names(pluralize(sanitizedName)).className,
      // wide slide -> WeSs
      pluralizedCutted: pluralize(sanitizedName)
        .split(" ")
        .map((word) => `${word[0].toUpperCase()}${word[word.length - 1]}`)
        .join(""),
    },
    kebabCased: {
      // wide slide -> wide-slide
      base: sanitizedName.replace(/ /g, "-"),
      // wide slide -> we-se
      baseCutted: sanitizedName
        .split(" ")
        .map((word) => `${word[0]}${word[word.length - 1]}`)
        .join("-"),
      // wide slide -> wide-slides
      pluralized: pluralize(sanitizedName).replace(/ /g, "-"),
      // wide slide -> we-ss
      pluralizedCutted: pluralize(sanitizedName)
        .split(" ")
        .map((word) => `${word[0]}${word[word.length - 1]}`)
        .join(" ")
        .replace(/ /g, "-"),
    },
  };

  return result;
}
