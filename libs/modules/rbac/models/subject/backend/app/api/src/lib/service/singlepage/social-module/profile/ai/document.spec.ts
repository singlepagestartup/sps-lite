const updateThread = jest.fn();
const attachProposalFile = jest.fn(async ({ data }: any) => data);
jest.mock(
  "@sps/social/relations/messages-to-file-storage-module-files/sdk/server",
  () => ({
    api: { findOrCreate: (...args: any[]) => attachProposalFile(...args) },
  }),
);
jest.mock("@sps/social/models/thread/sdk/server", () => ({
  api: { update: (...args: any[]) => updateThread(...args) },
}));
jest.mock("@sps/shared-utils", () => ({
  ...jest.requireActual("@sps/shared-utils"),
  RBAC_SECRET_KEY: "test-secret",
}));
import { Service } from "./document";
import { getAIChatDocumentProposal } from "@sps/rbac/models/subject/sdk/model";
import {
  assembleKnowledgeContent,
  readKnowledgeMaterials,
  readKnowledgeUserContext,
} from "@sps/shared-utils";

function fixture(empty = false) {
  let thread: any = {
    id: "thread",
    title: "Brief.md",
    metadata: {
      other: "keep",
      aiChatDocument: {
        key: "brief",
        profileId: "assistant",
        sourceIds: empty ? [] : ["source"],
      },
    },
  };
  const source = {
    id: "source",
    title: "Brief",
    content: "Original notes",
    contentHash: "old-hash",
  };
  const links: any[] = empty
    ? []
    : [{ profileId: "assistant", knowledgeModuleSourceId: "source" }];
  updateThread.mockImplementation(async ({ data }) => {
    thread = { ...thread, ...data };
    return structuredClone(thread);
  });
  const social: any = {
    thread: { findById: jest.fn(async () => structuredClone(thread)) },
    profilesToKnowledgeModuleSources: {
      find: jest.fn(async () => links),
      findOrCreate: jest.fn(async ({ data }) => {
        links.push(data);
        return data;
      }),
    },
    messagesToKnowledgeModuleSources: {
      findOrCreate: jest.fn(async ({ data }) => data),
    },
    messagesToFileStorageModuleFiles: {
      find: jest.fn(async () => []),
    },
    profilesToMessages: {
      find: jest.fn(async () => [
        { profileId: "assistant", messageId: "shown" },
      ]),
    },
  };
  const knowledge: any = {
    listSources: jest.fn(async () => [source]),
    updateSource: jest.fn(async ({ content, title }) => {
      Object.assign(source, { content, title, contentHash: "new-hash" });
      return { source };
    }),
    learnContent: jest.fn(async ({ content, title, onSourceSaved }) => {
      Object.assign(source, { content, title });
      await onSourceSaved(source.id);
      return { source };
    }),
  };
  const service = new Service(social, knowledge);
  const load = () =>
    service.load({
      profileId: "assistant",
      threadId: "thread",
      message: { id: "request", metadata: {} } as any,
    });
  return {
    service,
    load,
    source,
    social,
    knowledge,
    links,
    thread: () => thread,
  };
}

beforeEach(() => jest.clearAllMocks());
it("preserves proposed attachments through a text revision and adds newly supplied files", async () => {
  const f = fixture();
  f.social.messagesToFileStorageModuleFiles.find.mockResolvedValue([
    { fileStorageModuleFileId: "original-file" },
  ]);
  let context = (await f.load())!;
  await f.service.tool(context, { id: "request" } as any).execute({
    title: "Brief",
    userContext: "First draft",
    expectedContentHash: "old-hash",
  });
  await f.service.markShown(context, "request", "shown");
  context = (await f.load())!;
  await f.service.resolve(context, "revise", "revision");
  expect(
    await f.service.resolve((await f.load())!, "confirm", "premature"),
  ).toMatchObject({ status: "not_confirmable" });
  // A later request still carries the original files after a failed revision.
  context = (await f.load())!;
  f.social.messagesToFileStorageModuleFiles.find.mockResolvedValue([
    { fileStorageModuleFileId: "added-file" },
  ]);
  await f.service.tool(context, { id: "revision" } as any).execute({
    title: "Brief",
    userContext: "Revised draft",
    expectedContentHash: "old-hash",
  });
  expect(context.proposal?.fileIds).toEqual(["original-file", "added-file"]);
  await f.service.markShown(context, "revision", "shown");
  expect(attachProposalFile).toHaveBeenCalledWith(
    expect.objectContaining({
      data: {
        messageId: "shown",
        fileStorageModuleFileId: "original-file",
        orderIndex: 0,
      },
    }),
  );
  expect(attachProposalFile).toHaveBeenCalledWith(
    expect.objectContaining({
      data: {
        messageId: "shown",
        fileStorageModuleFileId: "added-file",
        orderIndex: 1,
      },
    }),
  );
  await f.service.resolve((await f.load())!, "confirm", "confirmation");
  expect(f.knowledge.updateSource).toHaveBeenCalledWith(
    expect.objectContaining({ fileIds: ["original-file", "added-file"] }),
  );
});
it("proposes without saving, then applies exactly the shown text and makes repeated confirmation harmless", async () => {
  const f = fixture();
  const context = (await f.load())!;
  await f.service.tool(context, { id: "request" } as any).execute({
    title: "Brief",
    userContext: "Original notes\nConfirmed fact",
    expectedContentHash: "old-hash",
  });
  expect(f.knowledge.updateSource).not.toHaveBeenCalled();
  expect(f.service.preview(context, "request", "ru")).toContain(
    "Original notes\nConfirmed fact",
  );
  await f.service.markShown(context, "request", "shown");
  await f.service.resolve((await f.load())!, "confirm", "confirmation");
  expect(f.source.content).toBe("Original notes\nConfirmed fact");
  expect(f.thread().metadata.other).toBe("keep");
  expect(getAIChatDocumentProposal(f.thread().metadata)?.status).toBe(
    "applied",
  );
  expect(
    await f.service.resolve((await f.load())!, "confirm", "repeat"),
  ).toMatchObject({ status: "already_applied" });
  expect(f.knowledge.updateSource).toHaveBeenCalledTimes(1);
});

it("requires a shown proposal, cancels revisions and detects changes since the proposal", async () => {
  const f = fixture();
  let context = (await f.load())!;
  await f.service.tool(context, { id: "request" } as any).execute({
    title: "Brief",
    userContext: "Draft",
    expectedContentHash: "old-hash",
  });
  expect(
    await f.service.resolve((await f.load())!, "confirm", "early"),
  ).toMatchObject({ status: "not_confirmable" });
  await f.service.markShown(context, "request", "shown");
  f.source.contentHash = "someone-else-edited";
  expect(
    await f.service.resolve((await f.load())!, "confirm", "confirmation"),
  ).toMatchObject({ status: "conflict" });
  expect(f.knowledge.updateSource).not.toHaveBeenCalled();
  context = (await f.load())!;
  await f.service.tool(context, { id: "request" } as any).execute({
    title: "Brief",
    userContext: "Revised",
    expectedContentHash: f.source.contentHash,
  });
  await f.service.markShown(context, "request", "shown");
  await f.service.resolve((await f.load())!, "revise", "revise");
  expect(getAIChatDocumentProposal(f.thread().metadata)?.status).toBe(
    "needs_revision",
  );
  expect(f.knowledge.updateSource).not.toHaveBeenCalled();
});

it("creates one first Source and binds it to the profile, origin message and document only after confirmation", async () => {
  const f = fixture(true);
  const context = (await f.load())!;
  await f.service
    .tool(context, { id: "request" } as any)
    .execute({ title: "Brief", userContext: "Initial facts" });
  expect(f.knowledge.learnContent).not.toHaveBeenCalled();
  await f.service.markShown(context, "request", "shown");
  await f.service.resolve((await f.load())!, "confirm", "confirmation");
  expect(f.links).toEqual([
    { profileId: "assistant", knowledgeModuleSourceId: "source" },
  ]);
  expect(f.thread().metadata.aiChatDocument.sourceIds).toEqual(["source"]);
  expect(
    f.social.messagesToKnowledgeModuleSources.findOrCreate,
  ).toHaveBeenCalledWith({
    data: expect.objectContaining({ messageId: "request", kind: "origin" }),
  });
  await f.service.resolve((await f.load())!, "confirm", "repeat");
  expect(f.knowledge.learnContent).toHaveBeenCalledTimes(1);
});

it("updates human notes while preserving the existing attachment material and using the read hash", async () => {
  const f = fixture();
  f.source.content = assembleKnowledgeContent(
    "Original notes",
    "Extracted PDF facts",
    "Material overview",
  );
  const originalMaterials = readKnowledgeMaterials(f.source.content);
  const context = (await f.load())!;
  await f.service.tool(context, { id: "request" } as any).execute({
    title: "Brief",
    userContext: "Confirmed human notes",
    expectedContentHash: "old-hash",
  });
  await f.service.markShown(context, "request", "shown");
  await f.service.resolve((await f.load())!, "confirm", "confirmation");
  expect(readKnowledgeUserContext(f.source.content)).toBe(
    "Confirmed human notes",
  );
  expect(readKnowledgeMaterials(f.source.content)).toBe(originalMaterials);
  expect(f.knowledge.updateSource).toHaveBeenCalledWith(
    expect.objectContaining({
      sourceId: "source",
      expectedContentHash: "old-hash",
    }),
  );
});

it("rejects a foreign Source selection and never saves on rejection or ordinary discussion", async () => {
  const f = fixture();
  await expect(
    f.service.load({
      profileId: "assistant",
      threadId: "thread",
      message: {
        id: "request",
        metadata: { aiChatDocumentSourceId: "foreign" },
      } as any,
    }),
  ).rejects.toThrow("does not belong");
  const context = (await f.load())!;
  await f.service.tool(context, { id: "request" } as any).execute({
    title: "Brief",
    userContext: "Draft",
    expectedContentHash: "old-hash",
  });
  await f.service.markShown(context, "request", "shown");
  await f.service.resolve((await f.load())!, "none", "discussion");
  await f.service.resolve((await f.load())!, "reject", "rejection");
  expect(f.knowledge.updateSource).not.toHaveBeenCalled();
});
