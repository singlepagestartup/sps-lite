import { Component as WebsiteBuilderModuleFeature } from "../../../feature/index";
import { forwardRef as forwardRef } from "react";
import { type SVGProps as SVGProps } from "react";
import { twMerge as twMerge } from "tailwind-merge";
import type IconGlyphs from "../../../feature/singlepage/icon/icons.json";
import { Component as WebsiteBuilderModuleButtonsArray } from "../../../buttons-array/index";
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

export interface ContentFaqItem {
  q: string;
  a: string;
}
export type ContentFaqProps = typeof defaultContentFaqProps;
export function ContentFaq(props?: Partial<ContentFaqProps>) {
  const { eyebrow, title, description, contactHref, faq } = {
    ...defaultContentFaqProps,
    ...props,
  };
  return (
    <section
      className="w-full bg-[var(--color-sps-grey)] py-12 sm:py-16"
      data-ds-block="website-builder.widget.content-faq"
      data-ds-layer="singlepage"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="mb-2 text-sm font-semibold tracking-normal text-[var(--color-sps-muted)]">
              {eyebrow}
            </p>
            <h2 className="text-[2rem] font-semibold leading-tight tracking-normal sm:text-[2.5rem] text-[var(--color-sps-graphite)]">
              {title}
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-[var(--color-sps-muted)]">
              {description}
            </p>
            <div className="mt-5">
              <WebsiteBuilderModuleButtonsArray
                variant="default"
                ariaLabel="FAQ contact actions"
                buttons={[
                  {
                    href: contactHref,
                    icon: ArrowRight,
                    label: "Contact us",
                    variant: "secondary",
                  },
                ]}
              />
            </div>
          </div>
          <div
            className="min-w-0 self-start rounded-2xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] p-2"
            data-ds-imports="website-builder.feature.dropdown"
          >
            {faq.map((item, idx) => (
              <WebsiteBuilderModuleFeature
                variant="dropdown"
                key={item.q}
                question={item.q}
                answer={item.a}
                open={idx === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
const ArrowRight = createIcon("arrow-right");
export const defaultContentFaqProps = {
  eyebrow: "FAQ",
  title: "Frequently asked questions",
  description:
    "Can't find the answer you're looking for? Reach out to our team and we'll get back to you within 24 hours.",
  contactHref: "/#contact",
  faq: [
    {
      q: "What tech stack do you use?",
      a: "We primarily use React / Next.js with Tailwind CSS, but we adapt to your existing stack if needed — Vue, Nuxt, Astro, or plain HTML/CSS.",
    },
    {
      q: "How long does a typical project take?",
      a: "A standard marketing website takes 4-6 weeks. Complex portals with CMS and integrations can take 8-12 weeks.",
    },
    {
      q: "Do you provide hosting?",
      a: "We recommend and set up hosting on Vercel, Netlify, or your preferred cloud provider. Hosting costs are separate.",
    },
    {
      q: "What about ongoing maintenance?",
      a: "We offer monthly maintenance packages starting at $299/mo covering updates, backups, and minor changes.",
    },
  ] satisfies ContentFaqItem[],
};
