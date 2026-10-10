import { Component as Glyph } from "../icon/index";
import { forwardRef as forwardRef } from "react";
import { type SVGProps as SVGProps } from "react";
import { twMerge as twMerge } from "tailwind-merge";
import type IconGlyphs from "../icon/icons.json";
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
  return <Glyph {...props} />;
}

export type FeatureListItemDefaultProps =
  typeof defaultFeatureListItemDefaultProps;
export function FeatureListItemDefault(
  props?: Partial<FeatureListItemDefaultProps> & { variant?: string },
) {
  const {
    icon: Icon,
    label,
    className,
  } = {
    ...defaultFeatureListItemDefaultProps,
    ...props,
  };
  const rootClassName = [
    "flex min-w-0 items-start gap-3 text-base leading-7 text-[var(--color-sps-graphite)]",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <span
      className={rootClassName}
      data-ds-block="website-builder.feature.list-item-default"
      data-ds-layer="singlepage"
      data-module="website-builder"
      data-model="feature"
      data-variant={props?.variant ?? "list-item-default"}
    >
      <Icon className="mt-1 h-5 w-5 shrink-0 text-[var(--color-sps-muted)]" />
      <span>{label}</span>
    </span>
  );
}
const Layers = createIcon("stack");
export const defaultFeatureListItemDefaultProps = {
  icon: Layers as ModuleIcon,
  label: "Modular architecture",
  className: "",
};
