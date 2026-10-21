import { Component as Subject } from "@sps/rbac/models/subject/frontend/component";
import type { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <Subject
      isServer={props.isServer}
      variant="ecommerce-module-product-cart-default"
      dataSource="props"
      data={props.data}
      ecommerceModuleProduct={props.ecommerceModuleProduct}
      ecommerceModuleStore={props.ecommerceModuleStore}
      language={props.language}
      className={props.className}
    />
  );
}
