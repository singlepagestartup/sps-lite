"use client";
import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown, LogOut, Settings } from "lucide-react";
import { api } from "@sps/rbac/models/subject/sdk/client";
import { Component as Profile } from "@sps/social/models/profile/frontend/component";
import type { IModel as IProfile } from "@sps/social/models/profile/sdk/model";
import type { IComponentPropsExtended } from "./interface";
import { Icon } from "@sps/ui-adapter";
import type { ReactNode } from "react";

export function Component(props: IComponentPropsExtended) {
  const profiles = api.socialModuleProfileFind({
    id: props.data.id,
    params: {
      filters: { and: [{ column: "variant", method: "eq", value: "default" }] },
    },
    reactQueryOptions: { retry: false },
  });
  return (
    <AccountMenu
      language={props.language}
      settingsSelected={props.settingsSelected}
      subjectId={props.data.id}
      subjectSlug={props.data.slug}
      profile={profiles.data?.[0]}
    />
  );
}

function AccountEmail({ subjectId }: { subjectId: string }) {
  const identities = api.identityFind({
    id: subjectId,
    reactQueryOptions: { retry: false },
  });
  return identities.data?.map(
    (identity) =>
      identity.email && (
        <span
          key={identity.id}
          className="mt-1 block break-all text-xs text-muted-foreground"
        >
          {identity.email}
        </span>
      ),
  );
}

function AccountAvatar(props: {
  subjectId: string;
  profile: IProfile;
  language: string;
  fallback: ReactNode;
}) {
  const avatar = api.socialModuleProfileFindByIdAvatarFind({
    id: props.subjectId,
    socialModuleProfileId: props.profile.id,
    reactQueryOptions: { retry: false },
  });
  return (
    <Profile
      isServer={false}
      variant="chat-profile-avatar"
      language={props.language}
      data={props.profile}
      className="size-8"
      file={avatar.data?.file ?? null}
      fallback={props.fallback}
    />
  );
}

interface IAccountTokenBalanceProps {
  subjectId: string;
  language: string;
}

function AccountTokenBalance({
  subjectId,
  language,
}: IAccountTokenBalanceProps) {
  const balance = api.billingModuleBalance({ id: subjectId });
  const amount = Number(balance.data?.amount);
  const label =
    balance.data && Number.isFinite(amount)
      ? new Intl.NumberFormat(language, { maximumFractionDigits: 6 }).format(
          amount,
        )
      : "—";
  return (
    <span className="block text-xs font-normal text-muted-foreground">
      {label} tokens
    </span>
  );
}

interface IAccountMenuProps {
  subjectId: string;
  subjectSlug: string;
  language?: string;
  settingsSelected?: boolean;
  profile?: IProfile;
}
function AccountMenu({
  subjectId,
  subjectSlug,
  profile,
  language = "en",
  settingsSelected,
}: IAccountMenuProps) {
  const localeBase = `/${language}`;
  const logout = api.authenticationLogout({});
  const name =
    profile?.title?.[language] ||
    profile?.title?.en ||
    profile?.slug ||
    subjectSlug ||
    "My account";
  const fallbackAvatar = (
    <span className="grid size-8 shrink-0 place-items-center overflow-hidden rounded-full bg-muted">
      <Icon name="user-circle" size={24} className="size-6" />
    </span>
  );
  return (
    <div
      data-module="rbac"
      data-model="subject"
      data-variant="me-account-ai-chat"
      data-id={subjectId}
    >
      <DropdownMenu.Root modal={false}>
        <DropdownMenu.Trigger asChild>
          <button
            type="button"
            aria-label={`${name}, account menu`}
            className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-xl px-2 py-2 text-left hover:bg-muted data-[state=open]:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
          >
            {profile ? (
              <AccountAvatar
                subjectId={subjectId}
                language={language}
                profile={profile}
                fallback={fallbackAvatar}
              />
            ) : (
              fallbackAvatar
            )}
            <span className="hidden sm:block">
              <span
                title={name}
                className="block max-w-32 truncate text-sm font-semibold"
              >
                {name}
              </span>
              <AccountTokenBalance subjectId={subjectId} language={language} />
            </span>
            <ChevronDown className="hidden size-4 text-muted-foreground sm:block" />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            align="end"
            sideOffset={8}
            collisionPadding={12}
            className="z-[110] w-64 max-w-[calc(100vw-24px)] rounded-xl border border-border bg-card p-2 font-default text-foreground shadow-lg"
          >
            <DropdownMenu.Label className="px-3 py-2">
              <span className="block truncate text-sm font-semibold">
                {name}
              </span>
              <AccountTokenBalance subjectId={subjectId} language={language} />
              <AccountEmail subjectId={subjectId} />
            </DropdownMenu.Label>
            <DropdownMenu.Separator className="my-1 h-px bg-border" />
            <DropdownMenu.Item asChild>
              <Link
                href={`${localeBase}/ai-chat/settings`}
                aria-current={settingsSelected ? "page" : undefined}
                className={menuItemClassName}
              >
                <Settings className="size-5" />
                Settings
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Separator className="my-1 h-px bg-border" />
            <DropdownMenu.Item asChild disabled={logout.isPending}>
              <button
                type="button"
                disabled={logout.isPending}
                onClick={() =>
                  logout.mutate({ redirectTo: `${localeBase}/ai-chat/sign-in` })
                }
                className={`${menuItemClassName} w-full disabled:opacity-50`}
              >
                <LogOut className="size-5" />
                {logout.isPending ? "Signing out…" : "Sign out"}
              </button>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}

const menuItemClassName =
  "flex min-h-11 cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm outline-none data-highlighted:bg-muted data-highlighted:text-foreground";
