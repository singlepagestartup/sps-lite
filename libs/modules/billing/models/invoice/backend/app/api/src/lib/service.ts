import "reflect-metadata";
import { inject, injectable } from "inversify";
import { CRUDService, DI } from "@sps/shared-backend-api";
import { Table } from "@sps/billing/models/invoice/backend/repository/database";
import { Repository } from "./repository";
import Stripe from "stripe";
import {
  HOST_URL,
  SPS_RBAC_JWT_SECRET,
  SPS_RBAC_JWT_TOKEN_LIFETIME_IN_SECONDS,
  STRIPE_SECRET_KEY,
} from "@sps/shared-utils";
import * as jwt from "hono/jwt";

@injectable()
export class Service extends CRUDService<(typeof Table)["$inferSelect"]> {
  constructor(@inject(DI.IRepository) repository: Repository) {
    super(repository);
  }

  public async create(props: {
    data: any;
  }): Promise<(typeof Table)["$inferSelect"]> {
    if (!SPS_RBAC_JWT_SECRET) {
      throw new Error("RBAC JWT secret not found");
    }

    if (!props.data.amount) {
      throw new Error("Amount is required");
    }

    if (props.data.amount < 0) {
      throw new Error("Amount cannot be negative");
    }

    const superResult = await super.create(props);

    if (props.data.provider === "stripe") {
      if (!STRIPE_SECRET_KEY) {
        throw new Error("Stripe secret key not found");
      }

      const amount = props.data.amount;

      const stripe = new Stripe(STRIPE_SECRET_KEY);

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

      const signature = await jwt.sign(
        {
          exp:
            Math.floor(Date.now() / 1000) +
            SPS_RBAC_JWT_TOKEN_LIFETIME_IN_SECONDS,
          iat: Math.floor(Date.now() / 1000),
          invoice: {
            id: superResult.id,
          },
        },
        SPS_RBAC_JWT_SECRET,
      );

      const checkout = await stripe.checkout.sessions.create({
        line_items: [{ price: stripeProduct.default_price, quantity: 1 }],
        mode: "payment",
        success_url: `${HOST_URL}/api/billing/invoices/${superResult.id}/confirm?sign=${signature}`,
        cancel_url: `${HOST_URL}`,
      });

      if (!checkout.url) {
        throw new Error("Checkout URL not found");
      }

      const updated = await this.repository.updateFirstByField(
        "id",
        superResult.id,
        {
          ...superResult,
          paymentUrl: checkout.url,
        },
      );

      return updated;
    }

    return superResult;
  }
}
