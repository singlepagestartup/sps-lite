import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-client-utils";

export function Component(props: IComponentPropsExtended) {
  const chatId = props.routeParams?.["social.chats.id"];
  const threadId = props.routeParams?.["social.threads.id"];
  return (
    <div
      data-module="social"
      data-model="widget"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn(
        "w-full flex flex-col",
        props.data.className,
        props.className,
      )}
    >
      {props.children ??
        (chatId ? props.renderChat?.({ chatId, threadId }) : null)}
    </div>
  );
}
