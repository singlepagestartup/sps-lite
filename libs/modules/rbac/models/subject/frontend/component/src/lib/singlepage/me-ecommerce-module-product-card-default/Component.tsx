import { Component as RbacSubject } from "@sps/rbac/models/subject/frontend/component";
import { Component as EcommerceModuleProduct } from "@sps/ecommerce/models/product/frontend/component";
import type { IComponentProps } from "./interface";
import { Component as CategoryRowButtonDefault } from "./Category";
import { Component as SocialModuleProfileButtonDefault } from "./Profile";
import { CardContent, CardHeader } from "@sps/shared-ui-shadcn";

export function Component(props: IComponentProps) {
  return (
    <EcommerceModuleProduct
      isServer={props.isServer}
      variant="default"
      dataSource="props"
      data={props.product}
      language={props.language}
      topSlot={
        <CardHeader className="pb-0">
          <CategoryRowButtonDefault
            isServer={props.isServer}
            language={props.language}
            variant="category-row-button-default"
            data={props.product}
          />
        </CardHeader>
      }
      middleSlot={
        <CardContent>
          <SocialModuleProfileButtonDefault
            isServer={props.isServer}
            language={props.language}
            variant="social-module-profile-button-default"
            data={props.product}
          />
        </CardContent>
      }
    >
      <>
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
      </>
    </EcommerceModuleProduct>
  );
}
