import { SESClient, SendRawEmailCommand } from "@aws-sdk/client-ses";
import {
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_REGION,
} from "@sps/shared-utils";
import * as fs from "fs";
import * as path from "path";
import * as nodemailer from "nodemailer";
import { Readable } from "stream";

export class Service {
  client: SESClient;

  constructor() {
    if (!AWS_ACCESS_KEY_ID || !AWS_SECRET_ACCESS_KEY) {
      throw new Error(
        "AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY are required",
      );
    }

    this.client = new SESClient({
      region: AWS_REGION,
      credentials: {
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY,
      },
    });
  }

  async sendEmail(props: {
    to: string;
    subject: string;
    html: string;
    from: string;
    filePaths?: string[];
  }) {
    const attachments: {
      filename: string;
      content: string | Buffer | Readable | undefined;
    }[] = [];
    const root = process.cwd();

    if (props.filePaths?.length) {
      for (const filePath of props.filePaths) {
        let fileContent: string | Buffer | Readable | undefined;
        if (filePath.startsWith("http")) {
          fileContent = await fetch(filePath).then(async (res) => {
            const buffer = await res.arrayBuffer();
            const bytes = new Uint8Array(buffer);

            return Buffer.from(bytes);
          });
        } else {
          fileContent = fs.readFileSync(path.join(root, "public", filePath));
        }

        const fileName = path.basename(filePath);

        attachments.push({ filename: fileName, content: fileContent });
      }
    }

    const transporter = nodemailer.createTransport({
      SES: { ses: this.client, aws: require("@aws-sdk/client-ses") },
    });

    const mailOptions = {
      from: props.from,
      to: props.to,
      subject: props.subject,
      html: props.html,
      attachments,
    };

    try {
      const result = await transporter.sendMail(mailOptions);

      return result;
    } catch (error) {
      throw new Error("Email sending failed");
    }
  }
}
