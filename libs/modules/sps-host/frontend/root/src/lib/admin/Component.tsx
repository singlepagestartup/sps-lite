"use client";

import dynamic from "next/dynamic";
import React, { useMemo, useState } from "react";
import { IComponentProps } from "./interface";
import { Button } from "@sps/shared-ui-shadcn";
const Widget = dynamic(() =>
  import("@sps/sps-host/models/widget/frontend/component/root").then(
    (mod) => mod.Component,
  ),
);
const Page = dynamic(() =>
  import("@sps/sps-host/models/page/frontend/component/root").then(
    (mod) => mod.Component,
  ),
);
const Layout = dynamic(() =>
  import("@sps/sps-host/models/layout/frontend/component/root").then(
    (mod) => mod.Component,
  ),
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
        Comp: Widget,
      },
      {
        name: "page",
        Comp: Page,
      },
      {
        name: "layout",
        Comp: Layout,
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

                if ("Comp" in model && model["Comp"]) {
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
            variant="admin-table"
          />
        ) : null}
      </div>
    </div>
  );
}
