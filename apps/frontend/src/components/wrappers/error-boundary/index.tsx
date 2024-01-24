"use client";

import React, { Component, ErrorInfo, FC, ReactNode } from "react";
import Errors from "~components/error";
import * as Sentry from "@sentry/browser";

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    environment: process.env.NODE_ENV,
  });
}

interface Props {
  children?: ReactNode;
  fallback?: any;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // console.error("Uncaught error:", error, errorInfo);
    this.setState({ error });
    this.setState({ hasError: true });

    if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
      Sentry.withScope((scope) => {
        scope.setExtras(errorInfo as any);
        const eventId = Sentry.captureException(error);
        Sentry.captureMessage(`${eventId} | ${error.message}`, "error");
      });
    }
  }

  public render() {
    // console.log("🚀 ~ render ~ this.state:", this.state);

    if (this.state.hasError) {
      const Comp = this.props.fallback;
      // console.log("🚀 ~ render ~ Comp:", Comp);

      if (!Comp) {
        return <Errors {...this.state} variant="simple" />;
      }

      return <Comp {...this.state} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
