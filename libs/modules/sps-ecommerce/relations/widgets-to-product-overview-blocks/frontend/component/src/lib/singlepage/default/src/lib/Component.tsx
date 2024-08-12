import { IComponentPropsExtended } from "./interface";
import { Component as ProductOverviewBlock } from "@sps/sps-ecommerce/models/product-overview-block/frontend/component";
import { cn } from "@sps/shared-frontend-client-utils";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-ecommerce"
      data-relation="widgets-to-product-overview-blocks"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex", props.data.className)}
    >
      <ProductOverviewBlock
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
                  value: props.data.productOverviewBlockId,
                },
              ],
            },
          },
        }}
      >
        {({ data }) => {
          return data?.map((entity, index) => {
            return (
              <ProductOverviewBlock
                key={index}
                isServer={props.isServer}
                hostUrl={props.hostUrl}
                variant={entity.variant as any}
                data={entity}
              />
            );
          });
        }}
      </ProductOverviewBlock>
    </div>
  );
}
