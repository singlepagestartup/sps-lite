import { IBackendUploadPluginBackendMedia } from "types/plugins/upload";
import {
  spsLiteUploadPluginBackendMediaLogotypeIcon,
  spsLiteUploadPluginBackendMediaRoundIcon,
  spsLiteUploadPluginBackendMediaTableAndHands,
} from "./sps-lite";

export const backendMediaRoundIcon: IBackendUploadPluginBackendMedia = {
  ...spsLiteUploadPluginBackendMediaRoundIcon,
};

export const backendMediaLogotypeIcon: IBackendUploadPluginBackendMedia = {
  ...spsLiteUploadPluginBackendMediaLogotypeIcon,
};

export const backendMediaTableAndHands: IBackendUploadPluginBackendMedia = {
  ...spsLiteUploadPluginBackendMediaTableAndHands,
};
