import { Component as HostModuleLayout } from "../../../layout/index";
import { Component as RbacModuleSubject } from "../../../../rbac/subject/index";

const authorProfileStoryHref =
  "/?path=/story/modules-host-models-page-singlepage-social-module-profile-slug-author--default";

interface IComponentVariantProps {
  variant?: string;
}
export function RbacSubjectAuthenticationSelectMethod({
  variant = "rbac-module-subject-me-authentication-select-method",
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
          data-ds-page="host.page.rbac-module-subject-me-authentication-select-method"
          data-ds-route="/rbac/subject/authentication/select-method"
        >
          <RbacModuleSubject
            variant="me-authentication-select-method-default"
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
