"use client";
import { useCallback, useId, useState, type ReactNode } from "react";
import { Button } from "../../../../../../../workspace/design/singlepage/interface-kit/primitives";
import { aiChatAccount } from "../../../../../../../workspace/utils/products/ai-chat-account-fixture";
import { useStudioAccount } from "../../../account/Account";
import { Component as EmailAndPasswordAuthenticationForm } from "../../email-and-password/authentication-form/default";
import { Component as EthereumVirtualMachine } from "../../ethereum-virtual-machine/default";
import { Component as OAuthAuthorization } from "../../oauth/authorization/default";

export type TAuthenticationMethod =
  | "email-and-password"
  | "ethereum-virtual-machine"
  | "oauth";
export interface ISelectMethodProps {
  initialMethod?: TAuthenticationMethod;
  renderEmailAndPassword?: (onSuccess: (email: string) => void) => ReactNode;
  onSuccess?: (email: string) => void;
}

export function Component({
  initialMethod = "email-and-password",
  renderEmailAndPassword,
  onSuccess,
}: ISelectMethodProps = {}) {
  const [method, setMethod] = useState(initialMethod);
  const id = useId();
  const { account, signIn } = useStudioAccount();
  const previewEmail = account.email ?? aiChatAccount.email!;
  const complete = useCallback(
    (email: string) => {
      signIn(email);
      onSuccess?.(email);
    },
    [signIn, onSuccess],
  );
  const methods: { value: TAuthenticationMethod; label: string }[] = [
    { value: "email-and-password", label: "Email and password" },
    { value: "ethereum-virtual-machine", label: "EVM wallet" },
    { value: "oauth", label: "OAuth" },
  ];
  return (
    <div
      className="min-w-0 space-y-5"
      data-ds-block="rbac.subject.authentication-select-method-default"
    >
      <div
        role="tablist"
        aria-label="Authentication method"
        className="flex flex-wrap gap-2"
      >
        {methods.map((item, index) => (
          <Button
            key={item.value}
            type="button"
            role="tab"
            id={`${id}-tab-${item.value}`}
            aria-selected={method === item.value}
            aria-controls={`${id}-panel-${item.value}`}
            tabIndex={method === item.value ? 0 : -1}
            variant={method === item.value ? "primary" : "secondary"}
            onClick={() => setMethod(item.value)}
            onKeyDown={(event) => {
              const next =
                event.key === "ArrowRight"
                  ? (index + 1) % methods.length
                  : event.key === "ArrowLeft"
                    ? (index + methods.length - 1) % methods.length
                    : event.key === "Home"
                      ? 0
                      : event.key === "End"
                        ? methods.length - 1
                        : undefined;
              if (next === undefined) return;
              event.preventDefault();
              setMethod(methods[next].value);
              (
                event.currentTarget.parentElement?.children[next] as
                  | HTMLElement
                  | undefined
              )?.focus();
            }}
          >
            {item.label}
          </Button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={`${id}-panel-email-and-password`}
        aria-labelledby={`${id}-tab-email-and-password`}
        hidden={method !== "email-and-password"}
      >
        {renderEmailAndPassword ? (
          renderEmailAndPassword(complete)
        ) : (
          <EmailAndPasswordAuthenticationForm onSuccess={complete} />
        )}
      </div>
      <div
        role="tabpanel"
        id={`${id}-panel-ethereum-virtual-machine`}
        aria-labelledby={`${id}-tab-ethereum-virtual-machine`}
        hidden={method !== "ethereum-virtual-machine"}
      >
        <EthereumVirtualMachine onSuccess={() => complete(previewEmail)} />
      </div>
      <div
        role="tabpanel"
        id={`${id}-panel-oauth`}
        aria-labelledby={`${id}-tab-oauth`}
        hidden={method !== "oauth"}
      >
        <OAuthAuthorization
          accountEmail={previewEmail}
          onSuccess={() => complete(previewEmail)}
        />
      </div>
    </div>
  );
}
