import Redis from "ioredis";
import { RedisStoreAdapter } from "../redis";

let store: RedisStoreAdapter | undefined;

if (
  process.env["NODE_ENV"] !== "production" &&
  process.env["REDIS_PORT"] &&
  process.env["REDIS_PASSWORD"]
) {
  try {
    const redis = new Redis({
      port: Number(process.env["REDIS_PORT"]) || 6379,
      username: "default",
      password: process.env["REDIS_PASSWORD"],
    });

    if (redis) {
      store = new RedisStoreAdapter({
        prefix: "sps:",
        ttl: 3600,
        client: redis,
      });
    }
  } catch (error: any) {
    console.log(`redis store ~ error:`, error.message);
  }
}

export { store };
