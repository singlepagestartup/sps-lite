import path from "path";
import { Page } from "@playwright/test";

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
