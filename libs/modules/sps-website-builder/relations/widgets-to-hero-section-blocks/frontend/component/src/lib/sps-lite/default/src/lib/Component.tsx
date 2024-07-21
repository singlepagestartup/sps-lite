import { IComponentPropsExtended } from "./interface";
import { Component as HeroSectionBlock } from "@sps/sps-website-builder/models/hero-section-block/frontend/component";
import { Component as HeroSectionBlocksToSpsFileStorageWidgets } from "@sps/sps-website-builder/relations/hero-section-blocks-to-sps-file-storage-module-widgets/frontend/component/root";
import { Component as HeroSectionBlocksToButtonsArrays } from "@sps/sps-website-builder/relations/hero-section-blocks-to-buttons-arrays/frontend/component/root";

import { cn } from "@sps/shared-frontend-client-utils";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="widgets-to-hero-section-blocks"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex", props.data.className)}
    >
      {/* <HeroSectionBlock
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        variant={props.data.heroSectionBlock.variant}
        data={props.data.heroSectionBlock}
        fileStorageWidgets={
          <HeroSectionBlocksToSpsFileStorageWidgets
            isServer={props.isServer}
            hostUrl={props.hostUrl}
            variant="find"
            apiProps={{
              params: {
                filters: {
                  and: [
                    {
                      column: "heroSectionBlockId",
                      method: "eq",
                      value: props.data.heroSectionBlock.id,
                    },
                  ],
                },
              },
            }}
          >
            {({ data }) => {
              return data?.map((entity, index) => {
                return (
                  <HeroSectionBlocksToSpsFileStorageWidgets
                    key={index}
                    isServer={props.isServer}
                    hostUrl={props.hostUrl}
                    variant={entity.variant}
                    data={entity}
                  />
                );
              });
            }}
          </HeroSectionBlocksToSpsFileStorageWidgets>
        }
        buttonsArrays={
          <HeroSectionBlocksToButtonsArrays
            isServer={props.isServer}
            hostUrl={props.hostUrl}
            variant="find"
            apiProps={{
              params: {
                filters: {
                  and: [
                    {
                      column: "heroSectionBlockId",
                      method: "eq",
                      value: props.data.heroSectionBlockId,
                    },
                  ],
                },
              },
            }}
          >
            {({ data }) => {
              return data?.map((entity, index) => {
                return (
                  <HeroSectionBlocksToButtonsArrays
                    key={index}
                    isServer={props.isServer}
                    hostUrl={props.hostUrl}
                    variant={entity.variant}
                    data={entity}
                  />
                );
              });
            }}
          </HeroSectionBlocksToButtonsArrays>
        }
      ></HeroSectionBlock> */}
    </div>
  );
}
