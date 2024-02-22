import { populate as logotypePopulate } from "@sps/sps-website-builder-models-logotype-contracts";
import { populate as parentPopulate } from "./sps-lite";

export const populate = {
  ...parentPopulate,
  logotype: { populate: logotypePopulate },
};
