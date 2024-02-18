import ReactMarkdown from "react-markdown";
import { Component as Product } from "@sps/sps-ecommerce-product-component";
import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="bg-white mx-auto max-w-7xl my-16">
      {props.data.title ? (
        <h2 className="text-center font-bold text-3xl mb-8">
          <ReactMarkdown>{props.data.title}</ReactMarkdown>
        </h2>
      ) : null}
      <div className="py-10">
        <Product isServer={props.isServer} variant="list" />
      </div>
    </div>
  );
}
