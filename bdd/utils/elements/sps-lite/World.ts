import {
  World as CucumberWorld,
  IWorldOptions as ICucumberWorldOptions,
} from "@cucumber/cucumber";
import { ApiClient } from "../ApiClient";
import { User } from "../User";

export class World extends CucumberWorld {
  apiClients: ApiClient[] = [];
  me?: ApiClient | User;
  users: User[] = [];
  cache: any = {};

  constructor(options: ICucumberWorldOptions) {
    super(options);
  }
}
