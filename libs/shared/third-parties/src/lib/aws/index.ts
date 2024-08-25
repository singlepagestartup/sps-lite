import { Service as AmazonSESService } from "./simple-email-service";

export class AWS {
  ses: AmazonSESService;

  constructor() {
    this.ses = new AmazonSESService();
  }
}
