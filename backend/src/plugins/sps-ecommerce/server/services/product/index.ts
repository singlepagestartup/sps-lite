/**
 * product service
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreService(
  "plugin::sps-ecommerce.product",
  ({ strapi }) => ({
    async updateInCart({
      id,
      cart,
      quantity,
    }: {
      id: any;
      cart: any;
      quantity: number;
    }) {
      const users: any = await strapi.entityService?.findMany(
        "plugin::users-permissions.user",
        {
          filters: {
            cart: cart.id,
          },
        },
      );

      const user = users[0];

      const orderConfig = {
        cart: "cart",
        user: "user",
      };

      const order = await strapi
        .service("plugin::sps-ecommerce.order")
        .findOrCreate({
          data: {
            user,
            cart,
            publishedAt: new Date().toISOString(),
          },
          config: orderConfig,
        });

      const orderProductConfig = {
        order: "order",
        product: "product",
      };
      const orderProduct = await strapi
        .service("plugin::sps-ecommerce.order-product")
        .findOrCreate({
          data: {
            order: order,
            product: { id },
          },
          config: orderProductConfig,
        });

      const quantityAttributeKeyConfig = {
        key: "key",
        type: "type",
      };
      const quantityAttributeKey = await strapi
        .service("plugin::sps-ecommerce.attribute-key")
        .findOrCreate({
          data: {
            title: "quantity",
            key: "quantity",
            type: "number",
          },
          config: quantityAttributeKeyConfig,
        });

      const { results: existingQuantityAttribute } = await strapi
        .service("plugin::sps-ecommerce.attribute")
        .find({
          filters: {
            attribute_key: {
              id: quantityAttributeKey.id,
            },
            order_products: {
              id: {
                $in: [orderProduct.id],
              },
            },
          },
          populate: "*",
        });

      let quantityValue = quantity;
      if (existingQuantityAttribute.length) {
        const currentQuantityAttribute = existingQuantityAttribute[0];
        const currentQuantity =
          currentQuantityAttribute[quantityAttributeKey.type];

        await strapi
          .service("plugin::sps-ecommerce.attribute")
          .update(currentQuantityAttribute.id, {
            data: {
              order_products: currentQuantityAttribute.order_products.filter(
                (orderProduct: any) => orderProduct.id !== orderProduct.id,
              ),
            },
          });

        quantityValue = currentQuantity + quantity;
      }

      if (quantityValue <= 0) {
        return await strapi
          .service("plugin::sps-ecommerce.order-product")
          .delete(orderProduct.id);
      }

      const quantityAttributeConfig = {
        attribute_key: "attribute_key",
        number: "number",
      };
      const quantityAttribute = await strapi
        .service("plugin::sps-ecommerce.attribute")
        .findOrCreate({
          data: {
            attribute_key: quantityAttributeKey,
            number: quantityValue,
            type: "number",
            order_products: [orderProduct],
          },
          config: quantityAttributeConfig,
        });

      return order;
    },
  }),
);
