import { Component as RbacModuleSubject } from "@sps/rbac/models/subject/frontend/component";
import type { IComponentProps } from "./interface";
export function Component(props: IComponentProps) {
  return (
    <RbacModuleSubject
      isServer={props.isServer}
      variant="me-ecommerce-module-product-overview-default"
      product={props.data}
      language={props.language}
    />
  );
}
