/**
 * BDD Suite: Host public Widget composition.
 *
 * Given: a persisted Website Builder Widget and the current Subject.
 * When: Host resolves the external Widget variant.
 * Then: Website Builder owns the content shell and receives the module form through its child slot.
 */
import { renderToStaticMarkup } from "react-dom/server";
const widgets = [{ id: "website-widget", variant: "landing-ai-chat" }];
const widgetReads = jest.fn();
const widgetRenders = jest.fn();
const subjectCalls = jest.fn();
const projectWidgetCalls = jest.fn();
let authenticated = true;
jest.mock("./widget/singlepage/navbar-default", () => ({
  Component: () => null,
}));
jest.mock("@sps/website-builder/models/widget/frontend/component", () => ({
  Component: (props: any) => {
    if (props.variant === "find") {
      widgetReads(props.apiProps);
      return props.children({ data: widgets });
    }
    widgetRenders(props);
    if (props.variant === "content-ai-chat-help") {
      const { Component: Help } = jest.requireActual(
        "../../../../../../../../../../website-builder/models/widget/frontend/component/src/lib/singlepage/content-ai-chat-help/Component",
      );
      return <Help {...props} />;
    }
    return <main data-variant={props.variant}>{props.children}</main>;
  },
}));
jest.mock("@sps/rbac/models/subject/frontend/component", () => ({
  Component: (props: any) => {
    subjectCalls(props);
    return props.variant === "authentication-me-default" ? (
      props.children({
        data: { id: "current-subject", variant: "default" },
        authenticated,
      })
    ) : (
      <form aria-label="Subject support form" data-subject-id={props.data.id} />
    );
  },
}));
jest.mock("@sps/rbac/models/widget/frontend/component", () => ({
  Component: (props: any) => {
    if (props.variant === "find")
      return props.children({ data: [{ id: "project-widget" }] });
    if (props.variant === "subject-me-social-module-profile-create-ai-chat") {
      projectWidgetCalls(props);
      return <section aria-label="Project chooser" />;
    }
    throw new Error(
      "Public Website Builder content must not render an RBAC Widget wrapper",
    );
  },
}));
jest.mock("@sps/social/models/chat/frontend/component", () => ({
  Component: (props: any) =>
    props.variant === "find" ? (
      props.children({ data: [{ id: "preview-chat" }] })
    ) : (
      <article data-variant={props.variant} data-id={props.data.id}>
        Chat demo
      </article>
    ),
}));
jest.mock("@sps/social/models/profile/frontend/component", () => ({
  Component: () => null,
  EmptyProjectSelect: () => null,
}));
jest.mock("@sps/host/models/page/frontend/component", () => ({
  Component: (props: any) =>
    props.children({
      data: props.url.includes("/social/profiles/")
        ? props.segment === "social.profiles.id"
          ? "profile-id"
          : "chat-id"
        : undefined,
    }),
}));
jest.mock("@sps/website-builder/models/feature/frontend/component", () => ({
  Component: () => null,
}));
import { Component } from "./Component";
const props: any = {
  isServer: true,
  data: { externalWidgetId: "website-widget" },
  language: "en",
  url: "/en/ai-chat",
  apiProps: {
    params: {
      filters: {
        and: [{ column: "widgetId", method: "eq", value: "host-widget" }],
      },
    },
  },
};
beforeEach(() => {
  authenticated = true;
  widgetReads.mockClear();
  widgetRenders.mockClear();
  subjectCalls.mockClear();
  projectWidgetCalls.mockClear();
});
it("gives the chooser the original content Widget without mounting an empty Website Builder shell", () => {
  widgets[0].variant = "content-ai-chat-profile-create";
  const html = renderToStaticMarkup(
    <Component {...props} url="/ai-chat/projects" />,
  );
  expect(html).toContain('aria-label="Project chooser"');
  expect(widgetRenders).not.toHaveBeenCalled();
  expect(projectWidgetCalls).toHaveBeenCalledWith(
    expect.objectContaining({
      data: { id: "project-widget" },
      language: "en",
      projectCreateWidget: widgets[0],
    }),
  );
});
it("composes the Social demo into the persisted Website Builder Landing through Host's child slot", () => {
  widgets[0].variant = "landing-ai-chat";
  const html = renderToStaticMarkup(<Component {...props} />);
  expect(html).toContain('data-variant="landing-ai-chat"');
  expect(html).toContain('data-variant="id-preview-ai-chat"');
  expect(html).toContain('data-id="preview-chat"');
  expect(subjectCalls).not.toHaveBeenCalled();
  expect(widgetReads).toHaveBeenCalledWith({
    params: {
      filters: {
        and: [{ column: "id", method: "eq", value: "website-widget" }],
      },
    },
  });
});
it("injects the authenticated Subject support form into Help without a page-level RBAC Widget", () => {
  widgets[0].variant = "content-ai-chat-help";
  const html = renderToStaticMarkup(
    <Component {...props} url="/ai-chat/help" />,
  );
  expect(html).toContain('data-variant="content-ai-chat-help"');
  expect(html).toContain('data-subject-id="current-subject"');
  expect(html).toContain('data-id="website-widget"');
  expect(widgetRenders.mock.calls[0][0]).not.toHaveProperty("url");
  expect(html).toMatch(
    /<section[^>]*aria-label="Support request"[\s\S]*<h2[\s\S]*Support request<\/h2>[\s\S]*<form[^>]*aria-label="Subject support form"/,
  );
  expect(html.match(/Support request<\/h2>/g)).toHaveLength(1);
  expect(subjectCalls.mock.calls.map(([call]) => call.variant)).toEqual([
    "authentication-me-default",
    "me-crm-module-form-support-ai-chat",
  ]);
  expect(subjectCalls.mock.calls[0][0].isServer).toBe(false);
  expect(subjectCalls.mock.calls[1][0]).toEqual(
    expect.objectContaining({
      data: expect.objectContaining({ id: "current-subject" }),
      isServer: false,
    }),
  );
});

it.each([
  ["/ai-chat/help", true],
  [
    "/ai-chat/social/profiles/profile-id/chats/chat-id/threads/thread-id",
    false,
  ],
])(
  "passes a presentation flag to the Navbar for %s without exposing the URL",
  (url, helpSelected) => {
    widgets[0].variant = "navbar-ai-chat";
    renderToStaticMarkup(<Component {...props} url={url} />);
    const target = widgetRenders.mock.calls[0][0];
    expect(target).toEqual(
      expect.objectContaining({
        variant: "navbar-ai-chat",
        language: "en",
        helpSelected,
        data: expect.objectContaining({ id: "website-widget" }),
      }),
    );
    expect(target).not.toHaveProperty("url");
    expect(target).not.toHaveProperty("apiProps");
    expect(subjectCalls.mock.calls[0][0]).toEqual(
      expect.objectContaining({
        variant: "authentication-me-default",
        isServer: false,
      }),
    );
    const account = subjectCalls.mock.calls.find(
      ([call]) => call.variant === "me-account-ai-chat",
    )?.[0];
    expect(account).not.toHaveProperty("url");
  },
);

it("shows Sign in for an anonymous default Subject without reading account or project views", () => {
  widgets[0].variant = "navbar-ai-chat";
  authenticated = false;
  const html = renderToStaticMarkup(
    <Component {...props} url="/ai-chat/projects" />,
  );
  expect(html).toContain("Sign in");
  expect(html).not.toContain("Projects unavailable");
  expect(subjectCalls.mock.calls.map(([call]) => call.variant)).toEqual([
    "authentication-me-default",
  ]);
});
