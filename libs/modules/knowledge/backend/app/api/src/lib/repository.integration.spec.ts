/**
 * BDD Suite: Knowledge Source transaction consistency.
 * Given: saved Sources, attachment links and indexed chunks in PostgreSQL.
 * When: content, attachments or derived records change.
 * Then: concurrent validation and partial failures preserve a consistent Source.
 */
import { KnowledgeRepository } from "./repository";
import {
  getDrizzle,
  getPostgresClient,
} from "@sps/shared-backend-database-config";
import { Table as SourceTable } from "@sps/knowledge/models/source/backend/repository/database";
import { Table as ChunkTable } from "@sps/knowledge/models/chunk/backend/repository/database";
import { Table as FileTable } from "@sps/file-storage/models/file/backend/repository/database";
import { Table as SourceFileTable } from "@sps/knowledge/relations/sources-to-file-storage-module-files/backend/repository/database";
import { eq, sql } from "drizzle-orm";
import { assembleContent, hashContent } from "./service/utils";
import { randomUUID } from "node:crypto";
import { Provider } from "@sps/providers-file-storage";

const repository = new KnowledgeRepository();
const db = getDrizzle({ SourceTable, ChunkTable, FileTable, SourceFileTable });
const sourceIds: string[] = [];
const fileIds: string[] = [];
const vector = Array(768).fill(0);
vector[0] = 1;
async function source(content: string) {
  const item = await repository.upsertSourceBySlug({
    slug: `knowledge-test-${randomUUID()}`,
    title: "Test Source",
    content,
  });
  sourceIds.push(item!.id);
  return item!;
}
function chunk(text: string) {
  return {
    text,
    embedding: vector,
    chunkIndex: 0,
    tokenEstimate: 5,
    contentHash: hashContent(text),
    metadata: {},
  };
}

afterAll(async () => {
  for (const id of sourceIds) await repository.deleteSourceWithDerivedData(id);
  for (const id of fileIds)
    await db.delete(FileTable).where(eq(FileTable.id, id));
  await getPostgresClient().end();
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Knowledge Source transactions", () => {
  it("reuses one Source across concurrent preserved upserts of the same document slug", async () => {
    const slug = `knowledge-concurrent-document-${randomUUID()}`;
    const saved = await Promise.all(
      Array.from({ length: 6 }, async (_, index) => {
        const item = await repository.upsertSourceBySlug(
          {
            slug,
            title: "Concurrent document",
            content: `Confirmed draft ${index}`,
          },
          true,
        );
        if (item && !sourceIds.includes(item.id)) sourceIds.push(item.id);
        return item;
      }),
    );
    expect(new Set(saved.map((item) => item!.id)).size).toBe(1);
    expect(new Set(saved.map((item) => item!.content)).size).toBe(1);
    const rows = await db
      .select()
      .from(SourceTable)
      .where(eq(SourceTable.slug, slug));
    expect(rows).toHaveLength(1);
    expect(rows[0].id).toBe(saved[0]!.id);
  });

  it("preserves confirmed content and index when a staged attachment was deleted", async () => {
    const current = await source("Original confirmed notes");
    await repository.publishChunks(current.id, current.contentHash, [
      chunk(current.content),
    ]);
    const before = await repository.findSourceById(current.id);
    const files = await db
      .insert(FileTable)
      .values(
        [0, 1].map((index) => ({
          file: `/staged-${index}.txt`,
          adminTitle: "Staged",
          alt: "Staged",
          slug: `knowledge-staged-${randomUUID()}`,
          extension: "txt",
          mimeType: "text/plain",
          size: 3,
          width: 0,
          height: 0,
        })),
      )
      .returning();
    fileIds.push(...files.map((file) => file.id));
    await db.delete(FileTable).where(eq(FileTable.id, files[1].id));
    await expect(
      repository.updateSource({
        sourceId: current.id,
        title: "Changed title",
        content: "Changed notes",
        expectedContentHash: before!.contentHash,
        fileIds: files.map((file) => file.id),
      }),
    ).rejects.toMatchObject({
      message: "Stored file was not found.",
      code: "KNOWLEDGE_FILES_NOT_FOUND",
      fileIds: [files[1].id],
    });
    const after = await repository.findSourceById(current.id);
    expect(after).toEqual(before);
    expect(await repository.sourceFiles(current.id)).toEqual([]);
    expect(
      (
        await repository.searchChunks({
          embedding: vector,
          topK: 5,
          sourceIds: [current.id],
        })
      ).map((item) => item.text),
    ).toEqual([current.content]);
  });

  it("commits notes and appended attachments together and preserves notes through invalidation", async () => {
    const current = await source("Old notes");
    const [file] = await db
      .insert(FileTable)
      .values({
        file: "/atomic.txt",
        adminTitle: "Atomic",
        alt: "Atomic",
        slug: `knowledge-atomic-${randomUUID()}`,
        extension: "txt",
        mimeType: "text/plain",
        size: 3,
        width: 0,
        height: 0,
      })
      .returning();
    fileIds.push(file.id);
    const updated = await repository.updateSourceWithAttachments({
      sourceId: current.id,
      content: "New confirmed notes",
      expectedContentHash: current.contentHash,
      fileIds: [file.id, file.id],
    });
    expect(updated?.attachmentsChanged).toBe(true);
    expect(updated?.source.content).toBe("New confirmed notes");
    expect(updated?.source.contentHash).toBe(
      hashContent("New confirmed notes"),
    );
    expect(updated?.source.indexedContentHash).toBeNull();
    expect(
      (await repository.sourceFiles(current.id)).map((item) => item.file.id),
    ).toEqual([file.id]);
    expect(
      (
        await repository.updateSourceWithAttachments({
          sourceId: current.id,
          content: "New confirmed notes",
          fileIds: [file.id],
        })
      )?.attachmentsChanged,
    ).toBe(false);
  });
  it("isolates profile scopes and excludes the old index immediately after a content edit", async () => {
    const first = await source("Первый текст"),
      second = await source("Второй текст");
    await repository.publishChunks(first.id, first.contentHash, [
      chunk("Первый текст"),
    ]);
    await repository.publishChunks(second.id, second.contentHash, [
      chunk("Второй текст"),
    ]);
    const globalResult = await repository.searchChunks({
      embedding: vector,
      topK: 100,
    });
    expect(globalResult.map((item) => item.sourceId)).toEqual(
      expect.arrayContaining([first.id, second.id]),
    );
    const result = await repository.searchChunks({
      embedding: vector,
      topK: 10,
      sourceIds: [first.id],
    });
    expect(result.map((item) => item.sourceId)).toEqual([first.id]);
    await repository.updateSource({
      sourceId: first.id,
      content: "Новая редакция",
    });
    expect(
      await repository.searchChunks({
        embedding: vector,
        topK: 10,
        sourceIds: [first.id],
      }),
    ).toEqual([]);
    expect(
      (await repository.searchChunks({ embedding: vector, topK: 100 })).map(
        (item) => item.sourceId,
      ),
    ).not.toContain(first.id);
    expect(
      await repository.publishChunks(first.id, first.contentHash, [
        chunk("Устаревшая редакция"),
      ]),
    ).toBe(false);
    const current = await repository.findSourceById(first.id);
    await repository.publishChunks(first.id, current!.contentHash, [
      chunk("Новая редакция"),
    ]);
    expect(
      (
        await repository.searchChunks({
          embedding: vector,
          topK: 10,
          sourceIds: [first.id],
        })
      )[0].text,
    ).toBe("Новая редакция");
  });

  it("rolls back chunk replacement when an insert fails", async () => {
    const current = await source("Атомарный индекс");
    await repository.publishChunks(current.id, current.contentHash, [
      chunk("Сохранённый индекс"),
    ]);
    const invalid = { ...chunk("Неполный индекс"), id: randomUUID() };
    await expect(
      repository.publishChunks(current.id, current.contentHash, [
        invalid,
        invalid,
      ]),
    ).rejects.toThrow();
    expect(
      (
        await repository.searchChunks({
          embedding: vector,
          topK: 5,
          sourceIds: [current.id],
        })
      ).map((item) => item.text),
    ).toEqual(["Сохранённый индекс"]);
  });

  it("invalidates file content atomically, rejects a former file snapshot, and preserves stored files on Source deletion", async () => {
    const current = await source(
      assembleContent("Мой контекст", "Описание прежнего файла"),
    );
    const [file] = await db
      .insert(FileTable)
      .values({
        file: "/test.txt",
        adminTitle: "Test",
        alt: "Test",
        slug: `knowledge-file-${randomUUID()}`,
        extension: "txt",
        mimeType: "text/plain",
        size: 3,
        width: 0,
        height: 0,
      })
      .returning();
    fileIds.push(file.id);
    await repository.attachFiles(current.id, [file.id]);
    const reset = await repository.findSourceById(current.id);
    const snapshot = JSON.stringify(
      (await repository.sourceFiles(current.id)).map(({ relation, file }) => [
        relation.id,
        relation.fileStorageModuleFileId,
        relation.orderIndex,
        file.updatedAt,
      ]),
    );
    await repository.setFiles(current.id, []);
    expect(
      await repository.saveAnalyzedContent({
        sourceId: current.id,
        expectedContentHash: reset!.contentHash,
        fileSnapshot: snapshot,
        content: "Устаревший анализ",
      }),
    ).toBeNull();
    expect((await repository.findSourceById(current.id))!.content).toBe(
      "Мой контекст",
    );
    expect(
      (await repository.findSourceById(current.id))!.indexedContentHash,
    ).toBeNull();
    await repository.deleteSourceWithDerivedData(current.id);
    expect(
      await db.select().from(FileTable).where(eq(FileTable.id, file.id)),
    ).toHaveLength(1);
  });

  it("invalidates every Source before a shared stored File is updated or deleted", async () => {
    const first = await source("Первый контекст"),
      second = await source("Второй контекст");
    const [file] = await db
      .insert(FileTable)
      .values({
        file: "/shared-test.txt",
        adminTitle: "Shared",
        alt: "Shared",
        slug: `knowledge-file-${randomUUID()}`,
        extension: "txt",
        mimeType: "text/plain",
        size: 3,
        width: 0,
        height: 0,
      })
      .returning();
    fileIds.push(file.id);
    for (const item of [first, second]) {
      await repository.attachFiles(item.id, [file.id]);
      const updated = await repository.updateSource({
        sourceId: item.id,
        content: assembleContent(item.content, "Сведения общего файла"),
      });
      await repository.publishChunks(item.id, updated!.contentHash, [
        chunk("Сведения общего файла"),
      ]);
    }
    const updated = await repository.mutateStoredFile({
      action: "update",
      id: file.id,
      data: { alt: "Updated" },
    });
    expect(updated.sourceIds.sort()).toEqual([first.id, second.id].sort());
    for (const item of [first, second]) {
      expect((await repository.findSourceById(item.id))!.content).toBe(
        item.content,
      );
      expect(
        await repository.searchChunks({
          embedding: vector,
          topK: 10,
          sourceIds: [item.id],
        }),
      ).toEqual([]);
      expect(await repository.sourceFiles(item.id)).toHaveLength(1);
    }
    const deleteBytes = jest
      .spyOn(Provider.prototype, "deleteFile")
      .mockResolvedValue(undefined);
    const removed = await repository.mutateStoredFile({
      action: "delete",
      id: file.id,
    });
    expect(deleteBytes).toHaveBeenCalledWith({ name: "shared-test.txt" });
    expect(removed.sourceIds.sort()).toEqual([first.id, second.id].sort());
    for (const item of [first, second]) {
      expect(await repository.sourceFiles(item.id)).toEqual([]);
      expect((await repository.findSourceById(item.id))!.content).toBe(
        item.content,
      );
    }
  });

  it("rejects a stale attachment edit without removing files added concurrently", async () => {
    const current = await source("Сохранённый контекст");
    const files = await db
      .insert(FileTable)
      .values(
        [0, 1].map((index) => ({
          file: `/attachment-${index}.txt`,
          adminTitle: "Test",
          alt: "Test",
          slug: `knowledge-file-${randomUUID()}`,
          extension: "txt",
          mimeType: "text/plain",
          size: 3,
          width: 0,
          height: 0,
        })),
      )
      .returning();
    fileIds.push(...files.map((file) => file.id));
    await repository.attachFiles(current.id, [files[0].id]);
    const previousIds = (await repository.sourceFiles(current.id)).map(
      ({ file }) => file.id,
    );
    await repository.attachFiles(current.id, [files[1].id]);

    await expect(
      repository.setFiles(current.id, [], previousIds),
    ).rejects.toThrow("attachments changed");
    expect(
      (await repository.sourceFiles(current.id)).map(({ file }) => file.id),
    ).toEqual(files.map((file) => file.id));
    expect((await repository.findSourceById(current.id))!.content).toBe(
      "Сохранённый контекст",
    );
  });

  it("rejects indexing when the Source was deleted", async () => {
    const current = await source("Материал для удаления");
    await repository.deleteSourceWithDerivedData(current.id);
    expect(
      await repository.publishChunks(current.id, current.contentHash, [
        chunk("Нельзя публиковать"),
      ]),
    ).toBe(false);
  });
});

it("guards attachment removal by Source version, invalidates the old index, and retains original file records", async () => {
  const current = await source("Original notes");
  const files = await db
    .insert(FileTable)
    .values(
      [0, 1].map((index) => ({
        file: `/detach-${index}.txt`,
        adminTitle: `Detach ${index}`,
        alt: "",
        slug: `knowledge-detach-${randomUUID()}`,
        extension: "txt",
        mimeType: "text/plain",
        size: 3,
        width: 0,
        height: 0,
      })),
    )
    .returning();
  fileIds.push(...files.map((file) => file.id));
  await repository.attachFiles(
    current.id,
    files.map((file) => file.id),
  );
  const before = (await repository.findSourceById(current.id))!;
  await repository.publishChunks(current.id, before.contentHash, [
    chunk("Previously indexed files"),
  ]);
  await expect(
    repository.setFiles(
      current.id,
      [files[1].id],
      files.map((file) => file.id),
      "stale-hash",
    ),
  ).rejects.toThrow("Conflict error");
  expect(
    (await repository.sourceFiles(current.id)).map((item) => item.file.id),
  ).toEqual(files.map((file) => file.id));
  await repository.setFiles(
    current.id,
    [files[1].id],
    files.map((file) => file.id),
    before.contentHash,
  );
  expect(
    (await repository.sourceFiles(current.id)).map((item) => item.file.id),
  ).toEqual([files[1].id]);
  expect((await repository.findSourceById(current.id))!.content).toBe(
    "Original notes",
  );
  expect(
    await repository.searchChunks({
      embedding: vector,
      topK: 5,
      sourceIds: [current.id],
    }),
  ).toEqual([]);
  expect(
    await db.select().from(FileTable).where(eq(FileTable.id, files[0].id)),
  ).toHaveLength(1);
  await expect(
    repository.setFiles(
      current.id,
      [],
      files.map((file) => file.id),
    ),
  ).rejects.toThrow("attachments changed");
  expect(
    (await repository.sourceFiles(current.id)).map((item) => item.file.id),
  ).toEqual([files[1].id]);
});
