import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-client-utils";
import { Component as Article } from "@sps/blog/models/article/frontend/component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="startup"
      data-model="widget"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex", props.data.className)}
    >
      <Article
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
                  value: props.id,
                },
              ],
            },
          },
        }}
      >
        {({ data }) => {
          return data?.map((article, index) => {
            return (
              <Article
                key={index}
                isServer={props.isServer}
                hostUrl={props.hostUrl}
                variant="overview-default"
                data={article}
              />
            );
          });
        }}
      </Article>
    </div>
  );
}
