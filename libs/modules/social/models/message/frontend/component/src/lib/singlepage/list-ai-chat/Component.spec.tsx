/** @jest-environment jsdom */
import { fireEvent, render, screen } from "@testing-library/react";
jest.mock(
  "@sps/social/relations/profiles-to-messages/frontend/component",
  () => ({
    Component: (props: any) =>
      props.children({
        data: [
          {
            profileId:
              props.apiProps.params.filters.and[0].value === "user-message"
                ? "requester"
                : "author-assistant",
          },
        ],
      }),
  }),
);
jest.mock(
  "@sps/social/relations/messages-to-file-storage-module-files/frontend/component",
  () => ({ Component: () => null }),
);
import { Component } from "./Component";
it("opens the actual assistant author from both the avatar and name; user messages remain noninteractive", () => {
  const open = jest.fn();
  render(
    <Component
      {...({
        data: [
          {
            id: "user-message",
            description: "Question",
            createdAt: "2026-10-12T00:00:00Z",
          },
          {
            id: "assistant-message",
            description: "Answer",
            createdAt: "2026-10-12T00:00:01Z",
          },
        ],
        requesterProfileId: "requester",
        assistantProfileId: "fallback-assistant",
        onProfileOpen: open,
      } as any)}
    />,
  );
  expect(
    screen.getAllByRole("button", { name: "Open assistant profile" }),
  ).toHaveLength(1);
  fireEvent.click(
    screen.getByRole("button", { name: "Open assistant profile" }),
  );
  fireEvent.click(screen.getByRole("button", { name: "About this assistant" }));
  expect(open.mock.calls).toEqual([["author-assistant"], ["author-assistant"]]);
});
it("opens the project assistant for an empty document introduction", () => {
  const open = jest.fn();
  render(
    <Component
      {...({
        data: [],
        assistantProfileId: "project",
        onProfileOpen: open,
      } as any)}
    />,
  );
  fireEvent.click(screen.getByRole("button", { name: "About this assistant" }));
  expect(open).toHaveBeenCalledWith("project");
});
