import { Component as WebsiteBuilderModuleFeature } from "../../../../website-builder/feature/index";
import { forwardRef as forwardRef } from "react";
import { type SVGProps as SVGProps } from "react";
import { twMerge as twMerge } from "tailwind-merge";
import type IconGlyphs from "../../../../website-builder/feature/singlepage/icon/icons.json";
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

type LegalTable = {
  headers: [string, string];
  rows: Array<[string, string]>;
};
type LegalBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "subheading";
      text: string;
    }
  | {
      type: "list";
      ordered?: boolean;
      items: string[];
    }
  | {
      type: "table";
      table: LegalTable;
    }
  | {
      type: "callout";
      text: string;
    };
export interface LegalSection {
  title: string;
  blocks: LegalBlock[];
}
export interface LegalPageProps {
  breadcrumbLabel: string;
  description: string;
  icon: ModuleIcon;
  sections: LegalSection[];
  title: string;
  updatedAt: string;
}
function renderLegalBlock(block: LegalBlock, index: number) {
  if (block.type === "paragraph") {
    return (
      <p
        className="text-base leading-7 text-[var(--color-sps-graphite)]"
        key={index}
      >
        {block.text}
      </p>
    );
  }
  if (block.type === "subheading") {
    return (
      <h3
        className="pt-2 text-lg font-semibold text-[var(--color-sps-graphite)]"
        key={index}
      >
        {block.text}
      </h3>
    );
  }
  if (block.type === "list") {
    const List = block.ordered ? "ol" : "ul";
    return (
      <List
        className={`ml-5 space-y-1 text-base leading-7 text-[var(--color-sps-graphite)] ${block.ordered ? "list-decimal" : "list-disc"}`}
        key={index}
      >
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </List>
    );
  }
  if (block.type === "table") {
    return (
      <div
        className="overflow-hidden rounded-xl border border-[var(--color-sps-line)]"
        key={index}
      >
        <table className="w-full text-left text-sm text-[var(--color-sps-graphite)]">
          <thead className="bg-[var(--color-sps-grey)] text-[var(--color-sps-muted)]">
            <tr>
              {block.table.headers.map((header) => (
                <th className="px-3 py-2 font-semibold" key={header}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.table.rows.map((row) => (
              <tr
                className="border-t border-[var(--color-sps-line)]"
                key={row.join(":")}
              >
                {row.map((cell) => (
                  <td className="px-3 py-2 align-top" key={cell}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <div
      className="flex gap-3 rounded-xl border border-[var(--color-sps-line)] bg-[var(--color-sps-grey)] px-4 py-3 text-xs leading-5 text-[var(--color-sps-graphite)]"
      key={index}
    >
      <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" />
      <p>{block.text}</p>
    </div>
  );
}
export function LegalPage(props: LegalPageProps) {
  const Icon = props.icon;
  return (
    <section className="w-full bg-[var(--color-sps-grey)] py-6 sm:py-8">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Breadcrumb"
          className="mb-4 flex items-center gap-1.5 text-xs text-[var(--color-sps-muted)]"
        >
          <a
            className="transition hover:text-[var(--color-sps-muted)]"
            href="/"
          >
            Home
          </a>
          <ChevronRight className="h-5 w-5" />
          <span className="text-[var(--color-sps-muted)]">
            {props.breadcrumbLabel}
          </span>
        </nav>

        <article className="rounded-3xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] p-6  sm:p-8 lg:p-10">
          <header className="mx-auto mb-6 max-w-3xl border-b border-[var(--color-sps-line)] pb-6">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--color-sps-graphite)] text-white">
                <Icon className="h-4 w-4" />
              </span>
              <p className="text-sm text-[var(--color-sps-muted)]">
                Last updated: {props.updatedAt}
              </p>
            </div>
            <div className="min-w-0">
              <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl text-[var(--color-sps-graphite)]">
                {props.title}
              </h1>
              <p className="mt-3 max-w-3xl text-base leading-7 text-[var(--color-sps-muted)]">
                {props.description}
              </p>
            </div>
          </header>

          <div className="mx-auto max-w-3xl space-y-10">
            {props.sections.map((section) => (
              <section className="space-y-3" key={section.title}>
                <h2 className="text-xl font-semibold text-[var(--color-sps-graphite)]">
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.blocks.map(renderLegalBlock)}
                </div>
              </section>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
const ChevronRight = createIcon("caret-right");
// Semantic names keep existing module interaction contracts; every glyph is official Phosphor Regular.
export const AlertTriangle = createIcon("warning");
