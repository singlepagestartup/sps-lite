import { IComponentPropsExtended } from "../interface";
import { Component as EcommerceWidget } from "@sps/ecommerce/models/widget/frontend/component";
// import { Component as Orders } from "./Orders";
import { Component as Products } from "./Products";

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
              // products={<Products {...props} />}
              // orders={<Orders {...props} />}
            >
              {entity.variant.includes("products-list") ? (
                <Products {...props} />
              ) : null}
            </EcommerceWidget>
          );
        });
      }}
    </EcommerceWidget>
  );
}
