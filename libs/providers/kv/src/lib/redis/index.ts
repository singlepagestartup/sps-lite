import Redis, { RedisOptions } from "ioredis";
import {
  KV_PORT,
  KV_URL,
  KV_USERNAME,
  KV_PASSWORD,
  KV_HOST,
} from "@sps/shared-utils";

let redis: Redis | undefined;

const connectionParams = {
  maxRetriesPerRequest: 10,
  commandTimeout: 5000,
};

const connectionCredentials: RedisOptions | undefined =
  KV_USERNAME && KV_PASSWORD
    ? {
        host: KV_HOST,
        port: KV_PORT,
        username: KV_USERNAME,
        password: KV_PASSWORD,
        ...connectionParams,
      }
    : undefined;

try {
  if (connectionCredentials) {
    redis = new Redis(connectionCredentials);
  } else if (KV_URL) {
    redis = new Redis(KV_URL, connectionParams);
  }

  if (redis) {
    redis.on("error", function (error: any) {
      console.log("redis ~ on.error:", error);
    });
  }
} catch (error: any) {
  console.log(`redis store ~ error:`, error.message);
}

export { redis };
