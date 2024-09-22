import { IComponentProps as IOpengraphImageComponentProps } from "./opengraph-image";
import { IComponentProps as IOrderReceiptComponentProps } from "./order-receipt";

export type IComponentProps =
  | IOpengraphImageComponentProps
  | IOrderReceiptComponentProps;
