"use client";

import React, {
  useEffect,
  useState,
  useRef,
  SetStateAction,
  Fragment,
  MouseEventHandler,
  Dispatch,
  useMemo,
  FC,
} from "react";
import { animated, useTransition, useSpringRef } from "@react-spring/web";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { getFileUrl } from "@sps/shared-utils";
import { IModel as IBackendSlide } from "@sps/sps-website-builder-models-slide-contracts-extended";
import { IComponentPropsExtended } from "./interface";
import { Component as Slide } from "@sps/sps-website-builder-models-slide-frontend-component";
import { Button } from "@sps/ui-adapter";

interface INavigationButton {
  isNext?: boolean;
  slides: IBackendSlide[];
  activeSlide: number;
  onClick: MouseEventHandler;
}

export function Component(props: IComponentPropsExtended) {
  const containerRef = useRef<HTMLDivElement>(null);
  const transitionsRef = useSpringRef();
  const [baseStyles, setBaseStyles] = useState<any>();
  const [fullScreen, setFullScreen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const [transitions, transitionsApi] = useTransition(activeSlide, () => {
    return {
      ref: transitionsRef,
      keys: null,
      from: {
        opacity: 0,
      },
      enter: {
        opacity: 1,
      },
      leave: {
        opacity: 0,
      },
      config: {
        duration: 1000,
      },
    };
  });

  useEffect(() => {
    transitionsRef.start();
  }, [activeSlide]);

  useEffect(() => {
    if (containerRef?.current) {
      const container = containerRef.current;

      const sliderHeight = container.offsetHeight;
      const sliderWidth = container.offsetWidth;

      setBaseStyles({
        ...baseStyles,
        width: sliderWidth || 0,
        height: sliderHeight || 0,
      });
    }
  }, [containerRef]);

  function handleNavigation({ slideNumber }: { slideNumber: number }) {
    setActiveSlide(slideNumber);
  }

  return (
    <div
      data-module="sps-website-builder"
      data-model="slider"
      data-variant={props.variant}
      className={props.data.className || ""}
    >
      {/* {props.data.showFullScreen ? (
        <FullScreen
          isOpen={fullScreen}
          setIsOpen={setFullScreen}
          slides={slides}
          variant={props.variant}
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
        />
      ) : null} */}
      <div
        className={
          props.data.aspectRatioClassName ||
          "aspect-h-1 aspect-w-1 xl:aspect-w-15 xl:aspect-h-10"
        }
      >
        <div className="slides-container" ref={containerRef}>
          {transitions((style, index) => {
            return (
              <animated.div
                key={index}
                className="animated-slide"
                style={{ ...style, ...baseStyles }}
              >
                <Slide
                  isServer={false}
                  variant="default"
                  data={props.data.slides[index]}
                />
              </animated.div>
            );
          })}
          {props.data.slides.length > 1 ? (
            <DefaultNavigaionButton
              isNext={false}
              slides={props.data.slides}
              activeSlide={activeSlide}
              onClick={() => {
                const previousSlideNumber = activeSlide - 1;
                if (previousSlideNumber >= 0) {
                  handleNavigation({ slideNumber: previousSlideNumber });
                }
              }}
            />
          ) : null}
          {props.data.slides.length > 1 ? (
            <DefaultNavigaionButton
              isNext={true}
              slides={props.data.slides}
              activeSlide={activeSlide}
              onClick={() => {
                const nextSlideNumber = activeSlide + 1;
                if (nextSlideNumber <= props.data.slides.length - 1) {
                  handleNavigation({ slideNumber: nextSlideNumber });
                }
              }}
            />
          ) : null}
          {/* {props.data.showFullScreen ? (
            <button
              onClick={() => setFullScreen(true)}
              className="full-screen-button"
            >
              <FullScreenIcon />
            </button>
          ) : null} */}
        </div>
      </div>

      {/* {props.data.showPreviews ? (
        <DefaultPreviewsComponent
          slides={slides}
          activeSlide={activeSlide}
          handleNavigation={handleNavigation}
        />
      ) : null} */}
    </div>
  );
}

// function DefaultPreviewsComponent({
//   slides,
//   handleNavigation,
//   activeSlide,
// }: {
//   slides: IExtendedSlide[];
//   handleNavigation: any;
//   activeSlide: number;
// }) {
//   return (
//     <div className="previews-container">
//       {slides.map((slide, index) => {
//         return (
//           <div
//             key={index}
//             data-active={index === activeSlide}
//             className="preview-slide"
//             onClick={() => handleNavigation({ slideNumber: index })}
//           >
//             {slide.media?.length ? (
//               <Image src={getFileUrl(slide.media[0])} alt="" fill={true} />
//             ) : null}
//           </div>
//         );
//       })}
//     </div>
//   );
// }

function DefaultNavigaionButton({
  isNext = false,
  onClick,
  slides,
  activeSlide,
}: INavigationButton) {
  const reachable = useMemo(() => {
    if (isNext) {
      if (activeSlide + 1 >= slides.length) {
        return false;
      }

      return true;
    } else {
      if (activeSlide <= 0) {
        return false;
      }

      return true;
    }
  }, [activeSlide, isNext, slides]);

  return (
    <Button
      ui="sps"
      data-ui-variant="transparent"
      data-reachable={reachable}
      data-next={isNext}
      onClick={onClick}
    >
      <div className="navigation">
        <div className="icon-container bg-red-500">
          <ChevronIcon />
        </div>
      </div>
    </Button>
  );
}

function ChevronIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}

// function FullScreen(props: {
//   isOpen: boolean;
//   setIsOpen: Dispatch<SetStateAction<boolean>>;
//   slides: IExtendedSlide[];
//   activeSlide: number;
//   setActiveSlide: Dispatch<SetStateAction<number>>;
//   variant: string;
// }) {
//   const { isOpen, setIsOpen, slides, activeSlide, setActiveSlide } = props;

//   return (
//     <Transition show={isOpen} as={Fragment}>
//       <Dialog
//         data-collection-type="slider"
//         data-variant={props.variant}
//         onClose={() => setIsOpen(false)}
//         className="slider-fade-with-previews-full-screen-dialog"
//       >
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="backdrop" aria-hidden="true" />
//         </Transition.Child>
//         <Transition.Child
//           as={"div"}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="dialog-container">
//             <Dialog.Panel className="dialog-panel">
//               <Component
//                 slides={slides}
//                 variant="fade-with-previews"
//                 activeSlide={activeSlide}
//                 setActiveSlide={setActiveSlide}
//                 className="full-screen-slider"
//                 showFullScreen={false}
//                 showPreviews={true}
//                 showBackdrop={false}
//                 aspectRatioClassName="full-screen-aspect-ratio"
//               />
//             </Dialog.Panel>
//           </div>
//         </Transition.Child>
//       </Dialog>
//     </Transition>
//   );
// }

function FullScreenIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
      />
    </svg>
  );
}
