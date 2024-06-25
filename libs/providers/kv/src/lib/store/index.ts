import Redis, { RedisOptions } from "ioredis";
import { RedisStoreAdapter } from "../redis";
import {
  KV_PORT,
  KV_URL,
  KV_USERNAME,
  KV_PASSWORD,
  KV_HOST,
} from "@sps/shared-utils";

let store: RedisStoreAdapter | undefined;

const connectionParams: RedisOptions | undefined = KV_URL
  ? {
      path: KV_URL,
    }
  : KV_USERNAME && KV_PASSWORD
    ? {
        host: KV_HOST,
        port: KV_PORT,
        username: KV_USERNAME,
        password: KV_PASSWORD,
      }
    : undefined;

try {
  if (connectionParams) {
    const redis = new Redis(connectionParams);

    if (redis) {
      store = new RedisStoreAdapter({
        prefix: "sps:",
        ttl: 3600,
        client: redis,
      });
    }
  }
} catch (error: any) {
  console.log(`redis store ~ error:`, error.message);
}

export { store };
