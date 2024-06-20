import { Component as AdminTableRow } from "@sps/sps-website-builder/models/button/frontend/component/variants/sps-lite/admin-table-row";
import { Component as AdminTable } from "@sps/sps-website-builder/models/button/frontend/component/variants/sps-lite/admin-table";
import { Component as AdminSelectInput } from "@sps/sps-website-builder/models/button/frontend/component/variants/sps-lite/admin-select-input";
import { Component as AdminFormInputs } from "@sps/sps-website-builder/models/button/frontend/component/variants/sps-lite/admin-form-inputs";
import { Component as AdminForm } from "@sps/sps-website-builder/models/button/frontend/component/variants/sps-lite/admin-form";
import { Component as Link } from "@sps/sps-website-builder/models/button/frontend/component/variants/sps-lite/link";
import { Component as Ghost } from "@sps/sps-website-builder/models/button/frontend/component/variants/sps-lite/ghost";
import { Component as Outline } from "@sps/sps-website-builder/models/button/frontend/component/variants/sps-lite/outline";
import { Component as Destructive } from "@sps/sps-website-builder/models/button/frontend/component/variants/sps-lite/destructive";

import { Component as Secondary } from "@sps/sps-website-builder/models/button/frontend/component/variants/sps-lite/secondary";
import { Component as Primary } from "@sps/sps-website-builder/models/button/frontend/component/variants/sps-lite/primary";
import { Component as Default } from "@sps/sps-website-builder/models/button/frontend/component/variants/sps-lite/default";

export const variants = {
  "admin-table-row": AdminTableRow,
  "admin-table": AdminTable,
  "admin-select-input": AdminSelectInput,
  "admin-form-inputs": AdminFormInputs,
  "admin-form": AdminForm,
  link: Link,
  ghost: Ghost,
  outline: Outline,
  destructive: Destructive,

  secondary: Secondary,
  primary: Primary,
  default: Default,
};
