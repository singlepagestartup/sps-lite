import { Container, ContainerModule, interfaces } from "inversify";
import {
  DI,
  DefaultApp,
  ExceptionFilter,
  DefaultController,
  DefaultService,
  DefaultRepository,
  type IDefaultDatabase,
  DefaultEntity,
  type IDefaultEntity,
  type IDefaultApp,
  type IExceptionFilter,
  type IDefaultController,
  type IDefaultService,
  type IDefaultRepository,
  type IDefaultDataStore,
} from "@sps/shared-backend-api";
import { db, schema } from "@sps/sps-rbac/backend/db/root";
import { Table } from "@sps/sps-rbac/models/role/backend/schema/root";
import {
  Entity,
  DataStore,
  Database,
} from "@sps/sps-rbac/models/role/backend/model/root";
import { Env } from "hono";

const bindings = new ContainerModule((bind: interfaces.Bind) => {
  bind<IExceptionFilter>(DI.IExceptionFilter).to(ExceptionFilter);
  bind<
    IDefaultApp<
      Env,
      typeof db,
      typeof Table,
      Entity<typeof db, typeof Table, (typeof Table)["$inferInsert"]>
    >
  >(DI.IApp).to(DefaultApp);
  bind<IDefaultDatabase<typeof schema, typeof Table>>(DI.IDatabase).to(
    Database,
  );
  bind<
    IDefaultController<
      typeof db,
      typeof Table,
      Entity<typeof db, typeof Table, (typeof Table)["$inferInsert"]>
    >
  >(DI.IController).to(DefaultController);
  bind<IDefaultDataStore<typeof Table, typeof schema>>(DI.IDataStore).to(
    DataStore,
  );
  bind<IDefaultRepository<typeof db, typeof Table>>(DI.IRepository).to(
    DefaultRepository<typeof db, typeof Table>,
  );
  bind<
    IDefaultService<
      typeof db,
      typeof Table,
      Entity<typeof db, typeof Table, (typeof Table)["$inferInsert"]>
    >
  >(DI.IService).to(
    DefaultService<
      typeof db,
      typeof Table,
      Entity<typeof db, typeof Table, (typeof Table)["$inferInsert"]>
    >,
  );
  bind<
    IDefaultEntity<
      typeof db,
      typeof Table,
      Entity<typeof db, typeof Table, (typeof Table)["$inferInsert"]>
    >
  >(DI.IEntity).to(
    Entity<
      typeof db,
      typeof Table,
      Entity<typeof db, typeof Table, (typeof Table)["$inferInsert"]>
    >,
  );
});

export async function bootstrap() {
  const container = new Container({
    skipBaseClassChecks: true,
  });
  container.load(bindings);
  const app = container.get<
    IDefaultApp<
      Env,
      typeof db,
      typeof Table,
      Entity<typeof db, typeof Table, (typeof Table)["$inferInsert"]>
    >
  >(DI.IApp);
  await app.init();

  const database = container.get<IDefaultDatabase<typeof schema, typeof Table>>(
    DI.IDatabase,
  );
  const r = await database.find();

  return { app };
}
