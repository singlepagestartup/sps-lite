import type {
  IComponentProps as IParentComponentProps,
  IPageBlock as IParentPageBlock,
} from "./startup";

export type IPageBlock = IParentPageBlock;

export interface IComponentProps extends Omit<IParentComponentProps, "data"> {
  data: {
    pageBlocks?: IPageBlock[] | null;
  };
}
