"use client";
import "client-only";

import { Component } from "./Component";
import { ErrorBoundary } from "@sps/ui-adapter";
import { Skeleton } from "./Skeleton";
import { Error } from "./Error";
import { IComponentProps } from "./interface";
import { api } from "@sps/sps-rbac/models/authentication/frontend/api/client";
import { useRouter } from "next/navigation";

export default function Client(props: IComponentProps) {
  const router = useRouter();

  const { data, isFetching, isLoading } = api.isAuthenticated({});

  if (isFetching || isLoading) {
    return <Skeleton {...props} />;
  }

  if (!data) {
    // router.push("/login");

    return null;
  }

  return (
    <ErrorBoundary fallback={Error}>
      <Component {...props} />
    </ErrorBoundary>
  );
}
