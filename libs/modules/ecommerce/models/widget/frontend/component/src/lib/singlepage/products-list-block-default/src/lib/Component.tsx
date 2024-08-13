import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-client-utils";
import { Component as Product } from "@sps/ecommerce/models/product/frontend/component";
import { Component as OrdersToProducts } from "@sps/ecommerce/relations/orders-to-products/frontend/component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="ecommerce"
      data-model="widget"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex flex-col", props.data.className || "")}
    >
      <div className="w-full max-w-7xl grid grid-cols-2 gap-12 mx-auto">
        {props.products}
      </div>
      {/* <Product isServer={props.isServer} hostUrl={props.hostUrl} variant="find">
        {({ data }) => {
          return data?.map((entity, index) => {
            return (
              <Product
                key={index}
                isServer={props.isServer}
                hostUrl={props.hostUrl}
                variant="default"
                data={entity}
                action={
                  <OrdersToProducts
                    isServer={props.isServer}
                    hostUrl={props.hostUrl}
                    variant="find"
                    apiProps={{
                      params: {
                        filters: {
                          and: [
                            {
                              column: "productId",
                              method: "eq",
                              value: entity.id,
                            },
                          ],
                        },
                      },
                    }}
                  >
                    {({ data }) => {
                      if (!data?.length) {
                        return (
                          <OrdersToProducts
                            isServer={props.isServer}
                            hostUrl={props.hostUrl}
                            productId={entity.id}
                            variant="add-to-cart"
                          />
                        );
                      }

                      return data?.map((entity, index) => {
                        return (
                          <OrdersToProducts
                            key={index}
                            isServer={props.isServer}
                            hostUrl={props.hostUrl}
                            variant="edit-in-cart"
                            data={entity}
                          ></OrdersToProducts>
                        );
                      });
                    }}
                  </OrdersToProducts>
                }
              ></Product>
            );
          });
        }}
      </Product> */}
    </div>
  );
}
