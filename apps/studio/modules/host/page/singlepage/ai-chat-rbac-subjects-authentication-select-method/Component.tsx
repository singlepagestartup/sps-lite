"use client";

import { Component as HostModuleLayout } from "../../../layout/index";
import {
  Component as RbacModuleSubject,
  type ILoginCopy,
} from "../../../../rbac/subject/index";
import {
  Component as WebsiteBuilderModuleWidget,
  type IAuthenticationContent,
} from "../../../../website-builder/widget";
import { useNavigate } from "../../../layout/singlepage/ai-chat-landing/Navigation";
import { useAIChatProjectHref } from "../../../../rbac/subject/singlepage/account/Account";

export interface ILoginPageProps {
  variant?: string;
  copy?: { form: ILoginCopy; content: IAuthenticationContent };
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
        <WebsiteBuilderModuleWidget
          variant="content-ai-chat-authentication"
          content={copy?.content}
        >
          <RbacModuleSubject
            variant="authentication-email-and-password-authentication-form-ai-chat"
            copy={copy?.form}
            onSuccess={() => {
              navigate(projectHref);
            }}
          />
        </WebsiteBuilderModuleWidget>
      </HostModuleLayout>
    </div>
  );
}
