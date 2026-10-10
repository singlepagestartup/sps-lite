import { twMerge as twMerge } from "tailwind-merge";
import Markdown from "markdown-to-jsx";
import disclosure from "./disclosure.json";
function MarkdownDocument({
  children,
  hideTitle = false,
  baseUrl,
  resolveLink,
  externalLinksNewTab = false,
  disableRawHTML = false,
  className,
}: {
  children: string;
  hideTitle?: boolean;
  baseUrl?: string;
  resolveLink?: (url: string) =>
    | string
    | {
        href: string;
        target: "_top";
      };
  externalLinksNewTab?: boolean;
  disableRawHTML?: boolean;
  className?: string;
}) {
  const assetUrl = (value: string = "") => {
    if (!baseUrl || /^(?:[a-z][a-z0-9+.-]*:|\/|#)/i.test(value)) return value;
    const url = new URL(value, `https://studio.invalid${baseUrl}`);
    return url.pathname + url.search + url.hash;
  };
  return (
    <div
      className={twMerge(
        "min-w-0 max-w-none break-words [&_pre]:max-w-full [&_pre]:overflow-x-auto [&_pre]:rounded-2xl [&_pre]:bg-sps-grey [&_pre]:p-5 [&_pre_code]:whitespace-pre [&_pre_code]:break-normal text-base leading-7 text-sps-muted [&_a]:text-sps-muted [&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-sps-line [&_blockquote]:pl-4 [&_code]:rounded [&_code]:bg-sps-grey [&_code]:px-1 [&_h1]:mb-5 [&_h1]:text-3xl [&_h1]:font-semibold [&_h1]:tracking-tight [&_h1]:text-sps-graphite [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-sps-graphite [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:font-semibold [&_h3]:text-sps-graphite [&_li]:my-1 [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:my-3 [&_table]:my-5 [&_table]:block [&_table]:max-w-full [&_table]:overflow-x-auto [&_td]:border [&_td]:border-sps-line [&_td]:p-2 [&_th]:border [&_th]:border-sps-line [&_th]:bg-sps-grey [&_th]:p-2 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6",
        className,
      )}
    >
      <Markdown
        options={{
          disableParsingRawHTML: disableRawHTML,
          ...(baseUrl || externalLinksNewTab
            ? {
                overrides: {
                  img: {
                    component: ({
                      src,
                      alt,
                      ...props
                    }: React.ImgHTMLAttributes<HTMLImageElement>) => (
                      <img {...props} src={assetUrl(src)} alt={alt ?? ""} />
                    ),
                  },
                  a: {
                    component: ({
                      href,
                      ...props
                    }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
                      const resolved =
                        resolveLink?.(assetUrl(href)) ?? assetUrl(href);
                      return (
                        <a
                          {...props}
                          {...(typeof resolved === "string"
                            ? { href: resolved }
                            : resolved)}
                          {...(externalLinksNewTab &&
                          /^https?:\/\//i.test(href ?? "")
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                        />
                      );
                    },
                  },
                },
              }
            : {}),
        }}
      >
        {hideTitle ? children.replace(/^# [^\n]+\n/, "") : children}
      </Markdown>
    </div>
  );
}
export interface IProjectProcessingDisclosureProps {
  id: string;
  open?: boolean;
}
export function Component({ id, open }: IProjectProcessingDisclosureProps) {
  return (
    <details
      data-ds-block="social.profile.processing-ai-chat-project"
      id={id}
      open={open}
      className={`my-5 text-xs leading-6 ${kit.muted}`}
    >
      <summary
        className={`min-h-9 cursor-pointer underline underline-offset-4 ${kit.focus}`}
      >
        How your materials are processed and stored
      </summary>
      <div className={`${kit.card} mt-3 text-sm`}>
        <MarkdownDocument>{disclosure}</MarkdownDocument>
      </div>
    </details>
  );
}
const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sps-graphite";
const buttonBase =
  "inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold transition motion-reduce:transition-none enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";
const kit = {
  card: "min-w-0 rounded-2xl border border-sps-line bg-sps-white p-5",
  muted: "text-sps-muted",
  focus: focus,
};
