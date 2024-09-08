import { Component as FindById } from "./find-by-id";
import { Component as Find } from "./find";
import { Component as AdminTableRow } from "./admin-table-row";
import { Component as AdminTable } from "./admin-table";
import { Component as AdminSelectInput } from "./admin-select-input";
import { Component as AdminForm } from "./admin-form";
import { Component as Default } from "./default";
import { Component as OrdersListDefault } from "./orders-list-default";
import { Component as ProductsListDefault } from "./products-list-default";
import { Component as ProductOverviewDefault } from "./product-overview-deafult";
import { Component as CategoriesListDefault } from "./categories-list-default";
import { Component as CategoryOverviewDefault } from "./category-overview-deafult";

export const variants = {
  "find-by-id": FindById,
  find: Find,
  "admin-table-row": AdminTableRow,
  "admin-table": AdminTable,
  "admin-select-input": AdminSelectInput,
  "admin-form": AdminForm,
  default: Default,
  "orders-list-default": OrdersListDefault,
  "products-list-default": ProductsListDefault,
  "product-overview-default": ProductOverviewDefault,
  "categories-list-default": CategoriesListDefault,
  "category-overview-default": CategoryOverviewDefault,
};
