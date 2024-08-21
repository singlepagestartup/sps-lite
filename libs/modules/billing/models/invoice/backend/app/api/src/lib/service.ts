import "reflect-metadata";
import { inject, injectable } from "inversify";
import { CRUDService, DI } from "@sps/shared-backend-api";
import { Table } from "@sps/billing/models/invoice/backend/repository/database";
import { Repository } from "./repository";
import Stripe from "stripe";
import {
  HOST_URL,
  SPS_RBAC_SECRET_KEY,
  STRIPE_SECRET_KEY,
} from "@sps/shared-utils";
import { api as paymentIntentsToInvoicesApi } from "@sps/billing/relations/payment-intents-to-invoices/sdk/server";
import { api as paymentIntentApi } from "@sps/billing/models/payment-intent/sdk/server";

@injectable()
export class Service extends CRUDService<(typeof Table)["$inferSelect"]> {
  constructor(@inject(DI.IRepository) repository: Repository) {
    super(repository);
  }

  async updatePaymentIntentStatus(props: {
    invoice: (typeof Table)["$inferSelect"];
  }) {
    if (!SPS_RBAC_SECRET_KEY) {
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
          "X-RBAC-SECRET-KEY": SPS_RBAC_SECRET_KEY,
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
            "X-RBAC-SECRET-KEY": SPS_RBAC_SECRET_KEY,
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
                  "X-RBAC-SECRET-KEY": SPS_RBAC_SECRET_KEY,
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
      | { data: any; type: "create" }
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
        success_url: `${HOST_URL}`,
        cancel_url: `${HOST_URL}`,
        metadata: {
          invoiceId: superResult.id,
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
}
