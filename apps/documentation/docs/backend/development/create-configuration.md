---
sidebar_position: 4
---

# Adding configuration

## Google

To connect side-effects related to Google services, you need to create a [Service Account](https://cloud.google.com/iam/docs/service-account-overview). As a result, you will receive a JSON file with the following contents:

```json
{
  "type": "service_account",
  "project_id": "<PROJECT_ID>",
  "private_key_id": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "private_key": "-----BEGIN PRIVATE KEY-----\nXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n-----END PRIVATE KEY-----\n",
  "client_email": "<SPECIAL_EMAIL>.iam.gserviceaccount.com",
  "client_id": "<YOUR_ID>",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/<SPECIAL_EMAIL>.iam.gserviceaccount.com"
}
```

To use this file, add its contents to the `config` field and select `google` as the `provider` field.

## Google Sheets

If you need integration with Google Sheets, in addition to adding the standard Service Account JSON object, you need to add a `sheet` field to the generated JSON file with the definition of the Google Sheet document to which the backend data will be added.

```json
{
  "type": "service_account",
  "project_id": "<PROJECT_ID>",
  ...,
  "sheet": "<GOOGLE_SHEET_ID>"
}
```

![Add Configuration](./img/add-configuration.png)
