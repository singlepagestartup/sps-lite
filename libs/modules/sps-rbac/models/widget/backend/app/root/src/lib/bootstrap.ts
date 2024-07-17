import { Container, ContainerModule, interfaces } from "inversify";
import { App } from "./app";
import {
  DI,
  ExceptionFilter,
  IDefaultApp,
  IExceptionFilter,
  IDefaultController,
} from "@sps/shared-backend-api";
import { MiddlewaresGeneric } from "@sps/middlewares";
import { Controller } from "./controller";

const bindings = new ContainerModule((bind: interfaces.Bind) => {
  bind<IExceptionFilter>(DI.IExceptionFilter).to(ExceptionFilter);
  bind<IDefaultApp<MiddlewaresGeneric>>(DI.App).to(App);
  bind<IDefaultController>(DI.IController).to(Controller);
});

export async function bootstrap() {
  const container = new Container();
  container.load(bindings);
  const app = container.get<IDefaultApp<MiddlewaresGeneric>>(DI.App);
  await app.init();

  return { app };
}
