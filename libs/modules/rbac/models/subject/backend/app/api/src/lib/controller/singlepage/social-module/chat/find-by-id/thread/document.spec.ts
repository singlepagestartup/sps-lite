/** BDD: Thread documents persist only Source IDs owned by the AI Profile in this Chat. */
jest.mock("@sps/shared-utils", () => ({
  ...jest.requireActual("@sps/shared-utils"),
  RBAC_SECRET_KEY: "test-secret",
  RBAC_JWT_SECRET: "test-jwt",
}));
jest.mock("@sps/social/models/thread/sdk/server", () => ({
  api: { update: jest.fn() },
}));
import { Handler } from "./update";
import { ChatLifecycleService } from "../../../../../../service/singlepage/social-module/chat/lifecycle";
import { api } from "@sps/social/models/thread/sdk/server";

function context(document: unknown) {
  return {
    req: {
      param: (key: string) =>
        ({
          id: "owner",
          socialModuleChatId: "chat",
          socialModuleThreadId: "thread",
        })[key],
      parseBody: async () => ({ data: JSON.stringify({ document }) }),
    },
    json: (body: unknown) => body,
  } as any;
}
function service({ foreignProfile = false, allowed = ["source"] } = {}) {
  const svc: any = {
    socialModuleChatLifecycleAssertSubjectOwnsChat: jest.fn(),
    socialModuleChatLifecycleAssertThreadBelongsToChat: jest.fn(),
    socialModule: {
      chat: {
        findById: jest
          .fn()
          .mockResolvedValue({ id: "chat", variant: "ai-chat" }),
      },
      thread: {
        findById: jest.fn().mockResolvedValue({
          id: "thread",
          metadata: { openRouterModelId: "chosen", unrelated: true },
        }),
      },
      profile: {
        findById: jest.fn().mockResolvedValue({
          id: "profile",
          variant: "artificial-intelligence",
        }),
      },
      profilesToChats: {
        find: jest
          .fn()
          .mockResolvedValue(
            foreignProfile ? [] : [{ profileId: "profile", chatId: "chat" }],
          ),
      },
      profilesToKnowledgeModuleSources: {
        find: jest
          .fn()
          .mockResolvedValue(
            allowed.map((id) => ({ knowledgeModuleSourceId: id })),
          ),
      },
    },
  };
  svc.socialModuleChatLifecycleValidateDocument = (props: any) =>
    new ChatLifecycleService(svc).validateDocument(props);
  return svc;
}
describe("Given an owned Chat and Thread", () => {
  beforeEach(() => jest.clearAllMocks());
  it("rejects arbitrary document kinds before attaching Knowledge", async () => {
    await expect(
      new Handler(service()).execute(
        context({ key: "topic", profileId: "profile", sourceIds: [] }),
        null,
      ),
    ).rejects.toThrow("Invalid Thread document");
    expect(api.update).not.toHaveBeenCalled();
  });
  it("When a Source from another Profile is attached Then no update is written", async () => {
    await expect(
      new Handler(service()).execute(
        context({
          key: "products",
          profileId: "profile",
          sourceIds: ["foreign-source"],
        }),
        null,
      ),
    ).rejects.toThrow("Document Source does not belong");
    expect(api.update).not.toHaveBeenCalled();
  });
  it("When another Chat's AI Profile is used Then no update is written", async () => {
    await expect(
      new Handler(service({ foreignProfile: true })).execute(
        context({ key: "products", profileId: "profile", sourceIds: [] }),
        null,
      ),
    ).rejects.toThrow("Document profile does not belong");
    expect(api.update).not.toHaveBeenCalled();
  });
  it("When the same owned Source is submitted twice Then it is stored once and other metadata survives", async () => {
    (api.update as jest.Mock).mockResolvedValue({ id: "thread" });
    const owned = service();
    await new Handler(owned).execute(
      context({
        key: "products",
        profileId: "profile",
        sourceIds: ["source", "source"],
      }),
      null,
    );
    expect(
      owned.socialModuleChatLifecycleAssertSubjectOwnsChat,
    ).toHaveBeenCalledWith({ subjectId: "owner", socialModuleChatId: "chat" });
    expect(
      owned.socialModuleChatLifecycleAssertThreadBelongsToChat,
    ).toHaveBeenCalledWith({
      socialModuleChatId: "chat",
      socialModuleThreadId: "thread",
    });
    expect(api.update).toHaveBeenCalledWith(
      expect.objectContaining({
        data: {
          metadata: {
            openRouterModelId: "chosen",
            unrelated: true,
            aiChatDocument: {
              key: "products",
              profileId: "profile",
              sourceIds: ["source"],
            },
          },
        },
      }),
    );
  });
});
