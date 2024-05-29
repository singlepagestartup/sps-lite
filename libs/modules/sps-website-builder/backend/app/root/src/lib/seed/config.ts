import { IModuleSeedConfig } from "@sps/shared-backend-api";
import { models } from "@sps/sps-website-builder-backend-models";

export const config: IModuleSeedConfig<typeof models> = {
  seed: process.env["SPS_WEBSITE_BUILDER_SEED"] === "true",
  models: [
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
  ],
};
