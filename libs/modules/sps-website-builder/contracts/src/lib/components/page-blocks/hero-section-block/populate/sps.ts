import { populate as logotypePopulate } from "../../../../../../../../contracts/src/lib/components/elements/logotype/populate/index";
import { populate as parentPopulate } from "./sps-lite";

export const populate = {
  ...parentPopulate,
  logotype: { populate: logotypePopulate },
};
