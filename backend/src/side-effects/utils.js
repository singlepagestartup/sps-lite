const { Readable } = require("stream");
const { google } = require("googleapis");
const path = require("path");

function getGoogleDriveService() {
  const KEYFILEPATH = path.join(__dirname, "../../../../config", "google.json");
  const SCOPES = ["https://www.googleapis.com/auth/drive"];

  const auth = new google.auth.GoogleAuth({
    keyFile: KEYFILEPATH,
    scopes: SCOPES,
  });
  const driveService = google.drive({ version: "v3", auth });
  return driveService;
}

async function uploadFileToGoogleDrive(pdfFileMeta) {
  const folderId = process.env.GOOGLE_DRIVE_FOLDER;
  if (!folderId) {
    return;
  }

  const service = getGoogleDriveService();

  const { data } = await service.files.create({
    resource: {
      name: pdfFileMeta.name,
      parents: [folderId],
    },
    media: {
      mimeType: "application/pdf",
      body: Readable.from(pdfFileMeta.buffer),
    },
    fields: "id,name",
  });
}
