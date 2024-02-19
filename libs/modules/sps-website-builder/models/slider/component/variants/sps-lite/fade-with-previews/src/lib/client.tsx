"use client";
import "client-only";

// import { Component, IExtendedSlide } from "./Component";
// import { ErrorBoundary } from "@sps/ui-adapter";
// import { Error } from "./Error";
import { IComponentProps } from "./interface";
// import { api } from "../../../api/client";
// import { api as slideApi } from "../../../../slide/api/client";
// import { useMemo, useState } from "react";
// import { parseMimeType } from "@sps/utils";

export default function Client(props: IComponentProps) {
  // const { data: slider } = api.useFindOneQuery({ id: props.data.id });
  // const { data: slides } = slideApi.useFindQuery(
  //   {
  //     filter: {
  //       id: {
  //         $in: slider?.slides.map((slide) => slide.id) || [],
  //       },
  //     },
  //   },
  //   { skip: !slider },
  // );
  // const [activeSlide, setActiveSlide] = useState(0);

  // const localMedia = useMemo(() => {
  //   if (!slider) {
  //     return;
  //   }

  //   if (!slides || !slides.every((slide) => slide?.media?.length)) {
  //     return;
  //   }

  //   return slides.map((slide) => {
  //     return {
  //       ...slide,
  //       renderType: slide.media?.length
  //         ? parseMimeType(slide.media[0].mime)?.renderType
  //         : "image" || "image",
  //     } as IExtendedSlide;
  //   });

  //   return;
  // }, [slides]);

  // if (!localMedia) return <div></div>;

  return <></>;

  // return (
  //   <ErrorBoundary fallback={Error}>
  //     <Component {...props} data={data} />
  //   </ErrorBoundary>
  // );
}
