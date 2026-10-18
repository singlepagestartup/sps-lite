import { Component as ClientComponent } from "./ClientComponent";
import type { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <ClientComponent
      isServer={false}
      variant={props.variant}
      data={props.data}
      language={props.language}
      profileId={props.profileId ?? props.routeParams?.["social.profiles.id"]}
      chatId={props.chatId ?? props.routeParams?.["social.chats.id"]}
      threadId={props.threadId ?? props.routeParams?.["social.threads.id"]}
    />
  );
}
