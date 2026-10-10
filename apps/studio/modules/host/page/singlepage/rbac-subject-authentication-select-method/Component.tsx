import { Component as HostModuleLayout } from "../../../layout/index";
import { Component as RbacModuleSubject } from "../../../../rbac/subject/index";

const authorProfileStoryHref =
  "/?path=/story/modules-host-models-page-singlepage-blog-authors-social-profiles-slug--default";

interface IComponentVariantProps {
  variant?: string;
}
export function RbacSubjectAuthenticationSelectMethod({
  variant = "rbac-subject-authentication-select-method",
}: IComponentVariantProps = {}) {
  return (
    <div data-module="host" data-model="page" data-variant={variant}>
      <HostModuleLayout
        variant="website"
        activeHref="/rbac/subject/authentication/select-method"
        footer="compact"
      >
        <main
          className="min-w-0"
          data-ds-page="host.page.rbac-subject-authentication-select-method"
          data-ds-route="/rbac/subject/authentication/select-method"
        >
          <RbacModuleSubject
            variant="authentication-select-method-default"
            onSuccess={() => {
              if (typeof window !== "undefined")
                (window.top ?? window).location.href = authorProfileStoryHref;
            }}
          />
        </main>
      </HostModuleLayout>
    </div>
  );
}
