import { populate as logotypePopulate } from "@sps/sps-website-builder-contracts/lib/components/elements/logotype/populate";
import { populate as parentPopulate } from "./sps-lite";

export const populate = {
  ...parentPopulate,
  logotype: { populate: logotypePopulate },
};
