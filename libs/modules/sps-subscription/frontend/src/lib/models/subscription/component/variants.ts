import { variants as findOneVariants } from "./find-one/variants";
import { variants as findManyVariants } from "./find-many/variants";

export const variants = {
  findOne: {
    ...findOneVariants,
  },
  findMany: {
    ...findManyVariants,
  },
};
