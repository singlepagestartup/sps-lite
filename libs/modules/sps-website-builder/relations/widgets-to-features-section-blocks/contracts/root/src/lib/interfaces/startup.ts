import { IModel as IParentModel, variants as parentVariants } from "./sps-lite";

export const variants = [...parentVariants] as const;

export interface IRelation extends IParentRelation {}
