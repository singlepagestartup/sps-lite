const R = require("ramda");
import { Page } from "@playwright/test";
import { World } from "./elements/World";
import path from "path";
import { el, faker } from "@faker-js/faker";

export function pathReplacer({ parent, path }: { parent: any; path: string }) {
  const replacedPath = path.replace(/\[/g, ".").replace(/\]/g, "");
  const result = R.path(replacedPath.split("."), parent);

  return result;
}

export function replaceValue({
  world,
  value,
  type,
}: {
  world: World;
  value: string;
  type?: "strapi_richtext" | "strapi_file" | "strapi_combobox";
}) {
  if (value.includes("__world.")) {
    const joinedValue = rep({
      value,
      identifier: "world",
      replacer: (path) => R.path(path, world),
    });

    return joinedValue;
  }

  if (value.includes("__random__")) {
    const randomValue = `${Math.floor(Math.random() * 10e5)}`;
    const replacedValue = value.replace("__random__", randomValue);

    return replacedValue;
  }

  if (value.includes("__faker.")) {
    const fakerValue = rep({
      value,
      identifier: "faker",
      replacer: (path) => R.path(path, faker)(),
    });

    return fakerValue;
  }

  if (value.includes("__strapi.")) {
    const strapiKey = value
      .replace("__strapi.attribute.", "")
      .replace("__", ""); //?

    if (type === "strapi_combobox") {
      return `div:has( > :text-is("${strapiKey}"))`;
    } else if (type === "strapi_file") {
      return `div:has( > :text-is("${strapiKey}")) div :has( > :text-matches("Click"))`;
    } else if (type === "strapi_richtext") {
      return `div:has( > :text-is("${strapiKey}")) + div`;
    }
  }

  if (value.includes("__env.")) {
    const replacer = (path: (string | number)[]) => {
      return process.env[path[0]];
    };
    const envValue = rep({
      value,
      identifier: "env",
      replacer,
    }); //?

    return envValue;
  }

  return value;
}

export async function setFile({
  page,
  locator,
  files,
}: {
  page: Page;
  locator: string;
  files: string | string[];
}) {
  const [firstPageDocument] = await Promise.all([
    page.waitForEvent("filechooser"),
    page.locator(locator).locator("..").click(),
  ]);

  if (Array.isArray(files)) {
    for (const file of files) {
      await firstPageDocument.setFiles(path.join(__dirname, `./${file}`));
    }
  } else {
    await firstPageDocument.setFiles(path.join(__dirname, `./${files}`));
  }
}

function rep({
  value,
  identifier,
  replacer,
}: {
  value: string;
  identifier: string;
  replacer: (props: (string | number)[]) => string;
}) {
  const slicedValue = value.split("__"); //?
  const indexOftoReplaceValue = slicedValue.findIndex((item) =>
    item.includes(identifier),
  ); //?
  const toReplaceValue =
    slicedValue.length >= 2 ? value.split("__")[1] : value.split("__")[0];
  const path = toReplaceValue
    .replace(identifier, "")
    .split(".")
    .filter((p) => p !== "")
    .map((p) => {
      if (p.includes("[")) {
        const [key, index] = p.split("["); //?

        return [key, parseInt(index.replace("]", ""))];
      }

      return p;
    })
    .flat(1); //?
  const replacedValue = replacer(path); //?

  const joinedValue = `${slicedValue
    .map((value, index) => {
      if (index === indexOftoReplaceValue) {
        return replacedValue;
      }

      return value;
    })
    .join("")}`; //?

  return joinedValue;
}
