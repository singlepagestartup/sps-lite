import { Component as FindById } from "./find-by-id";
import { Component as Find } from "./find";
import { Component as AdminTableRow } from "./admin-table-row";
import { Component as AdminTable } from "./admin-table";
import { Component as AdminSelectInput } from "./admin-select-input";
import { Component as AdminForm } from "./admin-form";
import { Component as Default } from "./default";
import { Component as OrdersListBlockDefault } from "./orders-list-default";
import { Component as ProductsListBlockDefault } from "./products-list-default";

export const variants = {
  "find-by-id": FindById,
  find: Find,
  "admin-table-row": AdminTableRow,
  "admin-table": AdminTable,
  "admin-select-input": AdminSelectInput,
  "admin-form": AdminForm,
  default: Default,
  "orders-list-block-default": OrdersListBlockDefault,
  "products-list-block-default": ProductsListBlockDefault,
};
