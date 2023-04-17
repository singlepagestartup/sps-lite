---
sidebar_position: 4
---

# Добавление конфигурации

## Google

Для подключения Side Effects, связанных с Google сервисами нужно создать [Service Account](https://cloud.google.com/iam/docs/service-account-overview). В результате чего выполучите JSON-файл со следующим содержанием:

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

Содержимое данного файла нужно добавить в поле `config` и выбрать `google` в поле `provider`.

:::tip
Если требуется интеграция с [Google Sheets](/docs/backend/development/create-form#отправить-данные-в-google-sheets), то необходимо добавить поле `sheet` в полученный JSON файл.

```json
{
  ...,
  "sheet": "<GOOGLE_SHEET_ID>"
}
```

:::

![Add Configuration](./img/add-configuration.png)
