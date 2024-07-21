import dynamic from "next/dynamic";
import { IComponentProps } from "./interface";
import { Component as ParentComponent } from "@sps/shared-frontend-components/sps-lite/admin/admin-panel/Component";
const FeaturesSpsLiteAdminTable = dynamic(() =>
  import("@sps/sps-website-builder/models/feature/frontend/component").then(
    (mod) => mod.Component,
  ),
);
const ButtonsArraySpsLiteAdminTable = dynamic(() =>
  import(
    "@sps/sps-website-builder/models/buttons-array/frontend/component"
  ).then((mod) => mod.Component),
);
const FeaturesSectionBlockSpsLiteAdminTable = dynamic(() =>
  import(
    "@sps/sps-website-builder/models/features-section-block/frontend/component"
  ).then((mod) => mod.Component),
);
const SlideSpsLiteAdminTable = dynamic(() =>
  import("@sps/sps-website-builder/models/slide/frontend/component").then(
    (mod) => mod.Component,
  ),
);
const SliderSpsLiteAdminTable = dynamic(() =>
  import("@sps/sps-website-builder/models/slider/frontend/component").then(
    (mod) => mod.Component,
  ),
);
const SliderBlockSpsLiteAdminTable = dynamic(() =>
  import(
    "@sps/sps-website-builder/models/slider-block/frontend/component"
  ).then((mod) => mod.Component),
);
const FooterBlockSpsLiteAdminTable = dynamic(() =>
  import(
    "@sps/sps-website-builder/models/footer-block/frontend/component"
  ).then((mod) => mod.Component),
);
const NavbarBlockSpsLiteAdminTable = dynamic(() =>
  import(
    "@sps/sps-website-builder/models/navbar-block/frontend/component"
  ).then((mod) => mod.Component),
);
const ButtonSpsLiteAdminTable = dynamic(() =>
  import("@sps/sps-website-builder/models/button/frontend/component").then(
    (mod) => mod.Component,
  ),
);
const LogotypeSpsLiteAdminTable = dynamic(() =>
  import("@sps/sps-website-builder/models/logotype/frontend/component").then(
    (mod) => mod.Component,
  ),
);
const FooterSpsLiteAdminTable = dynamic(() =>
  import("@sps/sps-website-builder/models/footer/frontend/component").then(
    (mod) => mod.Component,
  ),
);
const NavbarSpsLiteAdminTable = dynamic(() =>
  import("@sps/sps-website-builder/models/navbar/frontend/component").then(
    (mod) => mod.Component,
  ),
);
const WidgetSpsLiteAdminTable = dynamic(() =>
  import("@sps/sps-website-builder/models/widget/frontend/component").then(
    (mod) => mod.Component,
  ),
);
import { Component as HeroSectionBlockAdmin } from "./hero-section-block-admin/Component";

export function Component(props: IComponentProps) {
  const models = [
    {
      name: "widget",
      Comp: WidgetSpsLiteAdminTable,
    },
    {
      name: "button",
      Comp: ButtonSpsLiteAdminTable,
    },
    {
      name: "buttons-array",
      Comp: ButtonsArraySpsLiteAdminTable,
    },
    {
      name: "feature",
      Comp: FeaturesSpsLiteAdminTable,
    },
    {
      name: "features-section-block",
      Comp: FeaturesSectionBlockSpsLiteAdminTable,
    },
    {
      name: "footer",
      Comp: FooterSpsLiteAdminTable,
    },
    {
      name: "footer-block",
      Comp: FooterBlockSpsLiteAdminTable,
    },
    {
      name: "hero-section-block",
      Comp: HeroSectionBlockAdmin,
    },
    {
      name: "logotype",
      Comp: LogotypeSpsLiteAdminTable,
    },
    {
      name: "navbar",
      Comp: NavbarSpsLiteAdminTable,
    },
    {
      name: "navbar-block",
      Comp: NavbarBlockSpsLiteAdminTable,
    },
    {
      name: "slide",
      Comp: SlideSpsLiteAdminTable,
    },
    {
      name: "slider",
      Comp: SliderSpsLiteAdminTable,
    },
    {
      name: "slider-block",
      Comp: SliderBlockSpsLiteAdminTable,
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
