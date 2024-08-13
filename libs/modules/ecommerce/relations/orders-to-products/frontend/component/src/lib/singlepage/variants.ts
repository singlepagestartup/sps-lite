import { Component as Find } from "./find";
import { Component as AdminTableRow } from "./admin-table-row";
import { Component as AdminTable } from "./admin-table";
import { Component as AdminSelectInput } from "./admin-select-input";
import { Component as AdminForm } from "./admin-form";
import { Component as Default } from "./default";
import { Component as AddToCart } from "./add-to-cart";
import { Component as EditInCart } from "./edit-in-cart";
import { Component as Subscription } from "./subscription";

export const variants = {
  find: Find,
  "admin-table-row": AdminTableRow,
  "admin-table": AdminTable,
  "admin-select-input": AdminSelectInput,
  "admin-form": AdminForm,
  default: Default,
  "add-to-cart": AddToCart,
  "edit-in-cart": EditInCart,
  subscription: Subscription,
};
