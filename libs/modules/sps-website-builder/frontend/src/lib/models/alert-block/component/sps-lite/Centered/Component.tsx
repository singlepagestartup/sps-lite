import ReactMarkdown from "react-markdown";
import { Component as Button } from "../../../../button/component";
import { IComponentPropsExtended } from "../../interface";
import { Component as File } from "@sps/sps-file-storage-frontend/lib/models/file/component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="bg-white mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="w-2/12 mx-auto mb-8">
          {props.media?.length ? (
            <File
              isServer={false}
              variant="image"
              {...props.media[0]}
              containerClassName="aspect-w-3 aspect-h-3 relative"
              className=""
            />
          ) : null}
        </div>
        <h2 className="text-lg font-semibold text-primary-600">
          {props.subtitle}
        </h2>
        <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          {props.title}
        </p>
        {props.description ? (
          <ReactMarkdown className="mx-auto my-8 max-w-xl text-xl text-gray-500">
            {props.description}
          </ReactMarkdown>
        ) : null}
        <div className="flex gap-2 justify-center">
          {props.buttons?.map((button, index) => {
            return <Button isServer={props.isServer} key={index} {...button} />;
          })}
        </div>
      </div>
    </div>
  );
}
