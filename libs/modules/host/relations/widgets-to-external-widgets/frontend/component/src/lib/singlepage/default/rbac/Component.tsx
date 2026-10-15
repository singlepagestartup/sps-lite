import { Component as WebsiteWidget } from "@sps/website-builder/models/widget/frontend/component";
import { AI_CHAT_REGISTRATION_CONTENT } from "@sps/shared-utils";
import { IComponentPropsExtended } from "../interface";
import { Component as RbacModuleWidget } from "@sps/rbac/models/widget/frontend/component";
import { Component as Widget } from "./widget";

export function Component(props: IComponentPropsExtended) {
  return (
    <RbacModuleWidget
      isServer={props.isServer}
      variant="find"
      apiProps={{
        params: {
          filters: {
            and: [
              {
                column: "id",
                method: "eq",
                value: props.data.externalWidgetId,
              },
            ],
          },
        },
      }}
    >
      {({ data }) => {
        return data?.map((entity, index) => {
          if (
            [
              "subject-me-social-module-profile-id-chat-id-thread-id-ai-chat",
              "subject-me-social-module-profile-id-chat-id-thread-create-ai-chat",
              "subject-me-social-module-profile-id-settings-ai-chat",
            ].includes(entity.variant)
          )
            return (
              <Widget
                {...props}
                key={entity.id}
                data={entity}
                variant={entity.variant as any}
              />
            );
          if (
            [
              "subject-me-authentication-select-method-ai-chat",
              "subject-me-authentication-registration-ai-chat",
              "subject-me-authentication-forgot-password-ai-chat",
              "subject-me-authentication-reset-password-ai-chat",
            ].includes(entity.variant)
          ) {
            return (
              <WebsiteWidget
                key={entity.id}
                isServer={props.isServer}
                variant="find"
                apiProps={{
                  params: {
                    filters: {
                      and: [
                        {
                          column: "slug",
                          method: "eq",
                          value: "ai-chat-authentication-content",
                        },
                      ],
                    },
                  },
                }}
              >
                {({ data }) =>
                  data?.map((frame) => (
                    <WebsiteWidget
                      key={frame.id}
                      isServer={props.isServer}
                      variant="content-ai-chat-authentication"
                      language={props.language}
                      data={frame}
                      {...(entity.variant ===
                      "subject-me-authentication-registration-ai-chat"
                        ? {
                            content: AI_CHAT_REGISTRATION_CONTENT,
                            media: "stack" as const,
                            asideIcon: "shield-check" as const,
                          }
                        : {})}
                    >
                      <RbacModuleWidget
                        isServer={props.isServer}
                        data={entity}
                        variant={entity.variant as any}
                        language={props.language}
                      />
                    </WebsiteWidget>
                  ))
                }
              </WebsiteWidget>
            );
          }
          return (
            <RbacModuleWidget
              key={entity.id}
              isServer={props.isServer}
              data={entity}
              language={props.language}
              variant={entity.variant as any}
            >
              <Widget {...props} data={entity} variant={entity.variant} />
            </RbacModuleWidget>
          );
        });
      }}
    </RbacModuleWidget>
  );
}
