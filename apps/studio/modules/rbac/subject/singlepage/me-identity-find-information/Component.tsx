"use client";
import { Component as WebsiteBuilderModuleFeature } from "../../../../website-builder/feature/index";

import { forwardRef as forwardRef } from "react";
import { type SVGProps as SVGProps } from "react";
import { twMerge as twMerge } from "tailwind-merge";
import { Component as WebsiteBuilderModuleButton } from "../../../../website-builder/button/index";
import {
  forwardRef as forwardRefControl,
  type ButtonHTMLAttributes as ButtonControlProps,
} from "react";
import type IconGlyphs from "../../../../website-builder/feature/singlepage/icon/icons.json";
import type { IIdentityFlowProps } from "../../../identity/singlepage/card-default/Component";
import { Component as AuthenticationProviderConnect } from "../authentication/provider-connect/default/index";
import { Component as AuthenticationAccountChange } from "../authentication/email-and-password/account-change/default/index";
import { Component as RbacModuleIdentity } from "../../../identity/index";
import { useCallback, useEffect, useState } from "react";
import { useStudioAccount } from "../account/Account";
import { aiChatAccount } from "../account/fixture";
import {
  defaultSettingsIdentities,
  identityProviders,
  type IdentityAction,
  type RbacIdentity,
} from "../../../shared";
interface IModuleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}
type IconName = keyof typeof IconGlyphs;
function createIcon(name: IconName) {
  const Component = forwardRef<SVGSVGElement, IModuleIconProps>(
    function ModuleGlyph({ className, size = 20, children, ...props }, ref) {
      return (
        <span className="contents">
          <Icon
            name={name}
            className={twMerge("h-5 w-5", className)}
            svgProps={{ ...props, ref, width: size, height: size }}
          />
        </span>
      );
    },
  );
  Component.displayName = `Phosphor(${name})`;
  return Component;
}
function Icon(props: {
  name: keyof typeof IconGlyphs;
  size?: 20 | 24;
  className?: string;
  svgProps?: React.SVGProps<SVGSVGElement>;
}) {
  return <WebsiteBuilderModuleFeature {...props} variant="icon" />;
}

export interface SubjectMeIdentityFindInformationProps {
  variant?: string;
  title?: string;
  description?: string;
  emptyLabel?: string;
  identities?: RbacIdentity[];
}
export function SubjectMeIdentityFindInformation(
  props: SubjectMeIdentityFindInformationProps = {},
) {
  const { title, description, emptyLabel } = {
    ...defaultSubjectMeIdentityFindInformationProps,
    ...props,
  };
  const session = useStudioAccount();
  const email = session.account.email ?? aiChatAccount.email;
  const [identities, setIdentities] = useState(
    () =>
      props.identities ??
      defaultSettingsIdentities.map((item) => ({
        ...item,
        email: item.email ? email : "",
        account:
          item.provider === "telegram" ? "@alex" : item.account ? email : "",
      })),
  );
  const [provider, setProvider] = useState<string>();
  const [adding, setAdding] = useState(false);
  const [result, setResult] = useState("");
  useEffect(() => {
    if (!props.identities)
      setIdentities((current) =>
        current.map((item) =>
          item.provider === "email_and_password" ? { ...item, email } : item,
        ),
      );
  }, [email, props.identities]);
  const { updateEmail } = session;
  const handleUpdate = useCallback(
    (identity: RbacIdentity) => {
      if (!props.identities && identity.provider === "email_and_password")
        updateEmail(identity.email);
      setIdentities((current) =>
        current.map((item) => (item.id === identity.id ? identity : item)),
      );
    },
    [updateEmail, props.identities],
  );
  const renderFlow = useCallback(
    ({ identity, action, onClose, onUpdate }: IIdentityFlowProps) =>
      action === "reconnect" ? (
        <AuthenticationProviderConnect
          key={action}
          provider={identity.provider}
          account={identity.account || identity.email}
          onCancel={onClose}
          onComplete={(account) =>
            onUpdate({
              ...identity,
              account,
              email:
                identity.provider === "oauth_google" ? account : identity.email,
            })
          }
        />
      ) : (
        <AuthenticationAccountChange
          key={action}
          kind={action === "change-email" ? "email" : "password"}
          email={identity.email}
          onCancel={onClose}
          onComplete={(email) => {
            if (email) onUpdate({ ...identity, email });
          }}
        />
      ),
    [],
  );
  const handleAction = useCallback(
    (identity: RbacIdentity, action: IdentityAction) => {
      if (action.key !== "delete") return;
      setIdentities((current) =>
        current.filter((item) => item.id !== identity.id),
      );
      setResult("Sign-in method removed in this preview.");
    },
    [],
  );
  return (
    <article
      className="min-w-0 rounded-2xl border border-sps-line bg-sps-white p-4 font-sps text-sps-graphite sm:p-6"
      data-ds-block="rbac.subject.me-identity-find-information"
      data-ds-imports="rbac.identity.card-default rbac.subject.authentication-provider-connect-default"
      data-ds-layer="singlepage"
      data-module="rbac"
      data-model="subject"
      data-variant={props.variant ?? "me-identity-find-information"}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-sps-muted">
            {description}
          </p>
        </div>
        <span className="rounded-full bg-sps-grey px-3 py-1.5 text-xs text-sps-muted">
          {identities.length} connected
        </span>
      </div>
      <div className="mt-6 space-y-4">
        {identities.length === 0 ? (
          <p className="rounded-xl border border-dashed border-sps-line p-6 text-sm text-sps-muted">
            {emptyLabel}
          </p>
        ) : (
          identities.map((identity) => (
            <RbacModuleIdentity
              variant="card-default"
              identity={identity}
              key={identity.id}
              renderFlow={renderFlow}
              onUpdate={handleUpdate}
              onAction={handleAction}
            />
          ))
        )}
      </div>
      {result && (
        <p role="status" className="mt-4 text-sm">
          {result}
        </p>
      )}
      <div className="mt-6 border-t border-sps-line pt-5">
        <Button
          variant="secondary"
          onClick={() => {
            setAdding((value) => !value);
            setProvider(undefined);
          }}
          aria-expanded={adding}
        >
          <Plus className="size-4" />
          Add sign-in method
        </Button>
        {adding && (
          <div className="mt-5">
            <h3 className="text-sm font-semibold">Choose a method</h3>
            <div className="mt-3 grid min-w-0 gap-2 sm:grid-cols-2">
              {identityProviders.map((item) => {
                const Glyph = item.icon;
                const connected = identities.some(
                  (identity) => identity.provider === item.key,
                );
                return (
                  <button
                    key={item.key}
                    disabled={connected}
                    onClick={() => setProvider(item.key)}
                    type="button"
                    className="flex min-h-14 items-center gap-3 rounded-xl border border-sps-line px-4 py-3 text-left text-sm hover:bg-sps-grey focus-visible:outline-2 disabled:cursor-default disabled:text-sps-muted"
                  >
                    <Glyph className="size-5 shrink-0" />
                    <span className="min-w-0 flex-1">{item.title}</span>
                    {connected && <span className="text-xs">Connected</span>}
                  </button>
                );
              })}
            </div>
            {provider && (
              <AuthenticationProviderConnect
                key={provider}
                provider={provider}
                onCancel={() => setProvider(undefined)}
                onComplete={(account) => {
                  if (provider === "email_and_password" && !props.identities)
                    updateEmail(account);
                  const date = new Date().toISOString();
                  setIdentities((current) => [
                    ...current,
                    {
                      id: crypto.randomUUID(),
                      provider,
                      email:
                        provider === "oauth_google" ||
                        provider === "email_and_password"
                          ? account
                          : "",
                      account,
                      variant: "default",
                      createdAt: date,
                      updatedAt: date,
                    },
                  ]);
                  setAdding(false);
                  setProvider(undefined);
                  setResult("Sign-in method connected in this preview.");
                }}
              />
            )}
          </div>
        )}
      </div>
    </article>
  );
}
const Plus = createIcon("plus");
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
export const defaultSubjectMeIdentityFindInformationProps: SubjectMeIdentityFindInformationProps =
  {
    title: "Sign-in methods",
    description:
      "Choose how you sign in. Manage each connected account separately.",
    emptyLabel: "No sign-in methods connected to this account.",
  };
