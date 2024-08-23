import { IModel } from "../interface";
import { IModel as IOrderToProduct } from "@sps/ecommerce/relations/orders-to-products/sdk/model";
import { Component as Order } from "@sps/ecommerce/models/order/frontend/component";
import { Component as OrdersToBillingModulePaymentIntents } from "@sps/ecommerce/relations/orders-to-billing-module-payment-intents/frontend/component";
import { ISpsComponentBase } from "@sps/ui-adapter";

export function Component(
  props: ISpsComponentBase & {
    orderToProduct: IOrderToProduct;
    data: IModel;
  },
) {
  return (
    <div>
      <Order
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        variant="checkout"
        data={{ id: props.orderToProduct.orderId }}
      />
      <OrdersToBillingModulePaymentIntents
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        variant="find"
        apiProps={{
          params: {
            filters: {
              and: [
                {
                  column: "orderId",
                  method: "eq",
                  value: props.orderToProduct.orderId,
                },
              ],
            },
          },
        }}
      >
        {({ data }) => {
          if (!data?.length) {
            return <></>;
          }

          return data.map((entity, index) => {
            return (
              <OrdersToBillingModulePaymentIntents
                key={index}
                isServer={props.isServer}
                hostUrl={props.hostUrl}
                variant="default"
                data={entity}
              />
            );
          });
        }}
      </OrdersToBillingModulePaymentIntents>
    </div>
  );
}
