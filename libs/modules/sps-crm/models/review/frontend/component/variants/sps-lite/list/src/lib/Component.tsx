import { IComponentPropsExtended } from "./interface";
import { Component as Review } from "@sps/sps-crm-models-review-frontend-component-variants-sps-lite-default";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-crm"
      data-model="review"
      data-variant={props.variant}
      className="mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-8 items-start"
    >
      {props.data.map((review, index) => {
        return (
          <Review
            isServer={props.isServer}
            variant="default"
            key={index}
            data={review}
          />
        );
      })}
    </div>
  );
}
