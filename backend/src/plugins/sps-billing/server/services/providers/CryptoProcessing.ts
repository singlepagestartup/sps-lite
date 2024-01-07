import axios from "axios";
import FormData from "form-data";

export default class CryptoProcessing {
  ZERO_X_PROCESSING_SHOP_ID: string;
  ZERO_X_PROCESSING_TEST_PAYMENTS: boolean;
  BACKEND_URL: string;

  constructor() {
    this.ZERO_X_PROCESSING_SHOP_ID = strapi
      .plugin("sps-billing")
      .config("ZERO_X_PROCESSING_SHOP_ID");
    this.ZERO_X_PROCESSING_TEST_PAYMENTS = strapi
      .plugin("sps-billing")
      .config("ZERO_X_PROCESSING_TEST_PAYMENTS");
    this.BACKEND_URL = strapi.plugin("sps-billing").config("BACKEND_URL");
  }

  async createCheckout({
    currency,
    amount,
    userId = 1,
    userEmail = "rogwild.design@gmail.com",
    invoiceId,
    redirectTo = "",
  }) {
    const formData = new FormData();

    formData.append("currency", currency || "USDT");
    formData.append("amountusd", `${amount}`);
    formData.append("BillingId", `${invoiceId}`);
    formData.append("ClientId", `${userId}`);
    formData.append("MerchantId", `${this.ZERO_X_PROCESSING_SHOP_ID}`);
    formData.append("email", `${userEmail}`);
    formData.append("ReturnUrl", `${true}`);

    this.ZERO_X_PROCESSING_TEST_PAYMENTS
      ? formData.append("test", `${true}`)
      : "";

    formData.append(
      "SuccessUrl",
      `${this.BACKEND_URL}/api/sps-billing/invoices/${invoiceId}/confirm?redirect_to=${redirectTo}`,
    );
    formData.append("CancelUrl", `${this.BACKEND_URL}${redirectTo}`);

    const checkout = await axios({
      method: "POST",
      url: "https://app.0xProcessing.com/Payment",
      headers: {
        ...formData.getHeaders(),
      },
      data: formData,
    })
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.log(
          "CryptoProcessing createCheckout checkout",
          error.response?.data || error,
        );
      });

    return checkout;
  }
}
