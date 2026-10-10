"use client";

import { Component as WebsiteBuilderModuleButton } from "../../../../../../../website-builder/button/index";
import {
  forwardRef as forwardRefControl,
  type ButtonHTMLAttributes as ButtonControlProps,
} from "react";
import { useEffect, useState } from "react";
export interface IOAuthAuthorizationProps {
  initialState?: "idle" | "authorize" | "complete" | "error";
  providerName?: string;
  accountEmail?: string;
  onSuccess?: () => void;
}
export function Component({
  initialState = "idle",
  providerName = "Google",
  accountEmail = "preview@example.com",
  onSuccess,
}: IOAuthAuthorizationProps = {}) {
  const [state, setState] = useState(initialState);
  useEffect(() => setState(initialState), [initialState]);
  return (
    <section
      aria-label="OAuth authorization"
      className="min-w-0 rounded-2xl border border-sps-line bg-sps-white p-5 text-sps-graphite"
      data-ds-block="rbac.subject.authentication-oauth-authorization-default"
    >
      <h2 className="text-lg font-semibold">Continue with {providerName}</h2>
      <p className="mt-2 text-sm leading-6 text-sps-muted">
        Choose your provider account and authorize sign-in.
      </p>
      <p className="mt-2 text-xs text-sps-muted">
        Local preview. No provider is contacted and no access is granted.
      </p>
      <div className="mt-5 grid gap-4">
        {state === "idle" && (
          <Button
            type="button"
            className="w-fit"
            onClick={() => setState("authorize")}
          >
            Continue with {providerName}
          </Button>
        )}
        {state === "authorize" && (
          <>
            <div className="rounded-xl bg-sps-grey p-4">
              <p className="text-xs text-sps-muted">{providerName} account</p>
              <p className="mt-2 break-all text-sm font-medium">
                {accountEmail}
              </p>
              <p className="mt-3 text-sm leading-6">
                Confirm this account to continue to your workspace.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                type="button"
                onClick={() => {
                  setState("complete");
                  onSuccess?.();
                }}
              >
                Authorize {providerName}
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={() => setState("idle")}
              >
                Cancel
              </Button>
            </div>
          </>
        )}
        {state === "complete" && (
          <p role="status" className="text-sm">
            OAuth authorization completed in this preview.
          </p>
        )}
        {state === "error" && (
          <>
            <p role="alert" className="text-sm text-sps-danger">
              Authorization was not completed. Try signing in again.
            </p>
            <Button
              type="button"
              variant="secondary"
              className="w-fit"
              onClick={() => setState("idle")}
            >
              Try again
            </Button>
          </>
        )}
      </div>
    </section>
  );
}
const Button = forwardRefControl<
  HTMLButtonElement,
  ButtonControlProps<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "plain" | "danger";
  }
>(function Button({ variant = "primary", ...props }, ref) {
  return (
    <WebsiteBuilderModuleButton
      {...props}
      variant="control"
      appearance={variant}
      ref={ref}
    />
  );
});
