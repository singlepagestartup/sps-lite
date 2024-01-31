"use client";

import React, { Dispatch, FC, SetStateAction, useMemo, useState } from "react";
import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import type { IEntity as IBackendSlider } from "@sps/sps-website-builder-contracts/lib/entities/slider/interfaces";
import { IComponent as IBackendSlide } from "@sps/sps-website-builder-contracts-extended/lib/components/elements/slide/interfaces";
import { parseMimeType } from "@sps/utils";
import { api } from "../api/client";

const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export function Entity(props: IBackendSlider) {
  const { data: slider } = api.useGetByIdQuery(props.id);
  const [activeSlide, setActiveSlide] = useState(0);

  const localMedia = useMemo(() => {
    if (!slider) {
      return;
    }

    // if (
    //   !slider.slides ||
    //   !slider.slides.every((slide) => slide?.media?.length)
    // ) {
    //   return;
    // }

    // return slider.slides.map((slide) => {
    //   return {
    //     ...slide,
    //     renderType: slide.media?.length
    //       ? parseMimeType(slide.media[0].mime)?.renderType
    //       : "image" || "image",
    //   } as IExtendedSlide;
    // });

    return;
  }, [slider]);

  const Comp = variants[props.variant as keyof typeof variants] as FC<ISlider>;

  // if (!localMedia) return <div></div>;

  return <div />;
  // return (
  //   <Comp
  //     {...props}
  //     activeSlide={activeSlide}
  //     setActiveSlide={setActiveSlide}
  //     slides={localMedia}
  //     // className={props?.className}
  //   />
  // );
}

export interface ISlider {
  slides: IExtendedSlide[];
  variant: "fade-with-previews";
  activeSlide?: number;
  setActiveSlide: Dispatch<SetStateAction<number>>;
  NavigationButton?: FC<any>;
  SlideComponent?: FC<any>;
  PreviewsComponent?: FC<any>;
  className: string | null;
  showFullScreen: boolean | null;
  showBackdrop: boolean | null;
  showPreviews: boolean | null;
  aspectRatioClassName: string | null;
}

export interface IExtendedSlide extends IBackendSlide {
  renderType: string;
}
