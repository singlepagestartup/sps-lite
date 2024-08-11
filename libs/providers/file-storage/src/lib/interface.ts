export interface IProvider {
  folder: string;
  connect: () => Promise<void>;
  uploadFile: (props: {
    file: Buffer | Blob;
    options?: any;
  }) => Promise<string>;
  getFile: (props: { name: string }) => Promise<Buffer | Blob | null>;
  deleteFile: (props: { name: string }) => Promise<void>;
}
