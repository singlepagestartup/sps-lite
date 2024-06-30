import { IModuleSeedConfig } from "@sps/shared-backend-api";
import { models } from "@sps/sps-website-builder/backend/models/root";

export const configModels: IModuleSeedConfig<typeof models>["models"] = [
  { name: "button" },
  { name: "buttonsArray" },
  { name: "feature" },
  { name: "featuresSectionBlock" },
  { name: "footer" },
  { name: "footerBlock" },
  { name: "heroSectionBlock" },
  { name: "logotype" },
  { name: "navbar" },
  { name: "navbarBlock" },
  { name: "slide" },
  { name: "slider" },
  { name: "sliderBlock" },
  { name: "widget" },
];
