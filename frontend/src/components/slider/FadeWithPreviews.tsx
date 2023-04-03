import React, {
  useEffect,
  useState,
  useRef,
  SetStateAction,
  Fragment,
  MouseEventHandler,
  Dispatch,
  useMemo,
} from "react";
import { animated, useTransition, useSpringRef } from "@react-spring/web";
import utils from "@rogwild/next-utils";
const { getImageUrl } = utils.api;
import { BACKEND_URL } from "~utils/envs";
import { IExtendedSlide, ISlider } from ".";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import SimpleButtons from "~components/buttons/simple-buttons";
import { IBackendSlide } from "types/components/elements/sps-lite";

interface INavigationButton {
  isNext?: boolean;
  slides: IBackendSlide[];
  activeSlide: number;
  onClick: MouseEventHandler;
}

export default function FadeWithPreviews(props: ISlider) {
  const {
    slides,
    activeSlide = 0,
    setActiveSlide,
    NavigationButton = DefaultNavigaionButton,
    SlideComponent = DefaultSlideComponent,
    PreviewsComponent = DefaultPreviewsComponent,
    className,
    aspectRatioClassName,
    showFullScreen,
    showBackdrop,
    showPreviews,
  } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  const transitionsRef = useSpringRef();
  const [baseStyles, setBaseStyles] = useState<any>();
  const [fullScreen, setFullScreen] = useState(false);

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
    <>
      <div className={`${className || ``}`}>
        <FullScreen
          isOpen={fullScreen}
          setIsOpen={setFullScreen}
          slides={slides}
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
        />
        <div
          className={`slider__fade_with_previews ${aspectRatioClassName || ``}`}
        >
          <div className="slider">
            <div className="slider__container" ref={containerRef}>
              {transitions((style, index) => {
                return (
                  <animated.div
                    key={index}
                    className="animated__slide"
                    style={{ ...style, ...baseStyles }}
                  >
                    <SlideComponent
                      showBackdrop={showBackdrop ? true : false}
                      slide={slides[index]}
                    />
                  </animated.div>
                );
              })}
              {slides.length > 1 ? (
                <NavigationButton
                  isNext={false}
                  slides={slides}
                  activeSlide={activeSlide}
                  onClick={() => {
                    const previousSlideNumber = activeSlide - 1;
                    if (previousSlideNumber >= 0) {
                      handleNavigation({ slideNumber: previousSlideNumber });
                    }
                  }}
                />
              ) : null}
              {slides.length > 1 ? (
                <NavigationButton
                  isNext={true}
                  slides={slides}
                  activeSlide={activeSlide}
                  onClick={() => {
                    const nextSlideNumber = activeSlide + 1;
                    if (nextSlideNumber <= slides.length - 1) {
                      handleNavigation({ slideNumber: nextSlideNumber });
                    }
                  }}
                />
              ) : null}
              {showFullScreen ? (
                <button
                  onClick={() => setFullScreen(true)}
                  className="full_screen__button"
                >
                  <FullScreenIcon />
                </button>
              ) : null}
            </div>
            {showPreviews ? (
              <PreviewsComponent
                slides={slides}
                activeSlide={activeSlide}
                handleNavigation={handleNavigation}
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

function DefaultSlideComponent({
  slide,
  showBackdrop,
}: {
  slide: IExtendedSlide;
  showBackdrop?: boolean;
}) {
  return (
    <div className="slide">
      <div className="slide__container">
        {slide.media?.length ? (
          <Image
            src={getImageUrl(slide.media[0], { BACKEND_URL })}
            alt=""
            fill={true}
            className="background"
          />
        ) : null}
        {showBackdrop ? <div className="backdrop"></div> : null}
        <div className="content__container">
          <div className="content">
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
            <div className="buttons__container">
              {slide.buttons?.map((button, index: number) => {
                return <SimpleButtons key={index} {...button} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DefaultPreviewsComponent({
  slides,
  handleNavigation,
  activeSlide,
}: {
  slides: IExtendedSlide[];
  handleNavigation: Function;
  activeSlide: number;
}) {
  return (
    <div className="previews__container">
      {slides.map((slide, index) => {
        return (
          <div
            key={index}
            data-active={index === activeSlide}
            className="preview__slide"
            onClick={() => handleNavigation({ slideNumber: index })}
          >
            {slide.media?.length ? (
              <Image
                src={getImageUrl(slide.media[0], { BACKEND_URL })}
                alt=""
                fill={true}
                className="image"
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

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
    <div
      data-next={isNext}
      data-reachable={reachable}
      className="navigation"
      onClick={onClick}
    >
      <div className="icon__container">
        <ChevronIcon />
      </div>
    </div>
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

function FullScreen(props: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  slides: IExtendedSlide[];
  activeSlide: number;
  setActiveSlide: Dispatch<SetStateAction<number>>;
}) {
  const { isOpen, setIsOpen, slides, activeSlide, setActiveSlide } = props;

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        onClose={() => setIsOpen(false)}
        className="full_screen_slider_dialog"
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="full_screen_slider_dialog_backdrop"
            aria-hidden="true"
          />
        </Transition.Child>
        <Transition.Child
          as={`div`}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="full_screen_slider_dialog_container">
            <Dialog.Panel className="full_screen_slider_dialog_content">
              <FadeWithPreviews
                slides={slides}
                activeSlide={activeSlide}
                setActiveSlide={setActiveSlide}
                className="full_screen_slider"
                showFullScreen={false}
                showPreviews={true}
                showBackdrop={false}
                aspectRatioClassName={``}
              />
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

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
