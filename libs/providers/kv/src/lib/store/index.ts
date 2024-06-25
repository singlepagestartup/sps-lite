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

const connectionParams: RedisOptions | undefined =
  KV_USERNAME && KV_PASSWORD
    ? {
        host: KV_HOST,
        port: KV_PORT,
        username: KV_USERNAME,
        password: KV_PASSWORD,
      }
    : undefined;

try {
  let redis;

  if (connectionParams) {
    redis = new Redis(connectionParams);
  } else if (KV_URL) {
    redis = new Redis(KV_URL, {
      maxRetriesPerRequest: 10,
      commandTimeout: 5000,
    });
  }

  if (redis) {
    redis.on("error", function (error: any) {
      console.log("redis ~ on.error:", error);
    });

    store = new RedisStoreAdapter({
      prefix: "sps:",
      ttl: 3600,
      client: redis,
    });

    setTimeout(() => {
      console.log("redis ~ disconnecting");
      redis.disconnect();
    }, 5000);
  }
} catch (error: any) {
  console.log(`redis store ~ error:`, error.message);
}

export { store };
