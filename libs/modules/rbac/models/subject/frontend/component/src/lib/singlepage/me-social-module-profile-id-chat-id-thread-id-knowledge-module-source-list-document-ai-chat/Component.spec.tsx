/** @jest-environment jsdom */
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useState } from "react";
const create = jest.fn();
const updateSource = jest.fn();
const updateThread = jest.fn();
const uploadFiles = jest.fn();
jest.mock("@sps/rbac/models/subject/sdk/client", () => ({
  api: {
    socialModuleProfileFindByIdChatFindByIdProfileFindByIdKnowledgeSourceFind:
      () => ({ data: [] }),
    socialModuleProfileFindByIdChatFindByIdProfileFindByIdKnowledgeSourceCreate:
      () => ({ mutateAsync: create }),
    socialModuleProfileFindByIdChatFindByIdProfileFindByIdKnowledgeSourceFindByIdUpdate:
      () => ({ mutateAsync: updateSource }),
    socialModuleProfileFindByIdChatFindByIdProfileFindByIdKnowledgeSourceFindByIdFilesUpdate:
      () => ({ mutateAsync: uploadFiles }),
    socialModuleChatFindByIdThreadUpdate: () => ({ mutateAsync: updateThread }),
  },
}));
jest.mock("@sps/rbac/models/subject/frontend/component", () => ({
  Component: () => null,
}));
jest.mock("@sps/knowledge/models/source/frontend/component", () => ({
  Component: (props: any) => {
    const [error, setError] = useState("");
    return (
      <>
        <button
          onClick={async () => {
            try {
              await props.onSave({
                title: "Products",
                content: "Test document",
              });
            } catch (error: any) {
              setError(error.message);
            }
          }}
        >
          Save draft
        </button>
        <input
          aria-label="Draft files"
          type="file"
          multiple
          onChange={(event) => props.onAttach(event.target.files)}
        />
        {props.attachments}
        <span>{error}</span>
      </>
    );
  },
}));
import { Component } from "./Component";
beforeEach(() => {
  create.mockReset();
  updateSource.mockReset();
  updateThread.mockReset();
  uploadFiles.mockReset();
});
it("retries attachment without duplicating the already saved Knowledge source", async () => {
  create.mockResolvedValue({
    id: "saved-source",
    title: "Products",
    content: "Test document",
  });
  updateThread
    .mockRejectedValueOnce(new Error("Temporary attachment failure"))
    .mockResolvedValue({
      metadata: {
        aiChatDocument: {
          key: "products",
          profileId: "connected-profile",
          sourceIds: ["saved-source"],
        },
      },
    });
  const props: any = {
    isServer: false,
    variant:
      "me-social-module-profile-id-chat-id-thread-id-knowledge-module-source-list-document-ai-chat",
    data: { id: "subject" },
    project: {
      requesterProfileId: "requester-profile",
      profile: { id: "connected-profile" },
      chat: { id: "chat" },
    },
    thread: {
      id: "thread",
      title: "Products.md",
      metadata: {
        aiChatDocument: {
          key: "products",
          profileId: "connected-profile",
          sourceIds: [],
        },
      },
    },
    onDiscuss: jest.fn(),
  };
  render(<Component {...props} />);
  fireEvent.click(screen.getByRole("button", { name: "Save draft" }));
  await screen.findByText(/Knowledge was saved, but could not be attached/);
  fireEvent.click(screen.getByRole("button", { name: "Save draft" }));
  await waitFor(() => expect(updateThread).toHaveBeenCalledTimes(2));
  expect(create).toHaveBeenCalledTimes(1);
  expect(create).toHaveBeenCalledWith(
    expect.objectContaining({
      id: "subject",
      socialModuleProfileId: "requester-profile",
      targetSocialModuleProfileId: "connected-profile",
    }),
  );
  expect(updateSource).not.toHaveBeenCalled();
  expect(updateThread.mock.calls[1][0]).toEqual(
    expect.objectContaining({
      id: "subject",
      socialModuleChatId: "chat",
      socialModuleThreadId: "thread",
      data: {
        document: {
          key: "products",
          profileId: "connected-profile",
          sourceIds: ["saved-source"],
        },
      },
    }),
  );
});

it("uploads selected files to the saved Source before attaching it and never duplicates uploads on a link retry", async () => {
  create.mockResolvedValue({
    id: "saved-source",
    title: "Products",
    content: "Test document",
  });
  uploadFiles.mockResolvedValue({});
  updateThread
    .mockRejectedValueOnce(new Error("Temporary attachment failure"))
    .mockResolvedValue({
      metadata: {
        aiChatDocument: {
          key: "products",
          profileId: "connected-profile",
          sourceIds: ["saved-source"],
        },
      },
    });
  render(
    <Component
      {...({
        isServer: false,
        data: { id: "subject" },
        project: {
          requesterProfileId: "requester-profile",
          profile: { id: "connected-profile" },
          chat: { id: "chat" },
        },
        thread: {
          id: "thread",
          title: "Products.md",
          metadata: {
            aiChatDocument: {
              key: "products",
              profileId: "connected-profile",
              sourceIds: [],
            },
          },
        },
        onDiscuss: jest.fn(),
      } as any)}
    />,
  );
  const file = new File(["Workshop facts"], "workshop.txt", {
    type: "text/plain",
  });
  fireEvent.change(screen.getByLabelText("Draft files"), {
    target: { files: [file] },
  });
  await screen.findByText("workshop.txt");
  fireEvent.click(screen.getByRole("button", { name: "Save draft" }));
  await screen.findByText(/Knowledge was saved, but could not be attached/);
  expect(uploadFiles).toHaveBeenCalledWith(
    expect.objectContaining({
      id: "subject",
      socialModuleProfileId: "requester-profile",
      targetSocialModuleProfileId: "connected-profile",
      socialModuleChatId: "chat",
      knowledgeModuleSourceId: "saved-source",
      data: { files: [file] },
    }),
  );
  expect(create.mock.invocationCallOrder[0]).toBeLessThan(
    uploadFiles.mock.invocationCallOrder[0],
  );
  expect(uploadFiles.mock.invocationCallOrder[0]).toBeLessThan(
    updateThread.mock.invocationCallOrder[0],
  );
  fireEvent.click(screen.getByRole("button", { name: "Save draft" }));
  await waitFor(() => expect(updateThread).toHaveBeenCalledTimes(2));
  expect(create).toHaveBeenCalledTimes(1);
  expect(uploadFiles).toHaveBeenCalledTimes(1);
});
