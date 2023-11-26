import { ICustomWorld } from "./custom-world";
import {
  Before,
  After,
  BeforeAll,
  AfterAll,
  Status,
  setDefaultTimeout,
} from "@cucumber/cucumber";
import {
  chromium,
  ChromiumBrowser,
  ConsoleMessage,
  BrowserContextOptions,
  LaunchOptions,
} from "@playwright/test";
import { ITestCaseHookParameter } from "@cucumber/cucumber/lib/support_code_library_builder/types";
import { ensureDir } from "fs-extra";
import { config as playwrightConfig } from "../../../playwright.config";

let browser: ChromiumBrowser;

// declare global {
//   var browser: ChromiumBrowser;
// }

const tracesDir = "tests/artifacts/traces";
const screenshotsDir = "tests/artifacts/screenshots";

const launchOptions: LaunchOptions = {
  slowMo: 0,
  args: [
    "--use-fake-ui-for-media-stream",
    "--use-fake-device-for-media-stream",
  ],
  firefoxUserPrefs: {
    "media.navigator.streams.fake": true,
    "media.navigator.permission.disabled": true,
  },
  ...playwrightConfig.use,
};

const browserContextOptions: BrowserContextOptions = {
  ...playwrightConfig.use,
  ...(playwrightConfig.use?.video
    ? { recordVideo: { dir: screenshotsDir } }
    : {}),
};
setDefaultTimeout(process.env.PWDEBUG ? -1 : 60 * 1000);

BeforeAll(async function () {
  browser = await chromium.launch(launchOptions);
  await ensureDir(tracesDir);
});

Before({ tags: "@skip" }, async function () {
  return "skipped" as any;
});

Before({ tags: "@debug" }, async function (this: ICustomWorld) {
  this.debug = true;
});

Before(async function (this: ICustomWorld, { pickle }: ITestCaseHookParameter) {
  this.startTime = new Date();
  this.testName = pickle.name.replace(/\W/g, "-");

  this.context = await browser.newContext(browserContextOptions);

  await this.context.tracing.start({ screenshots: true, snapshots: true });
  this.page = await this.context.newPage();
  this.page.on("console", async (msg: ConsoleMessage) => {
    if (msg.type() === "log") {
      await this.attach(msg.text());
    }
  });
  this.feature = pickle;
});

After(async function (this: ICustomWorld, { result }: ITestCaseHookParameter) {
  if (result) {
    await this.attach(
      `Status: ${result?.status}. Duration:${result.duration?.seconds}s`,
    );

    if (result.status !== Status.PASSED) {
      const image = await this.page?.screenshot();

      // Replace : with _ because colons aren't allowed in Windows paths
      const timePart = this.startTime
        ?.toISOString()
        .split(".")[0]
        .replaceAll(":", "_");

      image && (await this.attach(image, "image/png"));
      await this.context?.tracing.stop({
        path: `${tracesDir}/${this.testName}-${timePart}trace.zip`,
      });
    }
  }
  await this.page?.close();
  await this.context?.close();
});

AfterAll(async function () {
  await browser.close();
});
