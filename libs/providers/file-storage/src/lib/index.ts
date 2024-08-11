import { Provider as LocalProvider } from "./local";
import { Provider as VercelBlobProvider } from "./vercel-blob";
import { IProvider } from "./interface";

export class Provider implements IProvider {
  folder: string;
  client: LocalProvider | VercelBlobProvider;

  constructor(props: { type: "local" | "vercel-blob"; folder: string }) {
    this.folder = props.folder;
    if (props.type === "local") {
      const local = new LocalProvider({
        folder: props.folder,
      });
      this.client = local;

      return;
    } else if (props.type === "vercel-blob") {
      const vercelBlob = new VercelBlobProvider({
        folder: props.folder,
      });
      this.client = vercelBlob;

      return;
    }

    throw new Error("Provider not found");
  }

  async connect(): Promise<void> {
    return await this.client.connect();
  }

  async uploadFile(props: {
    file: Buffer | Blob;
    options?: any;
  }): Promise<string> {
    return await this.client.uploadFile(props);
  }

  async getFile(props: { name: string }): Promise<Buffer | Blob | null> {
    return await this.client.getFile(props);
  }

  async deleteFile(props: { name: string }): Promise<void> {
    return await this.client.deleteFile(props);
  }
}
