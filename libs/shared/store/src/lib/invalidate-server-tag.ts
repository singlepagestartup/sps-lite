import { FRONTEND_URL } from "@sps/shared-frontend-utils-client";
import { globalActionsStore } from "./global-actions-store";

export async function invalidateServerTag({ tag }: { tag: string }) {
  const id = Math.random().toString(36).substring(7);
  globalActionsStore.getState().addRevalidatePromise(id);

  await fetch(`${FRONTEND_URL}/api/revalidate?tag=${tag}`);

  globalActionsStore.getState().removeRevalidatePromise(id);
}
