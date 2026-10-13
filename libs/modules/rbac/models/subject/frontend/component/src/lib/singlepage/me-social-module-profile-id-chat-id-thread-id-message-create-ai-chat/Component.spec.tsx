/** @jest-environment jsdom */
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
const send = jest.fn();
jest.mock("@sps/rbac/models/subject/sdk/client", () => ({
  api: {
    socialModuleProfileFindByIdChatFindByIdProfileFindByIdKnowledgeSourceFind:
      () => ({
        data: [
          { id: "source", title: "Products" },
          { id: "booking-source", title: "Bookings" },
          { id: "other-document-source", title: "Strategy" },
        ],
      }),
    socialModuleProfileFindByIdChatFindByIdThreadFindByIdMessageCreate: () => ({
      mutateAsync: send,
      isPending: false,
    }),
  },
}));
jest.mock("@sps/website-builder/models/feature/frontend/component", () => ({
  Component: () => null,
}));
import { Component } from "./Component";
beforeEach(() => send.mockReset());
it("keeps project Knowledge search for ordinary conversations without showing document targets or sending a stale Source target", async () => {
  send.mockResolvedValue({ id: "message" });
  render(
    <Component
      {...({
        data: { id: "subject" },
        project: {
          requesterProfileId: "requester",
          profile: { id: "project" },
          chat: { id: "chat" },
        },
        thread: {
          id: "topic",
          metadata: { aiChatDocument: { profileId: "project", sourceIds: [] } },
        },
        target: "source",
        onTargetChange: jest.fn(),
      } as any)}
    />,
  );
  expect(screen.queryByRole("button", { name: "Working on" })).toBeNull();
  fireEvent.change(screen.getByRole("textbox", { name: "Message" }), {
    target: { value: "Discuss bookings" },
  });
  fireEvent.click(screen.getByRole("button", { name: "Send" }));
  await waitFor(() => expect(send).toHaveBeenCalledTimes(1));
  expect(send.mock.calls[0][0].data.metadata).not.toHaveProperty(
    "aiChatDocumentSourceId",
  );
  expect(
    send.mock.calls[0][0].data.metadata.rbacAiReactionRequest
      .useKnowledgeSearch,
  ).toBe(true);
});
it("sends through the requester profile and preserves the selected Knowledge context", async () => {
  send.mockResolvedValue({ id: "message" });
  render(
    <Component
      {...({
        isServer: false,
        variant:
          "me-social-module-profile-id-chat-id-thread-id-message-create-ai-chat",
        data: { id: "subject" },
        project: {
          requesterProfileId: "requester",
          profile: { id: "project" },
          chat: { id: "chat" },
        },
        thread: {
          id: "thread",
          title: "Products.md",
          metadata: {
            aiChatDocument: {
              key: "products",
              profileId: "project",
              sourceIds: ["source"],
            },
          },
        },
        target: "source",
        onTargetChange: jest.fn(),
      } as any)}
    />,
  );
  fireEvent.change(screen.getByRole("textbox", { name: "Message" }), {
    target: { value: "Review these products" },
  });
  fireEvent.click(screen.getByRole("button", { name: "Send" }));
  await waitFor(() => expect(send).toHaveBeenCalledTimes(1));
  expect(send.mock.calls[0][0]).toEqual(
    expect.objectContaining({
      id: "subject",
      socialModuleProfileId: "requester",
      socialModuleChatId: "chat",
      socialModuleThreadId: "thread",
      data: expect.objectContaining({
        description:
          "/ai-chat-business-analyst\n\nWorking on knowledge: Products (Source ID: source) in Products.md.\n\nReview these products",
        metadata: expect.objectContaining({ aiChatDocumentSourceId: "source" }),
      }),
    }),
  );
  await waitFor(() =>
    expect(
      (screen.getByRole("textbox", { name: "Message" }) as HTMLTextAreaElement)
        .value,
    ).toBe(""),
  );
});

it("lists only Sources connected to the current document, including multiple named sections", async () => {
  const change = jest.fn();
  render(
    <Component
      {...({
        data: { id: "subject" },
        project: {
          requesterProfileId: "requester",
          profile: { id: "project" },
          chat: { id: "chat" },
        },
        thread: {
          id: "thread",
          title: "Products.md",
          metadata: {
            aiChatDocument: {
              key: "products",
              profileId: "project",
              sourceIds: ["source", "booking-source"],
            },
          },
        },
        target: "whole",
        onTargetChange: change,
      } as any)}
    />,
  );
  fireEvent.keyDown(screen.getByRole("button", { name: "Working on" }), {
    key: "ArrowDown",
  });
  expect(
    await screen.findByRole("menuitemradio", { name: "Whole document" }),
  ).toBeTruthy();
  expect(screen.getByRole("menuitemradio", { name: "Products" })).toBeTruthy();
  fireEvent.click(screen.getByRole("menuitemradio", { name: "Bookings" }));
  expect(change).toHaveBeenCalledWith("booking-source");
  expect(screen.queryByRole("menuitemradio", { name: "Strategy" })).toBeNull();
});
it("falls back to the whole document when a selected Source is not connected to this Thread", async () => {
  send.mockResolvedValue({ id: "message" });
  render(
    <Component
      {...({
        data: { id: "subject" },
        project: {
          requesterProfileId: "requester",
          profile: { id: "project" },
          chat: { id: "chat" },
        },
        thread: {
          id: "thread",
          title: "Brief.md",
          metadata: {
            aiChatDocument: {
              key: "brief",
              profileId: "project",
              sourceIds: ["source"],
            },
          },
        },
        target: "other-document-source",
        onTargetChange: jest.fn(),
      } as any)}
    />,
  );
  expect(
    screen.getByRole("button", { name: "Working on" }).textContent,
  ).toContain("Whole document");
  fireEvent.change(screen.getByRole("textbox", { name: "Message" }), {
    target: { value: "Review this brief" },
  });
  fireEvent.click(screen.getByRole("button", { name: "Send" }));
  await waitFor(() => expect(send).toHaveBeenCalled());
  expect(send.mock.calls[0][0].data.description).toBe(
    "/ai-chat-account-manager\n\nWorking on the whole document: Brief.md.\n\nReview this brief",
  );
  expect(send.mock.calls[0][0].data.metadata).not.toHaveProperty(
    "aiChatDocumentSourceId",
  );
});
