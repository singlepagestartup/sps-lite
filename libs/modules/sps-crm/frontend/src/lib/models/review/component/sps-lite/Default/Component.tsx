import ReactMarkdown from "react-markdown";
import { Component as File } from "@sps/sps-file-storage-frontend/lib/models/file/component";
import { IComponentPropsExtended } from "../../interface";
import { StarIcon } from "@heroicons/react/24/outline";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="flex space-x-4 text-sm text-gray-500">
      <div className="flex-none py-10">
        {props.media?.length ? (
          <File
            isServer={false}
            variant="image"
            {...props.media[0]}
            containerClassName="relative h-10 w-10 overflow-hidden rounded-full bg-gray-100"
            className="object-cover object-center"
          />
        ) : null}
      </div>
      <div className={"flex-1 py-10"}>
        <h3 className="font-medium text-gray-900">{props.name}</h3>
        <p>{props.subtitle}</p>

        {typeof props?.rating === "number" ? (
          <div className="mt-2 flex propss-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={`h-5 w-5 flex-shrink-0 ${
                  props.rating && props.rating > rating
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                aria-hidden="true"
              />
            ))}
          </div>
        ) : null}
        <p className="sr-only">{props.rating} out of 5 stars</p>

        {props.description ? (
          <div className="prose prose-sm mt-4 max-w-none text-gray-500">
            <ReactMarkdown>{props.description}</ReactMarkdown>
          </div>
        ) : null}
      </div>
    </div>
  );
}
