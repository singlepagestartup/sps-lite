import { Component as Date } from "@sps/sps-crm-models-input-frontend-component-variants-sps-lite-date";
import { Component as File } from "@sps/sps-crm-models-input-frontend-component-variants-sps-lite-file";
import { Component as Listbox } from "@sps/sps-crm-models-input-frontend-component-variants-sps-lite-listbox";
import { Component as RadioGroup } from "@sps/sps-crm-models-input-frontend-component-variants-sps-lite-radiogroup";
import { Component as Range } from "@sps/sps-crm-models-input-frontend-component-variants-sps-lite-range";
import { Component as Switch } from "@sps/sps-crm-models-input-frontend-component-variants-sps-lite-switch";
import { Component as Text } from "@sps/sps-crm-models-input-frontend-component-variants-sps-lite-text";

export const variants = {
  text: Text,
  file: File,
  listbox: Listbox,
  switch: Switch,
  "radio-group": RadioGroup,
  range: Range,
  date: Date,
};
