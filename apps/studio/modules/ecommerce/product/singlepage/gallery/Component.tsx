"use client";
import { Component as WebsiteBuilderModuleFeature } from "../../../../website-builder/feature/index";

import { forwardRef as forwardRef } from "react";
import { type SVGProps as SVGProps } from "react";
import { twMerge as twMerge } from "tailwind-merge";
import { Component as WebsiteBuilderModuleButton } from "../../../../website-builder/button/index";
import {
  forwardRef as forwardRefControl,
  type ButtonHTMLAttributes as ButtonControlProps,
} from "react";
import type IconGlyphs from "../../../../website-builder/feature/singlepage/icon/icons.json";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "./Carousel";
interface IModuleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}
type IconName = keyof typeof IconGlyphs;
function createIcon(name: IconName) {
  const Component = forwardRef<SVGSVGElement, IModuleIconProps>(
    function ModuleGlyph({ className, size = 20, children, ...props }, ref) {
      return (
        <span className="contents">
          <Icon
            name={name}
            className={twMerge("h-5 w-5", className)}
            svgProps={{ ...props, ref, width: size, height: size }}
          />
        </span>
      );
    },
  );
  Component.displayName = `Phosphor(${name})`;
  return Component;
}
function Icon(props: {
  name: keyof typeof IconGlyphs;
  size?: 20 | 24;
  className?: string;
  svgProps?: React.SVGProps<SVGSVGElement>;
}) {
  return <WebsiteBuilderModuleFeature {...props} variant="icon" />;
}

export interface GalleryImage {
  src: string;
  alt: string;
}
export interface ProductGalleryProps {
  images?: GalleryImage[];
  blockId?: string;
  importedBlockId?: string;
}
export function ProductGallery(props?: ProductGalleryProps) {
  const images = props?.images ?? defaultProductGalleryProps.images;
  const blockId = props?.blockId ?? "ecommerce.product.gallery";
  const total = images.length;
  const [active, setActive] = React.useState(0);
  const [api, setApi] = React.useState<CarouselApi>();
  const handleSelect = React.useCallback(
    (index: number) => {
      setActive(index);
      api?.scrollTo(index);
    },
    [api],
  );
  const handleGalleryKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.defaultPrevented) return;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        api?.scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        api?.scrollNext();
      }
    },
    [api],
  );
  React.useEffect(() => {
    if (!api) {
      return;
    }
    const updateActiveSlide = () => {
      const selectedIndex = api.selectedScrollSnap();
      setActive(selectedIndex);
    };
    updateActiveSlide();
    api.on("reInit", updateActiveSlide);
    api.on("select", updateActiveSlide);
    return () => {
      api.off("reInit", updateActiveSlide);
      api.off("select", updateActiveSlide);
    };
  }, [api]);
  if (total === 0) return null;
  return (
    <section
      className="w-full py-12 sm:py-16"
      data-ds-block={blockId}
      data-ds-imports={props?.importedBlockId}
      data-ds-layer="singlepage"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:gap-8 lg:px-8">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-[var(--color-sps-muted)]">
            A closer look
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-[var(--color-sps-graphite)] sm:text-4xl">
            Project gallery
          </h2>
        </div>
        <div
          className="min-w-0 overflow-hidden rounded-3xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)]"
          onKeyDown={handleGalleryKeyDown}
        >
          <Carousel
            aria-label="Project gallery"
            setApi={setApi}
            className="w-full"
            opts={{ loop: total > 1 }}
          >
            <CarouselContent className="ml-0">
              {images.map((image) => (
                <CarouselItem key={image.src} className="pl-0">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="block aspect-square w-full object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="space-y-4 border-t border-[var(--color-sps-line)] p-5">
            <div className="flex flex-wrap gap-2" aria-label="Gallery images">
              {images.map((image, index) => (
                <button
                  key={image.src}
                  aria-current={index === active ? "true" : undefined}
                  aria-label={`Show gallery image ${index + 1}`}
                  className={`h-16 w-16 cursor-pointer overflow-hidden rounded-xl border-2 transition motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sps-graphite)] ${index === active ? "border-[var(--color-sps-graphite)]" : "border-transparent opacity-70 hover:opacity-100"}`}
                  onClick={() => handleSelect(index)}
                  type="button"
                >
                  <img
                    src={image.src}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p
                aria-live="polite"
                className="text-sm text-[var(--color-sps-muted)]"
              >
                {active + 1} of {total}
              </p>
              {total > 1 ? (
                <div className="flex gap-2">
                  <Button
                    variant="secondary"
                    aria-label="Show previous gallery image"
                    className="h-11 w-11 px-0"
                    onClick={() => api?.scrollPrev()}
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="secondary"
                    aria-label="Show next gallery image"
                    className="h-11 w-11 px-0"
                    onClick={() => api?.scrollNext()}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const ArrowRight = createIcon("arrow-right");
const ArrowLeft = createIcon("arrow-left");
const Button = forwardRefControl<
  HTMLButtonElement,
  ButtonControlProps<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "plain" | "danger";
  }
>(function Button({ variant = "primary", ...props }, ref) {
  return (
    <WebsiteBuilderModuleButton
      {...props}
      variant="control"
      appearance={variant}
      ref={ref}
    />
  );
});
const IMG_WEB =
  "/module-assets/images/singlepage/generated/living-focus/singlepagestartup-photography-business-conversation-square.png";
const IMG_SAAS =
  "/module-assets/images/singlepage/generated/living-focus/singlepagestartup-photography-moment-of-focus-square.png";
const IMG_UX =
  "/module-assets/images/singlepage/generated/living-focus/singlepagestartup-photography-work-in-motion-square.png";
export const defaultProductGalleryProps = {
  images: [
    { src: IMG_WEB, alt: "Two people discussing ideas" },
    { src: IMG_SAAS, alt: "A moment of focus at work" },
    { src: IMG_UX, alt: "A person at work" },
  ] satisfies GalleryImage[],
};
