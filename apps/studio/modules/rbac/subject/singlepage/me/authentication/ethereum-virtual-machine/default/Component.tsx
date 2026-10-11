"use client";
import { twMerge as mergeButtonClass } from "tailwind-merge";

import {
  type ButtonHTMLAttributes as ButtonControlProps,
  useEffect,
  useState,
} from "react";
export interface IEthereumVirtualMachineProps {
  variant?: string;
  initialState?: "idle" | "authorize" | "complete" | "error";
  walletAddress?: string;
  onSuccess?: () => void;
}
export function Component({
  variant = "me-authentication-ethereum-virtual-machine-default",
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
      data-ds-block="rbac.subject.me-authentication-ethereum-virtual-machine-default"
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
function Button({
  variant = "primary",
  type = "button",
  className,
  ...props
}: ButtonControlProps<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "plain" | "danger";
  ref?: React.Ref<HTMLButtonElement>;
}) {
  const appearances = {
    primary: "bg-sps-green text-sps-graphite enabled:hover:brightness-95",
    secondary:
      "border border-sps-line bg-sps-white text-sps-graphite enabled:hover:bg-sps-grey",
    plain: "text-sps-muted enabled:hover:text-sps-graphite",
    danger:
      "border border-sps-danger-line bg-sps-danger-surface text-sps-danger enabled:hover:brightness-95",
  };
  return (
    <button
      {...props}
      type={type}
      className={mergeButtonClass(
        "inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold transition motion-reduce:transition-none enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sps-graphite",
        appearances[variant],
        className,
      )}
    />
  );
}
