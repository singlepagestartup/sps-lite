import { Component as Button } from "../../../../button/component";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { IComponentPropsExtended } from "../../interface";
import { Component as File } from "@sps/sps-file-storage-frontend/lib/models/file/component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="bg-white mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="relative isolate grid grid-rows-2 lg:grid-rows-1 grid-cols-4 gap-4 overflow-hidden px-6 pt-16 bg-gray-900 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:px-24 lg:pt-0">
        <div className="absolute top-1/2 left-1/2 -z-10 h-[80vw] w-[80vw] -translate-y-1/2 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2 rounded-full bg-gradient-radial from-primary-600 to-transparent [mask-image:radial-gradient(closest-side,white,transparent)]"></div>
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left col-span-4 lg:col-span-2">
          {props.title ? (
            <ReactMarkdown className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {props.title}
            </ReactMarkdown>
          ) : null}
          {props?.description ? (
            <ReactMarkdown className="mt-6 text-lg leading-8 text-gray-300">
              {props?.description}
            </ReactMarkdown>
          ) : null}
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            {props?.buttons?.map((button, index) => {
              return (
                <Button isServer={props.isServer} key={index} {...button} />
              );
            })}
          </div>
        </div>
        <div className="col-span-4 lg:col-span-2 flex items-center justify-center">
          <div className="w-full relative aspect-w-6 aspect-h-4">
            {props.media?.length ? (
              <File
                variant="image"
                isServer={false}
                className="object-contain object-center"
                {...props.media[0]}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
