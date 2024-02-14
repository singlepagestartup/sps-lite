import {
  IComponentProps as IParentComponentProps,
  IPageBlock as IParentPageBlock,
} from "./startup";

export type IPageBlock = IParentPageBlock;

export interface IComponentProps extends IParentComponentProps {
  data: IPageBlock;
}
