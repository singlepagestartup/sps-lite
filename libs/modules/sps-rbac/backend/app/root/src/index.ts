import { bootstrap } from "./lib/bootstrap";
const { app } = await bootstrap();
export { app };
export { ModuleSeeder } from "./lib/seeder/ModuleSeeder";
export { Dumper } from "./lib/Dumper";
