import { Middleware as RevalidationMiddleware } from "@sps/revalidation";
import { Middleware as HTTPCacheMiddleware } from "@sps/http-cache";
import { createMutationEffectsPublisher } from "@sps/shared-backend-api";
import { setKnowledgeMutationPublisher } from "../composition";
import { KnowledgeIndexer } from ".";

function readArg(name: string) {
  const prefix = `--${name}=`;
  return process.argv
    .find((arg) => arg.startsWith(prefix))
    ?.slice(prefix.length);
}

async function main() {
  const limitArg = readArg("limit");
  const cache = new HTTPCacheMiddleware();
  const revalidation = new RevalidationMiddleware();
  setKnowledgeMutationPublisher(
    createMutationEffectsPublisher({
      invalidateTopics: (topics) => cache.invalidateTopics(topics),
      revalidateTag: (tag) => revalidation.revalidateTag(tag),
    }),
  );
  const indexer = new KnowledgeIndexer();
  const result = await indexer.index({
    rootPath: readArg("rootPath"),
    limit: limitArg ? Number(limitArg) : undefined,
    dryRun: process.argv.includes("--dry-run"),
    clear: process.argv.includes("--clear"),
  });

  console.log(JSON.stringify(result, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
