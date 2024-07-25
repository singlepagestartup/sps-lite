import { IComponentProps } from "./interface";
import { Component as ParentComponent } from "@sps/shared-frontend-components/singlepage/admin/admin-panel/Component";
import { Component as Channel } from "@sps/sps-broadcast/models/channel/frontend/component";
import { Component as Message } from "@sps/sps-broadcast/models/message/frontend/component";

export function Component(props: IComponentProps) {
  const models = [
    {
      name: "channel",
      Comp: Channel,
    },
    {
      name: "message",
      Comp: Message,
    },
  ];

  return (
    <ParentComponent
      isServer={props.isServer}
      models={models}
      name="admin-panel"
      module="@sps/sps-broadcast"
    />
  );
}
