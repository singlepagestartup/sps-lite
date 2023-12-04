import {
  chromium,
  ChromiumBrowser,
  ConsoleMessage,
  BrowserContextOptions,
  LaunchOptions,
  expect,
  Page,
} from "@playwright/test";
import { Status } from "@cucumber/cucumber";
import { ITestCaseHookParameter } from "@cucumber/cucumber/lib/support_code_library_builder/types";
import { ensureDir } from "fs-extra";
import { config as playwrightConfig } from "../../../playwright.config";

const tracesDir = "artifacts/traces";
const screenshotsDir = "artifacts/screenshots";

const launchOptions: LaunchOptions = {
  ...playwrightConfig.use,
};

const browserContextOptions: BrowserContextOptions = {
  ...playwrightConfig.use,
  ...(playwrightConfig.use?.video
    ? { recordVideo: { dir: screenshotsDir } }
    : {}),
};

export class Browser {
  pages: Page[] = [];
  instance?: ChromiumBrowser;

  constructor() {
    this.pages = [];
  }

  async open() {
    await ensureDir(tracesDir);

    this.instance = await chromium.launch(launchOptions);
    const context = await this.instance.newContext(browserContextOptions);
    const page = await context.newPage();

    this.pages.push(page);

    await context.tracing.start({ screenshots: true, snapshots: true });

    page.on("console", async (msg: ConsoleMessage) => {
      if (msg.type() === "log") {
        console.log(msg.text());
      }
    });
  }

  async close(params?: { hookParameter?: ITestCaseHookParameter }) {
    const { hookParameter } = params || {};

    const contexts = this.instance?.contexts();
    if (contexts) {
      for (const context of contexts) {
        if (hookParameter?.result?.status !== Status.PASSED) {
          // If you run many browsers, you may need all traces
          // to store them in one directory
          const subDirectory = hookParameter?.pickle?.astNodeIds
            ? `${hookParameter?.pickle?.astNodeIds[0]}/`
            : undefined;

          await context.tracing.stop({
            path: `${tracesDir}/${
              subDirectory ? subDirectory : ""
            }${Date.now()}.zip`,
          });
        }

        await context.close();
      }
    }

    for (const page of this.pages) {
      await page.close();
    }

    await this.instance?.close();
  }
}
