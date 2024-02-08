"use client";

import ReactMarkdown from "react-markdown";
// import { api as reviewApi } from "../../../../review/api/client";
// import { Component as Review } from "../../../../review/component";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  // const { data: reviews } = reviewApi.useFindQuery({});

  return (
    <div className="bg-white mx-auto max-w-7xl my-16">
      {props.title ? (
        <h2 className="text-center font-bold text-3xl mb-8">
          <ReactMarkdown>{props.title}</ReactMarkdown>
        </h2>
      ) : null}

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md::grid-cols-3 relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* {reviews?.map((review, index) => {
          return (
            <Review
              key={index}
              isServer={false}
              variant="default"
              {...review}
            />
          );
        })} */}
      </div>
    </div>
  );
}
