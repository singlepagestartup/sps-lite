import { Component as ClientAction } from "./ClientAction";
import { IModel as IProduct } from "@sps/ecommerce/models/product/sdk/model";
import { ISpsComponentBase } from "@sps/ui-adapter";

export function Component(
  props: ISpsComponentBase & {
    product: IProduct;
  },
) {
  return <ClientAction {...props} />;
}
