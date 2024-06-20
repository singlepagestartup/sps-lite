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
  { name: "layout" },
  { name: "logotype" },
  { name: "navbar" },
  { name: "navbarBlock" },
  { name: "page" },
  { name: "slide" },
  { name: "slider" },
  { name: "sliderBlock" },
  { name: "widget" },
  { name: "metadata" },
];
