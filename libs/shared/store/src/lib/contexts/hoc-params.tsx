"use client";

import { createContext, useReducer, useContext } from "react";

const HocParamsStateContext = createContext<any>(null);
const HocParamsDispatchContext = createContext<any>(null);

/**
 * HOC params reducer
 * For standard usage of HOC params context
 */
function hocParamsReducer(
  state: { [key: string]: any },
  action: {
    type: "set" | "delete";
    payload: { key: string; value?: any };
  },
) {
  if (action.type === "set") {
    return {
      ...state,
      [action.payload.key]: action.payload.value,
    };
  } else if (action.type === "delete") {
    const newState = { ...state };
    delete newState[action.payload.key];

    return newState;
  }
}

/**
 * HOC params provider
 *
 * Context for passing params to HOC
 * For example we can pass submit function from one component in page-blocks to
 * modal component in page-blocks
 *
 * @param children
 * @constructor
 * @return {JSX.Element}
 *
 */
function HocParamsProvider({ children }: { children: any }) {
  const [state, dispatch] = useReducer(hocParamsReducer, {} as never);

  return (
    <HocParamsStateContext.Provider value={state}>
      <HocParamsDispatchContext.Provider value={dispatch}>
        {children}
      </HocParamsDispatchContext.Provider>
    </HocParamsStateContext.Provider>
  );
}

function useHocParamsState() {
  const context = useContext(HocParamsStateContext);

  return context;
}

function useHocParamsDispatch() {
  const context = useContext(HocParamsDispatchContext);

  return context;
}

export { HocParamsProvider, useHocParamsState, useHocParamsDispatch };
