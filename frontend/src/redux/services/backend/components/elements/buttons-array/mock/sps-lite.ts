import { entity as spsLiteButton } from "~redux/services/backend/components/elements/button/mock/sps-lite";
import { ISpsLiteBackendComponentButtonsArray } from "../interfaces/sps-lite";

export const entity: ISpsLiteBackendComponentButtonsArray = {
  id: 5,
  __component: "elements.buttons-array",
  additionalAttributes: null,
  title: null,
  buttons: [spsLiteButton, spsLiteButton],
  variant: "row",
  description: null,
  className: null,
  url: null,
};
