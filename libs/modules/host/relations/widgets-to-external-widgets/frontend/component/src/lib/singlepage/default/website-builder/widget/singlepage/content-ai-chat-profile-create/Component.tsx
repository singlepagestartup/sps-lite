import { Component as Widget } from "@sps/rbac/models/widget/frontend/component";
import type { IComponentProps } from "./interface";
export function Component(props: IComponentProps) {
  return (
    <Widget
      isServer={props.isServer}
      variant="find"
      apiProps={{
        params: {
          filters: {
            and: [
              {
                column: "variant",
                method: "eq",
                value: "subject-me-social-module-profile-create-ai-chat",
              },
            ],
          },
        },
      }}
    >
      {({ data }) =>
        data?.map((widget) => (
          <Widget
            key={widget.id}
            isServer={props.isServer}
            variant="subject-me-social-module-profile-create-ai-chat"
            data={widget}
            language={props.language}
          />
        ))
      }
    </Widget>
  );
}
