export class ApiClient {
  actionObject: any;
  actionsChain: any[] = [];

  constructor({ actionObject }: { actionObject: any }) {
    this.actionObject = actionObject;
  }

  async goTo({ path }: { path: string }) {
    const action = (previousResult) => {
      return this.actionObject.request(path);
    };

    this.actionsChain.push(action);
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
    const action = (previousResult) => {
      if (method === "GET") {
        return this.actionObject.request(path, {
          method,
        });
      }

      if (passAs === "json") {
        return this.actionObject.request(path, data);
      } else {
        const formData = new FormData();
        const stringifiedData = JSON.stringify(data);

        formData.append("data", stringifiedData);

        return this.actionObject.request(path, {
          method,
          body: formData,
        });
      }
    };

    this.actionsChain.push(action);
  }

  async getResult() {
    const res = this.actionsChain.reduce(async (previousResult, action) => {
      const result = await action(previousResult);

      return result;
    }, undefined);

    this.actionsChain = [];

    return res;
  }
}
