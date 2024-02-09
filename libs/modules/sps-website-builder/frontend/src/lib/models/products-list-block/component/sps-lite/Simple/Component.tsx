import ReactMarkdown from "react-markdown";
import { Component as Product } from "@sps/sps-ecommerce-frontend/lib/models/product/component";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="bg-white mx-auto max-w-7xl my-16">
      {props.title ? (
        <h2 className="text-center font-bold text-3xl mb-8">
          <ReactMarkdown>{props.title}</ReactMarkdown>
        </h2>
      ) : null}

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 md::grid-cols-2 relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* {props.products?.map((product, index) => {
          return (
            <Product
              key={index}
              isServer={props.isServer}
              variant="default"
              {...product}
            />
          );
        })} */}
      </div>
    </div>
  );
}
