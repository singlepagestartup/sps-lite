import { Seeder } from "./Seeder";

export async function service(props: any) {
  const seeder = new Seeder();
  const seedResult = await seeder.seed(props);

  return seedResult;
}
