import { HOST_URL } from "@sps/shared-utils";
import { globalActionsStore } from "./global-actions-store";

export async function invalidateServerTag({ tag }: { tag: string }) {
  const id = Math.random().toString(36).substring(7);
  globalActionsStore.getState().addRevalidatePromise(id);

  await fetch(`${HOST_URL}/api/revalidate?tag=${tag}`);

  globalActionsStore.getState().removeRevalidatePromise(id);
}
