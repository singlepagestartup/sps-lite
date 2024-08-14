import { IModel, IComponentPropsExtended } from "../interface";
import { IModel as ISubject } from "@sps/rbac/models/subject/sdk/model";
import { IModel as IProduct } from "@sps/ecommerce/models/product/sdk/model";
import { IModel as IOrderToProduct } from "@sps/ecommerce/relations/orders-to-products/sdk/model";
import { Component as OrdersToProducts } from "@sps/ecommerce/relations/orders-to-products/frontend/component";

export function Component(
  props: Omit<IComponentPropsExtended, "data"> & {
    orderToProduct: IOrderToProduct;
    subject: ISubject;
    product: IProduct;
    data: IModel;
  },
) {
  return (
    <OrdersToProducts
      isServer={props.isServer}
      hostUrl={props.hostUrl}
      variant="quantity"
      data={props.orderToProduct}
    />
  );
}
