import { Page } from "@playwright/test";
import { User as SpsLiteUser, IUser as ISpsLiteUser } from "./sps-lite/User";

export interface IUser extends ISpsLiteUser {}

export class User extends SpsLiteUser {
  constructor(props: { page: Page; random?: boolean; user?: IUser }) {
    super(props);
  }
}
