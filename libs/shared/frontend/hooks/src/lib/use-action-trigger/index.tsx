import {
  Action,
  useGlobalActionsStore,
} from "@sps/shared-frontend-client-store";
import { useEffect, useMemo, useState } from "react";

export interface IHookProps {
  storeName: string;
  actionFilter: (action: Action) => boolean;
  callbackFunction: (action: Action) => void;
}

export function useHook(props: IHookProps) {
  const renderTimestamp = useMemo(() => Date.now(), []);

  const [triggeredActions, setTriggeredActions] = useState<string[]>();

  const globalActionsByName = useGlobalActionsStore((store) => {
    return store.getActionsFromStoreByName(props.storeName);
  });

  useEffect(() => {
    globalActionsByName?.forEach(async (action) => {
      if (
        action.meta?.["fulfilledTimeStamp"] &&
        action.meta?.["fulfilledTimeStamp"] < renderTimestamp
      ) {
        return;
      }

      if (
        props.actionFilter(action) &&
        !triggeredActions?.includes(
          action.meta?.["requestId"] || action?.["requestId"],
        )
      ) {
        if (triggeredActions) {
          setTriggeredActions([
            ...triggeredActions,
            action.meta?.["requestId"] || action?.["requestId"],
          ]);
        } else {
          setTriggeredActions([
            action.meta?.["requestId"] || action?.["requestId"],
          ]);
        }

        props.callbackFunction(action);
      }
    });
  }, [globalActionsByName, triggeredActions, props]);

  return globalActionsByName;
}
