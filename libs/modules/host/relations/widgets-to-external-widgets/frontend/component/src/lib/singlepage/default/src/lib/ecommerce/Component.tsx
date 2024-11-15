import { IComponentPropsExtended } from "../interface";
import { Component as EcommerceWidget } from "@sps/ecommerce/models/widget/frontend/component";
import { Component as ProductsList } from "./ProductsList";
import { Component as StoresList } from "./StoresList";
import { Component as ProductOverview } from "./ProductOverview";
import { Component as CategoryOverview } from "./CategoryOverview";

export function Component(props: IComponentPropsExtended) {
  return (
    <EcommerceWidget
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
                value: props.data.externalWidgetId,
              },
            ],
          },
        },
      }}
    >
      {({ data }) => {
        return data?.map((entity, index) => {
          return (
            <EcommerceWidget
              key={index}
              isServer={props.isServer}
              hostUrl={props.hostUrl}
              variant={entity.variant as any}
              data={entity}
            >
              {entity.variant.includes("products-list") ? (
                <ProductsList {...props} />
              ) : null}
              {entity.variant.includes("stores-list") ? (
                <StoresList {...props} />
              ) : null}
              {entity.variant.includes("product-overview") ? (
                <ProductOverview {...props} />
              ) : null}
              {entity.variant.includes("category-overview") ? (
                <CategoryOverview {...props} />
              ) : null}
            </EcommerceWidget>
          );
        });
      }}
    </EcommerceWidget>
  );
}
