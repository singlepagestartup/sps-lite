"use client";

import { Component as HostModuleLayout } from "../../../layout/index";
import { Component as RbacModuleSubject } from "../../../../rbac/subject/index";
import { useNavigate } from "../../../layout/singlepage/ai-chat-landing/Navigation";
import { useAIChatProjectHref } from "../../../../rbac/subject/singlepage/account/Account";
import type { IAIChatServicePageContent } from "../../../../website-builder/widget/singlepage/content/ai-chat/content";

export interface ILoginPageProps {
  variant?: string;
  copy?: IAIChatServicePageContent;
}
export function Component({
  variant = "ai-chat-rbac-subjects-authentication-select-method",
  copy,
}: ILoginPageProps = {}) {
  const navigate = useNavigate();
  const projectHref = useAIChatProjectHref();
  return (
    <div data-module="host" data-model="page" data-variant={variant}>
      <HostModuleLayout variant="ai-chat-dashboard" page="login">
        <RbacModuleSubject
          variant="authentication-email-and-password-authentication-form-ai-chat"
          copy={copy}
          onSuccess={() => {
            navigate(projectHref);
          }}
        />
      </HostModuleLayout>
    </div>
  );
}
