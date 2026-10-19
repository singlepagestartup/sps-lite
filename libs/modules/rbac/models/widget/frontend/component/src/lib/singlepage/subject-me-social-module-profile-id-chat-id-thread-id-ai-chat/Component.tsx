import { Component as ClientComponent } from "./ClientComponent";
import type { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <ClientComponent
      isServer={false}
      variant={props.variant}
      data={props.data}
      language={props.language}
      socialModuleProfileId={props.routeParams?.["social.profiles.id"]}
      socialModuleChatId={props.routeParams?.["social.chats.id"]}
      socialModuleThreadId={props.routeParams?.["social.threads.id"]}
    />
  );
}
