"use client";
import "client-only";

import { IComponentProps } from "./interface";
import store from "../../redux";
import { slice as authSlice } from "../../redux/slices/auth/slice";
import { useEffect } from "react";

// default is required for dynamic import
export function Component(props: IComponentProps) {
  useEffect(() => {
    store.dispatch(authSlice.actions.setAnonymusUsername());
  }, []);

  return <>{props.children}</>;
}
