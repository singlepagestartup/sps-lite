"use client";

import React, { useState } from "react";
import { IComponentPropsExtended } from "./interface";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@sps/shadcn";
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
          control={props.form.control}
          name="variant"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Variant</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select variant" />
                    </SelectTrigger>
                    <SelectContent>
                      {variants.map((variant, index) => {
                        return (
                          <SelectItem key={index} value={variant}>
                            {variant}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <fieldset className="model-container">
          <div className="model-header-block">
            <legend className="model-legend">Footers To Widgets</legend>
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
        </fieldset>
      </div>
    </div>
  );
}
