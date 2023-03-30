import React, { Dispatch, FC, SetStateAction, useMemo, useState } from "react";
import utils from "@rogwild/next-utils";
const { parseMimeType } = utils.formatters;
import FadeWithPreviews from "./FadeWithPreviews";
import { IBackendSlider } from "types/models";
import { IBackendSlide } from "types/components";

const variants = {
  "fade-with-previews": FadeWithPreviews,
};

export default function Slider(props: IBackendSlider) {
  const { slides } = props;
  const [activeSlide, setActiveSlide] = useState(0);

  const localMedia = useMemo(() => {
    if (!slides || !slides.every((slide) => slide?.media?.length)) {
      return;
    }

    return slides.map((slide) => {
      return {
        ...slide,
        renderType: parseMimeType(slide.media[0].mime).renderType,
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
  activeSlide?: number;
  setActiveSlide: Dispatch<SetStateAction<number>>;
  NavigationButton?: FC<any>;
  SlideComponent?: FC<any>;
  PreviewsComponent?: FC<any>;
  className?: string;
  showFullScreen?: boolean;
  showBackdrop?: boolean;
  showPreviews?: boolean;
  aspectRatioClassName?: string;
}

export interface IExtendedSlide extends IBackendSlide {
  renderType: string;
}
