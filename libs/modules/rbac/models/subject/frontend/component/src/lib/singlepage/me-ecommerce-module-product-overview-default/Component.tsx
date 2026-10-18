import { Component as RbacSubject } from "@sps/rbac/models/subject/frontend/component";
import { Component as EcommerceModuleProduct } from "@sps/ecommerce/models/product/frontend/component";
import type { IComponentProps } from "./interface";
import { Component as CategoryRowButtonDefault } from "../me-ecommerce-module-product-card-default/Category";
import { Component as RbacModuleSubjectProfileButtonDefault } from "../me-ecommerce-module-product-card-default/Profile";
import { CardContent, CardHeader } from "@sps/shared-ui-shadcn";

export function Component(props: IComponentProps) {
  return (
    <EcommerceModuleProduct
      isServer={props.isServer}
      variant="overview-default"
      dataSource="props"
      data={props.product}
      language={props.language}
      topSlot={
        <CardHeader className="pb-0">
          <CategoryRowButtonDefault
            isServer={props.isServer}
            language={props.language}
            variant="overview-default"
            data={props.product}
          />
        </CardHeader>
      }
      middleSlot={
        <CardContent>
          <RbacModuleSubjectProfileButtonDefault
            isServer={props.isServer}
            language={props.language}
            variant="overview-default"
            data={props.product}
          />
        </CardContent>
      }
    >
      <div className="w-full flex flex-col gap-4">
        <RbacSubject
          isServer={props.isServer}
          product={props.product}
          language={props.language}
          variant="me-ecommerce-module-product-cart-default"
          className="w-full"
        />
        <RbacSubject
          isServer={props.isServer}
          product={props.product}
          language={props.language}
          variant="me-ecommerce-module-product-checkout-default"
          className="w-full"
        />
      </div>
    </EcommerceModuleProduct>
  );
}
