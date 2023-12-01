import { Page } from "@playwright/test";
import { Client as SpsLiteClient } from "./sps-lite/Client";

export class Client extends SpsLiteClient {
  constructor(props?: { page?: Page }) {
    super(props);
  }
}
