import { Component as WebsiteBuilderModuleFeature } from "../../../feature/index";
import { forwardRef as forwardRef } from "react";
import { type SVGProps as SVGProps } from "react";
import { twMerge as twMerge } from "tailwind-merge";
import type IconGlyphs from "../../../feature/singlepage/icon/icons.json";
type ModuleIcon = ReturnType<typeof createIcon>;
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

interface FeatureItem {
  title: string;
  description: string;
  icon: ModuleIcon;
}
function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 max-w-2xl sm:mb-10">
      <p className="mb-2 text-sm font-semibold tracking-normal text-[var(--color-sps-muted)]">
        {eyebrow}
      </p>
      <h2 className="text-[2rem] font-semibold leading-tight tracking-normal sm:text-[2.5rem] text-[var(--color-sps-graphite)]">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-7 text-[var(--color-sps-muted)] mt-3">
          {description}
        </p>
      ) : null}
    </div>
  );
}
export type ContentFeatureFindCardProps =
  typeof defaultContentFeatureFindCardProps;
export function ContentFeatureFindCard(
  props?: Partial<ContentFeatureFindCardProps>,
) {
  const { eyebrow, title, description, features } = {
    ...defaultContentFeatureFindCardProps,
    ...props,
  };
  return (
    <div
      id="features"
      className="w-full bg-[var(--color-sps-grey)] py-12 sm:py-16"
      data-ds-block="website-builder.widget.content-feature-find-card"
      data-ds-layer="singlepage"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          data-ds-imports="website-builder.feature.card"
        >
          {features.map((feature) => (
            <WebsiteBuilderModuleFeature
              variant="card"
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
const ShoppingCart = createIcon("shopping-cart");
const MessageSquare = createIcon("chat");
const Lock = createIcon("lock-key");
const Globe = createIcon("globe");
const FileText = createIcon("file-text");
const Bot = createIcon("robot");
const Bell = createIcon("bell");
const BarChart3 = createIcon("chart-bar");
export const defaultContentFeatureFindCardProps = {
  eyebrow: "Core capabilities",
  title: "Everything you need, modular by design",
  description:
    "Each module works independently and connects seamlessly through a unified relation system.",
  features: [
    {
      icon: Globe,
      title: "Website Builder",
      description:
        "Build pages visually with widgets, sliders, buttons, and logotypes managed from the admin panel.",
    },
    {
      icon: ShoppingCart,
      title: "Ecommerce Engine",
      description:
        "Full product catalog with attributes, categories, orders, and flexible store configurations.",
    },
    {
      icon: FileText,
      title: "Blog & Content",
      description:
        "Rich-text articles with localized content, categories, and SEO-ready slug management.",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description:
        "Track metrics, build custom widgets, and monitor performance from a unified dashboard.",
    },
    {
      icon: MessageSquare,
      title: "Social & Messaging",
      description:
        "Profiles, chats, threads, and actions - everything for community and social interactions.",
    },
    {
      icon: Bot,
      title: "AI Agents",
      description:
        "Configure and manage AI-powered agents with custom widgets and behavior settings.",
    },
    {
      icon: Bell,
      title: "Notifications",
      description:
        "Templates, topics, and delivery channels for transactional and marketing notifications.",
    },
    {
      icon: Lock,
      title: "RBAC & Security",
      description:
        "Roles, permissions, actions, and identity management for enterprise-grade access control.",
    },
  ] satisfies FeatureItem[],
};
