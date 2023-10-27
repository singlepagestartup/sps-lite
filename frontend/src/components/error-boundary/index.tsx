"use client";

import React, { Component, ErrorInfo, FC, ReactNode } from "react";
import Errors from "~components/errors";
import { ErrorBoundary as SentryErrorBoundary } from "@sentry/nextjs";

class ErrorBoundary extends SentryErrorBoundary {
  constructor(props: any) {
    super(props);
  }

  public render(): any {
    if (this.state.error) {
      const Comp = this.props.fallback;

      if (!Comp) {
        return (
          <Errors
            variant="simple"
            __component="page-blocks.error-block"
            title={this.state.error?.message}
            className=""
          />
        );
      }

      if (typeof Comp === "function") {
        return (
          <Comp
            {...this.state}
            {...this.props}
            resetError={super.resetErrorBoundary}
          />
        );
      }
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
