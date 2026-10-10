import { Component as HostModuleLayout } from "../../../layout/index";
import { Component as RbacModuleSubject } from "../../../../rbac/subject/index";

interface IComponentVariantProps {
  variant?: string;
}
export function Component({
  variant = "ai-chat-rbac-subjects-authentication-registration",
}: IComponentVariantProps = {}) {
  return (
    <div data-module="host" data-model="page" data-variant={variant}>
      <HostModuleLayout variant="ai-chat-dashboard" page="register">
        <RbacModuleSubject variant="authentication-email-and-password-registration-form-ai-chat" />
      </HostModuleLayout>
    </div>
  );
}
