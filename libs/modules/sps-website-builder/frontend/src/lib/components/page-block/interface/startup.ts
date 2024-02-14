import {
  IPageBlock as IParentPageBlock,
  IComponentProps as IParentComponentProps,
} from "./sps-lite";

export type IPageBlock = IParentPageBlock;

export interface IComponentProps extends IParentComponentProps {
  data: IPageBlock;
}
