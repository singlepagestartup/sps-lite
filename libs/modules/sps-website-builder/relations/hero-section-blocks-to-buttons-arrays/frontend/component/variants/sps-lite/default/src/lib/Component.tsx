import { IComponentPropsExtended } from "./interface";
import { Component as ButtonsArray } from "@sps/sps-website-builder/models/buttons-array/frontend/component";
import { cn } from "@sps/shared-frontend-client-utils";
import { Component as ButtonsArraysToButtons } from "@sps/sps-website-builder/relations/buttons-arrays-to-buttons/frontend/component/root";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-relation="hero-section-blocks-to-buttons-arrays"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex", props.data.className)}
    >
      <ButtonsArray
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
                  value: props.data.buttonsArrayId,
                },
              ],
            },
          },
        }}
      >
        {({ data }) => {
          return data?.map((entity, index) => {
            return (
              <ButtonsArray
                key={index}
                isServer={props.isServer}
                hostUrl={props.hostUrl}
                variant={entity.variant as any}
                data={entity}
                buttons={
                  <ButtonsArraysToButtons
                    variant="find"
                    isServer={props.isServer}
                    hostUrl={props.hostUrl}
                    apiProps={{
                      params: {
                        filters: {
                          and: [
                            {
                              column: "buttonsArrayId",
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
                          <ButtonsArraysToButtons
                            key={index}
                            isServer={props.isServer}
                            hostUrl={props.hostUrl}
                            variant={entity.variant as any}
                            data={entity}
                          />
                        );
                      });
                    }}
                  </ButtonsArraysToButtons>
                }
              />
            );
          });
        }}
      </ButtonsArray>
    </div>
  );
}
