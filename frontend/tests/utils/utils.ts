const R = require("ramda");
import { ICustomWorld } from "../bdd/bdd-utils/custom-world";
import { Page } from "@playwright/test";
import path from "path";

export function replaceValue({
  world,
  value,
}: {
  world: ICustomWorld;
  value: string;
}) {
  if (value.includes("__world.")) {
    const slicedValue = value.split("__");
    const toReplaceValue =
      slicedValue.length >= 2 ? value.split("__")[1] : value.split("__")[0];
    const path = toReplaceValue.replace("world.", "").split(".");
    const replacedValue = R.path(path, world);
    const joinedValue =
      slicedValue.length >= 2
        ? `${slicedValue[0]}${replacedValue}`
        : `${replacedValue}${slicedValue[0]}`;

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
