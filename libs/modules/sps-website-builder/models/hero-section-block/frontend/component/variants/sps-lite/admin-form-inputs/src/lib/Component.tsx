"use client";

import React from "react";
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
import { variants } from "@sps/sps-website-builder-models-hero-section-block-contracts";
import { Component as HeroSectionsToButtonsSpsLiteSelectRight } from "@sps/sps-website-builder-relations-hero-section-blocks-to-buttons-frontend-component-variants-sps-lite-select-right";

export function Component(props: IComponentPropsExtended) {
  return (
    <form
      data-module="sps-website-builder"
      data-model="hero-section-block"
      data-variant={props.variant}
      className={`${props.className || "flex flex-col gap-3"}`}
    >
      <FormField
        control={props.form.control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Title</FormLabel>
            <FormControl>
              <Input placeholder="Type hero-section-block title" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
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
      {props.data?.SPSWBHeroSectionBlocksToButtons.map(
        (heroSectionBlocksToButton, index) => {
          return (
            <HeroSectionsToButtonsSpsLiteSelectRight
              key={index}
              data={heroSectionBlocksToButton}
              isServer={props.isServer}
              variant="select-right"
            />
          );
        },
      )}
      <HeroSectionsToButtonsSpsLiteSelectRight
        isServer={props.isServer}
        variant="select-right"
      />
    </form>
  );
}
