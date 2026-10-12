"use client";

import { Component as HostModuleLayout } from "../../../layout/index";
import { Component as RbacModuleSubject } from "../../../../rbac/subject/index";

interface IComponentVariantProps {
  variant?: string;
}
import { Component as WebsiteBuilderModuleWidget } from "../../../../website-builder/widget";
export function Component({
  variant = "rbac-module-subject-me-social-module-profile-create-ai-chat",
}: IComponentVariantProps = {}) {
  return (
    <div data-module="host" data-model="page" data-variant={variant}>
      <HostModuleLayout
        variant="ai-chat-dashboard"
        page="chat"
        profileSelect={(props) => (
          <RbacModuleSubject
            {...props}
            variant="me-social-module-profile-select-ai-chat"
          />
        )}
        subjectAccount={({ onNavigate }) => (
          <RbacModuleSubject
            variant="me-account"
            showTokens
            page="chat"
            onNavigate={onNavigate}
          />
        )}
      >
        <WebsiteBuilderModuleWidget variant="content-ai-chat-profile-create">
          <RbacModuleSubject variant="me-social-module-profile-create-ai-chat" />
        </WebsiteBuilderModuleWidget>
        <div className="mx-auto max-w-3xl px-5">
          <WebsiteBuilderModuleWidget
            variant="content-ai-chat-materials-processing"
            id="how-your-materials-are-processed-and-stored"
          />
        </div>
      </HostModuleLayout>
    </div>
  );
}
