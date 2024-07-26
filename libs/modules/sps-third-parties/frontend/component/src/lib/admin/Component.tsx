import { IComponentProps } from "./interface";
import { Component as ParentComponent } from "@sps/shared-frontend-components/singlepage/admin/admin-panel/Component";
import { Component as Widget } from "./widget/Component";
import { Component as Telegarm } from "./telegram/Component";
import { Component as TelegarmMessage } from "./telegram-message/Component";

export function Component(props: IComponentProps) {
  const models = [
    {
      name: "widget",
      Comp: Widget,
    },
    {
      name: "telegram",
      Comp: Telegarm,
    },
    {
      name: "telegram-message",
      Comp: TelegarmMessage,
    },
  ];

  return (
    <ParentComponent
      isServer={props.isServer}
      models={models}
      name="admin-panel"
      module="sps-third-parties"
    />
  );
}
