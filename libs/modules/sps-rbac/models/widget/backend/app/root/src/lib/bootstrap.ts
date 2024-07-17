import { Container, ContainerModule, interfaces } from "inversify";
import { App } from "./app";
import {
  DI,
  ExceptionFilter,
  IDefaultApp,
  IExceptionFilter,
  IDefaultController,
  IDefaultModel,
  IDefaultService,
  DefaultService,
} from "@sps/shared-backend-api";
import { MiddlewaresGeneric } from "@sps/middlewares";
import { Controller } from "./controller";
import { Model } from "@sps/sps-rbac/models/widget/backend/model/root";

const bindings = new ContainerModule((bind: interfaces.Bind) => {
  bind<IExceptionFilter>(DI.IExceptionFilter).to(ExceptionFilter);
  bind<IDefaultApp<MiddlewaresGeneric>>(DI.IApp).to(App);
  bind<IDefaultController>(DI.IController).to(Controller);
  bind<IDefaultModel>(DI.IModel).to(Model);
  bind<IDefaultService>(DI.IService).to(DefaultService);
});

export async function bootstrap() {
  const container = new Container();
  container.load(bindings);
  const app = container.get<IDefaultApp<MiddlewaresGeneric>>(DI.IApp);
  await app.init();

  return { app };
}
