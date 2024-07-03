import { Component as AdminTable } from "@sps/sps-file-storage/models/widget/frontend/component/variants/sps-lite/admin-table";
import { Component as AdminTableRow } from "@sps/sps-file-storage/models/widget/frontend/component/variants/sps-lite/admin-table-row";
import { Component as AdminForm } from "@sps/sps-file-storage/models/widget/frontend/component/variants/sps-lite/admin-form";
import { Component as AdminSelectInput } from "@sps/sps-file-storage/models/widget/frontend/component/variants/sps-lite/admin-select-input";
import { Component as Default } from "@sps/sps-file-storage/models/widget/frontend/component/variants/sps-lite/default";
export const variants = {
  "admin-table": AdminTable,
  "admin-table-row": AdminTableRow,
  "admin-form": AdminForm,
  "admin-select-input": AdminSelectInput,
  default: Default,
};
