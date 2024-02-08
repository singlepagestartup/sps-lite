import { TestEnvironment } from "jest-environment-jsdom";

export default class CustomEnvironment extends TestEnvironment {
  async setup() {
    await super.setup();

    // Add globals that are on real browsers and Node 18+, but aren't in Jest's builtin environments.
    this.global.Blob = globalThis.Blob;
    this.global.fetch = globalThis.fetch;
    this.global.File = globalThis.File;
    this.global.FormData = globalThis.FormData;
    this.global.Headers = globalThis.Headers;
    this.global.Request = globalThis.Request;
    this.global.Response = globalThis.Response;
    this.global.TextEncoder = globalThis.TextEncoder;
    this.global.TextDecoder = globalThis.TextDecoder;
  }
}
