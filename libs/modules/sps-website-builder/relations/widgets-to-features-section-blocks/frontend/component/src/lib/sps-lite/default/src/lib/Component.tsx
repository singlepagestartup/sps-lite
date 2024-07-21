import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-client-utils";
import { Component as FeaturesSectionBlock } from "@sps/sps-website-builder/models/features-section-block/frontend/component";
import { Component as FeaturesSectionBlocksToFeatures } from "@sps/sps-website-builder/relations/features-section-blocks-to-features/frontend/component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-relation="widgets-to-features-section-blocks"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex", props.data.className || "")}
    >
      <FeaturesSectionBlock
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        variant="find"
        apiProps={{
          params: {
            filters: {
              and: [
                {
                  column: "id",
                  method: "eq",
                  value: props.data.featuresSectionBlockId,
                },
              ],
            },
          },
        }}
      >
        {({ data }) => {
          return data?.map((entity, index) => {
            return (
              <FeaturesSectionBlock
                key={index}
                isServer={props.isServer}
                hostUrl={props.hostUrl}
                variant={entity.variant as any}
                data={entity}
                features={(componentProps) => {
                  return (
                    <FeaturesSectionBlocksToFeatures
                      variant="find"
                      isServer={componentProps.isServer}
                      hostUrl={props.hostUrl}
                      apiProps={{
                        params: {
                          filters: {
                            and: [
                              {
                                column: "featuresSectionBlockId",
                                method: "eq",
                                value: entity.id,
                              },
                            ],
                          },
                        },
                      }}
                    >
                      {({ data }) => {
                        return data?.map((entity, index) => {
                          return (
                            <FeaturesSectionBlocksToFeatures
                              key={index}
                              isServer={props.isServer}
                              hostUrl={props.hostUrl}
                              variant={entity.variant as any}
                              data={entity}
                            />
                          );
                        });
                      }}
                    </FeaturesSectionBlocksToFeatures>
                  );
                }}
              />
            );
          });
        }}
      </FeaturesSectionBlock>
    </div>
  );
}
