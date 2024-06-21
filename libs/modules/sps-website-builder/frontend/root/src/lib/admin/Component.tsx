"use client";

import dynamic from "next/dynamic";
import React, { useMemo, useState } from "react";
import { IComponentProps } from "./interface";
import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@sps/shadcn";
import { ChevronDown } from "lucide-react";
const FeaturesSpsLiteAdminTable = dynamic(() =>
  import(
    "@sps/sps-website-builder/models/feature/frontend/component/variants/sps-lite/admin-table"
  ).then((mod) => mod.Component),
);
const ButtonsArraySpsLiteAdminTable = dynamic(() =>
  import(
    "@sps/sps-website-builder/models/buttons-array/frontend/component/variants/sps-lite/admin-table"
  ).then((mod) => mod.Component),
);
const FeaturesSectionBlockSpsLiteAdminTable = dynamic(() =>
  import(
    "@sps/sps-website-builder/models/features-section-block/frontend/component/variants/sps-lite/admin-table"
  ).then((mod) => mod.Component),
);
const SlideSpsLiteAdminTable = dynamic(() =>
  import(
    "@sps/sps-website-builder/models/slide/frontend/component/variants/sps-lite/admin-table"
  ).then((mod) => mod.Component),
);
const SliderSpsLiteAdminTable = dynamic(() =>
  import(
    "@sps/sps-website-builder/models/slider/frontend/component/variants/sps-lite/admin-table"
  ).then((mod) => mod.Component),
);
const SliderBlockSpsLiteAdminTable = dynamic(() =>
  import(
    "@sps/sps-website-builder/models/slider-block/frontend/component/variants/sps-lite/admin-table"
  ).then((mod) => mod.Component),
);
const FooterBlockSpsLiteAdminTable = dynamic(() =>
  import(
    "@sps/sps-website-builder/models/footer-block/frontend/component/variants/sps-lite/admin-table"
  ).then((mod) => mod.Component),
);
const NavbarBlockSpsLiteAdminTable = dynamic(() =>
  import(
    "@sps/sps-website-builder/models/navbar-block/frontend/component/variants/sps-lite/admin-table"
  ).then((mod) => mod.Component),
);
const ButtonSpsLiteAdminTable = dynamic(() =>
  import(
    "@sps/sps-website-builder/models/button/frontend/component/variants/sps-lite/admin-table"
  ).then((mod) => mod.Component),
);
const LogotypeSpsLiteAdminTable = dynamic(() =>
  import(
    "@sps/sps-website-builder/models/logotype/frontend/component/variants/sps-lite/admin-table"
  ).then((mod) => mod.Component),
);
const FooterSpsLiteAdminTable = dynamic(() =>
  import(
    "@sps/sps-website-builder/models/footer/frontend/component/variants/sps-lite/admin-table"
  ).then((mod) => mod.Component),
);
const NavbarSpsLiteAdminTable = dynamic(() =>
  import(
    "@sps/sps-website-builder/models/navbar/frontend/component/variants/sps-lite/admin-table"
  ).then((mod) => mod.Component),
);
const HeroSectionBlockSpsLiteAdminTable = dynamic(() =>
  import(
    "@sps/sps-website-builder/models/hero-section-block/frontend/component/variants/sps-lite/admin-table"
  ).then((mod) => mod.Component),
);
const WidgetSpsLiteAdminTable = dynamic(() =>
  import(
    "@sps/sps-website-builder/models/widget/frontend/component/variants/sps-lite/admin-table"
  ).then((mod) => mod.Component),
);
const LayoutSpsLiteAdminTable = dynamic(() =>
  import(
    "@sps/sps-website-builder/models/layout/frontend/component/variants/sps-lite/admin-table"
  ).then((mod) => mod.Component),
);
const PageSpsLiteAdminTable = dynamic(() =>
  import(
    "@sps/sps-website-builder/models/page/frontend/component/variants/sps-lite/admin-table"
  ).then((mod) => mod.Component),
);
const MetadataSpsLiteAdminTable = dynamic(() =>
  import(
    "@sps/sps-website-builder/models/metadata/frontend/component/variants/sps-lite/admin-table"
  ).then((mod) => mod.Component),
);

export function Component(props: IComponentProps) {
  const [showModels, setShowModels] = useState(true);
  const [page, setPage] = useState<{
    model: (typeof models)[0];
  }>();

  const models = useMemo(() => {
    return [
      {
        name: "widget",
        Comp: WidgetSpsLiteAdminTable,
      },
      {
        name: "metadata",
        Comp: MetadataSpsLiteAdminTable,
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
        Comp: HeroSectionBlockSpsLiteAdminTable,
      },
      {
        name: "layout",
        Comp: LayoutSpsLiteAdminTable,
      },
      {
        name: "logotype",
        Comp: LogotypeSpsLiteAdminTable,
      },
      {
        name: "modal",
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
        name: "page",
        Comp: PageSpsLiteAdminTable,
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
  }, []);

  const RenderWidget = useMemo(() => {
    if (page) {
      const model = models.find((m) => m.name === page.model.name);

      if (model && "Comp" in model && model["Comp"]) {
        return model.Comp;
      }
    }

    return null;
  }, [page, models]);

  return (
    <div
      data-module="sps-website-builder"
      data-component="admin"
      className="w-full flex flex-col lg:flex-row"
    >
      <div className="w-full lg:w-3/12 p-4 pt-6">
        <div className="relative flex flex-col gap-6 pt-6 rounded-lg border p-4 border-muted-foreground">
          <div className="flex absolute top-0 inset-x-0 px-4 transform -translate-y-1/2 justify-between items-center">
            <p className="model-legend">models</p>
            <button
              className="pill-button"
              onClick={() => {
                setShowModels(!showModels);
              }}
            >
              {showModels ? "Hide" : "Show"}
            </button>
          </div>
          <div className={`flex flex-col gap-1 ${showModels ? "" : "hidden"}`}>
            {models
              .filter((model) => model.Comp)
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((model, modelIndex) => {
                let hasComponent = false;

                if ("Comp" in model && model.Comp) {
                  hasComponent = true;
                }

                return (
                  <Button
                    variant={"ghost"}
                    data-active={page?.model.name === model.name}
                    className={`text-left max-w-full overflow-hidden justify-start truncate data-[active=true]:bg-muted-foreground data-[active=true]:text-muted`}
                    disabled={!hasComponent}
                    onClick={() => {
                      setPage({
                        model,
                      });
                    }}
                    key={modelIndex}
                  >
                    <p className="max-w-full text-ellipsis overflow-hidden">
                      {model.name}
                    </p>
                  </Button>
                );
              })}
          </div>
        </div>
      </div>
      <div className="w-full lg:w-9/12 flex flex-col gap-6 p-4 pt-6">
        {typeof RenderWidget === "function" ? (
          <RenderWidget
            {...({} as any)}
            isServer={false}
            hostUrl={props.hostUrl}
          />
        ) : null}
      </div>
    </div>
  );
}
