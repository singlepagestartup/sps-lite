import { Component as EcommerceModuleProduct } from "@sps/ecommerce/models/product/frontend/component";
import { Component as Subject } from "@sps/rbac/models/subject/frontend/component";
import type { IContentProps } from "./interface";
export function Component(props: IContentProps) {
  return (
    <EcommerceModuleProduct isServer={props.isServer} variant="find">
      {({ data }) => (
        <div className="grid lg:grid-cols-2 gap-4">
          {data?.map((product) => (
            <Subject
              key={product.id}
              isServer={props.isServer}
              variant="me-ecommerce-module-product-card-default"
              product={product}
              language={props.language}
            />
          ))}
        </div>
      )}
    </EcommerceModuleProduct>
  );
}
