import {
  World as CucumberWorld,
  IWorldOptions as ICucumberWorldOptions,
} from "@cucumber/cucumber";
import { Client } from "./Client";
import { User } from "./User";

export class World extends CucumberWorld {
  clients: Client[] = [];
  me?: Client | User;
  users: User[] = [];
  cache: any = {};

  constructor(options: ICucumberWorldOptions) {
    super(options);
  }
}
