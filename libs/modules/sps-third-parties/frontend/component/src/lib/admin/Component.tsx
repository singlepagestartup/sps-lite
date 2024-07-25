import { IComponentProps } from "./interface";
import { Component as Widget } from "@sps/sps-third-parties/models/widget/frontend/component";
import { Component as Telegarm } from "@sps/sps-third-parties/models/telegram/frontend/component";
import { Component as TelegarmMessage } from "@sps/sps-third-parties/models/telegram-message/frontend/component";
import { Component as ParentComponent } from "@sps/shared-frontend-components/singlepage/admin/admin-panel/Component";

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
