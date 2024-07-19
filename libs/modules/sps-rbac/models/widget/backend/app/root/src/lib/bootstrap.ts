import { Container, ContainerModule, interfaces } from "inversify";
import {
  DI,
  DefaultApp,
  ExceptionFilter,
  DefaultController,
  DefaultService,
  DefaultRepository,
  FindByIdHandler,
  FindHandler,
  DefaultEntity,
  DefaultDatabase,
  type IDefaultEntity,
  type IDefaultApp,
  type IExceptionFilter,
  type IDefaultController,
  type IDefaultService,
  type IDefaultRepository,
  type IDefaultStore,
  IDefaultDatabase,
} from "@sps/shared-backend-api";
import { db } from "@sps/sps-rbac/backend/db/root";
import { Table } from "@sps/sps-rbac/models/widget/backend/schema/root";
import {
  DataStore,
  Entity,
  Database,
  Repository,
} from "@sps/sps-rbac/models/widget/backend/model/root";
import { Env } from "hono";

type SCHEMA = (typeof Table)["$inferInsert"];

const bindings = new ContainerModule((bind: interfaces.Bind) => {
  bind<IExceptionFilter>(DI.IExceptionFilter).to(ExceptionFilter);
  bind<IDefaultApp<Env, SCHEMA>>(DI.IApp).to(DefaultApp);
  bind<IDefaultController<SCHEMA>>(DI.IController).to(DefaultController);
  bind<IDefaultStore<SCHEMA>>(DI.IStore).to(DataStore);
  bind<IDefaultRepository<SCHEMA>>(DI.IRepository).to(Repository<SCHEMA>);
  bind<IDefaultService<SCHEMA>>(DI.IService).to(DefaultService<SCHEMA>);
  bind<IDefaultEntity<SCHEMA>>(DI.IEntity).to(Entity);
  bind<IDefaultDatabase<SCHEMA, any, any>>(DI.IDatabase).to(Database);
});

export async function bootstrap() {
  const container = new Container({
    skipBaseClassChecks: true,
  });
  container.load(bindings);
  const app = container.get<IDefaultApp<Env, SCHEMA>>(DI.IApp);
  // const controller = container.get<
  //   IDefaultController<
  //     typeof db,
  //     typeof Table,
  //     Entity<typeof db, typeof Table, (typeof Table)["$inferInsert"]>
  //   >
  // >(DI.IController);
  // const entity = container.get<
  //   IDefaultEntity<
  //     typeof db,
  //     typeof Table,
  //     Entity<typeof db, typeof Table, (typeof Table)["$inferInsert"]>
  //   >
  // >(DI.IEntity);
  // const r = await entity.find();
  // controller.routes
  // const newEntity = new Entity("lupa");
  // const newItem = repository.create({
  //   sdfs: "sdf",
  // });

  await app.init();

  return { app };
}
