"use client";

import { ConnectKitButton } from "connectkit";
import { Address } from "viem";
import { Button } from "@sps/shared-ui-shadcn";
import { IComponentProps } from "./interface";

export function Component(props: IComponentProps) {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, address, ensName }) => {
        return (
          <Button onClick={show} variant="default" className={props.className}>
            {isConnected
              ? ensName
                ? ensName
                : truncateEthAddress(address as Address)
              : "Connect Wallet"}
          </Button>
        );
      }}
    </ConnectKitButton.Custom>
  );
}

function truncateEthAddress(
  address: Address,
  startLength = 6,
  endLength = 4,
): string {
  if (!address || address.length < startLength + endLength) {
    return address;
  }
  return `${address.slice(0, startLength)}...${address.slice(-endLength)}`;
}
