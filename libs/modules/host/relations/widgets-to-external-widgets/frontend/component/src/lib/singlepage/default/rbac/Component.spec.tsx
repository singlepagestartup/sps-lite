import { renderToStaticMarkup } from "react-dom/server";
import { Component } from "./Component";

const record = {
  id: "rbac-auth-widget",
  variant: "subject-me-authentication-select-method-ai-chat",
};
const rbacReads = jest.fn();
const rbacRenders = jest.fn();
const websiteReads = jest.fn();
const websiteRenders = jest.fn();
jest.mock("./widget", () => ({ Component: () => null }));
jest.mock("@sps/rbac/models/widget/frontend/component", () => ({
  Component: (props: any) => {
    if (props.variant === "find") {
      rbacReads(props.apiProps);
      return props.children({ data: [record] });
    }
    rbacRenders(props);
    return <form data-rbac-widget={props.data.id}>Authentication fields</form>;
  },
}));
jest.mock("@sps/website-builder/models/widget/frontend/component", () => ({
  Component: (props: any) => {
    if (props.variant === "find") {
      websiteReads(props.apiProps);
      return props.children({ data: [{ id: "website-auth-widget" }] });
    }
    websiteRenders(props);
    return <main data-website-widget={props.data.id}>{props.children}</main>;
  },
}));
beforeEach(() => {
  rbacReads.mockClear();
  rbacRenders.mockClear();
  websiteReads.mockClear();
  websiteRenders.mockClear();
});
it.each(["select-method", "registration", "forgot-password", "reset-password"])(
  "loads both model records and composes %s authentication through Host",
  (action) => {
    record.variant = `subject-me-authentication-${action}-ai-chat`;
    const html = renderToStaticMarkup(
      <Component
        {...({
          isServer: true,
          data: { externalWidgetId: record.id },
          url: "/ai-chat/sign-in",
          language: "en",
        } as any)}
      />,
    );
    expect(rbacReads).toHaveBeenCalledWith({
      params: {
        filters: { and: [{ column: "id", method: "eq", value: record.id }] },
      },
    });
    expect(websiteReads).toHaveBeenCalledWith({
      params: {
        filters: {
          and: [
            {
              column: "slug",
              method: "eq",
              value: "ai-chat-authentication-content",
            },
          ],
        },
      },
    });
    expect(html).toContain(
      '<main data-website-widget="website-auth-widget"><form data-rbac-widget="rbac-auth-widget">',
    );
    expect(websiteRenders.mock.calls[0][0]).not.toHaveProperty("url");
    expect(rbacRenders.mock.calls[0][0]).not.toHaveProperty("url");
    expect(websiteRenders.mock.calls[0][0].media).toBe(
      action === "registration" ? "stack" : undefined,
    );
  },
);
