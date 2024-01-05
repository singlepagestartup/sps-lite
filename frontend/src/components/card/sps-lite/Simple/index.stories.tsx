import ReactMarkdown from "react-markdown";
import { StarIcon } from "@heroicons/react/20/solid";
import dayjs from "dayjs";
import { Meta, StoryObj } from "@storybook/react";
import Image from "next/image";
import Card, { ICardProps } from "../..";
import { entity as review } from "~redux/services/backend/extensions/sps-crm/api/review/mock/sps-lite";
import getFileUrl from "~utils/api/get-file-url";
import { HttpResponse, http } from "msw";
import { useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "~utils/envs";
import { IEntity as IBackendReview } from "~redux/services/backend/extensions/sps-crm/api/review/interfaces";

const meta = { component: Card } satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

const reviews = Array(5).fill(review);

const cardsConfig = {
  emptyLength: 3,
  Comp: SimpleWithAvatarCard,
  SkeletonComp: SimpleWithAvatarCardSkeleton,
  className:
    "grid gap-4 grid-cols-1 sm:grid-cols-2 md::grid-cols-3 relative mx-auto max-w-7xl px-6 lg:px-8",
};

export const Index: Story = {
  args: {
    variant: "simple",
    items: reviews,
    cardsConfig,
    showSkeletons: false,
  },
  parameters: {
    msw: {
      handlers: [
        http.get(`${BACKEND_URL}/user`, ({ request }) => {
          return HttpResponse.json({
            firstName: "Neil",
            lastName: "Maverick",
          });
        }),
      ],
    },
  },
};

function SimpleWithAvatarCard(props: ICardProps) {
  const { item }: { item: IBackendReview } = props;

  useEffect(() => {
    axios({
      method: "get",
      url: `${BACKEND_URL}/user`,
    }).then((res) => {
      console.log(res);
    });
  }, []);

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
        <p>
          <time dateTime={item.createdAt}>
            {dayjs(item.createdAt).format("DD.MM.YYYY")}
          </time>
        </p>

        {typeof item.rating === "number" ? (
          <div className="mt-4 flex items-center">
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
    <div className="w-full rounded-md overflow-hidden flex gap-3 p-5 drop-shadow bg-white">
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
