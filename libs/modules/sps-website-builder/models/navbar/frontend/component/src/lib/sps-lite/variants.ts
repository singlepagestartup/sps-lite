import { Component as Find } from "./find";
import { Component as AdminSelectInput } from "./admin-select-input";
import { Component as AdminForm } from "./admin-form";
import { Component as AdminTableRow } from "./admin-table-row";
import { Component as AdminTable } from "./admin-table";
import { Component as Default } from "./default";

export const variants = {
  find: Find,
  "admin-select-input": AdminSelectInput,
  "admin-form": AdminForm,
  "admin-table-row": AdminTableRow,
  "admin-table": AdminTable,
  default: Default,
};
