import { Component as HostModuleLayout } from "../../../layout/index";
import { Component as HostModuleWidget } from "../../../widget/index";

interface IComponentVariantProps {
  variant?: string;
}
export function BlogFindByIdArticleOverview({
  variant = "blog-module-article-slug",
}: IComponentVariantProps = {}) {
  return (
    <div data-module="host" data-model="page" data-variant={variant}>
      <HostModuleLayout variant="website" footer="compact">
        <main
          className="min-w-0"
          data-ds-page="host.page.blog-module-article-slug"
          data-ds-route="/blog/articles/[blog.articles.slug]"
        >
          <HostModuleWidget variant="default" />
        </main>
      </HostModuleLayout>
    </div>
  );
}
