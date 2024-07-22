import { IComponentProps } from "./interface";
import { Component as ParentComponent } from "@sps/shared-frontend-components/sps-lite/admin/admin-panel/Component";
import { Component as HeroSectionBlock } from "./hero-section-block/Component";
import { Component as Button } from "./button/Component";
import { Component as ButtonsArray } from "./buttons-array/Component";
import { Component as Feature } from "./feature/Component";
import { Component as FeaturesSectionBlock } from "./features-section-block/Component";
import { Component as Footer } from "./footer/Component";
import { Component as FooterBlock } from "./footer-block/Component";
import { Component as Logotype } from "./logotype/Component";
import { Component as Navbar } from "./navbar/Component";
import { Component as NavbarBlock } from "./navbar-block/Component";
import { Component as Slide } from "./slide/Component";
import { Component as Slider } from "./slider/Component";
import { Component as SliderBlock } from "./slider-block/Component";
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
      name: "features-section-block",
      Comp: FeaturesSectionBlock,
    },
    {
      name: "footer",
      Comp: Footer,
    },
    {
      name: "footer-block",
      Comp: FooterBlock,
    },
    {
      name: "hero-section-block",
      Comp: HeroSectionBlock,
    },
    {
      name: "logotype",
      Comp: Logotype,
    },
    {
      name: "navbar",
      Comp: Navbar,
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
      name: "slider-block",
      Comp: SliderBlock,
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
