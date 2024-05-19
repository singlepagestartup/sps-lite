import { Seeder } from "./Seeder";

export async function service() {
  const seeder = new Seeder();
  const seedResult = await seeder.seed();

  return seedResult;
}
