import { DefaultApp } from "@sps/shared-backend-api";
import { app as widgetApp } from "@sps/sps-billing/models/widget/backend/app/api";
import { app as paymentIntentApp } from "@sps/sps-billing/models/payment-intent/backend/app/api";
import { app as invoiceApp } from "@sps/sps-billing/models/invoice/backend/app/api";
import { app as currencyApp } from "@sps/sps-billing/models/currency/backend/app/api";

export class Apps {
  apps: { type: "model" | "relation"; route: string; app: DefaultApp<any> }[] =
    [];

  constructor() {
    this.bindApps();
  }

  bindApps() {
    this.apps.push({
      type: "model",
      route: "/widgets",
      app: widgetApp,
    });
    this.apps.push({
      type: "model",
      route: "/payment-intents",
      app: paymentIntentApp,
    });
    this.apps.push({
      type: "model",
      route: "/invoices",
      app: invoiceApp,
    });
    this.apps.push({
      type: "model",
      route: "/currencies",
      app: currencyApp,
    });
  }
}
