import ReactMarkdown from "react-markdown";
import { Component as Review } from "@sps/sps-crm-models-review-frontend-component";
import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="page-blocks.reviews-list-block"
      data-variant={props.variant}
      className="bg-white mx-auto max-w-7xl my-16"
    >
      {props.data.title ? (
        <h2 className="text-center font-bold text-3xl mb-8">
          <ReactMarkdown>{props.data.title}</ReactMarkdown>
        </h2>
      ) : null}

      {props.data.showAll ? (
        <Review isServer={props.isServer} variant="list" />
      ) : (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md::grid-cols-3 relative mx-auto max-w-7xl px-6 lg:px-8">
          {props.data.reviews?.map((review, index) => {
            return (
              <Review
                key={index}
                isServer={props.isServer}
                variant="default"
                data={review}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
