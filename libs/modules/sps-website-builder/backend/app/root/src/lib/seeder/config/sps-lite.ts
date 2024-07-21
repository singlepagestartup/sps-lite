import { IModuleSeedConfig } from "@sps/shared-backend-api";
import { models } from "@sps/sps-website-builder/backend/models/root";

export const configModels: IModuleSeedConfig<typeof models>["models"] = [
  { name: "footerBlock" },
  { name: "logotype" },
  { name: "navbar" },
  { name: "navbarBlock" },
  { name: "slide" },
  { name: "slider" },
  { name: "sliderBlock" },
  { name: "widget" },
];
