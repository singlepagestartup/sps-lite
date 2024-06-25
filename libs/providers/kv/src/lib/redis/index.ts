import { Redis } from "ioredis";
import { SessionData } from "../middlewares/session/Session";

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

  async clearByPrefix(prefix: string): Promise<void> {
    try {
      const connected = this.RedisClient.status === "ready";

      if (!connected) {
        await this.RedisClient.connect();
      }

      const keys = await this.RedisClient.keys(prefix + "*");

      if (keys.length > 0) {
        await this.RedisClient.del(keys);
      }
    } catch (error) {
      console.log(`redis ~ clearByPrefix ~ error:`, error);
    }
  }

  async find(key: string): Promise<string | null | undefined> {
    try {
      const connected = this.RedisClient.status === "ready";

      if (!connected) {
        await this.RedisClient.connect();
      }

      return await this.RedisClient.get(key);
    } catch (error) {
      // console.log(`redis ~ find ~ error:`, error);
      return;
    }
  }

  async create(
    key: string,
    ttl = 10,
    value: string,
  ): Promise<string | undefined> {
    try {
      const connected = this.RedisClient.status === "ready";

      if (!connected) {
        await this.RedisClient.connect();
      }

      return this.RedisClient.setex(key, ttl, value);
    } catch (error) {
      console.log(`redis ~ create ~ error:`, error);

      return;
    }
  }

  async remove(key: string): Promise<number | undefined> {
    try {
      const connected = this.RedisClient.status === "ready";

      if (!connected) {
        await this.RedisClient.connect();
      }

      return this.RedisClient.del(key);
    } catch (error) {
      console.log(`redis ~ remove ~ error:`, error);
      return;
    }
  }

  async getSessionById(
    sessionId: string,
  ): Promise<SessionData | null | undefined> {
    if (!sessionId) {
      return null;
    }
    const key = (this.prefix + sessionId).toString();
    const result = await this.RedisClient.get(key);
    if (result) {
      return JSON.parse(result);
    } else {
      return null;
    }
  }

  async createSession(
    sessionId: string,
    initialData: SessionData,
  ): Promise<void> {
    if (!sessionId) {
      return;
    }
    const key = (this.prefix + sessionId).toString();
    const ttl = this.ttl;
    await this.RedisClient.setex(key, ttl, JSON.stringify(initialData));
  }

  async deleteSession(sessionId: string): Promise<void> {
    const key = (this.prefix + sessionId).toString();
    await this.RedisClient.del(key);
  }

  async persistSessionData(
    sessionId: string,
    sessionData: SessionData,
  ): Promise<void> {
    if (!sessionId) {
      return;
    }
    const key = (this.prefix + sessionId).toString();
    const ttl = this.ttl;
    await this.RedisClient.setex(key, ttl, JSON.stringify(sessionData));
  }
}
