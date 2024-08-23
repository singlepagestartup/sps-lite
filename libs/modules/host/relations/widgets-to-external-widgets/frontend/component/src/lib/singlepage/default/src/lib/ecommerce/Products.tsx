import { IComponentPropsExtended } from "../interface";
import { Component as Product } from "@sps/ecommerce/models/product/frontend/component";
import { Component as ProductAction } from "./ProductAction";

export function Component(props: IComponentPropsExtended) {
  return (
    <Product isServer={props.isServer} hostUrl={props.hostUrl} variant="find">
      {({ data }) => {
        return data?.map((entity, index) => {
          return (
            <Product
              key={index}
              isServer={props.isServer}
              hostUrl={props.hostUrl}
              variant="default"
              data={entity}
              action={<ProductAction {...props} product={entity} />}
            ></Product>
          );
        });
      }}
    </Product>
  );
}
