/**
 * BDD Suite: Knowledge Source transaction consistency.
 * Given: saved Sources, attachment links and indexed chunks in PostgreSQL.
 * When: content, attachments or derived records change.
 * Then: concurrent validation and partial failures preserve a consistent Source.
 */
jest.mock("@sps/providers-kv", () => ({ Provider: jest.fn(() => ({})) }));
import { createKnowledgeServices } from "./composition";
import { Service as FileStorageFileService } from "@sps/file-storage/models/file/backend/app/api/src/lib/service";
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

const repository = createKnowledgeServices({
  processing: false,
  publishEffects: async () => {},
}).source;
const readStoredBytes = jest
  .spyOn(FileStorageFileService.prototype, "readBytes")
  .mockResolvedValue(Buffer.from("Fixture text"));
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
  jest
    .spyOn(FileStorageFileService.prototype, "readBytes")
    .mockResolvedValue(Buffer.from("Fixture text"));
});

it("serves generic Source CRUD through effective services and refreshes a warm HTTP cache before a second client refetch", async () => {
  const { Hono } = await import("hono");
  const { createServer } = await import("node:http");
  const { Middleware: Cache } = await import("@sps/http-cache");
  const { createMutationEffectsPublisher, ExceptionFilter } = await import(
    "@sps/shared-backend-api"
  );
  const { App: SourceApp } = await import(
    "@sps/knowledge/models/source/backend/app/api/src/lib/app"
  );
  const { Controller: SourceController } = await import(
    "@sps/knowledge/models/source/backend/app/api/src/lib/controller"
  );
  const { Configuration: SourceConfiguration } = await import(
    "@sps/knowledge/models/source/backend/app/api/src/lib/configuration"
  );
  const { App: RelationApp } = await import(
    "@sps/knowledge/relations/sources-to-file-storage-module-files/backend/app/api/src/lib/app"
  );
  const { Controller: RelationController } = await import(
    "@sps/knowledge/relations/sources-to-file-storage-module-files/backend/app/api/src/lib/controller"
  );
  const { Configuration: RelationConfiguration } = await import(
    "@sps/knowledge/relations/sources-to-file-storage-module-files/backend/app/api/src/lib/configuration"
  );
  const values = new Map<string, string>();
  const cache = new Cache();
  cache.storeProvider = {
    async get({ prefix, key }: any) {
      return values.get(prefix + ":" + key) ?? null;
    },
    async set({ prefix, key, value }: any) {
      values.set(prefix + ":" + key, value);
    },
    async incr({ prefix, key }: any) {
      const k = prefix + ":" + key;
      const v = Number(values.get(k) || 0) + 1;
      values.set(k, String(v));
      return v;
    },
  } as any;
  let baseUrl = "";
  let sourceId = "";
  let subscriberRead: Promise<any> | undefined;
  let observe = false;
  const revalidatedTags: string[] = [];
  const publish = createMutationEffectsPublisher({
    invalidateTopics: (topics) => cache.invalidateTopics(topics),
    revalidateTag: async (tag) => {
      revalidatedTags.push(tag);
    },
    broadcast: () => {
      if (observe) {
        expect(revalidatedTags).toEqual(
          expect.arrayContaining([
            "/api/knowledge/sources",
            "/api/knowledge/sources/" + sourceId,
          ]),
        );
        subscriberRead = fetch(baseUrl + "/api/knowledge/sources/" + sourceId, {
          headers: { "X-Fixture-Client": "second" },
        }).then((r) => r.json());
      }
    },
  });
  const graph = createKnowledgeServices({
    processing: false,
    publishEffects: publish,
  });
  const sourceApp = new SourceApp(
    new ExceptionFilter(),
    new SourceController(graph.source),
    new SourceConfiguration(),
  );
  const relationApp = new RelationApp(
    new ExceptionFilter(),
    new RelationController(graph.sourcesToFileStorageModuleFiles),
    new RelationConfiguration(),
  );
  await sourceApp.init();
  await relationApp.init();
  const app = new Hono();
  app.use(cache.init());
  app.route("/api/knowledge/sources", sourceApp.hono);
  app.route(
    "/api/knowledge/sources-to-file-storage-module-files",
    relationApp.hono,
  );
  const server = createServer(async (req, res) => {
    try {
      const parts: Buffer[] = [];
      for await (const part of req) parts.push(Buffer.from(part));
      const response = await app.fetch(
        new Request(baseUrl + req.url, {
          method: req.method,
          headers: req.headers as Record<string, string>,
          body: ["GET", "HEAD"].includes(req.method || "GET")
            ? undefined
            : Buffer.concat(parts),
        }),
      );
      res.writeHead(
        response.status,
        Object.fromEntries(response.headers.entries()),
      );
      res.end(Buffer.from(await response.arrayBuffer()));
    } catch {
      res.statusCode = 500;
      res.end("Fixture server failure");
    }
  });
  await new Promise<void>((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });
  baseUrl = "http://127.0.0.1:" + (server.address() as any).port;
  try {
    const data = new FormData();
    data.set(
      "data",
      JSON.stringify({
        title: "HTTP fixture",
        slug: "knowledge-http-" + randomUUID(),
        content: "Before",
      }),
    );
    const created = await fetch(baseUrl + "/api/knowledge/sources", {
      method: "POST",
      body: data,
    });
    expect(created.status).toBe(201);
    sourceId = ((await created.json()) as any).data.id;
    sourceIds.push(sourceId);
    const read = jest.spyOn(graph.source, "findById");
    const url = baseUrl + "/api/knowledge/sources/" + sourceId;
    expect(((await (await fetch(url)).json()) as any).data.content).toBe(
      "Before",
    );
    await new Promise((resolve) => setImmediate(resolve));
    const reads = read.mock.calls.length;
    expect(((await (await fetch(url)).json()) as any).data.content).toBe(
      "Before",
    );
    expect(read.mock.calls.length).toBe(reads);
    expect(
      [...values.keys()].some((key) => key.startsWith("http-cache:data:")),
    ).toBe(true);
    revalidatedTags.length = 0;
    observe = true;
    const update = new FormData();
    update.set("data", JSON.stringify({ content: "After" }));
    expect((await fetch(url, { method: "PATCH", body: update })).status).toBe(
      200,
    );
    expect((await subscriberRead).data.content).toBe("After");
    expect(((await (await fetch(url)).json()) as any).data.content).toBe(
      "After",
    );
    observe = false;
    const [file] = await db
      .insert(FileTable)
      .values({
        file: "/retained-legacy.svg",
        slug: "knowledge-http-svg-" + randomUUID(),
        adminTitle: "Legacy",
        alt: "Legacy",
        mimeType: "image/svg+xml",
        extension: "svg",
        size: 6,
        width: 0,
        height: 0,
      })
      .returning();
    fileIds.push(file.id);
    const link = new FormData();
    link.set(
      "data",
      JSON.stringify({ sourceId, fileStorageModuleFileId: file.id }),
    );
    const rejected = await fetch(
      baseUrl + "/api/knowledge/sources-to-file-storage-module-files",
      { method: "POST", body: link },
    );
    expect(rejected.status).toBe(400);
    expect(await repository.sourceFiles(sourceId)).toEqual([]);
    expect((await repository.findSourceById(sourceId))!.content).toBe("After");
    expect(
      await db.select().from(FileTable).where(eq(FileTable.id, file.id)),
    ).toHaveLength(1);
  } finally {
    server.closeIdleConnections();
    await new Promise<void>((resolve) => server.close(() => resolve()));
  }
});

describe("effective service boundaries and SVG policy", () => {
  async function storedFile(data: Partial<typeof FileTable.$inferInsert> = {}) {
    const [file] = await db
      .insert(FileTable)
      .values({
        file: "/knowledge-fixture-" + randomUUID() + ".png",
        adminTitle: "Fixture",
        alt: "Fixture",
        slug: "knowledge-service-file-" + randomUUID(),
        extension: "png",
        mimeType: "image/png",
        size: 3,
        width: 0,
        height: 0,
        ...data,
      })
      .returning();
    fileIds.push(file.id);
    return file;
  }
  it.each([
    { extension: "svg", mimeType: "image/svg+xml" },
    { extension: "png", mimeType: "image/svg+xml" },
  ])(
    "rejects a new existing-File association before changing notes or index: %p",
    async (data) => {
      const current = await source("Confirmed notes");
      await repository.publishChunks(current.id, current.contentHash, [
        chunk("Confirmed index"),
      ]);
      const before = await repository.findSourceById(current.id);
      const file = await storedFile(data);
      await expect(
        repository.updateSourceWithAttachments({
          sourceId: current.id,
          content: "Must not save",
          fileIds: [file.id],
        }),
      ).rejects.toThrow("SVG");
      expect(await repository.findSourceById(current.id)).toEqual(before);
      expect(await repository.sourceFiles(current.id)).toEqual([]);
      expect(
        await db.select().from(FileTable).where(eq(FileTable.id, file.id)),
      ).toHaveLength(1);
    },
  );
  it("rejects SVG extension metadata when updating an attached stored File before altering Source content or index", async () => {
    const current = await source("Confirmed notes");
    const file = await storedFile();
    await repository.attachFiles(current.id, [file.id]);
    await repository.publishChunks(current.id, current.contentHash, [
      chunk("Confirmed index"),
    ]);
    const before = await repository.findSourceById(current.id);
    const updateFile = jest.spyOn(FileStorageFileService.prototype, "update");
    await expect(
      repository.mutateStoredFile({
        action: "update",
        id: file.id,
        data: { extension: "svg" },
      }),
    ).rejects.toThrow("SVG");
    expect(updateFile).not.toHaveBeenCalled();
    expect(await repository.findSourceById(current.id)).toEqual(before);
    expect(
      (await db.select().from(FileTable).where(eq(FileTable.id, file.id)))[0]
        .extension,
    ).toBe("png");
  });
  it("publishes a committed File import when the subsequent effective relation service refuses attachment", async () => {
    const current = await source("Original notes");
    const effects: any[] = [];
    jest
      .spyOn(FileStorageFileService.prototype, "importPath")
      .mockImplementation(async function (this: FileStorageFileService, props) {
        const file = await this.create({
          data: {
            file: "/committed-import-" + randomUUID() + ".txt",
            slug: props.slug,
            adminTitle: "Imported fixture",
            alt: "Fixture",
            extension: "txt",
            mimeType: "text/plain",
            size: 3,
            width: 0,
            height: 0,
          },
        });
        fileIds.push(file.id);
        return file;
      });
    const graph = createKnowledgeServices({
      processing: false,
      publishEffects: async (effect) => {
        expect(
          await db
            .select()
            .from(FileTable)
            .where(eq(FileTable.id, fileIds.at(-1)!)),
        ).toHaveLength(1);
        effects.push(effect);
      },
    });
    graph.sourcesToFileStorageModuleFiles.create = jest.fn(async () => {
      throw new Error("Import attachment policy refused");
    });
    await expect(
      graph.source.ensureFileForSource({
        sourceId: current.id,
        filePath: "fixture-" + randomUUID() + ".txt",
      }),
    ).rejects.toThrow("Import attachment policy refused");
    expect(effects).toEqual([
      {
        topics: ["file-storage.files"],
        payload: "/api/file-storage/files",
        tags: [
          "/api/file-storage/files/count",
          "/api/file-storage/files/" + fileIds.at(-1),
        ],
      },
    ]);
    expect(await repository.sourceFiles(current.id)).toEqual([]);
    expect((await repository.findSourceById(current.id))!.content).toBe(
      "Original notes",
    );
  });
  it("rejects renamed SVG bytes through generic relation CRUD without deleting the original File", async () => {
    const current = await source("Original notes");
    const file = await storedFile();
    jest
      .spyOn(FileStorageFileService.prototype, "readBytes")
      .mockResolvedValue(
        Buffer.from('<svg xmlns="http://www.w3.org/2000/svg"/>'),
      );
    const services = createKnowledgeServices({
      processing: false,
      publishEffects: async () => {},
    });
    await expect(
      services.sourcesToFileStorageModuleFiles.create({
        data: {
          sourceId: current.id,
          fileStorageModuleFileId: file.id,
        },
      }),
    ).rejects.toThrow("SVG");
    expect(await repository.sourceFiles(current.id)).toEqual([]);
    expect((await repository.findSourceById(current.id))!.content).toBe(
      "Original notes",
    );
    expect(
      (await db.select().from(FileTable).where(eq(FileTable.id, file.id)))[0]
        .mimeType,
    ).toBe("image/png");
  });
  it("projects a legacy renamed SVG as blocked without rewriting the stored File", async () => {
    const current = await source("Human notes");
    const file = await storedFile();
    await db
      .insert(SourceFileTable)
      .values({ sourceId: current.id, fileStorageModuleFileId: file.id });
    jest
      .spyOn(FileStorageFileService.prototype, "readBytes")
      .mockResolvedValue(Buffer.from("<svg/>"));
    expect((await repository.sourceFiles(current.id))[0].file.mimeType).toBe(
      "image/svg+xml",
    );
    expect(
      (await db.select().from(FileTable).where(eq(FileTable.id, file.id)))[0]
        .mimeType,
    ).toBe("image/png");
    await repository.setFiles(current.id, []);
    expect(
      await db.select().from(FileTable).where(eq(FileTable.id, file.id)),
    ).toHaveLength(1);
  });
  it("rolls back notes and index when the effective relation service refuses the link", async () => {
    const current = await source("Protected notes");
    await repository.publishChunks(current.id, current.contentHash, [
      chunk("Protected index"),
    ]);
    const before = await repository.findSourceById(current.id);
    const file = await storedFile();
    const base = createKnowledgeServices({
      processing: false,
      publishEffects: async () => {},
    });
    const relation = base.sourcesToFileStorageModuleFiles;
    const refuse = jest.fn(async () => {
      throw new Error("Child service policy refused attachment");
    });
    relation.create = refuse;
    const publishEffects = jest.fn(async () => {});
    const services = createKnowledgeServices({
      sourcesToFileStorageModuleFiles: relation,
      processing: false,
      publishEffects,
    });
    await expect(
      services.source.updateSourceWithAttachments({
        sourceId: current.id,
        content: "Must roll back",
        fileIds: [file.id],
      }),
    ).rejects.toThrow("Child service policy");
    expect(refuse).toHaveBeenCalledTimes(1);
    expect(publishEffects).not.toHaveBeenCalled();
    expect(await repository.findSourceById(current.id)).toEqual(before);
    expect(await repository.sourceFiles(current.id)).toEqual([]);
    expect(
      (
        await repository.searchChunks({
          embedding: vector,
          topK: 5,
          sourceIds: [current.id],
        })
      )[0].text,
    ).toBe("Protected index");
  });
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
    const invalid = { ...chunk("Неполный индекс"), embedding: [1] };
    await expect(
      repository.publishChunks(current.id, current.contentHash, [
        chunk("First partial chunk"),
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
