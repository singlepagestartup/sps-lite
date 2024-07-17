import { Env, Hono } from "hono";
import { IDefaultController } from "../../controllers";
import { IExceptionFilter } from "../../filters";

export interface IApp<T extends Env> {
  hono: Hono<T>;
  controller?: IDefaultController;
  exceptionFilter: IExceptionFilter;
  init: () => Promise<void>;
  useRoutes: () => void;
}
