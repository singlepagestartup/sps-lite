import { Component as Page } from "@sps/host/models/page/frontend/component";
import { Component as EcommerceModuleProduct } from "@sps/ecommerce/models/product/frontend/component";
import { Component as EcommerceProduct } from "../../../../../product";
import { IComponentProps } from "./interface";
export function Component(props: IComponentProps) {
  return (
    <Page
      isServer={props.isServer}
      variant="url-segment-values"
      url={props.url}
    >
      {({ data: segments }) => {
        const data = segments?.["ecommerce.products.slug"];
        if (!data) {
          return;
        }
        return (
          <EcommerceModuleProduct
            isServer={props.isServer}
            variant="find"
            apiProps={{
              params: {
                filters: {
                  and: [
                    {
                      column: "slug",
                      method: "eq",
                      value: data,
                    },
                  ],
                },
              },
            }}
          >
            {({ data: products }) => {
              return products?.map((product, index) => {
                return (
                  <EcommerceProduct
                    key={product.id}
                    isServer={props.isServer}
                    variant="overview-default"
                    data={product}
                    language={props.language}
                  />
                );
              });
            }}
          </EcommerceModuleProduct>
        );
      }}
    </Page>
  );
}
