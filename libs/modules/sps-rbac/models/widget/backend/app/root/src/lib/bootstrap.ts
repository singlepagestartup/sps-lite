import { Container, ContainerModule, interfaces } from "inversify";
import {
  DI,
  DefaultApp,
  ExceptionFilter,
  DefaultController,
  DefaultService,
  DefaultRepository,
  type IDefaultApp,
  type IExceptionFilter,
  type IDefaultController,
  type IDefaultService,
  type IDefaultRepository,
  type IDefaultDataStore,
} from "@sps/shared-backend-api";
import { db } from "@sps/sps-rbac/backend/db/root";
import { Table } from "@sps/sps-rbac/models/widget/backend/schema/root";
import {
  DataStore,
  Entity,
} from "@sps/sps-rbac/models/widget/backend/model/root";
import { Env } from "hono";

const bindings = new ContainerModule((bind: interfaces.Bind) => {
  bind<IExceptionFilter>(DI.IExceptionFilter).to(ExceptionFilter);
  bind<IDefaultApp<Env>>(DI.IApp).to(DefaultApp);
  bind<IDefaultController<typeof db, typeof Table, Entity>>(DI.IController).to(
    DefaultController,
  );
  bind<IDefaultDataStore<typeof db, typeof Table>>(DI.IDataStore).to(DataStore);
  bind<IDefaultRepository<typeof db, typeof Table, Entity>>(DI.IRepository).to(
    DefaultRepository<typeof db, typeof Table, Entity>,
  );
  bind<IDefaultService<typeof db, typeof Table, Entity>>(DI.IService).to(
    DefaultService<typeof db, typeof Table, Entity>,
  );
});

export async function bootstrap() {
  const container = new Container({
    skipBaseClassChecks: true,
  });
  container.load(bindings);
  const app = container.get<IDefaultApp<Env>>(DI.IApp);
  await app.init();

  return { app };
}
