import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-client-utils";
import { Component as SubjectsBlock } from "@sps/sps-rbac/models/authentication-block/frontend/component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-rbac"
      data-relation="widgets-to-subjects-blocks"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full", props.data.className)}
    >
      <SubjectsBlock
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
                  value: props.data.subjectsBlockId,
                },
              ],
            },
          },
        }}
      >
        {({ data }) => {
          return data?.map((entity, index) => {
            return (
              <SubjectsBlock
                key={index}
                isServer={props.isServer}
                hostUrl={props.hostUrl}
                data={entity}
                variant={entity.variant as any}
              />
            );
          });
        }}
      </SubjectsBlock>
    </div>
  );
}
