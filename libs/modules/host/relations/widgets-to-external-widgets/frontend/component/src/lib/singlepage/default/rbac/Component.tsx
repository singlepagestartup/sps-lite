import type { IComponentPropsExtended } from "../interface";
import { Component as RbacModuleWidget } from "@sps/rbac/models/widget/frontend/component";
import { Component as Page } from "@sps/host/models/page/frontend/component";
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
      {({ data }) =>
        data?.map((entity) => (
          <Page
            key={entity.id}
            isServer={props.isServer}
            variant="url-segment-values"
            url={props.url}
          >
            {({ data }) => (
              <RbacModuleWidget
                isServer={props.isServer}
                dataSource="props"
                data={entity}
                language={props.language}
                profileId={data?.["social.profiles.id"]}
                chatId={data?.["social.chats.id"]}
                threadId={data?.["social.threads.id"]}
                subjectSlug={data?.["rbac.subjects.slug"]}
                variant={entity.variant as any}
              />
            )}
          </Page>
        ))
      }
    </RbacModuleWidget>
  );
}
