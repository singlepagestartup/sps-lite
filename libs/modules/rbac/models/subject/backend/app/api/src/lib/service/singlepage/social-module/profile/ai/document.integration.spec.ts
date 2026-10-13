import { randomUUID } from "node:crypto";
import { eq } from "drizzle-orm";
import {
  getDrizzle,
  getPostgresClient,
  resetPostgresClient,
} from "@sps/shared-backend-database-config";
import { Table as Profile } from "@sps/social/models/profile/backend/repository/database";
import { Table as Thread } from "@sps/social/models/thread/backend/repository/database";
import { Table as Message } from "@sps/social/models/message/backend/repository/database";
import { Table as ProfileSources } from "@sps/social/relations/profiles-to-knowledge-module-sources/backend/repository/database";
import { Table as MessageSources } from "@sps/social/relations/messages-to-knowledge-module-sources/backend/repository/database";
import { Table as Source } from "@sps/knowledge/models/source/backend/repository/database";
import { KnowledgeService } from "@sps/knowledge/backend/app/api/src/lib/service";
import { Service } from "./document";

const saveThread = jest.fn();
jest.mock("@sps/social/models/thread/sdk/server", () => ({
  api: { update: (...args: any[]) => saveThread(...args) },
}));
jest.mock("@sps/shared-utils", () => ({
  ...jest.requireActual("@sps/shared-utils"),
  RBAC_SECRET_KEY: "test-secret",
}));

afterAll(async () => {
  await getPostgresClient().end();
  resetPostgresClient();
});
it("persists a confirmed document Source with profile and origin links, indexes it and rejects stale follow-up edits", async () => {
  const db = getDrizzle({
    Profile,
    Thread,
    Message,
    ProfileSources,
    MessageSources,
    Source,
  });
  const suffix = randomUUID();
  const [profile] = await db
    .insert(Profile)
    .values({
      slug: `document-test-${suffix}`,
      variant: "artificial-intelligence",
    })
    .returning();
  const [thread] = await db
    .insert(Thread)
    .values({
      slug: `document-test-${suffix}`,
      title: "Brief.md",
      metadata: {
        keep: true,
        aiChatDocument: { key: "brief", profileId: profile.id, sourceIds: [] },
      },
    })
    .returning();
  const [message] = await db
    .insert(Message)
    .values({
      title: `document-test-${suffix}`,
      description: "Propose a Brief",
    })
    .returning();
  const [shown] = await db
    .insert(Message)
    .values({
      title: `document-shown-${suffix}`,
      description: "Shown proposal",
    })
    .returning();
  let sourceId: string | undefined;
  const vector = Array.from({ length: 768 }, (_, index) =>
    index === 0 ? 1 : 0,
  );
  const knowledge = new KnowledgeService({
    embeddingClient: {
      embed: async () => vector,
      embedMany: async (texts) => texts.map(() => vector),
      validateEmbedding: () => {},
    },
    modelClient: {
      get: async () => ({
        capabilities: ["embedding"],
        details: { embedding_length: 768 },
      }),
    } as any,
  });
  const findThread = async () =>
    (await db.select().from(Thread).where(eq(Thread.id, thread.id)))[0];
  saveThread.mockImplementation(
    async ({ id, data }) =>
      (
        await db.update(Thread).set(data).where(eq(Thread.id, id)).returning()
      )[0],
  );
  const social: any = {
    thread: { findById: findThread },
    profilesToKnowledgeModuleSources: {
      find: async () =>
        db
          .select()
          .from(ProfileSources)
          .where(eq(ProfileSources.profileId, profile.id)),
      findOrCreate: async ({ data }) =>
        (await db.insert(ProfileSources).values(data).returning())[0],
    },
    messagesToKnowledgeModuleSources: {
      findOrCreate: async ({ data }) =>
        (await db.insert(MessageSources).values(data).returning())[0],
    },
    messagesToFileStorageModuleFiles: { find: async () => [] },
    profilesToMessages: {
      find: async () => [{ profileId: profile.id, messageId: shown.id }],
    },
  };
  const service = new Service(social, knowledge);
  const load = () =>
    service.load({ profileId: profile.id, threadId: thread.id, message });
  try {
    const context = (await load())!;
    await service.tool(context, message).execute({
      title: "Brief",
      userContext: "Code Framework is distributed free under MIT.",
    });
    expect(
      await db
        .select()
        .from(ProfileSources)
        .where(eq(ProfileSources.profileId, profile.id)),
    ).toHaveLength(0);
    await service.markShown(context, message.id, shown.id);
    const result = await service.resolve(
      (await load())!,
      "confirm",
      message.id,
    );
    sourceId = result?.sourceId as string;
    expect(sourceId).toBeTruthy();
    const [source] = await knowledge.listSources({ sourceIds: [sourceId!] });
    expect(source.content).toBe(
      "Code Framework is distributed free under MIT.",
    );
    expect(source.indexedContentHash).toBe(source.contentHash);
    expect((await findThread()).metadata).toMatchObject({
      keep: true,
      aiChatDocument: { sourceIds: [sourceId] },
    });
    expect(
      await db
        .select()
        .from(MessageSources)
        .where(eq(MessageSources.messageId, message.id)),
    ).toHaveLength(1);
    const updateContext = (await load())!;
    await service.tool(updateContext, message).execute({
      title: "Brief",
      userContext: "Proposed changed notes",
      expectedContentHash: source.contentHash,
    });
    await service.markShown(updateContext, message.id, shown.id);
    await knowledge.updateSource({
      sourceId: sourceId!,
      content: "A concurrent confirmed change",
      expectedContentHash: source.contentHash,
    });
    expect(
      await service.resolve((await load())!, "confirm", message.id),
    ).toMatchObject({ status: "conflict" });
    expect(
      (await knowledge.listSources({ sourceIds: [sourceId!] }))[0].content,
    ).toBe("A concurrent confirmed change");
  } finally {
    if (sourceId) await knowledge.deleteSource(sourceId);
    await db.delete(Thread).where(eq(Thread.id, thread.id));
    await db.delete(Message).where(eq(Message.id, message.id));
    await db.delete(Message).where(eq(Message.id, shown.id));
    await db.delete(Profile).where(eq(Profile.id, profile.id));
  }
}, 30000);
