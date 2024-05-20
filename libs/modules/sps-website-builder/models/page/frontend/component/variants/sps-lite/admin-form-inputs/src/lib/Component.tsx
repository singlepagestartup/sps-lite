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
import { Component as PagesToWidgetsSpsLiteSelectRight } from "@sps/sps-website-builder-relations-pages-to-widgets-frontend-component-variants-sps-lite-select-right";
import { Component as PagesToLayoutsSelectRight } from "@sps/sps-website-builder-relations-pages-to-layouts-frontend-component-variants-sps-lite-select-right";

export function Component(props: IComponentPropsExtended) {
  const [showWidgets, setShowWidgets] = useState(true);
  const [showLayouts, setShowLayouts] = useState(true);

  return (
    <div
      data-module="sps-website-builder"
      data-model="page"
      data-variant={props.variant}
      className={`${props.className || ""}`}
    >
      <div className="flex flex-col gap-6">
        <FormField
          control={props.form.control}
          name="title"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Title for page" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={props.form.control}
          name="url"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>URL</FormLabel>
                <FormControl>
                  <Input placeholder="URL for page" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <fieldset className="model-container">
          <div className="model-header-block">
            <legend className="model-legend">Pages To Widgets</legend>
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
            {props.data?.pagesToWidgets.map((entity, index) => {
              return (
                <PagesToWidgetsSpsLiteSelectRight
                  key={index}
                  isServer={false}
                  variant="select-right"
                  pageId={props.data?.id}
                  data={entity}
                />
              );
            })}
            <PagesToWidgetsSpsLiteSelectRight
              isServer={false}
              variant="select-right"
              pageId={props.data?.id}
              data={undefined}
            />
          </div>
        </fieldset>
        <fieldset className="model-container">
          <div className="model-header-block">
            <legend className="model-legend">Pages To Layouts</legend>
            <button
              className="pill-button"
              onClick={() => {
                setShowLayouts(!showLayouts);
              }}
            >
              {showLayouts ? "Hide" : "Show"}
            </button>
          </div>
          <div className={`flex flex-col gap-6 ${showLayouts ? "" : "hidden"}`}>
            {props.data?.pagesToLayouts.map((pageToLayout, index) => {
              return (
                <PagesToLayoutsSelectRight
                  key={index}
                  isServer={false}
                  variant="select-right"
                  pageId={props.data?.id}
                  data={pageToLayout}
                />
              );
            })}
            <PagesToLayoutsSelectRight
              isServer={false}
              variant="select-right"
              pageId={props.data?.id}
            />
          </div>
        </fieldset>
      </div>
    </div>
  );
}
