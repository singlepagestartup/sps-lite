/**
 * order service
 */

const { ValidationError } = require("@strapi/utils").errors;
import { factories } from "@strapi/strapi";
import findOrCreate from "../../utils/services/find-or-create";

const uid = "plugin::sps-ecommerce.order";

export default factories.createCoreService(uid, ({ strapi }) => ({
  async findOrCreate(params) {
    const schema = strapi.plugin("sps-ecommerce").contentTypes.order;

    return await findOrCreate(params, { uid, schema });
  },

  async getTotalAmount({ id }: { id: number }) {
    let totalAmount = 0;

    const order = await strapi.service(uid).findOne(id, {
      populate: "*",
    });

    for (const orderProduct of order.order_products) {
      const filledOrderProduct = await strapi
        .service("plugin::sps-ecommerce.order-product")
        .findOne(orderProduct.id, {
          populate: "*",
        });

      if (!filledOrderProduct.product) {
        continue;
      }

      const {
        results: [quantityAttribute],
      } = await strapi.service("plugin::sps-ecommerce.attribute").find({
        filters: {
          order_products: {
            id: {
              $in: [filledOrderProduct.id],
            },
          },
        },
        populate: "*",
      });

      const {
        results: [productPriceAttribute],
      } = await strapi.service("plugin::sps-ecommerce.attribute").find({
        filters: {
          products: { id: { $in: [filledOrderProduct.product.id] } },
          attribute_key: {
            key: "price",
          },
        },
        populate: "*",
      });

      if (!productPriceAttribute || !productPriceAttribute.attribute_key) {
        throw new ValidationError(
          `Product with id ${filledOrderProduct.product.id} doesn't have price attribute`,
        );
      }

      if (!quantityAttribute || !quantityAttribute.attribute_key) {
        throw new ValidationError("Quantity attribute error");
      }

      totalAmount +=
        productPriceAttribute[productPriceAttribute.attribute_key.type] *
        quantityAttribute[quantityAttribute.attribute_key.type];
    }

    return totalAmount;
  },

  async onSuccessPayment({ invoice }: { invoice: any }) {
    const filledInvoice = await strapi
      .service("plugin::sps-billing.invoice")
      .findOne(invoice.id, {
        populate: {
          orders: {
            populate: "*",
          },
        },
      });

    if (filledInvoice?.orders.length) {
      for (const order of filledInvoice.orders) {
        await strapi.service(uid).update(order.id, {
          data: {
            status: "paid",
          },
        });

        const notification = await strapi
          .service("plugin::sps-notification.notification")
          .create({
            data: {
              user: order.user,
              title: `Successfull order #${order.id}`,
            },
          });
      }
    }
  },
}));
