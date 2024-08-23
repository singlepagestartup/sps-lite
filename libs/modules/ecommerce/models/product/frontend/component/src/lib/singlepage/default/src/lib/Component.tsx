import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-client-utils";
import { Component as ProductsToAttributes } from "@sps/ecommerce/relations/products-to-attributes/frontend/component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="ecommerce"
      data-model="product"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex flex-col", props.className || "")}
    >
      <p className="font-bold">{props.data.title}</p>
      <div className="flex flex-col gap-3">
        <ProductsToAttributes
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
                <ProductsToAttributes
                  key={index}
                  isServer={props.isServer}
                  hostUrl={props.hostUrl}
                  variant="default"
                  data={entity}
                ></ProductsToAttributes>
              );
            });
          }}
        </ProductsToAttributes>
      </div>
      {props.action}
    </div>
  );
}
