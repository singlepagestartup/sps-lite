import { getBackendData } from "~utils/api";
import { BACKEND_URL } from "~utils/envs";
import {
  pageBlocksPopulate,
  publicPageAdditonalModels,
} from "~utils/api/queries";

export default class Page {
  name: string;
  locale: string;

  constructor({ name, locale }: { name: string; locale: string }) {
    this.name = name;
    this.locale = locale;
  }

  async get(props: any = {}) {
    const {
      populate = pageBlocksPopulate,
      additionalModels = publicPageAdditonalModels,
    } = props;

    const pageData = (await getBackendData({
      url: `${BACKEND_URL}/api/${this.name}`,
      params: { populate, locale: this.locale },
    })) as any;

    const additionalBlocks = await getAdditionalBlocks({
      locale: this.locale,
      additionalModels,
    });

    return { ...pageData, ...additionalBlocks };
  }
}

class AdditionalBlock {
  name: string;
  locale: string;

  constructor({ name, locale }: { name: string; locale: string }) {
    this.name = name;
    this.locale = locale;
  }

  async get({ populate }: { populate: any }) {
    return getBackendData({
      url: `${BACKEND_URL}/api/${this.name}`,
      params: {
        locale: this.locale,
        populate,
      },
    });
  }
}

export async function getAdditionalBlocks({
  locale,
  additionalModels,
}: {
  locale: string;
  additionalModels: [{ key: string; model: string; populate: any }];
}) {
  const additionalBlocks = {} as any;

  for (const additionalModel of additionalModels) {
    const additionalBlock = await new AdditionalBlock({
      name: additionalModel.model,
      locale,
    }).get({ populate: additionalModel.populate });

    additionalBlocks[additionalModel.key] = additionalBlock || {};
  }

  return additionalBlocks;
}
