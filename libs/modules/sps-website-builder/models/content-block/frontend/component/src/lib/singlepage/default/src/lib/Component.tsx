import { IComponentPropsExtended } from "./interface";
import { TipTap } from "@sps/shared-ui-shadcn";
import { cn } from "@sps/shared-frontend-client-utils";
import { Component as ContentBlocksToSpsFileStorageWidgets } from "@sps/sps-website-builder/relations/content-blocks-to-sps-file-storage-module-widgets/frontend/component";
import { Component as ContentBlocksToButtonsArrays } from "@sps/sps-website-builder/relations/content-blocks-to-buttons-arrays/frontend/component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="content-block"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn(
        "w-full flex flex-col",
        props.data.className || "px-2 py-20 lg:py-32",
      )}
    >
      <div className="w-full mx-auto max-w-7xl">
        {props.data?.title ? (
          <h1 className="text-4xl font-bold tracking-tight xl:inline text-gray-900 sm:text-5xl md:text-6xl">
            <p>{props.data?.title}</p>
          </h1>
        ) : null}
        {props.data.description ? (
          <TipTap value={props.data.description} />
        ) : null}
        <div className="mx-auto my-5 max-w-md flex flex-col sm:flex-row justify-center md:mt-8 gap-4">
          <ContentBlocksToButtonsArrays
            isServer={props.isServer}
            hostUrl={props.hostUrl}
            variant="find"
            apiProps={{
              params: {
                filters: {
                  and: [
                    {
                      column: "contentBlockId",
                      method: "eq",
                      value: props.data.id,
                    },
                  ],
                },
              },
            }}
          >
            {({ data }) => {
              return data?.map((entity, index) => {
                return (
                  <ContentBlocksToButtonsArrays
                    key={index}
                    isServer={props.isServer}
                    hostUrl={props.hostUrl}
                    variant={entity.variant as any}
                    data={entity}
                  />
                );
              });
            }}
          </ContentBlocksToButtonsArrays>
        </div>
        <div className="w-full">
          <ContentBlocksToSpsFileStorageWidgets
            isServer={props.isServer}
            hostUrl={props.hostUrl}
            variant="find"
            apiProps={{
              params: {
                filters: {
                  and: [
                    {
                      column: "contentBlockId",
                      method: "eq",
                      value: props.data.id,
                    },
                  ],
                },
              },
            }}
          >
            {({ data }) => {
              return data?.map((entity, index) => {
                return (
                  <ContentBlocksToSpsFileStorageWidgets
                    key={index}
                    isServer={props.isServer}
                    hostUrl={props.hostUrl}
                    variant={entity.variant as any}
                    data={entity}
                  />
                );
              });
            }}
          </ContentBlocksToSpsFileStorageWidgets>
        </div>
      </div>
    </div>
  );
}
