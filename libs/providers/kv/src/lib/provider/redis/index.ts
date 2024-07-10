import type { IProvider } from "../interface";
import { Redis, RedisOptions } from "ioredis";
import {
  KV_PORT,
  KV_USERNAME,
  KV_PASSWORD,
  KV_HOST,
  hash,
} from "@sps/shared-utils";

export class Provider implements IProvider {
  prefix: string;
  client: Redis;

  constructor() {
    this.prefix = "";

    const connectionParams = {
      maxRetriesPerRequest: 10,
      commandTimeout: 5000,
    };

    const connectionCredentials: RedisOptions | undefined = {
      host: KV_HOST,
      port: KV_PORT,
      username: KV_USERNAME,
      password: KV_PASSWORD,
      ...connectionParams,
    };

    if (!connectionCredentials) {
      throw new Error("No connection credentials found");
    }

    this.client = new Redis(connectionCredentials);
  }

  async disconnect(): Promise<void> {
    if (["end", "close", "error"].includes(this.client.status)) {
      return;
    }

    if (["connect", "ready"].includes(this.client.status)) {
      await this.client.quit();
    }
  }

  async connect(): Promise<void> {
    if (this.client.status === "connect" || this.client.status === "ready") {
      return;
    }

    if (this.client.status === "connecting") {
      await new Promise((resolve: any) => {
        this.client.on("connect", () => {
          resolve();
        });
      });

      return;
    }
  }

  async hashKey(props: { key: string }): Promise<string> {
    return hash.sha256(props.key);
  }

  async get(props: { key: string }): Promise<string | null> {
    await this.connect();

    const value = await this.client.get(props.key);

    await this.disconnect();

    return value;
  }

  async set(props: {
    key: string;
    value: string;
    options: { ttl: number };
  }): Promise<string | undefined | null> {
    await this.connect();

    const hasedKey = await this.hashKey({ key: props.key });

    const value = await this.client.set(
      hasedKey,
      props.value,
      "EX",
      props.options.ttl,
    );

    await this.disconnect();

    return value;
  }

  async del(props: { key: string }): Promise<void> {
    await this.connect();

    const hasedKey = await this.hashKey({ key: props.key });

    await this.client.del(hasedKey);

    await this.disconnect();

    return;
  }
}
