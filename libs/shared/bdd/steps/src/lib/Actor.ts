import { ApiClient } from "./ApiClient";

export class Actor {
  actionObject: any;
  iAm: "ApiClient";
  actionSubject?: ApiClient;
  actionsChain: any[] = [];

  constructor({ actionObject, iAm }: { actionObject: any; iAm: "ApiClient" }) {
    this.actionObject = actionObject;
    this.iAm = iAm;
    if (iAm === "ApiClient") {
      this.actionSubject = new ApiClient({ actionObject });
    }
  }

  async goTo({ path }: { path: string }) {
    this.actionSubject?.goTo({ path });
  }

  async passData({
    data,
    path,
    passAs,
    method,
  }: {
    data: any;
    path: string;
    passAs: "json" | "form-data";
    method: "GET" | "POST" | "PATCH" | "DELETE";
  }) {
    this.actionSubject?.passData({ data, path, passAs, method });
  }

  async getResult() {
    if (!this.actionSubject) {
      throw new Error("No action subject found");
    }

    return this.actionSubject.getResult();
  }
}
