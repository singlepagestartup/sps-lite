import { Component as Find } from "@sps/startup/models/widget/frontend/component/variants/sps-lite/find";
import { Component as AdminFormInputs } from "@sps/startup/models/widget/frontend/component/variants/sps-lite/admin-form-inputs";
import { Component as AdminForm } from "@sps/startup/models/widget/frontend/component/variants/sps-lite/admin-form";
import { Component as AdminTableRow } from "@sps/startup/models/widget/frontend/component/variants/sps-lite/admin-table-row";
import { Component as AdminTable } from "@sps/startup/models/widget/frontend/component/variants/sps-lite/admin-table";
import { Component as AdminSelectInput } from "@sps/startup/models/widget/frontend/component/variants/sps-lite/admin-select-input";
import { Component as Default } from "@sps/startup/models/widget/frontend/component/variants/sps-lite/default";
export const variants = {
  find: Find,
  "admin-form-inputs": AdminFormInputs,
  "admin-form": AdminForm,
  "admin-table-row": AdminTableRow,
  "admin-table": AdminTable,
  "admin-select-input": AdminSelectInput,
  default: Default,
};
