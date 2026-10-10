import { Component as WebsiteBuilderModuleFeature } from "../../../../website-builder/feature/index";
import { forwardRef as forwardRef } from "react";
import { type SVGProps as SVGProps } from "react";
import { twMerge as twMerge } from "tailwind-merge";
import type IconGlyphs from "../../../../website-builder/feature/singlepage/icon/icons.json";
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

export interface ProfileFindRowProps {
  name: string;
  role: string;
  avatar: string;
  href: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
  meta?: string;
}
export function ProfileFindRow(props?: Partial<ProfileFindRowProps>) {
  const { name, role, avatar, href, target, meta } = {
    ...defaultProfileFindRowProps,
    ...props,
  };
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      className="group flex items-center gap-3 rounded-xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] p-3 transition hover:border-[var(--color-sps-line)] hover:bg-[var(--color-sps-grey)]"
      data-ds-block="social.profile.find-row"
      data-ds-layer="singlepage"
    >
      <img
        src={avatar}
        alt={name}
        className="h-10 w-10 shrink-0 rounded-full border border-[var(--color-sps-line)] object-cover"
      />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm text-[var(--color-sps-graphite)] group-hover:text-[var(--color-sps-graphite)]">
          {name}
        </p>
        <p className="text-xs text-[var(--color-sps-muted)]">{role}</p>
        {meta && (
          <p className="mt-0.5 text-xs text-[var(--color-sps-muted)]">{meta}</p>
        )}
      </div>
      <ArrowUpRight className="h-5 w-5 shrink-0 text-[var(--color-sps-muted)] transition group-hover:text-[var(--color-sps-muted)]" />
    </a>
  );
}
const ArrowUpRight = createIcon("arrow-up-right");
const jamesAvatar =
  "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTY2ODA0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
export const defaultProfileFindRowProps: ProfileFindRowProps = {
  name: "James Carter",
  role: "CTO",
  avatar: jamesAvatar,
  href: "/blog/authors/james-carter",
  meta: "2 articles",
};
