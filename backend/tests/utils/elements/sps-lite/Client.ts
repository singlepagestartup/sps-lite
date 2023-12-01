import axios from "axios";
import { config as playwrightConfig } from "../../../../playwright.config";

export class Client {
  baseUrl: string;
  requests: any[] = [];
  lastRequest?: any;

  constructor(props?: any) {
    this.baseUrl = playwrightConfig.use.baseURL;
  }

  async request({
    method,
    url,
    data,
    headers = {},
  }: {
    method: string;
    url: string;
    data?: any;
    headers?: any;
  }) {
    const request = {
      method,
      url: this.baseUrl + url,
      headers,
    };

    if (data) {
      request["body"] = data;
    }

    function sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    await sleep(500);

    const response = await axios({
      method,
      url: this.baseUrl + url,
      headers: request["headers"],
      data,
    }).then((res) => res.data);

    this.requests.push({ request, response });
    this.lastRequest = { request, response };

    return response;
  }
}
