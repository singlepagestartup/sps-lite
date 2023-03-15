import utils from "@rogwild/next-utils";
const { getImageUrl } = utils.api;
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { IFeature } from "types";
import { IFeatureSections } from ".";
import { BACKEND_URL } from "~utils/envs";
import { useMemo } from "react";

export default function ThreeColumnWithSlider(props: IFeatureSections) {
  const additionalAttributes = useMemo(() => {
    if (props?.anchor) {
      return {
        id: props.anchor,
      };
    }

    return {};
  }, [props]);

  return (
    <section {...additionalAttributes}>
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            {props.title}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            {props.description}
          </p>
        </div>
      </div>
      <FeaturesMobile features={props.features} />
      <FeaturesDesktop features={props.features} />
    </section>
  );
}

function Feature({
  feature,
  isActive,
  className,
}: {
  feature: IFeature;
  isActive: boolean;
  className: string;
}) {
  return (
    <div
      className={`${className} ${!isActive && `opacity-75 hover:opacity-100`}`}
    >
      {feature.icon ? (
        <div className="w-1/3 relative aspect-w-3 aspect-h-1">
          <Image
            src={getImageUrl(feature.icon, { BACKEND_URL })}
            fill={true}
            alt=""
            className="object-contain object-top object-left"
          />
        </div>
      ) : null}
      <h3
        className={`mt-6 text-sm font-medium
          ${isActive ? `text-blue-600` : `text-slate-600`}
        `}
      >
        {feature.subtitle}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">
        {feature.title}
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  );
}

function FeaturesMobile({ features }: { features: IFeature[] }) {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature, index) => (
        <div key={index} className="px-2">
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-11/12 aspect-w-16 aspect-h-10 overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              {feature.media?.length ? (
                <Image
                  src={getImageUrl(feature.media[0], { BACKEND_URL })}
                  alt=""
                  fill={true}
                  className="object-contain"
                />
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function FeaturesDesktop({ features }: { features: IFeature[] }) {
  return (
    <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }: any) => (
        <>
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <Tab.List className="grid grid-cols-3 gap-x-8">
              {features.map((feature, featureIndex) => (
                <Tab key={featureIndex} as="div" className="cursor-pointer">
                  <Feature
                    feature={feature}
                    isActive={featureIndex === selectedIndex}
                    className="relative"
                  />
                </Tab>
              ))}
            </Tab.List>
          </div>
          <Tab.Panels className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
            <div
              className="-mx-5 flex flex-row"
              style={{
                width: `${features.length * 70}vw`,
              }}
            >
              {features.map((feature, featureIndex) => (
                <Tab.Panel
                  static
                  key={featureIndex}
                  className={`w-[70vw] aspect-w-10 aspect-h-2 px-5 transition overflow-hidden duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none ${
                    featureIndex !== selectedIndex && `opacity-60`
                  }`}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  {feature.media.length ? (
                    <Image
                      className="object-contain"
                      src={getImageUrl(feature.media[0], { BACKEND_URL })}
                      alt=""
                      fill={true}
                    />
                  ) : null}
                </Tab.Panel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
          </Tab.Panels>
        </>
      )}
    </Tab.Group>
  );
}
