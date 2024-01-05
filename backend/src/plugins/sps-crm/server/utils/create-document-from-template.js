const _ = require("lodash");
const htmlToPdf = require("html-pdf-node");
const decode = require("decode-html");

const templateSettings = {
  evaluate: /\{\{(.+?)\}\}/g,
  interpolate: /\{\{=(.+?)\}\}/g,
  escape: /\{\{-(.+?)\}\}/g,
};
const templater = (tmpl) => _.template(tmpl, templateSettings);

async function createDocumentFromTemplate(ctx) {
  const { uid, id, format = "html", params, saveFile = false } = ctx;
  const filters = {};

  if (id) {
    filters.id = id;
  } else if (uid) {
    filters.name = uid;
  }

  const [docTemplate] = await strapi.entityService.findMany(
    "plugin::email-designer.email-template",
    {
      filters,
    },
  );

  let html;

  if (docTemplate) {
    const { bodyHtml } = docTemplate;

    try {
      // console.log('params', params);
      html = templater(decode(bodyHtml))({
        ...params,
      });
    } catch (error) {
      console.log("🚀 ~ createDocumentFromTemplate ~ error", error);

      strapi.plugin("sentry").service("sentry").sendError(error);
    }
  }

  if (!html) {
    html = createHtml(params);
  }

  if (format === "html") {
    return html;
  } else if (format === "pdf") {
    const options = { format: "A4" };
    const file = { content: html };

    const pdfBuffer = await htmlToPdf
      .generatePdf(file, options)
      .catch((err) => {
        console.log("generatePdf err", err);
        return ctx.badRequest(err.message);
      });

    return pdfBuffer;
  }
}

module.exports = createDocumentFromTemplate;

function createHtml(params) {
  let html = "";

  for (const paramKey of Object.keys(params)) {
    if (typeof params[paramKey] === "object") {
      html += `${paramKey}: <br /> ${createHtml(params[paramKey])}<br /><br />`;
    } else {
      html += `${paramKey}: <br /> ${params[paramKey]}<br /><br />`;
    }
  }

  return html;
}
