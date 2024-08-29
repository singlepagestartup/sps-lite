import "reflect-metadata";
import { inject, injectable } from "inversify";
import { CRUDService, DI } from "@sps/shared-backend-api";
import { Table } from "@sps/billing/models/invoice/backend/repository/database";
import { Repository } from "./repository";
import Stripe from "stripe";
import {
  BACKEND_URL,
  HOST_URL,
  O_X_PROCESSING_SHOP_ID,
  O_X_PROCESSING_TEST_PAYMENTS,
  O_X_PROCESSING_WEBHOOK_PASSWORD,
  PAYSELECTION_PUBLIC_KEY,
  PAYSELECTION_SECRET_KEY,
  PAYSELECTION_SITE_ID,
  PAYSELECTION_SITE_NAME,
  PAYSELECTION_WEBHOOK_URL,
  RBAC_SECRET_KEY,
  STRIPE_SECRET_KEY,
} from "@sps/shared-utils";
import { api as paymentIntentsToInvoicesApi } from "@sps/billing/relations/payment-intents-to-invoices/sdk/server";
import { api as paymentIntentApi } from "@sps/billing/models/payment-intent/sdk/server";
import * as crypto from "crypto";

@injectable()
export class Service extends CRUDService<(typeof Table)["$inferSelect"]> {
  constructor(@inject(DI.IRepository) repository: Repository) {
    super(repository);
  }

  async updatePaymentIntentStatus(props: {
    invoice: (typeof Table)["$inferSelect"];
  }) {
    if (!RBAC_SECRET_KEY) {
      throw new Error("RBAC secret key not found");
    }

    const paymentIntentsToInvoice = await paymentIntentsToInvoicesApi.find({
      params: {
        filters: {
          and: [
            {
              column: "invoiceId",
              method: "eq",
              value: props.invoice.id,
            },
          ],
        },
      },
      options: {
        headers: {
          "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
        },
        next: {
          cache: "no-store",
        },
      },
    });

    if (paymentIntentsToInvoice?.length) {
      const paymentIntents = await paymentIntentApi.find({
        params: {
          filters: {
            and: [
              {
                column: "id",
                method: "inArray",
                value: paymentIntentsToInvoice.map(
                  (item) => item.paymentIntentId,
                ),
              },
            ],
          },
        },
        options: {
          headers: {
            "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
          },
          next: {
            cache: "no-store",
          },
        },
      });

      if (paymentIntents?.length) {
        let amount = props.invoice.amount;

        for (const paymentIntent of paymentIntents) {
          if (
            amount >= paymentIntent.amount &&
            paymentIntent.status !== "succeeded" &&
            paymentIntent.status !== "canceled"
          ) {
            amount -= paymentIntent.amount;
            await paymentIntentApi.update({
              id: paymentIntent.id,
              data: {
                ...paymentIntent,
                status: "succeeded",
              },
              options: {
                headers: {
                  "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
                },
                next: {
                  cache: "no-store",
                },
              },
            });
          }
        }
      }
    }

    return { ok: true };
  }

  async stripe(
    props:
      | { data: any; type: "create"; email: string; subjectId: string }
      | {
          type: "webhook";
          data: Stripe.Response<Stripe.Event>;
        },
  ): Promise<(typeof Table)["$inferSelect"]> {
    if (!STRIPE_SECRET_KEY) {
      throw new Error("Stripe secret key not found");
    }

    const stripe = new Stripe(STRIPE_SECRET_KEY);

    if (props.type === "create") {
      if (!props.data.amount) {
        throw new Error("Amount is required");
      }

      if (props.data.amount < 0) {
        throw new Error("Amount cannot be negative");
      }

      const superResult = await super.create(props);

      const amount = props.data.amount;

      let stripeProduct: any = await stripe.products.search({
        query: `name:'${amount}' AND active:'true'`,
      });

      if (!stripeProduct?.data?.length) {
        stripeProduct = await stripe.products.create({
          name: `${amount}`,
          default_price_data: {
            currency: "usd",
            unit_amount: +amount * 100,
          },
        });
      } else {
        stripeProduct = stripeProduct.data[0];
      }

      const checkout = await stripe.checkout.sessions.create({
        line_items: [{ price: stripeProduct.default_price, quantity: 1 }],
        mode: "payment",
        customer_email: props.email,
        success_url: `${HOST_URL}`,
        cancel_url: `${HOST_URL}`,
        metadata: {
          invoiceId: superResult.id,
          subjectId: props.subjectId,
        },
      });

      if (!checkout.url) {
        throw new Error("Checkout URL not found");
      }

      const updated = await this.update({
        id: superResult.id,
        data: {
          ...superResult,
          status: "open",
          providerId: checkout.id,
          paymentUrl: checkout.url,
        },
      });

      if (!updated) {
        throw new Error("Invoice not found");
      }

      return updated;
    } else {
      const id = props.data.data.object?.["metadata"]?.["invoiceId"];

      const data = props.data.data.object;

      if (!id) {
        throw new Error("ID not found in stripe webhook data");
      }

      let invoice = await this.findById({ id });

      if (!invoice) {
        throw new Error("Invoice not found");
      }

      if (data["status"] === "complete") {
        invoice = await this.update({
          id: invoice.id,
          data: {
            ...invoice,
            status: "paid",
          },
        });

        if (!invoice) {
          throw new Error("Invoice not found");
        }
      }

      return invoice;
    }
  }

  async OxProcessing(
    props:
      | { data: any; type: "create"; email: string; subjectId: string }
      | {
          type: "webhook";
          data: {
            PaymentId: number;
            MerchantId: string;
            Amount: number;
            TotalAmount: number;
            Currency: string;
            Email: string;
            Status: "Success" | "Canceled" | "Insufficient";
            Signature: string;
            BillingID: string;
            AmountUSD: number;
            TotalAmountUSD: number;
            Insufficient: boolean;
            Test: boolean;
            ClientId: string;
            TxHashes: string[];
          };
        },
  ): Promise<(typeof Table)["$inferSelect"]> {
    if (!O_X_PROCESSING_SHOP_ID) {
      throw new Error("0xProcessing shop id not found");
    }

    if (!O_X_PROCESSING_WEBHOOK_PASSWORD) {
      throw new Error("0xProcessing webhook password not found");
    }

    if (props.type === "create") {
      const superResult = await super.create(props);

      const formData = new FormData();

      const { currency, amount } = props.data;

      formData.append("currency", currency || "USDT");
      formData.append("amountusd", `${amount}`);
      formData.append("BillingId", `${superResult.id}`);
      formData.append("ClientId", `${props.subjectId}`);
      formData.append("MerchantId", `${O_X_PROCESSING_SHOP_ID}`);
      formData.append("email", `${props.email}`);
      formData.append("ReturnUrl", `${true}`);
      formData.append("SuccessUrl", `${HOST_URL}`);
      formData.append("CancelUrl", `${HOST_URL}`);

      if (O_X_PROCESSING_TEST_PAYMENTS) {
        formData.append("test", `${true}`);
      }

      const checkout = await fetch("https://app.0xProcessing.com/Payment", {
        method: "POST",
        body: formData,
      }).then((res) => res.json());

      const updated = await this.update({
        id: superResult.id,
        data: {
          ...superResult,
          status: "open",
          providerId: `${checkout.id}`,
          paymentUrl: checkout.redirectUrl,
        },
      });

      if (!updated) {
        throw new Error("Invoice not found");
      }

      return updated;
    } else {
      const { Signature, BillingID, PaymentId, Email, Currency } = props.data;

      let invoice = await this.findById({ id: BillingID });

      if (!invoice) {
        throw new Error("Invoice not found");
      }

      const string = `${PaymentId}:${O_X_PROCESSING_SHOP_ID}:${Email}:${Currency}:${O_X_PROCESSING_WEBHOOK_PASSWORD}`;

      const hash = crypto.createHash("md5").update(string).digest("hex");

      if (hash !== Signature) {
        throw new Error("Signature mismatch");
      }

      if (props.data.Status === "Success") {
        invoice = await this.update({
          id: invoice.id,
          data: {
            ...invoice,
            status: "paid",
          },
        });

        if (!invoice) {
          throw new Error("Invoice not found");
        }
      }

      return invoice;
    }
  }

  async payselection(
    props:
      | { data: any; type: "create"; email: string; subjectId: string }
      | {
          type: "webhook";
          data: {
            Event: "Payment";
            Amount: string;
            Currency: string;
            DateTime: string;
            IsTest: number;
            Brand: string;
            Bank: string;
            Country_Code_Alpha2: string;
            TransactionId: string;
            OrderId: string;
            Description: string;
            CustomFields: string;
            Service_Id: string;
            PaymentMethod: string;
            CardMasked: string;
            ExpirationDate: string;
            CardHolder: string;
          };
          rawBody: string;
          headers: {
            "x-site-id": string;
            "x-webhook-signature": string;
          };
        },
  ): Promise<(typeof Table)["$inferSelect"]> {
    if (!PAYSELECTION_PUBLIC_KEY) {
      throw new Error("Payselection public key not found");
    }

    if (!PAYSELECTION_SECRET_KEY) {
      throw new Error("Payselection secret key not found");
    }

    if (!PAYSELECTION_SITE_ID) {
      throw new Error("Payselection site id not found");
    }

    if (!PAYSELECTION_SITE_NAME) {
      throw new Error("Payselection site name not found");
    }

    if (props.type === "create") {
      if (!props.data.amount) {
        throw new Error("Amount is required");
      }

      if (props.data.amount < 0) {
        throw new Error("Amount cannot be negative");
      }

      const superResult = await super.create(props);

      const amount = props.data.amount;

      const payload = JSON.stringify({
        PaymentRequest: {
          OrderId: superResult.id,
          Amount: `${amount}`,
          Currency: "RUB",
          Description: `Checkout invoice id: ${superResult.id}`,
          RebillFlag: false,
          CustomerInfo: {
            Email: props.email,
            ReceiptEmail: props.email,
          },
          ExtendedData: {
            Email: {
              enabled: true,
              required: true,
            },
          },
        },
      });

      const method = "POST";
      const signature = crypto
        .createHmac("sha256", PAYSELECTION_PUBLIC_KEY)
        .update(
          `${method}\n${PAYSELECTION_SITE_NAME}\n${PAYSELECTION_SITE_ID}\n${superResult.id}\n${payload}`,
        )
        .digest("hex");

      const checkout:
        | {
            Id: string;
            Status: string;
            Url: string;
            Invoice: string;
            Description: string;
            Amount: string;
            Currency: string;
            CreatedDate: string;
          }
        | {
            Code: string;
            Description: string;
          } = await fetch(
        "https://webform.payselection.com/webpayments/paylink_create",
        {
          method,
          headers: {
            "X-SITE-ID": PAYSELECTION_SITE_ID,
            "X-REQUEST-ID": superResult.id,
            "X-REQUEST-SIGNATURE": signature,
            "Content-Type": "application/json",
          },
          body: payload,
        },
      ).then((res) => res.json());

      if ("Id" in checkout) {
        const updated = await this.update({
          id: superResult.id,
          data: {
            ...superResult,
            status: "open",
            providerId: checkout.Id,
            paymentUrl: checkout.Url,
          },
        });

        if (!updated) {
          throw new Error("Invoice not found");
        }

        return updated;
      }

      throw new Error(
        `Payselection error ${checkout.Code} ${checkout.Description}`,
      );
    } else {
      if (!PAYSELECTION_WEBHOOK_URL) {
        throw new Error("PAYSELECTION_WEBHOOK_URL not found");
      }

      const { OrderId } = props.data;

      let invoice = await this.findById({ id: OrderId });

      if (!invoice) {
        throw new Error("Invoice not found");
      }

      const signature = crypto
        .createHmac("sha256", PAYSELECTION_SECRET_KEY)
        .update(
          `POST\n${PAYSELECTION_WEBHOOK_URL}\n${PAYSELECTION_SITE_ID}\n${props.rawBody}`,
        )
        .digest("hex");

      if (signature !== props.headers["x-webhook-signature"]) {
        throw new Error("Signature mismatch");
      }

      if (props.data.Event === "Payment") {
        invoice = await this.update({
          id: invoice.id,
          data: {
            ...invoice,
            status: "paid",
          },
        });

        if (!invoice) {
          throw new Error("Invoice not found");
        }
      }

      return invoice;
    }
  }
}
