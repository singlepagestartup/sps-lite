import { Component as WebsiteBuilderModuleFeature } from "../../../../website-builder/feature/index";
import { forwardRef as forwardRef } from "react";
import { type SVGProps as SVGProps } from "react";
import { twMerge as twMerge } from "tailwind-merge";
import type IconGlyphs from "../../../../website-builder/feature/singlepage/icon/icons.json";
import { Component as BlogModuleTag } from "../../../tag/index";
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

interface TagFindButtonItem {
  label: string;
  href?: string;
}
export interface TagFindButtonProps {
  title: string;
  tags: TagFindButtonItem[];
}
export function TagFindButton(props?: Partial<TagFindButtonProps>) {
  const { title, tags } = { ...defaultTagFindButtonProps, ...props };
  return (
    <div
      className="w-full pb-16"
      data-ds-block="blog.widget.tag-find-button"
      data-ds-imports="blog.tag.button-default"
      data-ds-layer="singlepage"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] p-6">
          <div className="mb-3 flex items-center gap-2">
            <Tag className="size-5 text-[var(--color-sps-muted)]" />
            <span className="text-lg font-semibold text-[var(--color-sps-graphite)]">
              {title}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <BlogModuleTag
                variant="button-default"
                key={tag.label}
                label={tag.label}
                href={tag.href}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
const Tag = createIcon("tag");
export const defaultTagFindButtonProps: TagFindButtonProps = {
  title: "Popular tags",
  tags: [
    { label: "pricing", href: "/blog/tags/pricing" },
    { label: "plans", href: "/blog/tags/plans" },
    { label: "getting-started", href: "/blog/tags/getting-started" },
    { label: "release", href: "/blog/tags/release" },
    { label: "features", href: "/blog/tags/features" },
    { label: "ai", href: "/blog/tags/ai" },
    { label: "case-study", href: "/blog/tags/case-study" },
    { label: "scaling", href: "/blog/tags/scaling" },
    { label: "ecommerce", href: "/blog/tags/ecommerce" },
    { label: "tutorial", href: "/blog/tags/tutorial" },
    { label: "admin", href: "/blog/tags/admin" },
    { label: "security", href: "/blog/tags/security" },
    { label: "rbac", href: "/blog/tags/rbac" },
    { label: "enterprise", href: "/blog/tags/enterprise" },
    { label: "api", href: "/blog/tags/api" },
    { label: "webhooks", href: "/blog/tags/webhooks" },
  ],
};
