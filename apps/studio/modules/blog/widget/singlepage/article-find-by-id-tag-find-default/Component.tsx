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

export type ArticleFindByIdTagFindProps =
  typeof defaultArticleFindByIdTagFindProps;
export function ArticleFindByIdTagFind(
  props?: Partial<ArticleFindByIdTagFindProps>,
) {
  const { title, tags } = { ...defaultArticleFindByIdTagFindProps, ...props };
  return (
    <div
      data-ds-block="blog.widget.article-find-by-id-tag-find-default"
      data-ds-imports="blog.tag.button-default"
      data-ds-layer="singlepage"
      className="rounded-2xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] p-5"
    >
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
            key={tag}
            label={tag}
            href={`/blog/tags/${tag}`}
          />
        ))}
      </div>
    </div>
  );
}
const Tag = createIcon("tag");
export const defaultArticleFindByIdTagFindProps = {
  title: "Tags",
  tags: ["pricing", "plans", "getting-started"],
};
