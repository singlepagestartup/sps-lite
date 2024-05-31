"use client";

import React, { useMemo, useState } from "react";
import { IComponentProps } from "./interface";
import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@sps/shadcn";
import { Component as PageSpsLiteAdminTable } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-admin-table";
import { Component as LayoutSpsLiteAdminTable } from "@sps/sps-website-builder-models-layout-frontend-component-variants-sps-lite-admin-table";
import { Component as WidgetSpsLiteAdminTable } from "@sps/sps-website-builder-models-widget-frontend-component-variants-sps-lite-admin-table";
import { Component as HeroSectionBlockSpsLiteAdminTable } from "@sps/sps-website-builder-models-hero-section-block-frontend-component-variants-sps-lite-admin-table";
import { Component as NavbarSpsLiteAdminTable } from "@sps/sps-website-builder-models-navbar-frontend-component-variants-sps-lite-admin-table";
import { Component as FooterSpsLiteAdminTable } from "@sps/sps-website-builder-models-footer-frontend-component-variants-sps-lite-admin-table";
import { Component as LogotypeSpsLiteAdminTable } from "@sps/sps-website-builder-models-logotype-frontend-component-variants-sps-lite-admin-table";
import { Component as ButtonSpsLiteAdminTable } from "@sps/sps-website-builder-models-button-frontend-component-variants-sps-lite-admin-table";
import { Component as NavbarBlockSpsLiteAdminTable } from "@sps/sps-website-builder-models-navbar-block-frontend-component-variants-sps-lite-admin-table";
import { Component as FooterBlockSpsLiteAdminTable } from "@sps/sps-website-builder-models-footer-block-frontend-component-variants-sps-lite-admin-table";
import { Component as SliderBlockSpsLiteAdminTable } from "@sps/sps-website-builder-models-slider-block-frontend-component-variants-sps-lite-admin-table";
import { Component as SliderSpsLiteAdminTable } from "@sps/sps-website-builder-models-slider-frontend-component-variants-sps-lite-admin-table";
import { Component as SlideSpsLiteAdminTable } from "@sps/sps-website-builder-models-slide-frontend-component-variants-sps-lite-admin-table";
import { Component as FeaturesSectionBlockSpsLiteAdminTable } from "@sps/sps-website-builder-models-features-section-block-frontend-component-variants-sps-lite-admin-table";
import { Component as ButtonsArraySpsLiteAdminTable } from "@sps/sps-website-builder-models-buttons-array-frontend-component-variants-sps-lite-admin-table";
import { Component as FeaturesSpsLiteAdminTable } from "@sps/sps-website-builder-models-feature-frontend-component-variants-sps-lite-admin-table";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

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
        name: "button",
        Comp: ButtonSpsLiteAdminTable,
      },
      {
        name: "buttons-array",
        Comp: ButtonsArraySpsLiteAdminTable,
      },
      {
        name: "checkout-form-block",
      },
      {
        name: "contact-section-block",
      },
      {
        name: "edit-subscription-block",
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
        name: "flyout",
      },
      {
        name: "font",
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
        name: "loader",
      },
      {
        name: "locale",
      },
      {
        name: "logotype",
        Comp: LogotypeSpsLiteAdminTable,
      },
      {
        name: "logotypes-list-block",
      },
      {
        name: "metatag",
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
        name: "not-found-block",
      },
      {
        name: "page",
        Comp: PageSpsLiteAdminTable,
      },
      {
        name: "products-list-block",
      },
      {
        name: "reviews-list-block",
      },
      {
        name: "shopping-cart-block",
      },
      {
        name: "sidebar",
      },
      {
        name: "slide",
        Comp: SlideSpsLiteAdminTable,
      },
      {
        name: "slide-over",
      },
      {
        name: "slider",
        Comp: SliderSpsLiteAdminTable,
      },
      {
        name: "slider-block",
        Comp: SliderBlockSpsLiteAdminTable,
      },
      {
        name: "subscription-checkout-form-block",
      },
      {
        name: "theme",
      },
      {
        name: "tiers-list-block",
      },
      {
        name: "topbar",
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

            <Collapsible className="flex flex-col gap-3 pt-6">
              <CollapsibleTrigger asChild={true}>
                <Button
                  variant="link"
                  className="text-left justify-start gap-3 py-0 text-secondary-foreground"
                >
                  Not finished models
                  <ChevronUpDownIcon className="w-4 h-4" />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                {models
                  .filter((model) => !model.Comp)
                  .map((model, modelIndex) => {
                    let hasComponent = false;

                    if ("Comp" in model && model.Comp) {
                      hasComponent = true;
                    }

                    return (
                      <Button
                        variant="ghost"
                        className="text-left justify-start"
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
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-9/12 flex flex-col gap-6 p-4 pt-6">
        {typeof RenderWidget === "function" ? (
          <RenderWidget {...({} as any)} />
        ) : null}
      </div>
    </div>
  );
}
