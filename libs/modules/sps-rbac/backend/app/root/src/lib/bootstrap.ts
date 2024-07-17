import { MiddlewaresGeneric } from "@sps/middlewares";
import { App } from "./app";
import {
  DI,
  ExceptionFilter,
  IDefaultApp,
  IExceptionFilter,
} from "@sps/shared-backend-api";
import { Container, ContainerModule, interfaces } from "inversify";

const bindings = new ContainerModule((bind: interfaces.Bind) => {
  bind<IExceptionFilter>(DI.IExceptionFilter).to(ExceptionFilter);
  bind<IDefaultApp<MiddlewaresGeneric>>(DI.App).to(App);
});

export async function bootstrap() {
  const container = new Container();
  container.load(bindings);

  const app = container.get<IDefaultApp<MiddlewaresGeneric>>(DI.App);
  await app.init();

  return { app };
}
