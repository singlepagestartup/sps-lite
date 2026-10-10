import { Component as Glyph } from "../icon/index";
import { forwardRef as forwardRef } from "react";
import { type SVGProps as SVGProps } from "react";
import { twMerge as twMergePresentation } from "tailwind-merge";
import type IconGlyphs from "../icon/icons.json";
import { twMerge } from "tailwind-merge";
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
            className={twMergePresentation("h-5 w-5", className)}
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

export type FeatureStatusDefaultProps = typeof defaultFeatureStatusDefaultProps;
export function FeatureStatusDefault(
  props?: Partial<FeatureStatusDefaultProps>,
) {
  const {
    icon: Icon,
    label,
    value,
    className,
  } = {
    ...defaultFeatureStatusDefaultProps,
    ...props,
  };
  const rootClassName = twMerge(
    "min-w-0 rounded-2xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] p-5",
    className,
  );
  return (
    <div
      className={rootClassName}
      data-ds-block="website-builder.feature.status-default"
      data-ds-layer="singlepage"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-sps-green)] text-[var(--color-sps-graphite)]">
          <Icon className="h-5 w-5" />
        </span>
        <span className="min-w-0">
          <small className="block text-xs text-[var(--color-sps-muted)]">
            {label}
          </small>
          <strong className="block text-sm font-semibold leading-6 text-[var(--color-sps-graphite)]">
            {value}
          </strong>
        </span>
      </div>
    </div>
  );
}
const Check = createIcon("check");
export const defaultFeatureStatusDefaultProps = {
  icon: Check as ModuleIcon,
  label: "Status",
  value: "All systems operational",
  className: "",
};
