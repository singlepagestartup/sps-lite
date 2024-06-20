"use client";

import React, { useMemo, useState } from "react";
import { IComponentProps } from "./interface";
import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@sps/shadcn";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { Component as RoleSpsLiteAdminTable } from "@sps/sps-rbac/models/role/frontend/component/variants/sps-lite/admin-table";
import { Component as SubjectSpsLiteAdminTable } from "@sps/sps-rbac/models/subject/frontend/component/variants/sps-lite/admin-table";
import { Component as IdentitySpsLiteAdminTable } from "@sps/sps-rbac/models/identity/frontend/component/variants/sps-lite/admin-table";
import { Component as AuthenticationBlockSpsLiteAdminTable } from "@sps/sps-rbac/models/authentication-block/frontend/component/variants/sps-lite/admin-table";
import { Component as WidgetSpsLiteAdminTable } from "@sps/sps-rbac/models/widget/frontend/component/variants/sps-lite/admin-table";

export function Component(props: IComponentProps) {
  const [showModels, setShowModels] = useState(true);
  const [page, setPage] = useState<{
    model: (typeof models)[0];
  }>();

  const models = useMemo(() => {
    return [
      {
        name: "role",
        Comp: RoleSpsLiteAdminTable,
      },
      {
        name: "subject",
        Comp: SubjectSpsLiteAdminTable,
      },
      {
        name: "identity",
        Comp: IdentitySpsLiteAdminTable,
      },
      {
        name: "authentication-block",
        Comp: AuthenticationBlockSpsLiteAdminTable,
      },
      {
        name: "widget",
        Comp: WidgetSpsLiteAdminTable,
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
                return (
                  <Button
                    variant={"ghost"}
                    data-active={page?.model.name === model.name}
                    className={`text-left max-w-full overflow-hidden justify-start truncate data-[active=true]:bg-muted-foreground data-[active=true]:text-muted`}
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
                    return (
                      <Button
                        variant="ghost"
                        className="text-left justify-start"
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
