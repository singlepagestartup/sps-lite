import { hash, KV_REST_API_TOKEN, KV_REST_API_URL } from "@sps/shared-utils";
import type { IProvider } from "../interface";
import { kv, createClient } from "@vercel/kv";

export class Provider implements IProvider {
  prefix: string;
  client: typeof kv;

  constructor() {
    this.prefix = "";

    this.client = kv;
  }

  async connect(): Promise<void> {
    createClient({
      url: KV_REST_API_URL,
      token: KV_REST_API_TOKEN,
    });
  }

  async hashKey(props: { key: string }): Promise<string> {
    return hash.sha256(props.key);
  }

  async get(props: { key: string }): Promise<string | null> {
    await this.connect();

    const hasedKey = await this.hashKey({ key: props.key });
    const value = await this.client.get<object>(hasedKey);

    if (value) {
      return JSON.stringify(value);
    }

    return null;
  }

  async set(props: {
    key: string;
    value: string;
    options: { ttl: number };
  }): Promise<string | undefined | null> {
    await this.connect();

    const hasedKey = await this.hashKey({ key: props.key });

    return await this.client.set(hasedKey, props.value, {
      ex: props.options.ttl,
    });
  }

  async del(props: { key: string }): Promise<void> {
    await this.connect();

    const hasedKey = await this.hashKey({ key: props.key });

    await this.client.del(hasedKey);

    return;
  }
}
