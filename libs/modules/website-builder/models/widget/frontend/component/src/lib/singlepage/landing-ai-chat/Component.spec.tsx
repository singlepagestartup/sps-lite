/** @jest-environment jsdom */
/**
 * BDD Suite: AI Chat content navigation.
 * Given: SDK-loaded landing, Help and authentication Widgets in a chosen locale.
 * When: their links render, including links inside Markdown.
 * Then: internal destinations retain the locale and disclosure fragments.
 */
import { render } from "@testing-library/react";
jest.mock("client-only", () => ({}), { virtual: true });
jest.mock("server-only", () => ({}), { virtual: true });
jest.mock("@sps/website-builder/models/widget/sdk/client", () => ({
  Provider: ({ children }: any) => <>{children}</>,
  api: { findById: () => ({ data: { id: "widget" }, isLoading: false }) },
}));
jest.mock("@sps/website-builder/models/widget/sdk/server", () => ({ api: {} }));
import { Component as Widget } from "@sps/website-builder/models/widget/frontend/component";
import { AI_CHAT_REGISTRATION_CONTENT } from "@sps/shared-utils";
it.each(["en", "ru"])("retains %s in public content links", (language) => {
  for (const variant of [
    "landing-ai-chat",
    "content-ai-chat-help",
    "content-ai-chat-authentication",
  ]) {
    const view = render(
      <Widget
        {...({
          isServer: false,
          variant,
          language,
          data: { id: "widget" },
          ...(variant === "content-ai-chat-authentication"
            ? { content: AI_CHAT_REGISTRATION_CONTENT }
            : {}),
        } as any)}
      />,
    );
    const hrefs = [...view.container.querySelectorAll("a[href]")]
      .map((link) => link.getAttribute("href")!)
      .filter((href) => href.startsWith("/") && !href.startsWith("//"));
    expect(hrefs.length).toBeGreaterThan(0);
    expect(hrefs.every((href) => href.startsWith(`/${language}/`))).toBe(true);
    if (variant === "content-ai-chat-authentication")
      expect(hrefs).toContain(
        `/${language}/ai-chat/projects#how-your-materials-are-processed-and-stored`,
      );
    view.unmount();
  }
});
