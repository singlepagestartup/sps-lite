import { Component as RbacModuleSubject } from "../../../index";
import { AccountProvider } from "./Account";
import type { ISubjectAccountProps } from "./Component";
import { aiChatAccount } from "./fixture";
import type { Meta, StoryObj } from "@storybook/react";
function Example(props: ISubjectAccountProps) {
  return (
    <AccountProvider account={aiChatAccount}>
      <RbacModuleSubject {...props} variant="me-account" />
    </AccountProvider>
  );
}
const meta = {
  id: "modules-rbac-models-subject-singlepage-me-account",
  title: "Modules/RBAC/Subject/Singlepage/me/account",
  component: Example,
  parameters: { layout: "centered" },
  args: { signedIn: true, showTokens: false },
  argTypes: {
    signedIn: { control: "boolean" },
    showTokens: { control: "boolean" },
  },
} satisfies Meta<typeof Example>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
export const AIChat: StoryObj<typeof meta> = { args: { showTokens: true } };
export const SignedOut: StoryObj<typeof meta> = { args: { signedIn: false } };

export const BalanceLoading: StoryObj<typeof meta> = {
  args: { showTokens: true, balance: null },
};
export const EmptyBalance: StoryObj<typeof meta> = {
  args: { showTokens: true, balance: { free: 0, purchased: 0 } },
};
export const DailyFreeBalance: StoryObj<typeof meta> = {
  args: { showTokens: true, balance: { free: 100, purchased: 0 } },
};
export const FractionalBalance: StoryObj<typeof meta> = {
  args: { showTokens: true, balance: { free: 27.654321, purchased: 1500 } },
};
