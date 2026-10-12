import { Component as Chat } from "@sps/social/models/chat/frontend/component";
import type { IComponentProps } from "./interface";

export function Component(props: IComponentProps) {
  return (
    <Chat
      isServer={props.isServer}
      variant="find"
      apiProps={{
        params: {
          filters: {
            and: [{ column: "slug", method: "eq", value: "ai-chat-preview" }],
          },
        },
      }}
    >
      {({ data }) =>
        data?.map((chat) => (
          <Chat
            key={chat.id}
            isServer={props.isServer}
            variant="id-preview-ai-chat"
            data={chat}
          />
        ))
      }
    </Chat>
  );
}
