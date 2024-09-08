import { IComponentPropsExtended } from "../interface";
import { Component as Product } from "@sps/ecommerce/models/product/frontend/component";
import { Component as ProductAction } from "./ProductAction";
import { Component as Page } from "@sps/host/models/page/frontend/component";

export function Component(props: IComponentPropsExtended) {
  return (
    <Page
      isServer={props.isServer}
      hostUrl={props.hostUrl}
      variant="url-segment-value"
      segment="ecommerce.products.id"
    >
      {({ data }) => {
        if (!data) {
          return;
        }

        return (
          <Product
            isServer={props.isServer}
            hostUrl={props.hostUrl}
            variant="find-by-id"
            id={data}
          >
            {({ data }) => {
              if (!data) {
                return;
              }

              return (
                <Product
                  isServer={props.isServer}
                  hostUrl={props.hostUrl}
                  variant="overview-default"
                  data={data}
                  action={<ProductAction {...props} product={data} />}
                ></Product>
              );
            }}
          </Product>
        );
      }}
    </Page>
  );
}
