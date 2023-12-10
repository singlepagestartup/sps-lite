import { ISpsLiteBackendButtonsArray } from "../interfaces/sps-lite";
import { entity as spsLiteButton } from "~redux/services/backend/components/elements/button/mock/sps-lite";

export const entity: ISpsLiteBackendButtonsArray = {
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
