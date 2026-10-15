import { type IMutationEffects } from "@sps/shared-backend-api";
import { Service as SourceService } from "@sps/knowledge/models/source/backend/app/api/src/lib/service";
import { Repository as SourceRepository } from "@sps/knowledge/models/source/backend/app/api/src/lib/repository";
import { Configuration as SourceConfiguration } from "@sps/knowledge/models/source/backend/app/api/src/lib/configuration";
import { Service as ChunkService } from "@sps/knowledge/models/chunk/backend/app/api/src/lib/service";
import { Repository as ChunkRepository } from "@sps/knowledge/models/chunk/backend/app/api/src/lib/repository";
import { Configuration as ChunkConfiguration } from "@sps/knowledge/models/chunk/backend/app/api/src/lib/configuration";
import { Service as SourcesToChunksService } from "@sps/knowledge/relations/sources-to-chunks/backend/app/api/src/lib/service";
import { Repository as SourcesToChunksRepository } from "@sps/knowledge/relations/sources-to-chunks/backend/app/api/src/lib/repository";
import { Configuration as SourcesToChunksConfiguration } from "@sps/knowledge/relations/sources-to-chunks/backend/app/api/src/lib/configuration";
import { Service as SourcesToFilesService } from "@sps/knowledge/relations/sources-to-file-storage-module-files/backend/app/api/src/lib/service";
import { Repository as SourcesToFilesRepository } from "@sps/knowledge/relations/sources-to-file-storage-module-files/backend/app/api/src/lib/repository";
import { Configuration as SourcesToFilesConfiguration } from "@sps/knowledge/relations/sources-to-file-storage-module-files/backend/app/api/src/lib/configuration";
import { Service as FileStorageFileService } from "@sps/file-storage/models/file/backend/app/api/src/lib/service";
import { Repository as FileStorageFileRepository } from "@sps/file-storage/models/file/backend/app/api/src/lib/repository";
import { Configuration as FileStorageFileConfiguration } from "@sps/file-storage/models/file/backend/app/api/src/lib/configuration";

export interface IKnowledgeServices {
  source: SourceService;
  chunk: ChunkService;
  sourcesToChunks: SourcesToChunksService;
  sourcesToFileStorageModuleFiles: SourcesToFilesService;
  fileStorageModule: { file: FileStorageFileService };
}
export interface IKnowledgeCompositionProps
  extends Partial<IKnowledgeServices> {
  publishEffects?: (effects: IMutationEffects) => Promise<void>;
  processing?: boolean;
}
const knowledgeTopics = [
  "knowledge.sources",
  "knowledge.chunks",
  "knowledge.sources-to-chunks",
  "knowledge.sources-to-file-storage-module-files",
];
let mutationPublisher: IKnowledgeCompositionProps["publishEffects"];
export function setKnowledgeMutationPublisher(
  publisher: NonNullable<IKnowledgeCompositionProps["publishEffects"]>,
) {
  const previous = mutationPublisher;
  mutationPublisher = publisher;
  return () => {
    mutationPublisher = previous;
  };
}
function bindTransaction<T extends { repository: object }>(
  service: T,
  tx: unknown,
): T {
  const repository = Object.assign(
    Object.create(Object.getPrototypeOf(service.repository)),
    service.repository,
    { db: tx },
  );
  return Object.assign(Object.create(Object.getPrototypeOf(service)), service, {
    repository,
  });
}
/** Observe successful public owner commands without replacing their policies. */
function trackMutationTags<
  T extends Record<
    "create" | "update" | "delete",
    (props: any) => Promise<{ id?: string } | null>
  >,
>(service: T, route: string, tags: Set<string>): T {
  for (const method of ["create", "update", "delete"] as const) {
    const command = service[method].bind(service);
    Object.defineProperty(service, method, {
      configurable: true,
      value: async (props: unknown) => {
        const record = await command(props);
        if (record) {
          tags.add(route);
          tags.add(route + "/count");
          if (record.id) tags.add(route + "/" + record.id);
        }
        return record;
      },
    });
  }
  return service;
}
export function createKnowledgeServices(
  props: IKnowledgeCompositionProps = {},
): IKnowledgeServices {
  const graph: IKnowledgeServices = {
    source:
      props.source ||
      new SourceService(new SourceRepository(new SourceConfiguration())),
    chunk:
      props.chunk ||
      new ChunkService(new ChunkRepository(new ChunkConfiguration())),
    sourcesToChunks:
      props.sourcesToChunks ||
      new SourcesToChunksService(
        new SourcesToChunksRepository(new SourcesToChunksConfiguration()),
      ),
    sourcesToFileStorageModuleFiles:
      props.sourcesToFileStorageModuleFiles ||
      new SourcesToFilesService(
        new SourcesToFilesRepository(new SourcesToFilesConfiguration()),
      ),
    fileStorageModule: props.fileStorageModule || {
      file: new FileStorageFileService(
        new FileStorageFileRepository(new FileStorageFileConfiguration()),
      ),
    },
  };
  const publisher = () => {
    const publish = props.publishEffects || mutationPublisher;
    if (!publish)
      throw new Error("Knowledge mutation publisher is not configured.");
    return publish;
  };
  const configure = (
    scope: IKnowledgeServices,
    inTransaction: boolean,
    queue: (() => Promise<unknown>)[],
    effects: Set<string>,
    tags: Set<string>,
  ) => {
    const process = async (sourceId: string, material: boolean) => {
      if (props.processing === false) return;
      try {
        if (material) {
          const { MaterialService } = await import("./service/materials");
          await new MaterialService({ source: graph.source }).rebuild(sourceId);
        }
        const { KnowledgeIndexer } = await import("./indexer");
        await new KnowledgeIndexer({ source: graph.source }).index({
          sourceId,
        });
      } catch (error) {
        console.error(
          "Knowledge Source saved; processing failed",
          sourceId,
          error,
        );
      }
    };
    scope.source.configure({
      chunk: scope.chunk,
      sourcesToChunks: scope.sourcesToChunks,
      sourcesToFileStorageModuleFiles: scope.sourcesToFileStorageModuleFiles,
      fileStorageFile: scope.fileStorageModule.file,
      inTransaction,
      publisher,
      changed: (topics = knowledgeTopics, paths = []) => {
        topics.forEach((topic) => {
          effects.add(topic);
          const route = "/api/" + topic.replace(".", "/");
          tags.add(route);
          tags.add(route + "/count");
        });
        paths.forEach((path) => tags.add(path));
      },
      afterCommit: (operation) => {
        queue.push(operation);
      },
      process,
      readSnapshot: async (operation) =>
        (graph.source.repository as SourceRepository).readSnapshot(
          async (tx) => {
            const readGraph: IKnowledgeServices = {
              source: bindTransaction(graph.source, tx),
              chunk: bindTransaction(graph.chunk, tx),
              sourcesToChunks: bindTransaction(graph.sourcesToChunks, tx),
              sourcesToFileStorageModuleFiles: bindTransaction(
                graph.sourcesToFileStorageModuleFiles,
                tx,
              ),
              fileStorageModule: {
                file: bindTransaction(graph.fileStorageModule.file, tx),
              },
            };
            configure(readGraph, true, [], new Set(), new Set());
            return operation(readGraph.source);
          },
        ),
      transaction: async (operation) => {
        const publish = publisher();
        const afterCommit: (() => Promise<unknown>)[] = [];
        const changed = new Set<string>();
        const tags = new Set<string>();
        const result = await (
          graph.source.repository as SourceRepository
        ).transaction(async (tx) => {
          const transactionGraph: IKnowledgeServices = {
            source: bindTransaction(graph.source, tx),
            chunk: bindTransaction(graph.chunk, tx),
            sourcesToChunks: bindTransaction(graph.sourcesToChunks, tx),
            sourcesToFileStorageModuleFiles: bindTransaction(
              graph.sourcesToFileStorageModuleFiles,
              tx,
            ),
            fileStorageModule: {
              file: bindTransaction(graph.fileStorageModule.file, tx),
            },
          };
          trackMutationTags(
            transactionGraph.chunk,
            "/api/knowledge/chunks",
            tags,
          );
          trackMutationTags(
            transactionGraph.sourcesToChunks,
            "/api/knowledge/sources-to-chunks",
            tags,
          );
          trackMutationTags(
            transactionGraph.sourcesToFileStorageModuleFiles,
            "/api/knowledge/sources-to-file-storage-module-files",
            tags,
          );
          trackMutationTags(
            transactionGraph.fileStorageModule.file,
            "/api/file-storage/files",
            tags,
          );
          configure(transactionGraph, true, afterCommit, changed, tags);
          return operation(transactionGraph.source);
        });
        if (changed.size)
          await publish({
            topics: [...changed],
            payload: "/api/knowledge/sources",
            tags: [...tags],
          });
        for (const callback of afterCommit) await callback();
        return result;
      },
    });
    scope.sourcesToFileStorageModuleFiles.configure({
      inTransaction,
      fileStorageFile: scope.fileStorageModule.file,
      mutate: async (operation) =>
        (await scope.source.mutateFileRelation(operation)).relation,
    });
  };
  configure(graph, false, [], new Set(), new Set());
  return graph;
}
