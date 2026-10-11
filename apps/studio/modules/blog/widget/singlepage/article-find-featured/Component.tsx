import { Component as BlogModuleArticle } from "../../../article/index";

const articleOverviewStoryHref =
  "/?path=/story/modules-host-models-page-singlepage-blog-module-article-slug--default";

export interface ArticleFindFeaturedProps {
  variant?: string;
  count: number;
  /** Removes introduction spacing when composed immediately after a header. */
  compact?: boolean;
}

export const defaultArticleFindFeaturedProps: ArticleFindFeaturedProps = {
  count: 1,
};

export function ArticleFindFeatured({
  variant = "article-find-featured",
  count = 1,
  compact = false,
}: Partial<ArticleFindFeaturedProps> = {}) {
  return (
    <section
      className={`w-full ${compact ? "" : "pt-8"}`}
      data-ds-block="blog.widget.article-find-featured"
      data-ds-imports="blog.article.featured"
      data-ds-layer="singlepage"
      data-module="blog"
      data-model="widget"
      data-variant={variant}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6">
          {Array.from({ length: count }, (_, index) => (
            <BlogModuleArticle
              key={`featured-${index}`}
              variant="featured"
              href={articleOverviewStoryHref}
              target="_top"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
