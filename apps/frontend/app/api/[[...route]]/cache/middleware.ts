import { RedisStoreAdapter } from "apps/frontend/src/redis";
import { kvResponseCache } from "./caches";

import type { Filter, KVNamespace, KVNamespacePutOptions } from "./types";
import type { Context, Env, MiddlewareHandler } from "hono";

type Namespace<E extends Env> = string | ((c: Context<E>) => string);
interface GetCacheKey<E extends Env> {
  (c: Context<E>): string;
}

type KVCacheOption<E extends Env> = {
  key: keyof Filter<Exclude<E["Bindings"], undefined>, KVNamespace>;
  namespace: Namespace<E>;
  store: RedisStoreAdapter;
  getCacheKey?: GetCacheKey<E>;
  options?: KVNamespacePutOptions;
};

export const defaultGetCacheKey = <E extends Env>(c: Context<E>) => c.req.url;

export const kvCaches =
  <E extends Env>({
    key: bindingKey,
    namespace,
    store,
    options,
    getCacheKey = defaultGetCacheKey,
  }: KVCacheOption<E>): MiddlewareHandler<E> =>
  async (c, next) => {
    const kv: KVNamespace = c.env?.[bindingKey as string] as KVNamespace;
    // const kvNamespace =
    //   typeof namespace === "function" ? namespace(c) : namespace;

    // const kvCaches = kvResponseCache(kv);
    // const cache = kvCaches(kvNamespace);

    const key = getCacheKey(c);
    // // const response = await cache.match(key);
    // const cachedValue = await store.find(getCacheKey(c));
    // if (cachedValue) {
    //   const response = await store.find(getCacheKey(c));
    //   response.headers.set("X-KV-CACHE", "hit");

    //   return response;
    // }

    await next();

    if (c.res.status >= 200 && c.res.status < 300) {
      // c.executionCtx.waitUntil(cache.put(key, c.res.clone(), options));
      c.executionCtx.waitUntil(
        store.create(key, 5000, JSON.stringify(c.res.clone())),
      );
    }
  };
