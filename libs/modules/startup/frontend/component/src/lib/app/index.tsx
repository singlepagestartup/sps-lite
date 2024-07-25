import { IComponentProps } from "./interface";
import { cn } from "@sps/shared-frontend-client-utils";
import { Component as Widget } from "@sps/startup/models/widget/frontend/component";

export function App(props: IComponentProps) {
  const parsedProps = JSON.parse(props.props || "{}");
  const model = parsedProps.model || "";
  const variant = parsedProps.variant || "";
  const title = parsedProps.title || "";

  if (model === "widget") {
    return (
      <div
        data-module="startup"
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
  }

  return;
}
