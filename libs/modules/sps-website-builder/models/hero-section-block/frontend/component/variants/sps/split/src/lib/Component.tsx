import ReactMarkdown from "react-markdown";
import { Component as Button } from "@sps/sps-website-builder-models-button-frontend-component";
import { IComponentPropsExtended } from "./interface";
import { Component as File } from "@sps/sps-file-storage-models-file-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="hero-section-block"
      data-variant={props.variant}
      className="relative flex flex-col border-b border-gray-200 lg:border-0"
    >
      <div
        aria-hidden="true"
        className="absolute hidden h-full w-full bg-gray-100 lg:block"
      />
      <div className="max-w-7xl relative mx-auto">
        <div className="relative bg-gray-100 lg:bg-transparent">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
            <div className="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64">
              <div className="lg:pr-16">
                {/* <div className="mb-6">
                  {props.data.logotype ? (
                    <Logotype
                      isServer={props.isServer}
                      variant="default"
                      data={props.data.logotype}
                    />
                  ) : null}
                </div> */}
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                  {props.data.title}
                </h1>
                {props.data.description ? (
                  <ReactMarkdown className="mt-4 text-xl text-gray-600">
                    {props.data.description}
                  </ReactMarkdown>
                ) : null}
                <div className="mt-6 flex gap-2 flex-wrap">
                  {props.data.buttons?.map((button, index) => {
                    return (
                      <Button
                        isServer={props.isServer}
                        key={index}
                        variant={button.variant}
                        data={button}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-48 w-full sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/2">
          {props.data.media?.length ? (
            <File
              isServer={false}
              variant="image"
              data={props.data.media[0]}
              className="object-cover object-center"
              containerClassName="relative h-full w-full object-cover object-center"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
