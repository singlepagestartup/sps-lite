import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-client-utils";
import { Component as OrdersToProducts } from "@sps/ecommerce/relations/orders-to-products/frontend/component";
import { Component as OrdersToBillingPaymentIntents } from "@sps/ecommerce/relations/orders-to-billing-payment-intents/frontend/component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="ecommerce"
      data-model="order"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex flex-col", props.className)}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-4/12">
          {/* <OrdersToProducts
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
                      value: props.data.id,
                    },
                  ],
                },
              },
            }}
          >
            {({ data }) => {
              return data?.map((entity, index) => {
                return (
                  <OrdersToProducts
                    key={index}
                    isServer={props.isServer}
                    hostUrl={props.hostUrl}
                    variant="default"
                    data={entity}
                  />
                );
              });
            }}
          </OrdersToProducts> */}
        </div>
        <div className="w-full lg:w-8/12 flex flex-col gap-2">
          <p>Status: {props.data.status}</p>
          <OrdersToProducts
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
                      value: props.data.id,
                    },
                  ],
                },
              },
            }}
          >
            {({ data }) => {
              return data?.map((entity, index) => {
                return (
                  <OrdersToProducts
                    key={index}
                    isServer={props.isServer}
                    hostUrl={props.hostUrl}
                    variant="amount"
                    data={entity}
                  >
                    {({ data }) => {
                      return <p>Amount: {entity.quantity * Number(data)}</p>;
                    }}
                  </OrdersToProducts>
                );
              });
            }}
          </OrdersToProducts>
          <OrdersToProducts
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
                      value: props.data.id,
                    },
                  ],
                },
              },
            }}
          >
            {({ data }) => {
              return data?.map((entity, index) => {
                return (
                  <OrdersToProducts
                    key={index}
                    isServer={props.isServer}
                    hostUrl={props.hostUrl}
                    variant="quantity"
                    data={entity}
                  />
                );
              });
            }}
          </OrdersToProducts>
          <OrdersToBillingPaymentIntents
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
                      value: props.data.id,
                    },
                  ],
                },
              },
            }}
          >
            {({ data }) => {
              return data?.map((entity, index) => {
                return (
                  <OrdersToBillingPaymentIntents
                    key={index}
                    isServer={props.isServer}
                    hostUrl={props.hostUrl}
                    variant="default"
                    data={entity}
                  />
                );
              });
            }}
          </OrdersToBillingPaymentIntents>
          {props.checkout}
        </div>
      </div>
    </div>
  );
}
