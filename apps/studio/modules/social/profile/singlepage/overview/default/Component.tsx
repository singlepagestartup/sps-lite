import { Component as WebsiteBuilderModuleFeature } from "../../../../../website-builder/feature/index";
import { forwardRef, type SVGProps } from "react";
import { twMerge as twMerge } from "tailwind-merge";
import type IconGlyphs from "../../../../../website-builder/feature/singlepage/icon/icons.json";
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

export interface IProfileOverviewProps {
  variant?: string;
  name: string;
  role: string;
  avatar: string;
  location: string;
  joinedYear: number;
  website: string;
  socials: {
    twitter: string;
    linkedin: string;
    github: string;
  };
}
export function Component(props: Partial<IProfileOverviewProps> = {}) {
  const { name, role, avatar, location, joinedYear, website, socials } = {
    ...defaultProfileOverviewProps,
    ...props,
  };
  return (
    <div
      className="grid overflow-hidden rounded-3xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] md:grid-cols-[minmax(240px,0.7fr)_minmax(0,1fr)]"
      data-ds-block="social.profile.overview-default"
      data-ds-layer="singlepage"
      data-module="social"
      data-model="profile"
      data-variant={props.variant ?? "overview-default"}
    >
      <div className="aspect-square bg-[var(--color-sps-grey)]">
        <img src={avatar} alt={name} className="h-full w-full object-cover" />
      </div>

      {/* Info */}
      <div className="flex min-w-0 flex-col justify-center p-6 sm:p-8 lg:p-10">
        <h1 className="flex items-center gap-3 text-4xl font-semibold tracking-tight sm:text-5xl text-[var(--color-sps-graphite)]">
          <span className="min-w-0">{name}</span>
          <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-sps-green)]">
            <Icon
              name="check"
              size={20}
              className="text-[var(--color-sps-graphite)]"
            />
            <span className="sr-only">Verified</span>
          </span>
        </h1>
        <p className="mt-3 text-lg text-[var(--color-sps-muted)]">{role}</p>

        {/* Meta row */}
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[var(--color-sps-muted)]">
          {location && (
            <span className="flex items-center gap-1">
              <MapPin className="h-5 w-5" />
              {location}
            </span>
          )}
          {joinedYear && (
            <span className="flex items-center gap-1">
              <Calendar className="h-5 w-5" />
              Joined {joinedYear}
            </span>
          )}
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[var(--color-sps-muted)] transition hover:text-[var(--color-sps-graphite)]"
            >
              <ExternalLink className="h-5 w-5" />
              {website.replace(/^https?:\/\//, "")}
            </a>
          )}
        </div>

        {/* Social links */}
        <div className="mt-8 flex flex-wrap gap-2">
          {socials.twitter && (
            <a
              href={socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] px-3 py-2 text-sm text-[var(--color-sps-muted)] transition hover:border-[var(--color-sps-line)] hover:bg-[var(--color-sps-grey)] hover:text-[var(--color-sps-graphite)]"
            >
              <Twitter className="h-5 w-5" />
              Twitter
            </a>
          )}
          {socials.linkedin && (
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] px-3 py-2 text-sm text-[var(--color-sps-muted)] transition hover:border-[var(--color-sps-line)] hover:bg-[var(--color-sps-grey)] hover:text-[var(--color-sps-graphite)]"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
          )}
          {socials.github && (
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] px-3 py-2 text-sm text-[var(--color-sps-muted)] transition hover:border-[var(--color-sps-line)] hover:bg-[var(--color-sps-grey)] hover:text-[var(--color-sps-graphite)]"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
const Twitter = createIcon("twitter-logo");
const MapPin = createIcon("map-pin");
const Linkedin = createIcon("linkedin-logo");
const Github = createIcon("github-logo");
const ExternalLink = createIcon("arrow-square-out");
const Calendar = createIcon("calendar-blank");
const sarahAvatar =
  "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwZGV2ZWxvcGVyJTIwaGVhZHNob3R8ZW58MXx8fHwxNzcxNzE1ODgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
export const defaultProfileOverviewProps: IProfileOverviewProps = {
  name: "Sarah Kim",
  role: "Head of Product",
  avatar: sarahAvatar,
  location: "San Francisco, CA",
  joinedYear: 2015,
  website: "https://sarahkim.com",
  socials: {
    twitter: "https://twitter.com/sarahkim",
    linkedin: "https://linkedin.com/in/sarahkim",
    github: "https://github.com/sarahkim",
  },
};
