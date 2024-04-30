import { ApiClient } from "./ApiClient";

export class Actor {
  actionObject: any;
  iAm: "ApiClient";
  actionSubject?: ApiClient;

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

  async getResult() {
    if (!this.actionSubject) {
      throw new Error("No action subject found");
    }

    return this.actionSubject.getResult();
  }
}
