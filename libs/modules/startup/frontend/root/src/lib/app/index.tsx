import { IComponentProps } from "./interface";
import { cn } from "@sps/shared-frontend-utils-client";
import { Component as Widget } from "@sps/startup/models/widget/frontend/component/root";

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
          query={
            title
              ? {
                  filters: {
                    and: [
                      {
                        column: "title",
                        method: "eq",
                        value: title,
                      },
                    ],
                  },
                }
              : {}
          }
        >
          {({ data: widgets }) => {
            return widgets
              .filter((widget) => widget.variant === variant)
              .map((widget) => {
                return (
                  <Widget
                    key={widget.id}
                    isServer={props.isServer}
                    hostUrl={props.hostUrl}
                    data={widget}
                    variant={widget.variant}
                  />
                );
              });
          }}
        </Widget>
      </div>
    );
  }

  return (
    <div
      data-module="startup"
      className={cn("w-full flex flex-col", props.className)}
    >
      <div className="px-2">
        <div className="w-full flex flex-col gap-3 font-bold text-sm p-5 rounded-lg bg-muted text-center">
          <p>Startup Module</p>
          <p>Model: {model}</p>
          <p>Variant: {variant}</p>
          <p>Title: {title}</p>
        </div>
      </div>
    </div>
  );
}
