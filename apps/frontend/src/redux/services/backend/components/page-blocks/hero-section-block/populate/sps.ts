import { populate as logotypePopulate } from "../../../elements/logotype/populate/index";
import { populate as parentPopulate } from "./sps-lite";

export const populate = {
  ...parentPopulate,
  logotype: { populate: logotypePopulate },
};
