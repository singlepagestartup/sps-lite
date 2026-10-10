"use client";
import { Component as WebsiteBuilderModuleFeature } from "../../../../website-builder/feature/index";

import type IconGlyphs from "../../../../website-builder/feature/singlepage/icon/icons.json";
import { useEffect, useState } from "react";
import { Component as SocialModuleProfile } from "../../../../social/profile/index";
import { useStudioAccount } from "./Account";
import type { RbacAccountUser } from "../../../shared";
import { aiChatAccount } from "./fixture";
function Icon(props: {
  name: keyof typeof IconGlyphs;
  size?: 20 | 24;
  className?: string;
  svgProps?: React.SVGProps<SVGSVGElement>;
}) {
  return <WebsiteBuilderModuleFeature {...props} variant="icon" />;
}

export interface ISubjectAccountProps {
  showTokens?: boolean;
  signedIn?: boolean;
  user?: RbacAccountUser;
  page?: string;
  balance?: {
    free: number;
    purchased: number;
  } | null;
  onNavigate?: () => void;
}
export function Component({
  showTokens = false,
  signedIn,
  user,
  page,
  balance,
  onNavigate,
}: ISubjectAccountProps = {}) {
  const session = useStudioAccount();
  const [signedOut, setSignedOut] = useState(false);
  useEffect(() => setSignedOut(false), [signedIn, user?.email]);
  useEffect(() => {
    if (session.signedIn) setSignedOut(false);
  }, [session.signedIn]);
  const authenticated =
    !signedOut && (signedIn ?? Boolean(user ?? session.account.profile));
  const data = user
    ? {
        id: "current-user",
        title: user.name,
        avatar: user.avatar,
        variant: "user-ai-chat" as const,
      }
    : (session.account.profile ?? aiChatAccount.profile);
  const settingsHref = showTokens
    ? "/ai-chat/rbac/subjects/settings"
    : "/?path=/story/modules-host-models-page-singlepage-rbac-subject-settings--default";
  if (!authenticated)
    return (
      <a
        data-ds-block="rbac.subject.account"
        href={
          showTokens
            ? "/ai-chat/rbac/subjects/authentication/select-method"
            : "/?path=/story/modules-host-models-page-singlepage-rbac-subject-authentication-select-method--default"
        }
        target={showTokens ? undefined : "_top"}
        onClick={onNavigate}
        className={`inline-flex min-h-11 shrink-0 items-center gap-2 rounded-xl px-3 text-sm text-sps-graphite no-underline hover:bg-sps-grey ${kit.focus}`}
      >
        <Icon name="sign-in" />
        <span className="hidden sm:inline">Sign in</span>
        <span className="sr-only sm:hidden">Sign in</span>
      </a>
    );
  return (
    <div data-ds-block="rbac.subject.account">
      <SocialModuleProfile
        variant="account-menu"
        data={data}
        email={user?.email ?? session.account.email ?? aiChatAccount.email}
        balance={balance === undefined ? session.account.balance : balance}
        showTokens={showTokens}
        settingsHref={settingsHref}
        settingsTarget={showTokens ? undefined : "_top"}
        page={page}
        onNavigate={onNavigate}
        onSignOut={() => {
          session.signOut();
          setSignedOut(true);
        }}
      />
    </div>
  );
}
const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sps-graphite";
const buttonBase =
  "inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold transition motion-reduce:transition-none enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";
const kit = {
  focus: focus,
};
