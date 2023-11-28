import {
  World as CucumberWorld,
  IWorldOptions as ICucumberWorldOptions,
} from "@cucumber/cucumber";
import { User } from "./User";

export class World extends CucumberWorld {
  debug = false;
  users: User[] = [];
  me?: User;

  constructor(options: ICucumberWorldOptions) {
    super(options);
  }
}
