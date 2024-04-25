const { isNil, isPlainObject } = require("lodash/fp");
const strapiUtils = require("@strapi/utils");
const { yup, validateYupSchema } = require("@strapi/utils");

const callbackSchema = yup.object({
  identifier: yup.string().required(),
  password: yup.string().required(),
});

const registerSchema = yup.object({
  email: yup.string().email().required(),
  username: yup.string().required(),
  password: yup.string().required(),
});

const sendEmailConfirmationSchema = yup.object({
  email: yup.string().email().required(),
});

const validateEmailConfirmationSchema = yup.object({
  confirmation: yup.string().required(),
});

const forgotPasswordSchema = yup
  .object({
    email: yup.string().email().required(),
  })
  .noUnknown();

const resetPasswordSchema = yup
  .object({
    password: yup.string().required(),
    passwordConfirmation: yup.string().required(),
    code: yup.string().required(),
  })
  .noUnknown();

const changePasswordSchema = yup
  .object({
    password: yup.string().required(),
    passwordConfirmation: yup
      .string()
      .required()
      .oneOf([yup.ref("password")], "Passwords do not match"),
    currentPassword: yup.string().required(),
  })
  .noUnknown();

const updateUserBodySchema = yup.object().shape({
  email: yup.string().email().min(1),
  username: yup.string().min(1),
  password: yup.string().min(1),
  role: yup.lazy((value) =>
    typeof value === "object"
      ? yup.object().shape({
          connect: yup
            .array()
            .of(yup.object().shape({ id: yup.strapiID().required() }))
            .required(),
          disconnect: yup
            .array()
            .test(
              "CheckDisconnect",
              "Cannot remove role",
              function test(disconnectValue) {
                if (value.connect.length === 0 && disconnectValue.length > 0) {
                  return false;
                }

                return true;
              },
            )
            .required(),
        })
      : yup.strapiID(),
  ),
});

const validateCallbackBody = validateYupSchema(callbackSchema);
const validateRegisterBody = validateYupSchema(registerSchema);
const validateSendEmailConfirmationBody = validateYupSchema(
  sendEmailConfirmationSchema,
);
const validateEmailConfirmationBody = validateYupSchema(
  validateEmailConfirmationSchema,
);
const validateForgotPasswordBody = validateYupSchema(forgotPasswordSchema);
const validateResetPasswordBody = validateYupSchema(resetPasswordSchema);
const validateChangePasswordBody = validateYupSchema(changePasswordSchema);
const validateUpdateUserBody = validateYupSchema(updateUserBodySchema);

const parseBody = (ctx) => {
  if (ctx.is("multipart")) {
    return strapiUtils.parseMultipartData(ctx);
  }
  const { data } = ctx.request.body || {};
  return { data };
};

// @ts-ignore
const transformResponse = (resource, meta = {}, { contentType } = {}) => {
  if (isNil(resource)) {
    return resource;
  }

  return {
    data: transformEntry(resource, contentType),
    meta,
  };
};

const transformComponent = (data, component) => {
  if (Array.isArray(data)) {
    return data.map((datum) => transformComponent(datum, component));
  }

  const res = transformEntry(data, component);

  if (isNil(res)) {
    return res;
  }

  return res;
};

const transformEntry = (entry, type) => {
  if (isNil(entry)) {
    return entry;
  }

  if (Array.isArray(entry)) {
    return entry.map((singleEntry) => transformEntry(singleEntry, type));
  }

  if (!isPlainObject(entry)) {
    throw new Error("Entry must be an object");
  }

  const { id, ...properties } = entry;

  const attributeValues = { id };

  for (const key in properties) {
    const property = properties[key];
    const attribute = type && type.attributes[key];

    if (attribute && attribute.type === "relation") {
      const data = transformEntry(
        property,
        strapi.contentType(attribute.target),
      );

      attributeValues[key] = { data };
    } else if (attribute && attribute.type === "component") {
      attributeValues[key] = transformComponent(
        property,
        strapi.components[attribute.component],
      );
    } else if (attribute && attribute.type === "dynamiczone") {
      if (isNil(property)) {
        attributeValues[key] = property;
      }

      attributeValues[key] = property.map((subProperty) => {
        return transformComponent(
          subProperty,
          strapi.components[subProperty.__component],
        );
      });
    } else if (attribute && attribute.type === "media") {
      const data = transformEntry(
        property,
        strapi.contentType("plugin::upload.file"),
      );

      attributeValues[key] = { data };
    } else {
      attributeValues[key] = property;
    }
  }

  return attributeValues;
};

module.exports = {
  transformComponent,
  transformResponse,
  transformEntry,
  parseBody,
  validateCallbackBody,
  validateChangePasswordBody,
  validateRegisterBody,
  validateSendEmailConfirmationBody,
  validateEmailConfirmationBody,
  validateForgotPasswordBody,
  validateResetPasswordBody,
  validateUpdateUserBody,
};
