import utils from "@rogwild/next-utils";
const { getImageUrl } = utils.api;
import Image from "next/image";
import { IReview } from "types";
import { BACKEND_URL } from "~utils/envs";
import { StarIcon } from "@heroicons/react/20/solid";
import ReactMarkdown from "react-markdown";
import dayjs from "dayjs";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(` `);
}

export default function SimpleWithAvatars({ review }: { review: IReview }) {
  return (
    <div key={review.id} className="flex space-x-4 text-sm text-gray-500">
      <div className="flex-none py-10">
        {review.cover ? (
          <div className="relative h-10 w-10 rounded-full bg-gray-100">
            <Image
              src={getImageUrl(review.cover, { BACKEND_URL })}
              alt=""
              fill={true}
            />
          </div>
        ) : null}
      </div>
      <div className={`flex-1 py-10`}>
        <h3 className="font-medium text-gray-900">{review.name}</h3>
        <p>
          <time dateTime={review.createdAt}>
            {dayjs(review.createdAt).format(`DD.MM.YYYY`)}
          </time>
        </p>

        <div className="mt-4 flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={classNames(
                review.rating > rating ? `text-yellow-400` : `text-gray-300`,
                `h-5 w-5 flex-shrink-0`
              )}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="sr-only">{review.rating} out of 5 stars</p>

        <div className="prose prose-sm mt-4 max-w-none text-gray-500">
          <ReactMarkdown>{review.description}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
