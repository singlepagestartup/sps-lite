import { Component as RbacSubject } from "@sps/rbac/models/subject/frontend/component";
import { IComponentProps } from "./interface";

export function Component(props: IComponentProps) {
  return (
    <RbacSubject
      isServer={false}
      language={props.language}
      variant="me-ecommerce-module-cart-default"
    />
  );
}
