"use client";

import { Component as WebsiteBuilderModuleFeature } from "../../../../../../../../../website-builder/feature/index";
import {
  forwardRef,
  type SVGProps,
  type ButtonHTMLAttributes as ButtonControlProps,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import {
  twMerge as mergeButtonClass,
  twMerge as twMerge,
} from "tailwind-merge";
import type IconGlyphs from "../../../../../../../../../website-builder/feature/singlepage/icon/icons.json";
import { useStudioAccount } from "../../../../../account/Account";
import { aiChatAccount } from "../../../../../account/fixture";
import {
  defaultRbacProfiles,
  defaultRbacUser,
  type RbacAccountProfile,
  type RbacAccountUser,
} from "../../../../../../../../shared";
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

export interface SubjectMeProfileInformationProps {
  profileId?: string;
  subjectId?: string;
  variant?: string;
  user: RbacAccountUser;
  title: string;
  bio: string;
  saveLabel: string;
  profile: RbacAccountProfile;
  profiles: RbacAccountProfile[];
  description: string;
}
export function SubjectMeProfileInformation(
  props?: Partial<SubjectMeProfileInformationProps>,
) {
  const session = useStudioAccount();
  const currentProfile: RbacAccountProfile = {
    id: session.account.profile?.id ?? aiChatAccount.profile.id,
    title: session.account.profile?.title ?? aiChatAccount.profile.title,
    subtitle: session.user?.role ?? "",
    description: session.user?.description ?? "",
    slug: session.user?.slug ?? "alex",
    avatar: session.account.profile?.avatar ?? aiChatAccount.profile.avatar,
  };
  const profileId = props?.profileId ?? props?.profile?.id ?? currentProfile.id;
  const profile =
    props?.profile?.id === profileId
      ? props.profile
      : currentProfile.id === profileId
        ? currentProfile
        : (props?.profiles ?? defaultRbacProfiles).find(
            (item) => item.id === profileId,
          );
  if (!profile)
    return (
      <p
        role="status"
        data-module="rbac"
        data-model="subject"
        data-variant={
          props?.variant ?? "me-social-module-profile-id-settings-ai-chat"
        }
        data-profile-id={profileId}
      >
        Profile unavailable in this preview.
      </p>
    );
  return (
    <ProfileSettingsForm
      key={profile.id}
      {...props}
      profile={profile}
      isCurrentProfile={profile.id === currentProfile.id}
    />
  );
}
interface IProfileSettingsFormProps
  extends Partial<SubjectMeProfileInformationProps> {
  profile: RbacAccountProfile;
  isCurrentProfile: boolean;
}
function ProfileSettingsForm(props: IProfileSettingsFormProps) {
  const session = useStudioAccount();
  const { profiles, title, description, saveLabel } = {
    ...defaultSubjectMeProfileInformationProps,
    ...props,
  };
  const profile = props.profile;
  const [draft, setDraft] = useState({
    title: profile.title,
    subtitle: profile.subtitle,
    description: profile.description ?? "",
    slug: profile.slug,
  });
  const [savedProfile, setSavedProfile] = useState(draft);
  const [message, setMessage] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [slugCheck, setSlugCheck] = useState<{
    value: string;
    available: boolean;
  } | null>(null);
  const [avatar, setAvatar] = useState(profile.avatar ?? "");
  const reader = useRef<FileReader | null>(null);
  const [viewOpen, setViewOpen] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);
  const slugInput = useRef<HTMLInputElement>(null);
  const viewButton = useRef<HTMLButtonElement>(null);
  const id = useId();
  useEffect(() => () => reader.current?.abort(), []);
  function updateDraft(field: keyof typeof draft, value: string) {
    setDraft((previous) => ({ ...previous, [field]: value }));
    setMessage("");
    setInvalid(false);
    if (field === "slug") setSlugCheck(null);
  }
  function checkSlug() {
    if (!slugPattern.test(draft.slug)) {
      slugInput.current?.reportValidity();
      setInvalid(true);
      setMessage(
        "Use lowercase letters, numbers and single hyphens for the slug.",
      );
      return false;
    }
    const available = !profiles.some(
      (item) => item.id !== profile.id && item.slug === draft.slug,
    );
    setSlugCheck({ value: draft.slug, available });
    setInvalid(!available);
    setMessage("");
    return available;
  }
  function closePreview() {
    setViewOpen(false);
    viewButton.current?.focus();
  }
  return (
    <article
      className="min-w-0 rounded-2xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] p-5 sm:p-6"
      data-ds-block="rbac.subject.me-social-module-profile-id-settings-ai-chat"
      data-profile-id={profile.id}
      data-ds-layer="singlepage"
      data-module="rbac"
      data-model="subject"
      data-subject-id={props.subjectId ?? session.account.subject?.id}
      data-variant={
        props?.variant ?? "me-social-module-profile-id-settings-ai-chat"
      }
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--color-sps-muted)]">
            {description}
          </p>
        </div>
        <Button
          ref={viewButton}
          variant="secondary"
          type="button"
          onClick={() => setViewOpen(true)}
        >
          View profile
        </Button>
      </div>
      <form
        className="mt-6"
        onInvalidCapture={() => {
          setInvalid(true);
          setMessage("Check the name and slug before saving.");
        }}
        onSubmit={(event) => {
          event.preventDefault();
          if (!checkSlug()) {
            setMessage(
              "This slug is already used by another profile in this preview.",
            );
            slugInput.current?.focus();
            return;
          }
          try {
            if (props.isCurrentProfile)
              session.updateProfile({
                name: draft.title.trim(),
                role: draft.subtitle,
                description: draft.description,
                slug: draft.slug,
                avatar,
              });
          } catch {
            setInvalid(true);
            setMessage("Could not save this profile. Try a smaller image.");
            return;
          }
          setSavedProfile(draft);
          setInvalid(false);
          setMessage(
            "Profile saved in this preview. No server data was changed.",
          );
        }}
      >
        <fieldset className="min-w-0 border-0 p-0">
          <legend className="text-sm font-medium">Avatar</legend>
          <div className="mt-3 flex flex-wrap items-center gap-4">
            <div className="grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-2xl bg-[var(--color-sps-grey)]">
              {avatar ? (
                <img
                  src={avatar}
                  alt={draft.title || "Profile avatar"}
                  className="h-full w-full object-cover"
                  onError={() => setAvatar("")}
                />
              ) : (
                <User className="h-6 w-6 text-[var(--color-sps-muted)]" />
              )}
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="secondary"
                  type="button"
                  onClick={() => fileInput.current?.click()}
                >
                  Choose image
                </Button>
                <Button
                  variant="plain"
                  type="button"
                  disabled={!avatar}
                  onClick={() => {
                    reader.current?.abort();
                    setAvatar("");
                    if (fileInput.current) fileInput.current.value = "";
                    setMessage("Avatar removed in this preview.");
                  }}
                >
                  Remove
                </Button>
              </div>
              <p className="mt-2 text-xs leading-5 text-[var(--color-sps-muted)]">
                PNG, JPEG, WebP or GIF, up to 2 MB. Save to apply changes.
              </p>
            </div>
            <input
              ref={fileInput}
              type="file"
              accept="image/png,image/jpeg,image/webp,image/gif"
              className="sr-only"
              aria-label="Choose avatar image"
              tabIndex={-1}
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (!file) return;
                event.target.value = "";
                reader.current?.abort();
                if (
                  ![
                    "image/png",
                    "image/jpeg",
                    "image/webp",
                    "image/gif",
                  ].includes(file.type) ||
                  file.size > 2 * 1024 * 1024
                ) {
                  setInvalid(true);
                  setMessage("Choose a PNG, JPEG, WebP or GIF up to 2 MB.");
                  return;
                }
                const upload = new FileReader();
                reader.current = upload;
                upload.onload = () => {
                  if (typeof upload.result !== "string") return;
                  setAvatar(upload.result);
                  setInvalid(false);
                  setMessage("Image selected. Save your profile to apply it.");
                };
                upload.onerror = () => {
                  setInvalid(true);
                  setMessage("Could not read this image. Try another file.");
                };
                upload.readAsDataURL(file);
              }}
            />
          </div>
        </fieldset>
        <div className="mt-6 grid min-w-0 gap-5 lg:grid-cols-2">
          <label className="block min-w-0">
            <span className="text-sm font-medium">Name</span>
            <input
              name="title"
              required
              className={fieldClass}
              value={draft.title}
              onChange={(event) => updateDraft("title", event.target.value)}
            />
          </label>
          <label className="block min-w-0">
            <span className="text-sm font-medium">Headline</span>
            <input
              name="subtitle"
              className={fieldClass}
              value={draft.subtitle}
              onChange={(event) => updateDraft("subtitle", event.target.value)}
            />
          </label>
          <label className="block min-w-0 lg:col-span-2">
            <span className="text-sm font-medium">Description</span>
            <textarea
              name="description"
              className={`${fieldClass} min-h-32`}
              value={draft.description}
              onChange={(event) =>
                updateDraft("description", event.target.value)
              }
            />
          </label>
          <div className="min-w-0 lg:col-span-2">
            <label htmlFor={`${id}-slug`} className="text-sm font-medium">
              Slug
            </label>
            <div className="mt-2 flex min-w-0 flex-wrap items-start gap-3">
              <input
                ref={slugInput}
                id={`${id}-slug`}
                name="slug"
                required
                pattern="[a-z0-9]+(?:-[a-z0-9]+)*"
                aria-describedby={`${id}-slug-help`}
                aria-invalid={slugCheck?.available === false || undefined}
                className={`${fieldClass} mt-0 min-w-0 flex-[1_1_14rem]`}
                value={draft.slug}
                onChange={(event) => updateDraft("slug", event.target.value)}
              />
              <Button variant="secondary" type="button" onClick={checkSlug}>
                Check availability
              </Button>
            </div>
            <p
              id={`${id}-slug-help`}
              className="mt-2 text-xs leading-5 text-[var(--color-sps-muted)]"
            >
              Lowercase letters, numbers and single hyphens. Availability is
              checked only against profiles in this preview.
            </p>
            <p
              role="status"
              className={`mt-2 text-sm ${slugCheck?.available === false ? "text-[var(--color-sps-danger)]" : "text-[var(--color-sps-muted)]"}`}
            >
              {slugCheck
                ? slugCheck.available
                  ? "Available in this preview. Server availability has not been checked."
                  : "Already used by another profile in this preview."
                : ""}
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p
            role={invalid ? "alert" : "status"}
            className={`text-sm leading-6 ${invalid ? "text-[var(--color-sps-danger)]" : "text-[var(--color-sps-muted)]"}`}
          >
            {message}
          </p>
          <Button type="submit">
            <Save className="h-5 w-5" />
            {saveLabel}
          </Button>
        </div>
      </form>
      {viewOpen ? (
        <div
          className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-[var(--color-sps-graphite)]/50 p-4"
          onClick={closePreview}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-label="Profile preview"
            className="relative max-h-[90dvh] w-full max-w-lg overflow-y-auto rounded-3xl bg-[var(--color-sps-white)] p-6"
            onClick={(event) => event.stopPropagation()}
            onKeyDown={(event) => {
              if (event.key === "Escape") closePreview();
              if (event.key === "Tab") {
                event.preventDefault();
                event.currentTarget
                  .querySelector<HTMLButtonElement>("button")
                  ?.focus();
              }
            }}
          >
            <Button
              autoFocus
              variant="secondary"
              type="button"
              className="mb-6"
              onClick={closePreview}
            >
              <X className="h-5 w-5" />
              Close preview
            </Button>
            {avatar ? (
              <img
                src={avatar}
                alt={savedProfile.title}
                className="mb-5 h-24 w-24 rounded-2xl object-cover"
              />
            ) : null}
            <h3 className="text-3xl font-semibold">{savedProfile.title}</h3>
            <p className="mt-2 text-base text-[var(--color-sps-muted)]">
              {savedProfile.subtitle}
            </p>
            <p className="mt-5 whitespace-pre-wrap break-words text-base leading-[26px]">
              {savedProfile.description}
            </p>
            <p className="mt-5 break-all text-sm text-[var(--color-sps-muted)]">
              {savedProfile.slug}
            </p>
            <p className="mt-6 text-xs text-[var(--color-sps-muted)]">
              Local profile preview
            </p>
          </section>
        </div>
      ) : null}
    </article>
  );
}
const X = createIcon("x");
const User = createIcon("user");
const Save = createIcon("floppy-disk");
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
export const defaultSubjectMeProfileInformationProps: SubjectMeProfileInformationProps =
  {
    user: defaultRbacUser,
    title: "Profile",
    bio: defaultRbacProfiles[0].description ?? "",
    saveLabel: "Save profile",
    profile: defaultRbacProfiles[0],
    profiles: defaultRbacProfiles,
    description:
      "Edit the name, headline and information on your public profile.",
  };
const fieldClass =
  "mt-2 min-h-12 w-full rounded-xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] px-4 py-2.5 text-base text-[var(--color-sps-graphite)] outline-none transition focus-visible:border-[var(--color-sps-graphite)] focus-visible:ring-2 focus-visible:ring-[var(--color-sps-graphite)] aria-[invalid=true]:border-[var(--color-sps-danger)]";
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
