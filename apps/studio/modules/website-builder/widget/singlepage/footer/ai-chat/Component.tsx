import { Component as WebsiteBuilderModuleLogotype } from "../../../../logotype/index";
import { Component as WebsiteBuilderModuleButtonsArray } from "../../../../buttons-array/index";
import type { IWebsiteSection } from "../../content/ai-chat/content";
import defaultContent from "./content.json";

export interface IAIChatFooterProps {
  variant?: string;
  content?: IWebsiteSection;
  className?: string;
}
export function Component({
  variant = "footer-ai-chat",
  content = defaultContent,
  className = "mx-auto w-full max-w-6xl px-5 @3xl:px-8",
}: IAIChatFooterProps = {}) {
  return (
    <footer
      data-ds-block="website-builder.widget.footer-ai-chat"
      className={className}
      data-module="website-builder"
      data-model="widget"
      data-variant={variant}
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 border-t border-border py-7">
        <WebsiteBuilderModuleLogotype variant="brand-ai-chat" />
        <WebsiteBuilderModuleButtonsArray
          variant="default"
          ariaLabel="AI Chat footer"
          buttons={content.links.map((link) => ({
            label: link.text,
            href: link.href,
            variant: "link",
          }))}
        />
      </div>
    </footer>
  );
}
