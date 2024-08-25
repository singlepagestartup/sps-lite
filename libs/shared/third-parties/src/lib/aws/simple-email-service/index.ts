import { SESClient, SendRawEmailCommand } from "@aws-sdk/client-ses";
import {
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_REGION,
} from "@sps/shared-utils";
import * as fs from "fs";
import * as path from "path";
import * as nodemailer from "nodemailer";

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
      content: Buffer;
    }[] = [];
    const root = process.cwd();

    if (props.filePaths?.length) {
      for (const filePath of props.filePaths) {
        const fileContent = fs.readFileSync(
          path.join(root, "public", filePath),
        );
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

    const rawMessage = await transporter.sendMail(mailOptions);

    const command = new SendRawEmailCommand({
      RawMessage: { Data: rawMessage.raw },
    });

    try {
      const result = await this.client.send(command);

      return result;
    } catch (error) {
      throw new Error("Email sending failed");
    }
  }
}
