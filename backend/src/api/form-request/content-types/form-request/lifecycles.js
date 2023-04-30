const sideEffectsEmmiter = require("../../../../side-effects");

const uid = "api::form-request.form-request";

const populate = {
  form: {
    populate: {
      side_effects: {
        populate: {
          recievers: {
            populate: "*",
          },
        },
      },
    },
  },
  inputs: {
    populate: {
      options: {
        populate: "*",
      },
      option: {
        populate: "*",
      },
      files: {
        populate: "*",
      },
    },
  },
  files: {
    populate: "*",
  },
};

module.exports = {
  async afterCreate(event) {
    const { result } = event;
    const createdModel = await strapi.entityService.findOne(uid, result.id, {
      populate,
    });

    if (createdModel.form && createdModel.form?.side_effects) {
      for (const sideEffect of createdModel.form.side_effects) {
        sideEffects({ event, sideEffect });
      }
    }
  },
};

async function sideEffects({ event, sideEffect }) {
  const { result } = event;

  /**
   * Waiting while file uploads to Media Library
   */
  await new Promise((resolve) => {
    const tm = setTimeout(() => {
      clearTimeout(tm);
      resolve();
    }, 20000);
  });

  const createdModel = await strapi.entityService.findOne(uid, result.id, {
    populate,
  });

  const payload = {
    uid: createdModel?.form?.uid,
  };

  for (const input of createdModel.inputs) {
    const key = input.key;
    if (input.value) {
      payload[key] = input.value;
    } else if (input.option) {
      payload[key] = input.option?.title;
    } else if (input.options?.length) {
      payload[key] = input.options.map((option) => option.title).join(", ");
    } else if (input.files) {
      payload[key] = input.files.map((file) => file.url);
    } else if (input.is_true !== undefined) {
      payload[key] = `${input.is_true}`;
    } else {
      payload[key] = "";
    }
  }

  sideEffectsEmmiter({ event, sideEffect, payload });
}
