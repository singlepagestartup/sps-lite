import { Component as HostModuleLayout } from "../../../layout/index";
import { Component as RbacModuleSubject } from "../../../../rbac/subject/index";
import { Component as WebsiteBuilderModuleWidget } from "../../../../website-builder/widget";
import registrationContent from "../../../../website-builder/widget/singlepage/content/ai-chat/authentication/registration.json";

interface IComponentVariantProps {
  variant?: string;
}
export function Component({
  variant = "ai-chat-rbac-subjects-authentication-registration",
}: IComponentVariantProps = {}) {
  return (
    <div data-module="host" data-model="page" data-variant={variant}>
      <HostModuleLayout variant="ai-chat-dashboard" page="register">
        <WebsiteBuilderModuleWidget
          variant="content-ai-chat-authentication"
          content={registrationContent}
          media="stack"
          asideIcon="shield-check"
        >
          <RbacModuleSubject variant="authentication-email-and-password-registration-form-ai-chat" />
        </WebsiteBuilderModuleWidget>
      </HostModuleLayout>
    </div>
  );
}
