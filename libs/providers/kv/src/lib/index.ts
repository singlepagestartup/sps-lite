import { Provider as RedisProvider } from "./redis";
import { Provider as VercelKVProvider } from "./vercel-kv";
import { IProvider } from "./interface";

export class Provider implements IProvider {
  prefix: string;
  client: RedisProvider | VercelKVProvider;

  constructor(props: { type: "redis" | "vercel-kv"; prefix?: string }) {
    this.prefix = props.prefix || "";

    if (props.type === "redis") {
      const redis = new RedisProvider({
        prefix: this.prefix,
      });
      this.client = redis;

      return;
    } else if (props.type === "vercel-kv") {
      const vercelKV = new VercelKVProvider({
        prefix: this.prefix,
      });
      this.client = vercelKV;

      return;
    }

    throw new Error("Provider not found");
  }

  async connect(): Promise<void> {
    return await this.client.connect();
  }

  async hashKey(props: { key: string }) {
    return await this.client.hashKey(props);
  }

  async get(props: { key: string }) {
    return await this.client.get(props);
  }

  async set(props: { key: string; value: string; options: { ttl: number } }) {
    return await this.client.set(props);
  }

  async delByPrefix() {
    return await this.client.delByPrefix();
  }

  async del(props: { key: string }) {
    return await this.client.del(props);
  }

  async flushall() {
    return await this.client.flushall();
  }
}
