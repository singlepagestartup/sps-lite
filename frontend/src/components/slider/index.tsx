import React, {
  Dispatch,
  FC,
  ForwardRefExoticComponent,
  SetStateAction,
  useMemo,
  useState,
} from "react";
import utils from "@rogwild/next-utils";
const { parseMimeType } = utils.formatters;
import { ISlide } from "types";
import FadeWithPreviews from "./FadeWithPreviews";
import Image from "next/image";

const variants = {
  "fade-with-previews": FadeWithPreviews,
};

export default function Slider(props: ISlider) {
  const { slides } = props;
  const [activeSlide, setActiveSlide] = useState(0);

  const localMedia = useMemo(() => {
    if (!slides) {
      return;
    }

    return slides.map((slide) => {
      return {
        ...slide,
        renderType: parseMimeType(slide.media.mime).renderType,
      } as IExtendedSlide;
    });
  }, [slides]);

  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISliderExtended>;

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
  slides: ISlide[];
  className?: string;
  aspectRatioClassName?: string;
  variant: `fade-with-previews`;
  showFullScreen?: boolean;
  showBackdrop?: boolean;
  showPreviews?: boolean;
}

export interface ISliderExtended {
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

export interface IExtendedSlide extends ISlide {
  renderType: string;
}
