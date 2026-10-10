import { Component as WebsiteBuilderModuleFeature } from "../../../feature/index";
import { forwardRef as forwardRef } from "react";
import { type SVGProps as SVGProps } from "react";
import { twMerge as twMerge } from "tailwind-merge";
import type IconGlyphs from "../../../feature/singlepage/icon/icons.json";
type ModuleIcon = ReturnType<typeof createIcon>;
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

export interface ContentFeatureItem {
  icon: ModuleIcon;
  title: string;
  desc: string;
}
export type ContentFeatureFindGridProps =
  typeof defaultContentFeatureFindGridProps;
export function ContentFeatureFindGrid(
  props?: Partial<ContentFeatureFindGridProps>,
) {
  const { eyebrow, title, features } = {
    ...defaultContentFeatureFindGridProps,
    ...props,
  };
  return (
    <section
      className="w-full bg-[var(--color-sps-grey)] py-12 sm:py-16"
      data-ds-block="website-builder.widget.content-feature-find-grid"
      data-ds-layer="singlepage"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-2 text-sm font-semibold tracking-normal text-[var(--color-sps-muted)]">
          {eyebrow}
        </p>
        <h2 className="text-[2rem] font-semibold leading-tight tracking-normal sm:text-[2.5rem] text-[var(--color-sps-graphite)]">
          {title}
        </h2>
        <div
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          data-ds-imports="website-builder.feature.card"
        >
          {features.map((f) => (
            <WebsiteBuilderModuleFeature
              variant="card"
              key={f.title}
              icon={f.icon}
              title={f.title}
              description={f.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
const Layers = createIcon("stack");
const TrendingUp = createIcon("trend-up");
const Code = createIcon("code");
const Globe = createIcon("globe");
export const defaultContentFeatureFindGridProps = {
  eyebrow: "Capabilities",
  title: "What's included",
  features: [
    {
      icon: Globe,
      title: "Responsive Design",
      desc: "Pixel-perfect layouts that work flawlessly across all devices and screen sizes.",
    },
    {
      icon: Code,
      title: "Clean Code",
      desc: "Modern tech stack with React, Next.js, or static generators — optimized for speed.",
    },
    {
      icon: TrendingUp,
      title: "SEO Ready",
      desc: "Built-in SEO best practices, structured data, and Core Web Vitals optimization.",
    },
    {
      icon: Layers,
      title: "CMS Integration",
      desc: "Content management through headless CMS or custom admin panels.",
    },
  ] satisfies ContentFeatureItem[],
};
