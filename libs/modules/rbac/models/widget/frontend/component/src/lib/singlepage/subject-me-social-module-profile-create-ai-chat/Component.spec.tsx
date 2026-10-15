/** @jest-environment jsdom */
/**
 * BDD Suite: project selection preserves the original creation card.
 * Given: an authenticated Subject, connected projects and the Host content Widget.
 * When: the Subject opens project creation and returns to the chooser.
 * Then: creation has its original photograph, copy and form; the chooser retains its project links.
 */
import { fireEvent, render, screen } from "@testing-library/react";
const contentRead = jest.fn();
const project = {
  profile: { id: "profile", title: { en: "Existing project" } },
  chat: { id: "chat" },
  thread: { id: "thread" },
};
jest.mock("client-only", () => ({}), { virtual: true });
jest.mock("server-only", () => ({}), { virtual: true });
jest.mock("@sps/rbac/models/widget/sdk/client", () => ({
  Provider: ({ children }: any) => <>{children}</>,
  api: { findById: () => ({ data: { id: "rbac-widget" }, isLoading: false }) },
}));
jest.mock("@sps/rbac/models/widget/sdk/server", () => ({ api: {} }));
jest.mock("@sps/website-builder/models/widget/sdk/client", () => ({
  Provider: ({ children }: any) => <>{children}</>,
  api: {
    findById: (props: any) => {
      contentRead(props);
      return { data: { id: props.id }, isLoading: false };
    },
  },
}));
jest.mock("@sps/website-builder/models/widget/sdk/server", () => ({ api: {} }));
jest.mock("@sps/rbac/models/subject/frontend/component", () => ({
  projectHref: () =>
    "/ai-chat/social/profiles/profile/chats/chat/threads/thread",
  Component: (props: any) => {
    if (props.variant === "authentication-me-default")
      return props.children({ data: { id: "subject" }, authenticated: true });
    if (props.variant === "me-social-module-profile-list-ai-chat")
      return props.renderProjects({ projects: [project] });
    return (
      <form aria-label="Create project">
        <label>
          Project name
          <input />
        </label>
      </form>
    );
  },
}));
import { Component as Widget } from "@sps/rbac/models/widget/frontend/component";
jest.mock("@sps/rbac/models/widget/frontend/component", () => ({
  Component: (props: any) => jest.requireActual("./index").Component(props),
}));
it("opens the original photo card without replacing the project chooser", () => {
  render(
    <Widget
      {...({
        isServer: false,
        variant: "subject-me-social-module-profile-create-ai-chat",
        language: "ru",
        data: { id: "rbac-widget" },
        projectCreateWidget: { id: "creation-content-widget" },
      } as any)}
    />,
  );
  expect(screen.getByRole("heading", { name: "My projects" })).toBeTruthy();
  expect(
    screen
      .getByRole("link", { name: "Open Existing project" })
      .getAttribute("href"),
  ).toBe("/ru/ai-chat/social/profiles/profile/chats/chat/threads/thread");
  expect(screen.queryByRole("form")).toBeNull();
  expect(contentRead).not.toHaveBeenCalled();
  fireEvent.click(screen.getByRole("button", { name: "Create project" }));
  expect(
    screen.getByRole("heading", { name: "Start with a name." }),
  ).toBeTruthy();
  expect(
    screen
      .getByRole("img", { name: "A person working on their project at a desk" })
      .getAttribute("src"),
  ).toBe(
    "/images/ai-chat/singlepagestartup-photography-project-start-v1-square.png",
  );
  expect(screen.getByText("Your files. Your project.")).toBeTruthy();
  expect(screen.getByRole("form", { name: "Create project" })).toBeTruthy();
  expect(
    screen.queryByRole("heading", { name: "Create a project" }),
  ).toBeNull();
  expect(contentRead).toHaveBeenCalledWith(
    expect.objectContaining({ id: "creation-content-widget" }),
  );
  fireEvent.click(screen.getByRole("button", { name: "Back to projects" }));
  expect(screen.getByRole("heading", { name: "My projects" })).toBeTruthy();
  expect(screen.queryByRole("form")).toBeNull();
});
