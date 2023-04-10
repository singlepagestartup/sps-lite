import { getBackendData } from "~utils/api";
import { BACKEND_URL } from "~utils/envs";
import { pageBlocksPopulate } from "~utils/api/queries";

export default class Page {
  name: string;
  locale: string;

  constructor({ name, locale }: { name: string; locale: string }) {
    this.name = name;
    this.locale = locale;
  }

  async get(props: any = {}) {
    const { populate = pageBlocksPopulate } = props;

    const pageData = (await getBackendData({
      url: `${BACKEND_URL}/api/${this.name}`,
      params: { populate, locale: this.locale },
    })) as any;

    return { ...pageData };
  }
}
