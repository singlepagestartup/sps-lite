import { Component as HostModuleLayout } from "../../../layout";
import { Component as RbacModuleSubject } from "../../../../rbac/subject";

const authorProfileStoryHref =
  "/?path=/story/modules-host-models-page-singlepage-blog-authors-social-profiles-slug--default";

export function RbacSubjectAuthenticationSelectMethod() {
  return (
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
  );
}
