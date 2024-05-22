"use client";

import React, { useState } from "react";
import { IComponentPropsExtended } from "./interface";
import { FormField } from "@sps/ui-adapter";
import { variants } from "@sps/sps-website-builder-models-footer-contracts";
import { Component as FootersToWidgetsSpsLiteSelectRight } from "@sps/sps-website-builder-relations-footers-to-widgets-frontend-component-variants-sps-lite-select-right";

export function Component(props: IComponentPropsExtended) {
  const [showWidgets, setShowWidgets] = useState(true);

  return (
    <div
      data-module="sps-website-builder"
      data-model="footer"
      data-variant={props.variant}
      className={`${props.className || ""}`}
    >
      <div className="flex flex-col gap-6">
        <FormField
          ui="shadcn"
          type="select"
          label="Variant"
          name="variant"
          form={props.form}
          placeholder="Type title"
          options={variants.slice()}
        />
        <div className="model-container bg-dotted">
          <div className="model-header-block">
            <p className="model-legend">footers-to-widgets</p>
            <button
              className="pill-button"
              onClick={() => {
                setShowWidgets(!showWidgets);
              }}
            >
              {showWidgets ? "Hide" : "Show"}
            </button>
          </div>
          <div className={`flex flex-col gap-6 ${showWidgets ? "" : "hidden"}`}>
            {props.data?.footersToWidgets.map((footerToWidget, index) => {
              return (
                <FootersToWidgetsSpsLiteSelectRight
                  key={index}
                  isServer={false}
                  data={footerToWidget}
                  variant="select-right"
                />
              );
            })}

            <FootersToWidgetsSpsLiteSelectRight
              isServer={false}
              variant="select-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
