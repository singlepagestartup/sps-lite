import { RtkAction, useGlobalActionsStore } from "@sps/shared-store";
import { useEffect, useMemo, useState } from "react";

export interface IHookProps {
  storeName: string;
  actionFilter: (action: RtkAction) => boolean;
  callbackFunction: (action: RtkAction) => void;
}

/**
 * @deprecated Use "@sps/shared-frontend-hooks" instead
 */
export function useHook(props: IHookProps) {
  const renderTimestamp = useMemo(() => Date.now(), []);

  const [triggeredActions, setTriggeredActions] = useState<string[]>();

  const globalActionsByName = useGlobalActionsStore((store) =>
    store.getActionsFromStoreByName(props.storeName),
  );

  useEffect(() => {
    globalActionsByName.forEach(async (action) => {
      if (action.meta.fulfilledTimeStamp < renderTimestamp) {
        return;
      }

      if (
        props.actionFilter(action) &&
        !triggeredActions?.includes(action.meta.requestId)
      ) {
        if (triggeredActions) {
          setTriggeredActions([...triggeredActions, action.meta.requestId]);
        } else {
          setTriggeredActions([action.meta.requestId]);
        }

        props.callbackFunction(action);
      }
    });
  }, [globalActionsByName, triggeredActions, props]);

  return globalActionsByName;
}
