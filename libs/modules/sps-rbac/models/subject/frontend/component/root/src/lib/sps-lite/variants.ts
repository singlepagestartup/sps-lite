import { Component as FindById } from "@sps/sps-rbac/models/subject/frontend/component/variants/sps-lite/find-by-id";
import { Component as Find } from "@sps/sps-rbac/models/subject/frontend/component/variants/sps-lite/find";
import { Component as AdminTableRow } from "@sps/sps-rbac/models/subject/frontend/component/variants/sps-lite/admin-table-row";
import { Component as AdminTable } from "@sps/sps-rbac/models/subject/frontend/component/variants/sps-lite/admin-table";
import { Component as AdminSelectInput } from "@sps/sps-rbac/models/subject/frontend/component/variants/sps-lite/admin-select-input";
import { Component as AdminForm } from "@sps/sps-rbac/models/subject/frontend/component/variants/sps-lite/admin-form";
import { Component as Default } from "@sps/sps-rbac/models/subject/frontend/component/variants/sps-lite/default";
export const variants = {
  "find-by-id": FindById,
  find: Find,
  "admin-table-row": AdminTableRow,
  "admin-table": AdminTable,
  "admin-select-input": AdminSelectInput,
  "admin-form": AdminForm,
  default: Default,
};
