import { Component as HostModuleLayout } from "../../../layout/index";
import { Component as RbacModuleSubject } from "../../../../rbac/subject/index";

interface IComponentVariantProps {
  variant?: string;
}
export function RbacSubjectAuthenticationResetPassword({
  variant = "rbac-subject-authentication-reset-password",
}: IComponentVariantProps = {}) {
  return (
    <div data-module="host" data-model="page" data-variant={variant}>
      <HostModuleLayout
        variant="website"
        activeHref="/reset-password"
        footer="compact"
      >
        <main
          className="min-w-0"
          data-ds-page="host.page.rbac-subject-authentication-reset-password"
        >
          <section className="w-full py-12">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <RbacModuleSubject variant="authentication-email-and-password-reset-password-form-default" />
            </div>
          </section>
        </main>
      </HostModuleLayout>
    </div>
  );
}
