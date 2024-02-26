import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { IComponentPropsExtended } from "./interface";
import { Component as File } from "@sps/sps-file-storage-models-file-frontend-component";
import { Component as Button } from "@sps/sps-website-builder-models-button-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="page-blocks.hero-section-block"
      data-variant={props.variant}
      className="relative flex flex-col items-center justify-between overflow-hidden bg-white mx-auto max-w-7xl"
    >
      {props.data.additionalMedia?.length ? (
        <File
          variant="image"
          isServer={false}
          data={props.data.additionalMedia[0]}
          className="object-cover object-center"
        />
      ) : null}

      <div className="relative pt-6 pb-16">
        <main className="mx-auto mt-16 max-w-2xl lg:max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            {props.data?.title ? (
              <h1 className="text-4xl font-bold tracking-tight xl:inline text-gray-900 sm:text-5xl md:text-6xl">
                <ReactMarkdown>{props.data?.title}</ReactMarkdown>
              </h1>
            ) : null}
            {props.data?.description ? (
              <ReactMarkdown className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
                {props.data?.description}
              </ReactMarkdown>
            ) : null}
            <div className="mx-auto mt-5 max-w-md flex flex-col sm:flex-row justify-center md:mt-8 gap-4">
              {props.data?.buttons?.map((button, index) => {
                return (
                  <Button
                    isServer={false}
                    key={index}
                    variant={button.variant}
                    data={button}
                  />
                );
              })}
            </div>
          </div>
        </main>
      </div>
      {props.data.media?.length ? (
        <File
          variant="image"
          isServer={false}
          data={props.data.media[0]}
          containerClassName="w-full relative aspect-w-4 aspect-h-2"
          className="object-contain"
        />
      ) : null}
    </div>
  );
}
