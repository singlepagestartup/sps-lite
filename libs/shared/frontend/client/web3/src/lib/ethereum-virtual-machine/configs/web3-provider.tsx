"use client";

import { ReactNode } from "react";

import { WagmiProvider } from "wagmi";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { ConnectKitProvider } from "connectkit";

import { wagmiConfig } from "./web3-clients";
import { persister, queryClient } from "./query-client";

export const Web3Provider = ({ children }: { children: ReactNode }) => {
  return (
    <WagmiProvider config={wagmiConfig}>
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister }}
      >
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </PersistQueryClientProvider>
    </WagmiProvider>
  );
};
