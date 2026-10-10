import { Component as WebsiteBuilderModuleFeature } from "../../../feature/index";
import { forwardRef as forwardRef } from "react";
import { type SVGProps as SVGProps } from "react";
import { twMerge as twMerge } from "tailwind-merge";
import type IconGlyphs from "../../../feature/singlepage/icon/icons.json";
import { Component as WebsiteBuilderModuleButton } from "../../../button/index";
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

export interface ButtonsArrayItem {
  label: string;
  href: string;
  variant: "link" | "primary" | "secondary";
  icon?: ModuleIcon;
  size?: "sm" | "xs";
  tone?: "default" | "muted";
  inverse?: boolean;
  target?: "_self" | "_top";
}
export interface ButtonsArrayDefaultProps {
  ariaLabel?: string;
  buttons: ButtonsArrayItem[];
  orientation?: "horizontal" | "vertical";
  title?: string;
}
export function ButtonsArrayDefault(props?: Partial<ButtonsArrayDefaultProps>) {
  const { ariaLabel, buttons, orientation, title } = {
    ...defaultButtonsArrayProps,
    ...props,
  };
  const layoutClass =
    orientation === "vertical"
      ? `flex min-w-0 flex-col items-start ${title ? "gap-0" : "gap-3"}`
      : "flex min-w-0 flex-wrap items-center gap-3";
  return (
    <div
      aria-label={ariaLabel}
      className={layoutClass}
      data-ds-block="website-builder.buttons-array.default"
      data-ds-layer="singlepage"
      role={ariaLabel ? "navigation" : undefined}
    >
      {title ? (
        <h3 className="mb-6 w-full text-base font-semibold leading-6 tracking-normal text-[var(--color-sps-graphite)]">
          {title}
        </h3>
      ) : null}
      {buttons.map((button) => {
        if (button.variant === "link") {
          return (
            <WebsiteBuilderModuleButton
              variant="link"
              href={button.href}
              target={button.target}
              key={`${button.variant}:${button.href}:${button.label}`}
              label={button.label}
              size={button.size}
              tone={button.tone}
            />
          );
        }
        return button.variant === "secondary" ? (
          <WebsiteBuilderModuleButton
            variant="secondary"
            href={button.href}
            target={button.target}
            inverse={button.inverse}
            icon={button.icon}
            key={`${button.variant}:${button.href}:${button.label}`}
            label={button.label}
          />
        ) : (
          <WebsiteBuilderModuleButton
            variant="primary"
            href={button.href}
            target={button.target}
            icon={button.icon}
            key={`${button.variant}:${button.href}:${button.label}`}
            label={button.label}
          />
        );
      })}
    </div>
  );
}
const Play = createIcon("play");
const ArrowRight = createIcon("arrow-right");
export const defaultButtonsArrayProps: ButtonsArrayDefaultProps = {
  buttons: [
    {
      label: "Open admin panel",
      href: "/admin",
      variant: "primary",
      icon: ArrowRight,
    },
    {
      label: "Learn more",
      href: "#features",
      variant: "secondary",
      icon: Play,
    },
  ] satisfies ButtonsArrayItem[],
};
