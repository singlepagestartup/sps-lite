import { cn } from "@sps/shared-frontend-client-utils";
import { IComponentPropsExtended } from "./interface";
import { Component as Order } from "@sps/ecommerce/models/order/frontend/component";
import { Component as EcommerceOrderCheckout } from "../../../ecommerce-order-checkout";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="rbac"
      data-relation="subjects-to-ecommerce-module-orders"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex flex-col gap-1", props.className)}
    >
      <Order
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        variant="find"
        apiProps={{
          params: {
            filters: {
              and: [
                {
                  column: "id",
                  method: "eq",
                  value: props.data.ecommerceModuleOrderId,
                },
              ],
            },
          },
        }}
      >
        {({ data }) => {
          return data?.map((entity, index) => {
            return (
              <Order
                key={index}
                isServer={props.isServer}
                hostUrl={props.hostUrl}
                variant="cart"
                data={entity}
                checkout={
                  <EcommerceOrderCheckout
                    data={props.data}
                    isServer={props.isServer}
                    hostUrl={props.hostUrl}
                    variant="ecommerce-order-checkout"
                  />
                }
              />
            );
          });
        }}
      </Order>
    </div>
  );
}
