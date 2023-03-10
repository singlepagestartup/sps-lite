import utils from "@rogwild/next-utils";
const { getImageUrl } = utils.api;
import Image from "next/image";
import { BACKEND_URL } from "~utils/envs";
import { StarIcon } from "@heroicons/react/20/solid";
import ReactMarkdown from "react-markdown";
import dayjs from "dayjs";
import { IReviewsBlock } from ".";
import { useMemo } from "react";
import { useGetReviewsQuery } from "~redux/services/backend/models/reviews";
import Cards, { ICardProps, ICardSkeletonProps } from "~components/cards";
import { IReview } from "types";

const cardsConfig = {
  emptyLength: 3,
  Comp: SimpleWithAvatarCard,
  SkeletonComp: SimpleWithAvatarCardSkeleton,
  className: `grid gap-4 data-[is-empty="true"]:grid-cols-1 data-[is-empty="false"]:grid-cols-3`,
};

export default function SimpleWithAvatars(props: IReviewsBlock) {
  const additionalAttributes = useMemo(() => {
    if (props?.anchor) {
      return {
        id: props.anchor,
      };
    }

    return {};
  }, [props]);

  const {
    data: reviews,
    isLoading,
    isFetching,
    isUninitialized,
  } = useGetReviewsQuery({});

  return (
    <div className="bg-white mx-auto max-w-7xl my-16" {...additionalAttributes}>
      <div>
        <h2 className="text-center font-bold text-3xl mb-8">
          Customer Reviews
        </h2>

        <Cards
          variant="simple"
          items={reviews}
          cardsConfig={cardsConfig}
          showSkeletons={isLoading || isFetching || isUninitialized}
        />
      </div>
    </div>
  );
}

function SimpleWithAvatarCard(props: ICardProps) {
  const { item }: { item: IReview } = props;

  return (
    <div className="flex space-x-4 text-sm text-gray-500">
      <div className="flex-none py-10">
        {item.cover ? (
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-100">
            <Image
              src={getImageUrl(item.cover, { BACKEND_URL })}
              alt=""
              fill={true}
              className="object-cover object-center"
            />
          </div>
        ) : null}
      </div>
      <div className={`flex-1 py-10`}>
        <h3 className="font-medium text-gray-900">{item.name}</h3>
        <p>
          <time dateTime={item.createdAt}>
            {dayjs(item.createdAt).format(`DD.MM.YYYY`)}
          </time>
        </p>

        <div className="mt-4 flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={`h-5 w-5 flex-shrink-0 ${
                item.rating > rating ? `text-yellow-400` : `text-gray-300`
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="sr-only">{item.rating} out of 5 stars</p>

        <div className="prose prose-sm mt-4 max-w-none text-gray-500">
          <ReactMarkdown>{item.description}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

function SimpleWithAvatarCardSkeleton(props: ICardSkeletonProps) {
  const { animationClassName } = props;

  return (
    <div className="w-full rounded-md overflow-hidden flex gap-3 p-5 drop-shadow bg-white">
      <div
        className={`w-[40px] h-[40px] rounded-full flex flex-shrink-0 ${animationClassName}`}
      ></div>
      <div className="w-full flex flex-col gap-2">
        <div className={`h-4 w-4/12 ${animationClassName}`}></div>
        <div className={`h-4 w-5/12 ${animationClassName}`}></div>
        <div className={`my-2 flex items-center`}>
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={`h-5 w-5 flex-shrink-0 text-gray-300`}
              aria-hidden="true"
            />
          ))}
        </div>
        <div className={`h-4 ${animationClassName}`}></div>
        <div className={`h-4 ${animationClassName}`}></div>
        <div className={`h-4 w-4/12 ${animationClassName}`}></div>
      </div>
    </div>
  );
}
