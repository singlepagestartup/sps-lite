import { Component as WebsiteBuilderModuleFeature } from "../../../../website-builder/feature/index";
import { forwardRef, type SVGProps, useState } from "react";
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

export type ProfileArticleFindByIdCommentFormDefaultProps =
  typeof defaultProfileArticleFindByIdCommentFormDefaultProps;
export function ProfileArticleFindByIdCommentFormDefault(
  props?: Partial<ProfileArticleFindByIdCommentFormDefaultProps> & {
    variant?: string;
  },
) {
  const { placeholder, submitLabel } = {
    ...defaultProfileArticleFindByIdCommentFormDefaultProps,
    ...props,
  };
  const [comment, setComment] = useState("");
  const canSubmit = comment.trim().length > 0;
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!canSubmit) {
          return;
        }
        setComment("");
      }}
      className="rounded-2xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] p-5"
      data-ds-block="social.profile.article-find-by-id-comment-form-default"
      data-ds-layer="singlepage"
      data-module="social"
      data-model="profile"
      data-variant={props?.variant ?? "article-find-by-id-comment-form-default"}
    >
      <label
        className="mb-3 block text-sm font-semibold"
        htmlFor="social-comment-draft"
      >
        Your comment
      </label>
      <textarea
        id="social-comment-draft"
        rows={3}
        placeholder={placeholder}
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        className="min-h-32 w-full resize-y rounded-xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] px-4 py-3 text-base text-[var(--color-sps-graphite)] outline-none transition focus:border-[var(--color-sps-line)] focus:ring-1 focus:ring-[var(--color-sps-graphite)] focus-visible:border-[var(--color-sps-graphite)] focus-visible:ring-2 focus-visible:ring-[var(--color-sps-graphite)]"
      />
      <div className="mt-3 flex justify-end">
        <button
          type="submit"
          disabled={!canSubmit}
          className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-sps-line)] bg-[var(--color-sps-green)] px-4 py-2 text-sm text-[var(--color-sps-graphite)] transition hover:bg-[var(--color-sps-green)] disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sps-graphite)] min-h-11"
        >
          <Send className="h-5 w-5" />
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
const Send = createIcon("paper-plane-tilt");
export const defaultProfileArticleFindByIdCommentFormDefaultProps = {
  placeholder: "Write a comment...",
  submitLabel: "Post comment",
};
