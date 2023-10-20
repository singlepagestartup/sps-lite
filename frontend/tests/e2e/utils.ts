import { Page } from "@playwright/test";
import path from "path";

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
      await firstPageDocument.setFiles(path.join(__dirname, `${file}`));
    }
  } else {
    await firstPageDocument.setFiles(path.join(__dirname, `${files}`));
  }
}
