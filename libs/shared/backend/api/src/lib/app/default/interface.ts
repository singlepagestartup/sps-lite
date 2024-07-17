import { Env, Hono } from "hono";
import { DefaultController } from "../../controllers";
import { IExceptionFilter } from "../../filters";

export interface IApp<T extends Env> {
  hono: Hono<T>;
  controller?: DefaultController;
  exceptionFilter: IExceptionFilter;
  init: () => Promise<void>;
  useRoutes: () => void;
}
