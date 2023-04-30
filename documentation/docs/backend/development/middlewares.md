---
sidebar_position: 7
---

# Конфигурация Middlewares

В силу того, что Single Page Startup использует Strapi, можно настроить загрузку файлов в [S3](https://docs.strapi.io/dev-docs/providers) совместимые харнилища. Для этого необходимо добавить provider и соотвествующие параметры в файл конфигурации `./backend/config/middlewares.js`.

Для унификации файлов конфигурации добавлен параметр переменных среды окружения, отвечающий за установку `AWS_S3_URL`. Поэтому при конфигурации S3 совместимого облака не требуется изменять файл `./backend/config/middlewares.js`, достаточно лишь добавить переменные среды окружения в файл `./backend/.env`.

Ниже представлен пример файла для настройки [S3 облака от Selectel](https://selectel.ru/services/cloud/storage).

```txt title="./backend/.env"
AWS_S3_URL=*.selcdn.ru
AWS_S3_ACCESS_KEY_ID=111111_singlepagestartup
AWS_S3_ACCESS_SECRET=<SECRET_PASSWORD>
AWS_S3_BUCKET=721111
AWS_S3_REGION=ru-1
AWS_S3_ENDPOINT=https://selcdn.ru/singlepagestartup-main
```
