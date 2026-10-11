"use client";
import { memo } from "react";
import Markdown from "markdown-to-jsx";
import { Component as WebsiteBuilderModuleFeature } from "../../../../../../../../website-builder/feature";
import type { IAIChatServicePageContent } from "../../../../../../../../website-builder/widget/singlepage/content/ai-chat/content";
import { useAIChatAccount } from "../../../../account/Account";
import orders from "./orders.json";
export interface ISubjectOrderListProps {
  variant?: string;
  showTokens?: boolean;
  copy?: IAIChatServicePageContent;
  empty?: boolean;
}
interface IOrder {
  id: string;
  date: string;
  tokens: number;
  total: string;
  status: string;
}
const OrderItem = memo(function OrderItem({
  data,
  showTokens,
}: {
  data: IOrder;
  showTokens: boolean;
}) {
  const receipt = `Order ${data.id}\nDate: ${data.date}\nStatus: ${data.status}\n${showTokens ? `Tokens: ${data.tokens}\n` : ""}Total: ${data.total}\nStudio preview receipt`;
  return (
    <li className="grid min-w-0 gap-3 border-t border-sps-line py-4 @[640px]:grid-cols-[minmax(0,1fr)_auto] @[640px]:items-center">
      <div>
        <p className="text-sm font-semibold">
          {showTokens
            ? `${data.tokens.toLocaleString("en-US")} tokens`
            : "Service purchase"}{" "}
          <span className="ml-2 inline-flex rounded-full bg-sps-green/25 px-2 py-1 text-xs font-medium">
            {data.status}
          </span>
        </p>
        <p className="mt-1 text-xs text-sps-muted">
          {data.id} · {data.date}
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <span className="text-sm font-semibold">{data.total}</span>
        <a
          download={`${data.id}-receipt.txt`}
          href={`data:text/plain;charset=utf-8,${encodeURIComponent(receipt)}`}
          className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-sps-line px-4 text-sm font-medium"
        >
          <WebsiteBuilderModuleFeature variant="icon" name="file-text" />
          Receipt
        </a>
      </div>
    </li>
  );
});
export function Component({
  variant = "me-ecommerce-module-order-list-ai-chat",
  showTokens = false,
  copy,
  empty = false,
}: ISubjectOrderListProps = {}) {
  const account = useAIChatAccount();
  const purchases = copy?.sections.purchases;
  return (
    <section
      className="@container min-w-0 rounded-2xl border border-sps-line bg-sps-white p-5 @[640px]:p-6"
      data-module="rbac"
      data-model="subject"
      data-variant={variant}
    >
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="flex items-center gap-3 text-xl font-semibold">
            <span className="grid size-10 place-items-center rounded-xl bg-sps-grey">
              <WebsiteBuilderModuleFeature variant="icon" name="wallet" />
            </span>
            {showTokens
              ? (purchases?.title ?? "Tokens and purchases")
              : "Purchases"}
          </h2>
          <div className="mt-3 text-sm leading-6 text-sps-muted [&_a]:underline">
            {showTokens && purchases ? (
              purchases.paragraphs.map((text, index) => (
                <Markdown key={index} options={{ disableParsingRawHTML: true }}>
                  {text}
                </Markdown>
              ))
            ) : (
              <p>
                View purchases and receipts.
                {showTokens && " Paid token packages are listed below."}
              </p>
            )}
          </div>
        </div>
        {showTokens && (
          <a
            href={
              copy?.labels["tokens-href"] ?? "/ai-chat/rbac/subjects/tokens"
            }
            className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-sps-green px-5 text-sm font-semibold"
          >
            <WebsiteBuilderModuleFeature variant="icon" name="plus" />
            {copy?.labels["buy-tokens"] ?? "Buy tokens"}
          </a>
        )}
      </header>
      {showTokens && (
        <p className="my-5 text-sm text-sps-muted">
          {account.balance
            ? `${(account.balance.free + account.balance.purchased).toLocaleString("en-US")} tokens available`
            : "Balance unavailable"}
        </p>
      )}
      {empty ? (
        <p role="status" className="mt-5 rounded-xl bg-sps-grey p-4 text-sm">
          {copy?.labels["purchases-empty"] ?? "No purchases yet."}
        </p>
      ) : (
        <ul aria-label="Paid purchases" className="mt-5">
          {orders.map((data) => (
            <OrderItem key={data.id} data={data} showTokens={showTokens} />
          ))}
        </ul>
      )}
    </section>
  );
}
