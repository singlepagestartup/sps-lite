"use client";

import Image from "next/image";
import { StarIcon } from "@heroicons/react/20/solid";
import ReactMarkdown from "react-markdown";
import { api as reviewApi } from "~redux/services/backend/extensions/sps-crm/api/review/api";
import Card, { ICardProps } from "~components/card";
import getFileUrl from "~utils/api/get-file-url";
import { IEntity as ISpsLiteBackendApiReview } from "~redux/services/backend/extensions/sps-crm/api/review/interfaces/sps-lite";
import { IPageBlock } from "../..";

const cardsConfig = {
  emptyLength: 4,
  Comp: SimpleWithAvatarCard,
  SkeletonComp: SimpleWithAvatarCardSkeleton,
  className:
    "grid gap-4 grid-cols-1 sm:grid-cols-2 md::grid-cols-3 relative mx-auto max-w-7xl px-6 lg:px-8",
};

export default function Component(props: IPageBlock) {
  const {
    data: reviews,
    isLoading,
    isFetching,
    isUninitialized,
  } = reviewApi.useGetQuery({});

  return (
    <div className="bg-white mx-auto max-w-7xl my-16">
      {props.title ? (
        <h2 className="text-center font-bold text-3xl mb-8">
          <ReactMarkdown>{props.title}</ReactMarkdown>
        </h2>
      ) : null}

      <Card
        variant="simple"
        items={reviews}
        cardsConfig={cardsConfig}
        showSkeletons={isLoading || isFetching || isUninitialized}
      />
    </div>
  );
}

function SimpleWithAvatarCard(props: ICardProps) {
  const { item }: { item: ISpsLiteBackendApiReview } = props;

  return (
    <div className="flex space-x-4 text-sm text-gray-500">
      <div className="flex-none py-10">
        {item.media?.length ? (
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-100">
            <Image
              src={getFileUrl(item.media[0])}
              alt=""
              fill={true}
              className="object-cover object-center"
            />
          </div>
        ) : null}
      </div>
      <div className={"flex-1 py-10"}>
        <h3 className="font-medium text-gray-900">{item.name}</h3>
        <p>{item.subtitle}</p>

        {typeof item?.rating === "number" ? (
          <div className="mt-2 flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={`h-5 w-5 flex-shrink-0 ${
                  item.rating && item.rating > rating
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                aria-hidden="true"
              />
            ))}
          </div>
        ) : null}
        <p className="sr-only">{item.rating} out of 5 stars</p>

        {item.description ? (
          <div className="prose prose-sm mt-4 max-w-none text-gray-500">
            <ReactMarkdown>{item.description}</ReactMarkdown>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function SimpleWithAvatarCardSkeleton() {
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
