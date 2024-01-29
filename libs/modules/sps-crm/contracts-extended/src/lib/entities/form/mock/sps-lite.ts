import { entity as parentEntity } from "@sps/sps-crm-contracts/lib/entities/form/mock/sps-lite";
import type { IEntity } from "../interfaces/sps-lite";

export const entity: IEntity = {
  ...parentEntity,
  button: {
    id: 13,
    url: null,
    description: null,
    variant: "primary",
    title: "Send Request",
    additionalAttributes: null,
    className: null,
    media: null,
    additionalMedia: null,
    flyout: null,
  },
};
