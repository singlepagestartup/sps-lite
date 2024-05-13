"use client";
import "client-only";

import { Component } from "./Component";
import { ErrorBoundary } from "@sps/ui-adapter";
import { Skeleton } from "./Skeleton";
import { Error } from "./Error";
import { IComponentProps } from "./interface";
import { api } from "@sps/sps-rbac-models-user-frontend-api-client";
import { useEffect } from "react";
import sha256 from "crypto-js/sha256";
import Cookies from "js-cookie";

export default function Client(props: IComponentProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const auth = localStorage.getItem("username");

      if (!auth) {
        const username = sha256(`${Math.random() * 10e5}`).toString();

        localStorage.setItem("username", username);
        Cookies.set("username", username);
      }
    }
  }, []);

  return <ErrorBoundary fallback={Error}>{props.children}</ErrorBoundary>;
}
