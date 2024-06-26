import { Redis } from "ioredis";
import { redis } from "../redis";

interface RedisStoreOptions {
  prefix?: string;
  ttl?: number;
}

export class Store {
  prefix: string;
  ttl: number;
  RedisClient: Redis;

  constructor(options?: RedisStoreOptions) {
    this.prefix = options?.prefix ? options.prefix : "sps:";
    this.ttl = options?.ttl ? options?.ttl : 86400;

    if (!redis) {
      throw new Error("Redis client not found");
    }

    this.RedisClient = redis;
  }

  async connect(): Promise<void> {
    try {
      const connected = this.RedisClient.status === "ready";
      if (connected) {
        return;
      }

      await this.RedisClient.connect();
    } catch (error) {
      console.log(`store ~ connect ~ error:`, error);
    }
  }

  async clearByPrefix(prefix: string): Promise<void> {
    try {
      await this.connect();

      const keys = await this.RedisClient.keys(prefix + "*");

      if (keys.length > 0) {
        await this.RedisClient.del(keys);
      }
    } catch (error) {
      console.log(`store ~ clearByPrefix ~ error:`, error);
    }
  }

  async find(key: string): Promise<string | null | undefined> {
    try {
      await this.connect();

      return await this.RedisClient.get(key);
    } catch (error) {
      // console.log(`store ~ find ~ error:`, error);
      return;
    }
  }

  async create(
    key: string,
    ttl = 10,
    value: string,
  ): Promise<string | undefined> {
    try {
      await this.connect();

      return this.RedisClient.setex(key, ttl, value);
    } catch (error) {
      console.log(`store ~ create ~ error:`, error);

      return;
    }
  }

  async remove(key: string): Promise<number | undefined> {
    try {
      await this.connect();

      return this.RedisClient.del(key);
    } catch (error) {
      console.log(`store ~ remove ~ error:`, error);
      return;
    }
  }
}
