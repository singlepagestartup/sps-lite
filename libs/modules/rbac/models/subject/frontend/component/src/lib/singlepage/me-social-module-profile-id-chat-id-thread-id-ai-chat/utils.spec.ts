const relationsFind = jest.fn();
const membershipsFind = jest.fn();
const chatFind = jest.fn();
const profileFind = jest.fn();
const threadFind = jest.fn();
jest.mock(
  "@sps/rbac/relations/subjects-to-social-module-profiles/sdk/server",
  () => ({ api: { find: (props: any) => relationsFind(props) } }),
);
jest.mock("@sps/social/relations/profiles-to-chats/sdk/server", () => ({
  api: { find: (props: any) => membershipsFind(props) },
}));
jest.mock("@sps/rbac/models/subject/sdk/server", () => ({
  api: {
    socialModuleProfileFindByIdChatFind: (props: any) => chatFind(props),
    socialModuleProfileFindByIdChatFindByIdProfileFind: (props: any) =>
      profileFind(props),
    socialModuleChatFindByIdThreadFind: (props: any) => threadFind(props),
  },
}));
jest.mock("@sps/shared-frontend-client-utils", () => ({
  saturateHeaders: () => ({ "client-only": "header" }),
}));
import { findProjects } from "./utils";
describe("AI Chat project membership reader", () => {
  beforeEach(() => {
    [relationsFind, membershipsFind, chatFind, profileFind, threadFind].forEach(
      (mock) => mock.mockReset(),
    );
    relationsFind.mockResolvedValue([{ socialModuleProfileId: "own-profile" }]);
    membershipsFind.mockResolvedValue([
      { profileId: "own-profile", chatId: "own-chat" },
    ]);
    chatFind.mockResolvedValue([{ id: "other-chat" }, { id: "own-chat" }]);
    profileFind.mockResolvedValue([
      { id: "connected-ai-profile" },
      { id: "other-ai-profile" },
    ]);
    threadFind.mockResolvedValue([
      { id: "fallback", variant: "default" },
      {
        id: "document",
        metadata: {
          aiChatDocument: {
            key: "products",
            profileId: "connected-ai-profile",
            sourceIds: [],
          },
        },
      },
    ]);
  });
  it("opens Brief first even when Products and ordinary default Threads were returned earlier", async () => {
    threadFind.mockResolvedValue([
      { id: "ordinary", variant: "default" },
      {
        id: "products",
        metadata: {
          aiChatDocument: {
            key: "products",
            profileId: "connected-ai-profile",
            sourceIds: [],
          },
        },
      },
      {
        id: "brief",
        metadata: {
          aiChatDocument: {
            key: "brief",
            profileId: "connected-ai-profile",
            sourceIds: [],
          },
        },
      },
    ]);
    const projects = await findProjects({
      subjectId: "subject",
      profiles: [{ id: "connected-ai-profile" } as any],
    });
    expect(projects[0].thread.id).toBe("brief");
  });
  it("keeps ownership filtering and document-thread selection on server reads", async () => {
    const options = {
      headers: { Authorization: "Bearer current-subject-token" },
      cache: "no-store" as const,
    };
    const result = await findProjects({
      subjectId: "subject",
      profiles: [{ id: "connected-ai-profile" } as any],
      host: "http://internal-api",
      options,
    });
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual(
      expect.objectContaining({
        requesterProfileId: "own-profile",
        profile: expect.objectContaining({ id: "connected-ai-profile" }),
        chat: expect.objectContaining({ id: "own-chat" }),
        thread: expect.objectContaining({ id: "document" }),
      }),
    );
    for (const reader of [
      relationsFind,
      membershipsFind,
      chatFind,
      profileFind,
      threadFind,
    ])
      expect(reader).toHaveBeenCalledWith(
        expect.objectContaining({ host: "http://internal-api", options }),
      );
    expect(profileFind).toHaveBeenCalledTimes(1);
    expect(profileFind).toHaveBeenCalledWith(
      expect.objectContaining({ socialModuleChatId: "own-chat" }),
    );
  });
  it("returns no project when the subject has no linked requester profile", async () => {
    relationsFind.mockResolvedValue([]);
    expect(
      await findProjects({
        subjectId: "subject",
        profiles: [{ id: "connected-ai-profile" } as any],
      }),
    ).toEqual([]);
    expect(chatFind).not.toHaveBeenCalled();
  });
  it("does not expose a profile outside the subject collection", async () => {
    profileFind.mockResolvedValue([{ id: "other-ai-profile" }]);
    expect(
      await findProjects({
        subjectId: "subject",
        profiles: [{ id: "connected-ai-profile" } as any],
      }),
    ).toEqual([]);
    expect(threadFind).not.toHaveBeenCalled();
  });
});
