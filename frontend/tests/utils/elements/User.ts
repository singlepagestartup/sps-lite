import { Page } from "@playwright/test";
import { User as SpsLiteUser } from "./sps-lite/User";

export class User extends SpsLiteUser {
  constructor(props?: { page?: Page }) {
    super(props);
  }
}
