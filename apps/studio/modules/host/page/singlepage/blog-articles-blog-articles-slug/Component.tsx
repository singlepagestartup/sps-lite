import { Component as HostModuleLayout } from "../../../layout/index";
import { Component as HostModuleWidget } from "../../../widget/index";

export function BlogFindByIdArticleOverview() {
  return (
    <HostModuleLayout variant="website" footer="compact">
      <main
        className="min-w-0"
        data-ds-page="host.page.blog-articles-blog-articles-slug"
        data-ds-route="/blog/articles/[blog.articles.slug]"
      >
        <HostModuleWidget variant="default" />
      </main>
    </HostModuleLayout>
  );
}
