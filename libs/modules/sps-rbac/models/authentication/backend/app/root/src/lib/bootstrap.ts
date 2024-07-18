import { Container, ContainerModule, interfaces } from "inversify";
import {
  DI,
  DefaultApp,
  ExceptionFilter,
  IDefaultApp,
  IExceptionFilter,
  IDefaultController,
  IDefaultModel,
  IDefaultService,
  DefaultService,
} from "@sps/shared-backend-api";
import { Model } from "@sps/sps-rbac/models/authentication/backend/model/root";
import { Env } from "hono";
import { Controller } from "./controller";

const bindings = new ContainerModule((bind: interfaces.Bind) => {
  bind<IExceptionFilter>(DI.IExceptionFilter).to(ExceptionFilter);
  bind<IDefaultApp<Env>>(DI.IApp).to(DefaultApp);
  bind<IDefaultController>(DI.IController).to(Controller);
  bind<IDefaultModel>(DI.IModel).to(Model);
  bind<IDefaultService>(DI.IService).to(DefaultService);
});

export async function bootstrap() {
  const container = new Container();
  container.load(bindings);
  const app = container.get<IDefaultApp<Env>>(DI.IApp);
  await app.init();

  return { app };
}
