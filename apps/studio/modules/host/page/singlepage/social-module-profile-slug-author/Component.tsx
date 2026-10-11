import { Component as HostModuleLayout } from "../../../layout/index";
import { Component as BlogModuleArticle } from "../../../../blog/article/index";
import { Component as SocialModuleProfile } from "../../../../social/profile/index";

interface IComponentVariantProps {
  variant?: string;
}
export function SocialProfileFindByIdOverviewAuthor({
  variant = "social-module-profile-slug-author",
}: IComponentVariantProps = {}) {
  return (
    <div data-module="host" data-model="page" data-variant={variant}>
      <HostModuleLayout variant="website" footer="compact">
        <main
          className="min-w-0"
          data-ds-page="host.page.social-module-profile-slug-author"
        >
          <SocialModuleProfile
            variant="author-find-by-id-overview-default"
            articles={Array.from({ length: 2 }, (_, index) => (
              <BlogModuleArticle
                key={`author-article-${index}`}
                variant="row"
                href="/?path=/story/modules-host-models-page-singlepage-blog-module-article-slug--default"
                target="_top"
              />
            ))}
          />
        </main>
      </HostModuleLayout>
    </div>
  );
}
