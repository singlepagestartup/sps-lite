import { Component as FindById } from "@sps/sps-third-parties/models/telegram/frontend/component/variants/sps-lite/find-by-id";
import { Component as Find } from "@sps/sps-third-parties/models/telegram/frontend/component/variants/sps-lite/find";
import { Component as AdminTableRow } from "@sps/sps-third-parties/models/telegram/frontend/component/variants/sps-lite/admin-table-row";
import { Component as AdminTable } from "@sps/sps-third-parties/models/telegram/frontend/component/variants/sps-lite/admin-table";
import { Component as AdminSelectInput } from "@sps/sps-third-parties/models/telegram/frontend/component/variants/sps-lite/admin-select-input";
import { Component as AdminForm } from "@sps/sps-third-parties/models/telegram/frontend/component/variants/sps-lite/admin-form";
export const variants = {
  "find-by-id": FindById,
  find: Find,
  "admin-table-row": AdminTableRow,
  "admin-table": AdminTable,
  "admin-select-input": AdminSelectInput,
  "admin-form": AdminForm,
};
