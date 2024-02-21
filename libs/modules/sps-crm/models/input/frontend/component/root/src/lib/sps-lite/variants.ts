import { Component as Date } from "@sps/sps-crm-input-frontend-component-sps-lite-variants-date";
import { Component as File } from "@sps/sps-crm-input-frontend-component-sps-lite-variants-file";
import { Component as Listbox } from "@sps/sps-crm-input-frontend-component-sps-lite-variants-listbox";
import { Component as RadioGroup } from "@sps/sps-crm-input-frontend-component-sps-lite-variants-radiogroup";
import { Component as Range } from "@sps/sps-crm-input-frontend-component-sps-lite-variants-range";
import { Component as Switch } from "@sps/sps-crm-input-frontend-component-sps-lite-variants-switch";
import { Component as Text } from "@sps/sps-crm-input-frontend-component-sps-lite-variants-text";

export const variants = {
  text: Text,
  file: File,
  listbox: Listbox,
  switch: Switch,
  "radio-group": RadioGroup,
  range: Range,
  date: Date,
};
