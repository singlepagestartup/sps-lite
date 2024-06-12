import { Redis } from "ioredis";

interface RedisStoreOptions {
  client: Redis;
  prefix?: string;
  ttl?: number;
}

export class RedisStoreAdapter {
  prefix: string;
  ttl: number;
  RedisClient: Redis;

  constructor(options: RedisStoreOptions) {
    this.prefix = options.prefix == null ? "session:" : options.prefix;
    this.ttl = options.ttl || 86400;
    this.RedisClient = options.client;
  }

  async find(key: string): Promise<string | null | undefined> {
    return this.RedisClient.get(key);
  }

  async create(key: string, ttl = 10, value: string): Promise<string> {
    return this.RedisClient.setex(key, ttl, value);
  }

  async remove(key: string): Promise<number> {
    return this.RedisClient.del(key);
  }
}
