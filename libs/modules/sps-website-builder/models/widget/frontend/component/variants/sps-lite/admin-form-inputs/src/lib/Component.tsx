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
} from "@sps/shadcn";
import { Component as WidgetsToHeroSectionBlocksSpsLiteSelectRight } from "@sps/sps-website-builder-relations-widgets-to-hero-section-blocks-frontend-component-variants-sps-lite-select-right";
import { Component as WidgetsToNavbarBlocksSpsLiteSelectRight } from "@sps/sps-website-builder-relations-widgets-to-navbar-blocks-frontend-component-variants-sps-lite-select-right";
import { Component as WidgetsToFooterBlocksSpsLiteSelectRight } from "@sps/sps-website-builder-relations-widgets-to-footer-blocks-frontend-component-variants-sps-lite-select-right";
import { Component as WidgetsToSliderBlocksSpsLiteSelectRight } from "@sps/sps-website-builder-relations-widgets-to-slider-blocks-frontend-component-variants-sps-lite-select-right";

export function Component(props: IComponentPropsExtended) {
  const [showWidgetsToHeroSectionBlocks, setShowWidgetsToHeroSectionBlocks] =
    useState(true);
  const [showWidgetsToNavbarBlocks, setShowWidgetsToNavbarBlocks] =
    useState(true);
  const [showWidgetsFooterBlocks, setShowWidgetsFooterBlocks] = useState(true);
  const [showWidgetsSliderBlocks, setShowWidgetsSliderBlocks] = useState(true);

  return (
    <div
      data-module="sps-website-builder"
      data-model="widget"
      data-variant={props.variant}
      className={`${props.className || ""}`}
    >
      <div className="flex flex-col gap-6">
        <FormField
          control={props.form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Type title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <fieldset className="model-container">
          <div className="model-header-block">
            <legend className="model-legend">
              Widgets To Hero Section Blocks
            </legend>
            <button
              className="pill-button"
              onClick={() => {
                setShowWidgetsToHeroSectionBlocks(
                  !showWidgetsToHeroSectionBlocks,
                );
              }}
            >
              {showWidgetsToHeroSectionBlocks ? "Hide" : "Show"}
            </button>
          </div>
          <div
            className={`flex flex-col gap-6 ${showWidgetsToHeroSectionBlocks ? "" : "hidden"}`}
          >
            {props.data?.widgetsToHeroSectionBlocks.map(
              (widgetsToHeroSectionBlock, index) => {
                return (
                  <WidgetsToHeroSectionBlocksSpsLiteSelectRight
                    key={index}
                    isServer={props.isServer}
                    variant="select-right"
                    data={widgetsToHeroSectionBlock}
                  />
                );
              },
            )}
            <WidgetsToHeroSectionBlocksSpsLiteSelectRight
              isServer={props.isServer}
              variant="select-right"
              widgetId={props.data?.id}
              data={undefined}
            />
          </div>
        </fieldset>

        <fieldset className="model-container">
          <div className="model-header-block">
            <legend className="model-legend">Widgets To Navbar Blocks</legend>
            <button
              className="pill-button"
              onClick={() => {
                setShowWidgetsToNavbarBlocks(!showWidgetsToNavbarBlocks);
              }}
            >
              {showWidgetsToNavbarBlocks ? "Hide" : "Show"}
            </button>
          </div>
          <div
            className={`flex flex-col gap-6 ${showWidgetsToNavbarBlocks ? "" : "hidden"}`}
          >
            {props.data?.widgetsToNavbarBlocks.map(
              (widgetsToNavbarBlocks, index) => {
                return (
                  <WidgetsToNavbarBlocksSpsLiteSelectRight
                    key={index}
                    isServer={props.isServer}
                    variant="select-right"
                    data={widgetsToNavbarBlocks}
                  />
                );
              },
            )}
            <WidgetsToNavbarBlocksSpsLiteSelectRight
              isServer={props.isServer}
              variant="select-right"
              widgetId={props.data?.id}
              data={undefined}
            />
          </div>
        </fieldset>
        <fieldset className="model-container">
          <div className="model-header-block">
            <legend className="model-legend">Widgets To Navbar Blocks</legend>
            <button
              className="pill-button"
              onClick={() => {
                setShowWidgetsFooterBlocks(!showWidgetsFooterBlocks);
              }}
            >
              {showWidgetsFooterBlocks ? "Hide" : "Show"}
            </button>
          </div>
          <div
            className={`flex flex-col gap-6 ${showWidgetsFooterBlocks ? "" : "hidden"}`}
          >
            {props.data?.widgetsToFooterBlocks.map(
              (widgetToFooterBlock, index) => {
                return (
                  <WidgetsToFooterBlocksSpsLiteSelectRight
                    key={index}
                    isServer={props.isServer}
                    variant="select-right"
                    data={widgetToFooterBlock}
                  />
                );
              },
            )}
            <WidgetsToFooterBlocksSpsLiteSelectRight
              isServer={props.isServer}
              variant="select-right"
              widgetId={props.data?.id}
              data={undefined}
            />
          </div>
        </fieldset>

        <fieldset className="model-container">
          <div className="model-header-block">
            <legend className="model-legend">Widgets To Slider Blocks</legend>
            <button
              className="pill-button"
              onClick={() => {
                setShowWidgetsSliderBlocks(!showWidgetsSliderBlocks);
              }}
            >
              {showWidgetsSliderBlocks ? "Hide" : "Show"}
            </button>
          </div>
          <div
            className={`flex flex-col gap-6 ${showWidgetsSliderBlocks ? "" : "hidden"}`}
          >
            {props.data?.widgetsToSliderBlocks?.map(
              (widgetToSliderBlock, index) => {
                return (
                  <WidgetsToSliderBlocksSpsLiteSelectRight
                    key={index}
                    isServer={props.isServer}
                    variant="select-right"
                    data={widgetToSliderBlock}
                  />
                );
              },
            )}
            <WidgetsToSliderBlocksSpsLiteSelectRight
              isServer={props.isServer}
              variant="select-right"
              widgetId={props.data?.id}
              data={undefined}
            />
          </div>
        </fieldset>
      </div>
    </div>
  );
}
