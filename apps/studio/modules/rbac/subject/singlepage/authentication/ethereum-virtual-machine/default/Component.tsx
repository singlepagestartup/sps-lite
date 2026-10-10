"use client";

import { Component as WebsiteBuilderModuleButton } from "../../../../../../website-builder/button/index";
import {
  forwardRef as forwardRefControl,
  type ButtonHTMLAttributes as ButtonControlProps,
} from "react";
import { useEffect, useState } from "react";
export interface IEthereumVirtualMachineProps {
  variant?: string;
  initialState?: "idle" | "authorize" | "complete" | "error";
  walletAddress?: string;
  onSuccess?: () => void;
}
export function Component({
  variant = "authentication-ethereum-virtual-machine-default",
  initialState = "idle",
  walletAddress = "0x1234567890abcdef1234567890abcdef12345678",
  onSuccess,
}: IEthereumVirtualMachineProps = {}) {
  const [state, setState] = useState(initialState);
  useEffect(() => setState(initialState), [initialState]);
  return (
    <section
      aria-label="Ethereum Virtual Machine authentication"
      className="min-w-0 rounded-2xl border border-sps-line bg-sps-white p-5 text-sps-graphite"
      data-ds-block="rbac.subject.authentication-ethereum-virtual-machine-default"
      data-module="rbac"
      data-model="subject"
      data-variant={variant}
    >
      <h2 className="text-lg font-semibold">Sign in with a wallet</h2>
      <p className="mt-2 text-sm leading-6 text-sps-muted">
        Connect an EVM wallet and confirm ownership with a signature.
      </p>
      <p className="mt-2 text-xs text-sps-muted">
        Local preview. No wallet connection, signature or transaction is
        requested.
      </p>
      <div className="mt-5 grid gap-4">
        {state === "idle" && (
          <Button
            type="button"
            className="w-fit"
            onClick={() => setState("authorize")}
          >
            Connect wallet
          </Button>
        )}
        {state === "authorize" && (
          <>
            <div className="rounded-xl bg-sps-grey p-4">
              <p className="text-xs text-sps-muted">Connected wallet</p>
              <p className="mt-2 break-all font-mono text-sm">
                {walletAddress}
              </p>
              <p className="mt-3 text-sm leading-6">
                Approve the sign-in signature to verify ownership. It does not
                authorize a payment.
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
                Approve signature
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
            Wallet authentication completed in this preview.
          </p>
        )}
        {state === "error" && (
          <>
            <p role="alert" className="text-sm text-sps-danger">
              Wallet authentication was not completed. Try connecting again.
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
