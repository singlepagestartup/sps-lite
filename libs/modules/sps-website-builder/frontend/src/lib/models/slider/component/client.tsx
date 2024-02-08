"use client";
import "client-only";

import { IComponentProps } from "./interface";
import { api } from "../api/client";
import { variants } from "./variants";
import { Dispatch, FC, SetStateAction, useMemo, useState } from "react";
import { IModel as IBackendSlide } from "@sps/sps-website-builder-contracts-extended/lib/models/slide/interfaces";

// default is required for dynamic import
export default function Client(props: IComponentProps) {
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

  const Comp = variants[props.variant as keyof typeof variants];

  // if (!localMedia) return <div></div>;

  return <div className="w-full h-[400px] bg-gray-500 rounded-md" />;
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
