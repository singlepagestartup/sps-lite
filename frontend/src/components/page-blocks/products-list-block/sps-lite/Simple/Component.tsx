"use client";

import Image from "next/image";
import { StarIcon } from "@heroicons/react/20/solid";
import ReactMarkdown from "react-markdown";
import { api as productApi } from "~redux/services/backend/extensions/sps-ecommerce/api/product/api";
import Card, { ICardProps } from "~components/card";
import getFileUrl from "~utils/api/get-file-url";
import { IEntity as IBackendProduct } from "~redux/services/backend/extensions/sps-ecommerce/api/product/interfaces";
import { IPageBlock } from "../..";
import { useMemo } from "react";
import Button from "~components/elements/button";

const cardsConfig = {
  emptyLength: 4,
  Comp: ProductCard,
  SkeletonComp: ProductCardSkeleton,
  className:
    "grid gap-4 grid-cols-1 sm:grid-cols-3 md::grid-cols-2 relative mx-auto max-w-7xl px-6 lg:px-8",
};

export default function Component(props: IPageBlock) {
  const {
    data: products,
    isLoading,
    isFetching,
    isUninitialized,
  } = productApi.useGetQuery({});

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
  const priceAttribute = item.attributes?.find(
    (attr) => attr.attributeKey?.key === "price",
  );
  const buttonTitle = useMemo(() => {
    if (!priceAttribute) {
      return "";
    }

    return priceAttribute.attributeKey
      ? `Buy for ${priceAttribute?.currency?.unicode || ""}${
          priceAttribute[priceAttribute?.attributeKey?.type]
        }`
      : "";
  }, [priceAttribute]);

  return (
    <div className="flex flex-col text-gray-500">
      {item.media?.length ? (
        <div className="relative w-full aspect-w-2 aspect-h-2 overflow-hidden rounded-md bg-gray-100">
          <Image
            src={getFileUrl(item.media[0])}
            alt=""
            fill={true}
            className="object-cover object-center"
          />
        </div>
      ) : null}
      <div className={"flex flex-col gap-2 py-6"}>
        <h3 className="font-medium text-gray-900">{item.title}</h3>

        {item.description ? (
          <div className="prose prose-sm max-w-none text-gray-500">
            <ReactMarkdown>{item.description}</ReactMarkdown>
          </div>
        ) : null}
        <Button url="" variant="primary" title={buttonTitle} />
      </div>
    </div>
  );
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
