import { Component as RbacSubject } from "@sps/rbac/models/subject/frontend/component";
import { Component as EcommerceModuleProduct } from "@sps/ecommerce/models/product/frontend/component";
import type { IComponentProps } from "./interface";

export function Component(props: IComponentProps) {
  return (
    <EcommerceModuleProduct
      isServer={props.isServer}
      variant="cart-default"
      dataSource="props"
      data={props.product}
      language={props.language}
    >
      <RbacSubject
        isServer={props.isServer}
        product={props.product}
        language={props.language}
        variant="me-ecommerce-module-product-cart-default"
      />
    </EcommerceModuleProduct>
  );
}
