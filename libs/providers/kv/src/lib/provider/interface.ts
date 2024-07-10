export interface IProvider {
  prefix: string;
  connect: () => Promise<void>;
  hashKey: (props: { key: string }) => Promise<string>;
  get: (props: { key: string }) => Promise<string | null>;
  set: (props: {
    key: string;
    value: string;
    options: { ttl: number };
  }) => Promise<string | undefined | null>;
  del: (props: { key: string }) => Promise<void>;
  flushall: () => Promise<void>;
}
