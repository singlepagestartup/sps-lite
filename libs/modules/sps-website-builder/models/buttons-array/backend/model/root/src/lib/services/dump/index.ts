import { Dumper } from "./Dumper";

export async function service(props?: { data: any }) {
  const dumper = new Dumper();
  const dumpResult = await dumper.dump();
}
