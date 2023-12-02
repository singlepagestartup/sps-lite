const R = require("ramda");
import { Page } from "@playwright/test";
import { World } from "./elements/World";
import path from "path";

export function pathReplacer({ parent, path }: { parent: any; path: string }) {
  const replacedPath = path.replace(/\[/g, ".").replace(/\]/g, "");
  const result = R.path(replacedPath.split("."), parent);

  return result;
}

export function replaceValue({
  world,
  value,
}: {
  world: World;
  value: string;
}) {
  if (value.includes("__world.")) {
    const slicedValue = value.split("__"); //?
    const indexOftoReplaceValue = slicedValue.findIndex((item) =>
      item.includes("world.")
    ); //?
    const toReplaceValue =
      slicedValue.length >= 2 ? value.split("__")[1] : value.split("__")[0];
    const path = toReplaceValue
      .replace("world.", "")
      .split(".")
      .map((p) => {
        if (p.includes("[")) {
          const [key, index] = p.split("["); //?

          return [key, parseInt(index.replace("]", ""))];
        }

        return p;
      })
      .flat(1); //?
    const replacedValue = R.path(path, world); //?

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

  if (value.includes("__random__")) {
    const randomValue = `tester${Math.floor(Math.random() * 10e5)}`;
    const replacedValue = value.replace("__random__", randomValue);

    return replacedValue;
  }

  return value;
}

export async function setFile({
  page,
  htmlNodeId,
  files,
}: {
  page: Page;
  htmlNodeId: string;
  files: string | string[];
}) {
  const [firstPageDocument] = await Promise.all([
    page.waitForEvent("filechooser"),
    page.locator(htmlNodeId).locator("..").click(),
  ]);

  if (Array.isArray(files)) {
    for (const file of files) {
      await firstPageDocument.setFiles(path.join(__dirname, `./${file}`));
    }
  } else {
    await firstPageDocument.setFiles(path.join(__dirname, `./${files}`));
  }
}
