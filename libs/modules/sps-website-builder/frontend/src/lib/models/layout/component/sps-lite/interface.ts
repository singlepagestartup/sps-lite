import { IComponentProps as IBoxedComponentProps } from "./Boxed/interface";
import { IComponentProps as IWideComponentProps } from "./Wide/interface";

export type IComponentProps = IBoxedComponentProps | IWideComponentProps;
