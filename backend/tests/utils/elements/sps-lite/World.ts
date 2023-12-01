import {
  World as CucumberWorld,
  IWorldOptions as ICucumberWorldOptions,
} from "@cucumber/cucumber";
import { Client } from "../Client";

export class World extends CucumberWorld {
  debug = false;
  clients: Client[] = [];
  me?: Client;
  cache: any = {};

  constructor(options: ICucumberWorldOptions) {
    super(options);
  }
}
