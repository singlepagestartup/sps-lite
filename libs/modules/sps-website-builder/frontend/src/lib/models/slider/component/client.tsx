"use client";
import "client-only";

import { IComponentProps as IFindOneComponentProps } from "./find-one/interface";
import { api } from "../api/client";
import { api as slideApi } from "../../slide/api/client";
import { variants } from "./variants";
import { Dispatch, FC, SetStateAction, useMemo, useState } from "react";
import { IModel as IBackendSlide } from "@sps/sps-website-builder-contracts-extended/lib/models/slide/interfaces";
import { parseMimeType } from "@sps/utils";

// default is required for dynamic import
export default function Client(props: IFindOneComponentProps) {
  const { data: slider } = api.useFindOneQuery({ id: props.data.id });
  const { data: slides } = slideApi.useFindQuery(
    {
      filter: {
        id: {
          $in: slider?.slides.map((slide) => slide.id) || [],
        },
      },
    },
    { skip: !slider },
  );
  const [activeSlide, setActiveSlide] = useState(0);

  const localMedia = useMemo(() => {
    if (!slider) {
      return;
    }

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

    return;
  }, [slides]);

  const Comp = variants[props.variant as keyof typeof variants];

  if (!localMedia) return <div></div>;

  return <></>;

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
