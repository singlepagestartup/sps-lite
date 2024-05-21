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
import { variants } from "@sps/sps-website-builder-models-slider-contracts";
import { Component as SlidersToSlidesSpsLiteSelectRight } from "@sps/sps-website-builder-relations-sliders-to-slides-frontend-component-variants-sps-lite-select-right";

export function Component(props: IComponentPropsExtended) {
  const [showSlidersToSlides, setShowSlidersToSlides] = useState(true);

  return (
    <div
      data-module="sps-website-builder"
      data-model="slider"
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
        <div className="model-container bg-dotted">
          <div className="model-header-block">
            <p className="model-legend">sliders-to-slides</p>
            <button
              className="pill-button"
              onClick={() => {
                setShowSlidersToSlides(!showSlidersToSlides);
              }}
            >
              {showSlidersToSlides ? "Hide" : "Show"}
            </button>
          </div>
          <div
            className={`flex flex-col gap-6 ${showSlidersToSlides ? "" : "hidden"}`}
          >
            {props.data?.slidersToSlides.map((sliderToSlide, index) => {
              return (
                <SlidersToSlidesSpsLiteSelectRight
                  key={index}
                  isServer={false}
                  variant="select-right"
                  data={sliderToSlide}
                />
              );
            })}
            <SlidersToSlidesSpsLiteSelectRight
              isServer={false}
              variant="select-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
