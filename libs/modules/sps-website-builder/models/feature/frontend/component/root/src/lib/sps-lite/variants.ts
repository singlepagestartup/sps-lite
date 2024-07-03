import { Component as AdminForm } from "@sps/sps-website-builder/models/feature/frontend/component/variants/sps-lite/admin-form";
import { Component as AdminSelectInput } from "@sps/sps-website-builder/models/feature/frontend/component/variants/sps-lite/admin-select-input";
import { Component as AdminTable } from "@sps/sps-website-builder/models/feature/frontend/component/variants/sps-lite/admin-table";
import { Component as AdminTableRow } from "@sps/sps-website-builder/models/feature/frontend/component/variants/sps-lite/admin-table-row";
import { Component as Default } from "@sps/sps-website-builder/models/feature/frontend/component/variants/sps-lite/default";

export const variants = {
  "admin-form": AdminForm,
  "admin-select-input": AdminSelectInput,
  "admin-table": AdminTable,
  "admin-table-row": AdminTableRow,
  default: Default,
};
