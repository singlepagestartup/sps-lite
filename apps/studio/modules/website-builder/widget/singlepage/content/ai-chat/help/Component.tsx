import type { ReactNode } from "react";
import Markdown from "markdown-to-jsx";
import { Component as WebsiteBuilderModuleFeature } from "../../../../../feature";
import type { IAIChatServicePageContent } from "../content";
import defaultCopy from "./content.json";
export interface IHelpProps {
  variant?: string;
  copy?: IAIChatServicePageContent;
  projectHref?: string;
  children?: ReactNode;
}
export function Component({
  variant = "content-ai-chat-help",
  copy = defaultCopy,
  projectHref = "/ai-chat/social/profiles/create",
  children,
}: IHelpProps = {}) {
  function paragraphs(items: string[]) {
    return items.map((text) => (
      <div key={text}>
        <Markdown options={{ disableParsingRawHTML: true }}>
          {text.replaceAll("/ai-chat/social/profiles/example", projectHref)}
        </Markdown>
      </div>
    ));
  }
  return (
    <main
      className="@container mx-auto w-full max-w-6xl px-5 py-7 @[640px]:px-8 @[640px]:py-10"
      data-module="website-builder"
      data-model="widget"
      data-variant={variant}
    >
      <div className="mb-8 max-w-2xl">
        <div className="mb-4 h-1 w-10 rounded-full bg-sps-green" />
        <h1 className="text-3xl font-semibold leading-tight tracking-tight @[640px]:text-4xl">
          {copy.sections.hero.title}
        </h1>
        <div className="mt-4 space-y-3 text-sm leading-6 text-sps-muted [&_a]:underline">
          {paragraphs(copy.sections.hero.paragraphs)}
        </div>
      </div>
      <div className="grid min-w-0 items-start gap-6 @3xl:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        {children}
        <aside className="min-w-0 rounded-2xl bg-sps-graphite p-6 text-white @3xl:p-8">
          <span className="mb-6 grid size-12 place-items-center rounded-xl bg-white/10 text-sps-green">
            <WebsiteBuilderModuleFeature
              variant="icon"
              name="clock"
              size={24}
            />
          </span>
          <h2 className="text-2xl font-semibold">
            {copy.sections.response.title}
          </h2>
          <div className="mt-4 space-y-3 text-sm leading-6 text-white/80 [&_a]:underline">
            {paragraphs(copy.sections.response.paragraphs)}
          </div>
        </aside>
      </div>
    </main>
  );
}
