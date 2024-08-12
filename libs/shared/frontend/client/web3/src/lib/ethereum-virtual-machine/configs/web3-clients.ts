import {
  HOST_URL,
  NEXT_PUBLIC_HOST_METADATA_DESCRIPTION,
  NEXT_PUBLIC_HOST_METADATA_ICON,
  NEXT_PUBLIC_HOST_METADATA_TITLE,
  WALLET_CONNECT_PROJECT_ID,
} from "@sps/shared-utils";
import { http, createConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

import { injected, walletConnect, safe } from "wagmi/connectors";

export const wagmiConfig = createConfig({
  connectors: [
    injected(),
    safe(),
    walletConnect({
      projectId: WALLET_CONNECT_PROJECT_ID,
      showQrModal: false,
      metadata: {
        name: NEXT_PUBLIC_HOST_METADATA_TITLE,
        url: HOST_URL,
        icons: [`${HOST_URL}${NEXT_PUBLIC_HOST_METADATA_ICON}`],
        description: NEXT_PUBLIC_HOST_METADATA_DESCRIPTION,
      },
    }),
  ],
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof wagmiConfig;
  }
}
