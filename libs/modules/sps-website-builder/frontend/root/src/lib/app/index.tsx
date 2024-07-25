import { IComponentProps } from "./interface";
import { Component as Widget } from "@sps/sps-website-builder/models/widget/frontend/component";

import { cn } from "@sps/shared-frontend-client-utils";

export function App(props: IComponentProps) {
  const parsedProps = JSON.parse(props.props || "{}");
  const variant = parsedProps.variant || "";
  const title = parsedProps.title || "";

  return (
    <div
      data-module="sps-website-builder"
      className={cn("w-full flex flex-col", props.className)}
    >
      <Widget
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        variant="find"
        apiProps={
          title
            ? {
                params: {
                  filters: {
                    and: [
                      {
                        column: "title",
                        method: "eq",
                        value: title,
                      },
                    ],
                  },
                },
              }
            : {}
        }
      >
        {({ data: widgets }) => {
          if (!widgets?.length) {
            return;
          }

          return widgets
            .filter((widget) => widget.variant === variant)
            .map((widget) => {
              return (
                <Widget
                  key={widget.id}
                  isServer={props.isServer}
                  hostUrl={props.hostUrl}
                  data={widget}
                  variant={widget.variant as any}
                />
              );
            });
        }}
      </Widget>
    </div>
  );

  return;
}
