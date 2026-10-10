import { Component as WebsiteBuilderModuleFeature } from "../../../feature/index";
import { forwardRef as forwardRef } from "react";
import { type SVGProps as SVGProps } from "react";
import { twMerge as twMerge } from "tailwind-merge";
import type IconGlyphs from "../../../feature/singlepage/icon/icons.json";
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

export type ContentCtaProps = typeof defaultContentCtaProps;
export function ContentCta(
  props?: Partial<ContentCtaProps> & { variant?: string },
) {
  const { title, description, primaryAction, secondaryAction } = {
    ...defaultContentCtaProps,
    ...props,
  };
  return (
    <div
      className="w-full bg-[var(--color-sps-grey)] py-12 sm:py-16"
      data-ds-block="website-builder.widget.content-cta"
      data-ds-layer="singlepage"
      data-module="website-builder"
      data-model="widget"
      data-variant={props?.variant ?? "content-cta"}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-3xl bg-[var(--color-sps-graphite)] p-6 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end lg:p-12">
          <div>
            <h2 className="max-w-2xl text-[2rem] font-semibold leading-tight tracking-normal text-white sm:text-[2.5rem]">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-sps-muted-inverse)]">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a className={buttonInvertedClass} href={primaryAction.href}>
              {primaryAction.label}
              <ArrowRight className="h-5 w-5 shrink-0" />
            </a>
            <a className={buttonGhostDarkClass} href={secondaryAction.href}>
              {secondaryAction.label}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
const ArrowRight = createIcon("arrow-right");
const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sps-graphite)]";
const buttonBase =
  "inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold transition motion-reduce:transition-none enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";
const kit = {
  button: `${buttonBase} bg-[var(--color-sps-green)] text-[var(--color-sps-graphite)] enabled:hover:brightness-95 ${focus}`,
  secondary: `${buttonBase} border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] text-[var(--color-sps-graphite)] enabled:hover:bg-[var(--color-sps-grey)] ${focus}`,
};
const buttonInvertedClass = `${kit.button} no-underline hover:brightness-95 focus-visible:outline-[var(--color-sps-white)]`;
const buttonGhostDarkClass = `${kit.secondary} no-underline hover:bg-[var(--color-sps-grey)] focus-visible:outline-[var(--color-sps-white)]`;
export const defaultContentCtaProps = {
  title: "Ready to take control?",
  description:
    "Explore the admin panel, manage your modules, and see how every entity connects through a unified relation system.",
  primaryAction: { label: "Open admin panel", href: "/admin" },
  secondaryAction: { label: "Explore features", href: "#features" },
};
