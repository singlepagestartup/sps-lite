import IconGlyphs from "../../../../feature/singlepage/icon/icons.json";
import { memo } from "react";
type IconName = keyof typeof IconGlyphs;
function Icon({
  name,
  size = 20,
  className = "",
  svgProps,
}: {
  name: keyof typeof IconGlyphs;
  size?: 20 | 24;
  className?: string;
  svgProps?: React.SVGProps<SVGSVGElement>;
}) {
  const geometry = IconGlyphs[name]
    ?.replace(/^\s*<svg\b[^>]*>/, "")
    .replace(/<\/svg>\s*$/, "");
  if (!geometry) throw new Error("Missing Phosphor icon: " + name);
  return (
    <svg
      className={`shrink-0 ${size === 24 ? "size-6" : "size-5"} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="currentColor"
      data-icon-family="phosphor"
      data-icon-name={name}
      data-icon-weight="regular"
      aria-hidden="true"
      focusable="false"
      {...svgProps}
      dangerouslySetInnerHTML={{ __html: geometry }}
    />
  );
}
export interface IHeaderButtonProps {
  variant?: string;
  id: string;
  activeHref?: string;
  onNavigate?: () => void;
}
interface IHeaderButton {
  title: string;
  url: string;
  icon: IconName;
  target?: "_self";
}
const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground";
const buttonBase =
  "inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold transition motion-reduce:transition-none enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";
const kit = {
  focus: focus,
};
const buttons: Record<string, IHeaderButton> = {
  "ai-chat-try": {
    title: "Try the chat",
    url: "#workflow",
    icon: "play",
    target: "_self",
  },
  "ai-chat-help": { title: "Help", url: "/ai-chat/help", icon: "question" },
  "ai-chat-login": {
    title: "Sign in",
    url: "/ai-chat/rbac/subjects/authentication/select-method",
    icon: "user-circle",
  },
  "ai-chat-register": {
    title: "Create account",
    url: "/ai-chat/rbac/subjects/authentication/registration",
    icon: "user-circle",
  },
};
export const Component = memo(function Component({
  variant = "navbar-ai-chat",
  id,
  activeHref,
  onNavigate,
}: IHeaderButtonProps) {
  const data = buttons[id];
  if (!data) return null;
  const active = data.url === activeHref;
  return (
    <a
      data-ds-block="website-builder.button.navbar-ai-chat"
      data-id={id}
      href={data.url}
      target={data.target}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={`inline-flex min-h-11 items-center gap-2 rounded-xl px-3 text-sm ${kit.focus} ${active ? "bg-default font-semibold text-default-foreground" : "text-muted-foreground hover:bg-muted"}`}
      data-module="website-builder"
      data-model="button"
      data-variant={variant}
    >
      <Icon name={data.icon} />
      {data.title}
    </a>
  );
});
