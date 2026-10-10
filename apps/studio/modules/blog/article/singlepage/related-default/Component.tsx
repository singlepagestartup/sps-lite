/**
 * Model-owned compact article link for related-content collections.
 * Category and reading time share a row above the title and publication date.
 */
type ArticleRelatedDefaultTarget = "_blank" | "_parent" | "_self" | "_top";
export type ArticleRelatedDefaultProps =
  typeof defaultArticleRelatedDefaultProps;
export function ArticleRelatedDefault(
  props?: Partial<ArticleRelatedDefaultProps>,
) {
  const { href, slug, category, title, date, readTime, target } = {
    ...defaultArticleRelatedDefaultProps,
    ...props,
  };
  return (
    <a
      href={href ?? `/blog/articles/${slug}`}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      className={`group block min-w-0 rounded-xl px-3 py-3 transition hover:bg-[var(--color-sps-grey)] motion-reduce:transition-none ${kit.focus}`}
      data-ds-block="blog.article.related-default"
      data-ds-layer="singlepage"
    >
      <div className="mb-2 flex items-center justify-between gap-3 text-xs text-[var(--color-sps-muted)]">
        <span className="rounded-md bg-[var(--color-sps-graphite)] px-2.5 py-1 font-medium text-[var(--color-sps-white)]">
          {category}
        </span>
        <span className="shrink-0">{readTime}</span>
      </div>
      <h4 className="text-sm font-semibold leading-[22px] text-[var(--color-sps-graphite)]">
        {title}
      </h4>
      <p className="mt-2 text-xs text-[var(--color-sps-muted)]">{date}</p>
    </a>
  );
}
const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sps-graphite)]";
const buttonBase =
  "inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold transition motion-reduce:transition-none enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";
const kit = {
  focus: focus,
};
export const defaultArticleRelatedDefaultProps = {
  href: undefined as string | undefined,
  slug: "getting-started",
  category: "guides",
  title: "Getting Started: From Zero to Your First Module",
  date: "Feb 3, 2026",
  readTime: "5 min read",
  target: undefined as ArticleRelatedDefaultTarget | undefined,
};
