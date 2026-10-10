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

interface StatItem {
  value: string;
  label: string;
  icon: ModuleIcon;
  description?: string;
}
export interface ContentFeatureFindDefaultProps {
  variant?: string;
  stats: StatItem[];
}
export function ContentFeatureFindDefault(
  props?: Partial<ContentFeatureFindDefaultProps>,
) {
  const { stats } = { ...defaultContentFeatureFindDefaultProps, ...props };
  return (
    <div
      className="w-full bg-[var(--color-sps-grey)] py-4 sm:py-6"
      data-ds-block="website-builder.widget.content-feature-find-default"
      data-ds-layer="singlepage"
      data-module="website-builder"
      data-model="widget"
      data-variant={props?.variant ?? "content-feature-find-default"}
    >
      <div className="mx-auto grid w-full max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div
            className="min-w-0 rounded-2xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] p-5 sm:p-6"
            key={stat.label}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <strong className="block break-words text-3xl font-semibold leading-tight tracking-normal text-[var(--color-sps-graphite)] sm:text-4xl">
                  {stat.value}
                </strong>
                <span className="mt-2 block text-sm font-semibold leading-6 text-[var(--color-sps-graphite)]">
                  {stat.label}
                </span>
              </div>
              <span className={iconBoxClass}>
                <stat.icon className="h-5 w-5" />
              </span>
            </div>
            {stat.description ? (
              <p className="mt-4 text-sm leading-6 text-[var(--color-sps-muted)]">
                {stat.description}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
const Users = createIcon("users");
const TrendingUp = createIcon("trend-up");
const Layers = createIcon("stack");
const Database = createIcon("database");
const iconBoxClass =
  "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-sps-grey)] text-[var(--color-sps-graphite)]";
export const defaultContentFeatureFindDefaultProps = {
  stats: [
    {
      value: "15",
      label: "Modules",
      icon: Layers,
      description: "Reusable business functions.",
    },
    {
      value: "50+",
      label: "Models",
      icon: Database,
      description: "Records and their relationships.",
    },
    {
      value: "99.9%",
      label: "Uptime",
      icon: TrendingUp,
      description: "Illustrative availability figure.",
    },
    {
      value: "24/7",
      label: "Support",
      icon: Users,
      description: "Illustrative support schedule.",
    },
  ] satisfies StatItem[],
};
