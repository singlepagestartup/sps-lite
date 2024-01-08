import setModelPreviousValue from "../../utils/lifecycles/set-model-previous-value";
import getModelPreviousValue from "../../utils/lifecycles/get-model-previous-value";

export default {
  async beforeUpdate(event) {
    await setModelPreviousValue({ event });
  },
  async afterUpdate(event) {
    onSuccessPayment(event);
  },
};

async function onSuccessPayment(event: any) {
  try {
    const { result } = event;

    const previousInvoice = await getModelPreviousValue({ event });
    if (!previousInvoice) {
      return;
    }

    if (previousInvoice.status !== "success" && result.status === "success") {
      const filledInvoice = await strapi
        .service("plugin::sps-billing.invoice")
        .findOne(result.id, {
          populate: "*",
        });

      if (filledInvoice?.user) {
        await sendSusccessEmail({ invoice: filledInvoice });
      }
      console.log("🚀 ~ onSuccessPayment ~ invoice is paid");
    }
  } catch (error) {
    console.log("🚀 ~ onSuccessPayment ~ error:", error);
  }
}

async function sendSusccessEmail({ invoice }: { invoice: any }) {
  let tier;
  if (invoice?.tier?.id) {
    tier = await strapi
      .service("plugin::sps-subscription.tier")
      .findOne(invoice.tier.id, {
        populate: "*",
      });
  }

  const emailSettings: any = strapi.config.get("plugin.email");

  await strapi.plugins["email"].services.email.send({
    to: invoice.user.email,
    from:
      emailSettings.settings?.defaultFrom?.email ||
      emailSettings.settings?.defaultFrom ||
      "no-reply@mail.singlepagestartup.com",
    replyTo:
      emailSettings.settings?.defaultReplyTo || "support@singlepagestartup.com",
    subject: `${emailSettings.appName} | Successfull payment #${invoice.id}`,
    html: `<p>Hi ${invoice.user.username}${
      tier?.attachments?.length > 0
        ? `, here is your secret information: </p></br>${tier.attachments
            .map((a) => `<p>${a.title}</p>`)
            .join("<br/>")}`
        : ", no attachments</p>"
    }`,
  });
}
