"use client";

import React, { Dispatch, FC, SetStateAction, useMemo, useState } from "react";
import { variants as spsLiteVariants } from "./sps-lite";
import parseMimeType from "~utils/formatters/parse-mime-type";
import { IEntity as ISpsLiteBackendApiSlider } from "~redux/services/backend/api/slider/interfaces/sps-lite";
import { IBackendComponentElement as ISpsLiteBackendComponentSlide } from "~redux/services/backend/components/elements/slide/interfaces/sps-lite";

const variants = {
  ...spsLiteVariants,
};

export default function Slider(props: ISpsLiteBackendApiSlider) {
  const { slides } = props;
  const [activeSlide, setActiveSlide] = useState(0);

  const localMedia = useMemo(() => {
    if (!slides || !slides.every((slide) => slide?.media?.length)) {
      return;
    }

    return slides.map((slide) => {
      return {
        ...slide,
        renderType: slide.media?.length
          ? parseMimeType(slide.media[0].mime)?.renderType
          : "image" || "image",
      } as IExtendedSlide;
    });
  }, [slides]);

  const Comp = variants[props.variant as keyof typeof variants] as FC<ISlider>;

  if (!localMedia) return <div></div>;

  return (
    <Comp
      {...props}
      activeSlide={activeSlide}
      setActiveSlide={setActiveSlide}
      slides={localMedia}
      // className={props?.className}
    />
  );
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

export interface IExtendedSlide extends ISpsLiteBackendComponentSlide {
  renderType: string;
}
