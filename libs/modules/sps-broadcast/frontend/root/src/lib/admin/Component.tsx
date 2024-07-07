import dynamic from "next/dynamic";
import { IComponentProps } from "./interface";
import { Component as ParentComponent } from "@sps/shared-frontend-components/sps-lite/admin/admin-panel/Component";
const Channel = dynamic(() =>
  import("@sps/sps-broadcast/models/channel/frontend/component/root").then(
    (mod) => mod.Component,
  ),
);

export function Component(props: IComponentProps) {
  const models = [
    {
      name: "channel",
      Comp: Channel,
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
