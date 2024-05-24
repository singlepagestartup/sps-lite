"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@sps/shadcn";
import { IComponentPropsExtended } from "./interface";
import { Component as SlidersToSlides } from "@sps/sps-website-builder-relations-sliders-to-slides-frontend-component";
import Autoplay from "embla-carousel-autoplay";

export function Component(props: IComponentPropsExtended) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div
      data-module="sps-website-builder"
      data-model="slider"
      data-variant={props.variant}
      className="w-full"
    >
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 8000,
          }) as any,
        ]}
        className="relative"
      >
        <CarouselContent>
          {props.data.slidersToSlides.map((entity, index) => {
            return (
              <CarouselItem key={index} className="basis-auto flex w-full">
                <SlidersToSlides
                  key={index}
                  isServer={false}
                  variant="default"
                  data={entity}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div
          className="w-2/12 inset-y-0 absolute cursor-pointer"
          onClick={() => {
            api?.scrollPrev();
          }}
        ></div>
        <div
          className="w-2/12 inset-y-0 right-0 absolute cursor-pointer"
          onClick={() => {
            api?.scrollNext();
          }}
        ></div>
      </Carousel>
    </div>
  );
}
