"use client";

import { Component as WebsiteBuilderModuleButton } from "../../../../../../website-builder/button/index";
import {
  forwardRef as forwardRefControl,
  type ButtonHTMLAttributes as ButtonControlProps,
  useCallback,
  useId,
  useState,
  type ReactNode,
} from "react";
import { aiChatAccount } from "../../../account/fixture";
import { useStudioAccount } from "../../../account/Account";
import { Component as EmailAndPasswordAuthenticationForm } from "../../email-and-password/authentication-form/default/index";
import { Component as EthereumVirtualMachine } from "../../ethereum-virtual-machine/default/index";
import { Component as OAuthAuthorization } from "../../oauth/authorization/default/index";
export type TAuthenticationMethod =
  | "email-and-password"
  | "ethereum-virtual-machine"
  | "oauth";
export interface ISelectMethodProps {
  variant?: string;
  initialMethod?: TAuthenticationMethod;

  onSuccess?: (email: string) => void;
}
export function Component({
  variant = "authentication-select-method-default",
  initialMethod = "email-and-password",
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
  const methods: {
    value: TAuthenticationMethod;
    label: string;
  }[] = [
    { value: "email-and-password", label: "Email and password" },
    { value: "ethereum-virtual-machine", label: "EVM wallet" },
    { value: "oauth", label: "OAuth" },
  ];
  return (
    <EmailAndPasswordAuthenticationForm
      variant={variant}
      onSuccess={complete}
      methodSelector={
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
      }
      showEmailFields={method === "email-and-password"}
      emailPanelProps={{
        role: "tabpanel",
        id: `${id}-panel-email-and-password`,
        "aria-labelledby": `${id}-tab-email-and-password`,
      }}
      methodContent={
        <>
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
        </>
      }
    />
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
