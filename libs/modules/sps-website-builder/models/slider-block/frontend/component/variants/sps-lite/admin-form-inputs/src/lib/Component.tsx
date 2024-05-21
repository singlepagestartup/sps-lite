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
import { variants } from "@sps/sps-website-builder-models-slider-block-contracts";
import { Component as SliderBlocksToSlidersSpsLiteSelectRight } from "@sps/sps-website-builder-relations-slider-blocks-to-sliders-frontend-component-variants-sps-lite-select-right";

export function Component(props: IComponentPropsExtended) {
  const [showSliderBlocksToSliders, setShowSliderBlocksToSliders] =
    useState(true);

  return (
    <div
      data-module="sps-website-builder"
      data-model="slider-block"
      data-variant={props.variant}
      className={`${props.className || ""}`}
    >
      <div className="flex flex-col gap-6">
        <FormField
          control={props.form.control}
          name="variant"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Variant</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select variant" />
                  </SelectTrigger>
                </FormControl>
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
              <FormMessage />
            </FormItem>
          )}
        />
        <fieldset className="model-container">
          <div className="model-header-block">
            <legend className="model-legend">Slider Block To Sliders</legend>
            <button
              className="pill-button"
              onClick={() => {
                setShowSliderBlocksToSliders(!showSliderBlocksToSliders);
              }}
            >
              {showSliderBlocksToSliders ? "Hide" : "Show"}
            </button>
          </div>
          <div
            className={`flex flex-col gap-6 ${showSliderBlocksToSliders ? "" : "hidden"}`}
          >
            {props.data?.sliderBlocksToSliders.map(
              (sliderBlocksToSliders, index) => {
                return (
                  <SliderBlocksToSlidersSpsLiteSelectRight
                    isServer={false}
                    key={index}
                    data={sliderBlocksToSliders}
                    variant="select-right"
                  />
                );
              },
            )}
            <SliderBlocksToSlidersSpsLiteSelectRight
              isServer={false}
              variant="select-right"
            />
          </div>
        </fieldset>
      </div>
    </div>
  );
}
