const { google } = require("googleapis");

async function getGoogleSheetsService() {
  const configs = await strapi.entityService.findMany(
    "plugin::sps-crm.configuration",
    {
      populate: {
        configs: {
          populate: "*",
        },
      },
    },
  );

  const googleDriveConfig = configs.configs.find(
    (c) => c.provider === "google",
  );

  if (!googleDriveConfig) {
    console.log("No Google Config items in Strapi Configuration");
    return;
  }

  const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

  const auth = new google.auth.GoogleAuth({
    credentials: googleDriveConfig.config,
    scopes: SCOPES,
  });
  const sheetsService = google.sheets({ version: "v4", auth });

  return sheetsService;
}

async function addToSheet({ payload }) {
  const configs = await strapi.entityService.findMany(
    "plugin::sps-crm.configuration",
    {
      populate: {
        configs: {
          populate: "*",
        },
      },
    },
  );

  const googleDriveConfig = configs.configs.find(
    (c) => c.provider === "google",
  );

  if (!googleDriveConfig) {
    console.log("No Google Config items in Strapi Configuration");
    return;
  }

  const spreadsheetId = googleDriveConfig.config?.sheet;

  if (!spreadsheetId) {
    console.log('No sheet in Google Config. Add "sheet" key to the object.');
    return;
  }

  const service = await getGoogleSheetsService();

  let sheetRange;

  try {
    sheetRange = await service.spreadsheets.values.get({
      spreadsheetId,
      range: payload.uid,
    });
  } catch (error) {
    console.log(error.message);

    strapi.plugin("sentry").service("sentry").sendError(error);
  }

  if (!sheetRange) {
    sheetRange = await service.spreadsheets.batchUpdate({
      spreadsheetId,
      resource: {
        requests: [
          {
            addSheet: {
              properties: {
                title: payload.uid,
              },
            },
          },
        ],
      },
    });

    const titlesRow = [Object.keys(payload).filter((key) => key !== "uid")];

    await service.spreadsheets.values.append({
      spreadsheetId,
      range: payload.uid,
      resource: { values: titlesRow },
      valueInputOption: "USER_ENTERED",
      responseValueRenderOption: "FORMULA",
    });
  }

  let result;

  if (sheetRange) {
    const sanitizedPayload = { ...payload };
    delete sanitizedPayload.uid;

    /**
     * Google Sheets API waits for such type of value:
     * [["First Column Value", "Second Column Value", ...]]
     */
    const passToSheetValues = [
      Object.values(sanitizedPayload).map((value) => {
        if (Array.isArray(value)) {
          return value.join(", \n");
        }

        return value;
      }),
    ];

    result = await service.spreadsheets.values.append({
      spreadsheetId,
      range: payload.uid,
      resource: { values: passToSheetValues },
      valueInputOption: "USER_ENTERED",
      responseValueRenderOption: "FORMULA",
    });
  }
}

module.exports = addToSheet;
