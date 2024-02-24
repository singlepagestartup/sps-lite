import {
  Before,
  After,
  setWorldConstructor,
  setDefaultTimeout,
} from "@cucumber/cucumber";
import { ITestCaseHookParameter } from "@cucumber/cucumber/lib/support_code_library_builder/types";
import { World } from "./elements/World";

setDefaultTimeout(process.env.PWDEBUG ? -1 : 60 * 1000);
setWorldConstructor(World);

Before({ tags: "@skip" }, async function () {
  return "skipped" as any;
});

After(async function (this: World, hookParameter: ITestCaseHookParameter) {
  if (!this?.users) {
    return;
  }

  for (const user of this.users) {
    await user.closeBrowser({ hookParameter });
  }
});
