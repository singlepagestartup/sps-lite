export interface IBackendMedia {
  id: number;
  url: string;
  mime: string;
  alternativeText: string | null;
  name: string;
  caption: string | null;
  width: number;
  height: number;
  formats?: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  previewUrl: string | null;
  provider: `local` | `aws-s3`;
  providerMetadata?: any;
  createdAt?: string;
  updatedAt?: string;
}
