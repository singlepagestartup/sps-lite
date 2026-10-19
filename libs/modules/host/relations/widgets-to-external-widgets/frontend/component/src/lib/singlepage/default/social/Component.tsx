import type { IExternalWidgetProps } from "../interface";
import { Component as SocialModuleWidget } from "@sps/social/models/widget/frontend/component";
import { Component as RbacModuleSubject } from "@sps/rbac/models/subject/frontend/component";
export function Component(props: IExternalWidgetProps) {
  return (
    <SocialModuleWidget
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
      {({ data }) =>
        data?.map((entity) => (
          <SocialModuleWidget
            key={entity.id}
            isServer={props.isServer}
            dataSource="props"
            data={entity}
            language={props.language}
            routeParams={props.routeParams}
            variant={entity.variant as any}
            renderChat={({ chatId, threadId }) => (
              <RbacModuleSubject
                isServer={props.isServer}
                variant="me-social-module-profile-chat-overview-default"
                socialModuleChatId={chatId}
                socialModuleThreadId={threadId}
                language={props.language}
              />
            )}
            chatList={
              <RbacModuleSubject
                isServer={props.isServer}
                variant="me-social-module-profile-chat-list-default"
                language={props.language}
              />
            }
          />
        ))
      }
    </SocialModuleWidget>
  );
}
