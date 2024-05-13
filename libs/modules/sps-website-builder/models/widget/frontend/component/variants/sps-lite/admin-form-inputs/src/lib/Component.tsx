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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@sps/shadcn";
import { Component as WidgetsToHeroSectionBlocksSpsLiteSelectRight } from "@sps/sps-website-builder-relations-widgets-to-hero-section-blocks-frontend-component-variants-sps-lite-select-right";
import { Component as WidgetsToNavbarBlocksSpsLiteSelectRight } from "@sps/sps-website-builder-relations-widgets-to-navbar-blocks-frontend-component-variants-sps-lite-select-right";
import { Component as WidgetsToFooterBlocksSpsLiteSelectRight } from "@sps/sps-website-builder-relations-widgets-to-footer-blocks-frontend-component-variants-sps-lite-select-right";
import { Component as WidgetsToSliderBlocksSpsLiteSelectRight } from "@sps/sps-website-builder-relations-widgets-to-slider-blocks-frontend-component-variants-sps-lite-select-right";

const relations = [
  {
    key: "SPSWBWidgetsToHeroSectionBlocks",
    value: "Hero Section Block",
  },
  { key: "SPSWBWidgetsToNavbarBlocks", value: "Navbar Block" },
  { key: "SPSWBWidgetsToFooterBlocks", value: "Footer Block" },
  { key: "SPSWBWidgetsToSliderBlocks", value: "Slider Block" },
];

export function Component(props: IComponentPropsExtended) {
  const [relationEntity, setRelationEntity] = useState<string>(
    "SPSWBWidgetsToHeroSectionBlocks",
  );

  return (
    <div
      data-module="sps-website-builder"
      data-model="widget"
      data-variant={props.variant}
      className={`${props.className || ""}`}
    >
      <div className="flex flex-col gap-3">
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
        <Tabs
          defaultValue={relationEntity}
          onValueChange={(value) => setRelationEntity(value)}
        >
          <TabsList>
            {relations.map((relation, index) => {
              return (
                <TabsTrigger key={index} value={relation.key}>
                  {relation.value}
                </TabsTrigger>
              );
            })}
          </TabsList>

          <TabsContent value="SPSWBWidgetsToHeroSectionBlocks">
            {props.data?.SPSWBWidgetsToHeroSectionBlocks.length ? (
              props.data?.SPSWBWidgetsToHeroSectionBlocks.map(
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
              )
            ) : (
              <WidgetsToHeroSectionBlocksSpsLiteSelectRight
                isServer={props.isServer}
                variant="select-right"
                widgetId={props.data?.id}
                data={undefined}
              />
            )}
          </TabsContent>
          <TabsContent value="SPSWBWidgetsToNavbarBlocks">
            {props.data?.SPSWBWidgetsToNavbarBlocks.length ? (
              props.data?.SPSWBWidgetsToNavbarBlocks.map(
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
              )
            ) : (
              <WidgetsToNavbarBlocksSpsLiteSelectRight
                isServer={props.isServer}
                variant="select-right"
                widgetId={props.data?.id}
                data={undefined}
              />
            )}
          </TabsContent>
          <TabsContent value="SPSWBWidgetsToFooterBlocks">
            {props.data?.SPSWBWidgetsToFooterBlocks.length ? (
              props.data?.SPSWBWidgetsToFooterBlocks.map(
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
              )
            ) : (
              <WidgetsToFooterBlocksSpsLiteSelectRight
                isServer={props.isServer}
                variant="select-right"
                widgetId={props.data?.id}
                data={undefined}
              />
            )}
          </TabsContent>
          <TabsContent value="SPSWBWidgetsToSliderBlocks">
            {props.data?.SPSWBWidgetsToSliderBlocks?.length ? (
              props.data?.SPSWBWidgetsToSliderBlocks?.map(
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
              )
            ) : (
              <WidgetsToSliderBlocksSpsLiteSelectRight
                isServer={props.isServer}
                variant="select-right"
                widgetId={props.data?.id}
                data={undefined}
              />
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
