import { renderToStaticMarkup } from "react-dom/server";

let mockAuthenticated = true;
const mockProjectReads = jest.fn();
const mockAuthenticationProps = jest.fn();
const mockProject = {
  profile: { id: "owned-profile" },
  chat: { id: "owned-chat" },
};
jest.mock("@sps/rbac/models/subject/frontend/component", () => ({
  Component: (props: any) => {
    if (props.variant === "authentication-me-default") {
      mockAuthenticationProps(props);
      return props.children({
        data: { id: "owner" },
        authenticated: mockAuthenticated,
      });
    }
    if (props.variant === "me-social-module-profile-list-ai-chat") {
      mockProjectReads();
      return props.renderProjects({ projects: [mockProject] });
    }
    return <div data-subject-variant={props.variant}>Workspace content</div>;
  },
}));
jest.mock("@sps/social/models/profile/frontend/component", () => ({
  Component: (props: any) => <section>{props.children}</section>,
}));
jest.mock("@sps/social/models/chat/frontend/component", () => ({
  Component: (props: any) => <section>{props.children}</section>,
}));
jest.mock("@sps/rbac/models/subject/sdk/server", () => ({ api: {} }));
jest.mock("@sps/rbac/models/subject/sdk/model", () => ({ clientHost: "" }));
jest.mock("@sps/shared-frontend-client-utils", () => ({
  saturateHeaders: () => ({}),
}));

import { Component as Thread } from "./ClientComponent";
import { Component as ThreadCreate } from "../subject-me-social-module-profile-id-chat-id-thread-create-ai-chat/ClientComponent";
import { Component as ProjectSettings } from "../subject-me-social-module-profile-id-settings-ai-chat/ClientComponent";
import { Component as ProjectCreate } from "../subject-me-social-module-profile-create-ai-chat/ClientComponent";

const entryPoints = [Thread, ThreadCreate, ProjectSettings, ProjectCreate];
const props = {
  isServer: false,
  data: { id: "widget" },
  language: "ru",
  profileId: "owned-profile",
  chatId: "owned-chat",
};

beforeEach(() => {
  mockAuthenticated = true;
  mockProjectReads.mockClear();
  mockAuthenticationProps.mockClear();
});

it.each(entryPoints)(
  "opens an owner's workspace through the auth guard",
  (View) => {
    const html = renderToStaticMarkup(<View {...(props as any)} />);
    expect(mockProjectReads).toHaveBeenCalledTimes(1);
    expect(html).toContain("Workspace content");
    expect(html).not.toContain("Sign in to your workspace");
    expect(mockAuthenticationProps.mock.calls[0][0]).toMatchObject({
      unauthenticatedRedirectHref: "/ru/ai-chat/sign-in",
    });
  },
);

it.each(entryPoints)(
  "does not request private projects for a guest",
  (View) => {
    mockAuthenticated = false;
    const html = renderToStaticMarkup(<View {...(props as any)} />);
    expect(mockProjectReads).not.toHaveBeenCalled();
    expect(html).not.toContain("Workspace content");
  },
);

it.each([Thread, ThreadCreate, ProjectSettings])(
  "keeps the access-denied result for an authenticated foreign-project visitor",
  (View) => {
    const html = renderToStaticMarkup(
      <View {...({ ...props, profileId: "foreign-profile" } as any)} />,
    );
    expect(html).toContain("This project is unavailable in your workspace.");
    expect(html).not.toContain("Workspace content");
    expect(html).not.toContain("Sign in to your workspace");
  },
);
