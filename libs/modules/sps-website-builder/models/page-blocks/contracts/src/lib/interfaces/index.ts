import type {
  IModel as IParentModel,
  IPageBlock as IParentPageBlock,
} from "./startup";

export type IPageBlock = IParentPageBlock;

export interface IModel extends Omit<IParentModel, "data"> {
  data: {
    pageBlocks?: IPageBlock[] | null;
  };
}
