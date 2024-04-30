export class ApiClient {
  actionObject: any;
  actionsChain: any[] = [];
  results: any;

  constructor({ actionObject }: { actionObject: any }) {
    this.actionObject = actionObject;
  }

  async goTo({ path }: { path: string }) {
    const action = (previousResult) => {
      return this.actionObject.request(path);
    };

    this.actionsChain.push(action);
  }

  async getResult() {
    return this.actionsChain.reduce(async (previousResult, action) => {
      const result = await action(previousResult);

      return result;
    }, []);
  }
}
