import { IComponentProps } from "./interface";
import { Component as ParentComponent } from "@sps/shared-frontend-components/singlepage/admin-panel/Component";
import { Component as ContentBlock } from "./content-block/Component";
import { Component as Button } from "./button/Component";
import { Component as ButtonsArray } from "./buttons-array/Component";
import { Component as Feature } from "./feature/Component";
import { Component as FooterBlock } from "./footer-block/Component";
import { Component as Logotype } from "./logotype/Component";
import { Component as NavbarBlock } from "./navbar-block/Component";
import { Component as Slide } from "./slide/Component";
import { Component as Slider } from "./slider/Component";
import { Component as Widget } from "./widget/Component";

export function Component(props: IComponentProps) {
  const models = [
    {
      name: "widget",
      Comp: Widget,
    },
    {
      name: "button",
      Comp: Button,
    },
    {
      name: "buttons-array",
      Comp: ButtonsArray,
    },
    {
      name: "feature",
      Comp: Feature,
    },
    {
      name: "footer-block",
      Comp: FooterBlock,
    },
    {
      name: "content-block",
      Comp: ContentBlock,
    },
    {
      name: "logotype",
      Comp: Logotype,
    },
    {
      name: "navbar-block",
      Comp: NavbarBlock,
    },
    {
      name: "slide",
      Comp: Slide,
    },
    {
      name: "slider",
      Comp: Slider,
    },
    {
      name: "content-block",
      Comp: ContentBlock,
    },
  ];

  return (
    <ParentComponent
      isServer={props.isServer}
      models={models}
      name="admin-panel"
      module="sps-website-builder"
    />
  );
}
