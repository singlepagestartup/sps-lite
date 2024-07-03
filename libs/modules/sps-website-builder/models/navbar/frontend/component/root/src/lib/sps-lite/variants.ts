import { Component as Find } from "@sps/sps-website-builder/models/navbar/frontend/component/variants/sps-lite/find";
import { Component as AdminSelectInput } from "@sps/sps-website-builder/models/navbar/frontend/component/variants/sps-lite/admin-select-input";
import { Component as AdminForm } from "@sps/sps-website-builder/models/navbar/frontend/component/variants/sps-lite/admin-form";
import { Component as AdminTableRow } from "@sps/sps-website-builder/models/navbar/frontend/component/variants/sps-lite/admin-table-row";
import { Component as AdminTable } from "@sps/sps-website-builder/models/navbar/frontend/component/variants/sps-lite/admin-table";
import { Component as Default } from "@sps/sps-website-builder/models/navbar/frontend/component/variants/sps-lite/default";

export const variants = {
  find: Find,
  "admin-select-input": AdminSelectInput,
  "admin-form": AdminForm,
  "admin-table-row": AdminTableRow,
  "admin-table": AdminTable,
  default: Default,
};
