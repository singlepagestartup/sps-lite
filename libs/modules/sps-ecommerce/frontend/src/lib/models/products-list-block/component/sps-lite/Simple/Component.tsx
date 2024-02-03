"use client";

import { StarIcon } from "@heroicons/react/20/solid";
import ReactMarkdown from "react-markdown";
import { api as productApi } from "../../../../../models/product/api/client";
import { Component as Product } from "../../../../../models/product/component";
import { Card, ICardProps } from "@sps/ui-adapter";
import type { IModel as IBackendProduct } from "@sps/sps-ecommerce-contracts-extended/lib/models/product/interfaces";
import { IComponentPropsExtended } from "../../interface";

const cardsConfig = {
  emptyLength: 4,
  Comp: ProductCard,
  SkeletonComp: ProductCardSkeleton,
  className:
    "grid gap-4 grid-cols-1 sm:grid-cols-3 md::grid-cols-2 relative mx-auto max-w-7xl px-6 lg:px-8",
};

export function Component(props: IComponentPropsExtended) {
  const {
    data: products,
    isLoading,
    isFetching,
    isUninitialized,
  } = productApi.useFindQuery({});

  return (
    <div className="bg-white mx-auto max-w-7xl my-16">
      {props.title ? (
        <h2 className="text-center font-bold text-3xl mb-8">
          <ReactMarkdown>{props.title}</ReactMarkdown>
        </h2>
      ) : null}

      <Card
        variant="simple"
        items={products}
        cardsConfig={cardsConfig}
        showSkeletons={isLoading || isFetching || isUninitialized}
      />
    </div>
  );
}

function ProductCard(props: ICardProps) {
  const { item }: { item: IBackendProduct } = props;

  return <Product isServer={false} variant="default" {...item} />;
}

function ProductCardSkeleton() {
  return (
    <div className="w-full rounded-md overflow-hidden flex gap-3 py-10 bg-white">
      <div className="w-[40px] h-[40px] rounded-full flex flex-shrink-0 skeleton"></div>
      <div className="w-full flex flex-col gap-2">
        <div className="h-4 w-4/12 skeleton"></div>
        <div className="h-4 w-5/12 skeleton"></div>
        <div className="my-2 flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className="h-5 w-5 flex-shrink-0 text-gray-300"
              aria-hidden="true"
            />
          ))}
        </div>
        <div className="h-4 skeleton"></div>
        <div className="h-4 skeleton"></div>
        <div className="h-4 w-4/12 skeleton"></div>
      </div>
    </div>
  );
}
