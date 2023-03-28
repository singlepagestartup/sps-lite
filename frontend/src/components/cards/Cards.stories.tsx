import utils from "@rogwild/next-utils";
const { getImageUrl } = utils.api;
import ReactMarkdown from "react-markdown";
import { StarIcon } from "@heroicons/react/20/solid";
import dayjs from "dayjs";
import { Meta, StoryObj } from "@storybook/react";
import Image from "next/image";
import { IReview } from "types";
import { BACKEND_URL } from "~utils/envs";
import Cards, { ICardProps, ICardSkeletonProps } from ".";

const meta = { component: Cards } satisfies Meta<typeof Cards>;

export default meta;

type Story = StoryObj<typeof meta>;

const review = {
  id: 5,
  name: `Emily Wilson`,
  title: `Exceptional Startup with Great Potential`,
  description: `I had the pleasure of working with this startup and I was very impressed with their innovation and dedication to their customers. Their team is very knowledgeable and professional and I am confident that they have great potential for future success. I am looking forward to seeing what new innovations they come up with next. I highly recommend this startup to anyone looking for innovative solutions.`,
  subtitle: `Looking Forward to Future Innovations`,
  rating: 5,
  createdAt: `2023-03-12T11:34:52.690Z`,
  cover: {
    id: 278,
    url: `https://721511.selcdn.ru/sps-lite-rogwild/pexels_edmond_dantes_4347368_225cc5ea44.jpg`,
  },
};

const reviews = Array(5).fill(review);

const cardsConfig = {
  emptyLength: 3,
  Comp: SimpleWithAvatarCard,
  SkeletonComp: SimpleWithAvatarCardSkeleton,
  className: `grid gap-4 grid-cols-1 sm:grid-cols-2 md::grid-cols-3 relative mx-auto max-w-7xl px-6 lg:px-8`,
};

export const Simple: Story = {
  args: {
    variant: `simple`,
    items: reviews,
    cardsConfig,
    showSkeletons: false,
  },
};

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
