import { IModel as IParentModel, variants as parentVariants } from "./startup";

export const variants = [...parentVariants] as const;

export interface IRelation extends IParentRelation {}
