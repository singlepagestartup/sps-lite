import { Component as AdminTableRow } from "@sps/sps-website-builder-models-navbar-block-frontend-component-variants-sps-lite-admin-table-row";
import { Component as AdminTable } from "@sps/sps-website-builder-models-navbar-block-frontend-component-variants-sps-lite-admin-table";
import { Component as AdminSelectInput } from "@sps/sps-website-builder-models-navbar-block-frontend-component-variants-sps-lite-admin-select-input";
import { Component as AdminFormInputs } from "@sps/sps-website-builder-models-navbar-block-frontend-component-variants-sps-lite-admin-form-inputs";
import { Component as AdminForm } from "@sps/sps-website-builder-models-navbar-block-frontend-component-variants-sps-lite-admin-form";
import { Component as Default } from "@sps/sps-website-builder-models-navbar-block-frontend-component-variants-sps-lite-default";

export const variants = {
  "admin-table-row": AdminTableRow,
  "admin-table": AdminTable,
  "admin-select-input": AdminSelectInput,
  "admin-form-inputs": AdminFormInputs,
  "admin-form": AdminForm,
  default: Default,
};
