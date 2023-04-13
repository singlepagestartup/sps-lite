---
sidebar_position: 5
---

# Docker Swarm

## Подключаемся к серверу от имени пользователя `code`

Если пользователь не создан, то необходимо выполнить шаги, описанные в [документации по настройке сервера](http://localhost:3333/docs/deployment/server).

## Создание Docker Swarm

Для конфигурации **Docker Swarm** можно воспользоваться [официальной документацией](https://docs.docker.com/engine/swarm/swarm-tutorial/create-swarm/) или просто выполнить создание 1 инстанции **Swarm Manager**, выполнив команду:

```bash
docker swarm init
```

После того, как создан `Docker Swarm` можно перейти к настройке окружения, в котором будет работать проект.

## Настройка окружения

В репозитории Single Page Startup имеется директория `deployment`, в ней находятся все необходимые `docker-compose` файлы.

![Directory](./img/directory.png)

:::danger
Все нижеперечисленные команды надо выполнять в директории `code`, которую мы создали в корневой директории сервера
:::

## Traefik

Для настройки **Traefik** нужно создать `docker-compose.traefik.yaml` файл и файл конфигурации **Traefik** `traefik.yml`. В файле `docker-compose.traefik.yaml` нужно заменить поле **Host(\`traefik.yourstartup.com\`)** в соответствии с доменом и поддоменом, который был указан при настройке `DNS-записей` в ходе выполнения пунктов раздела [SSL-сертификаты](/docs/deployment/certificates).

Для панели администрирования **Traefik** нужно создать пароль и поместить его в `docker-compose.traefik.yaml`

```bash
echo $(htpasswd -nb user password) | sed -e s/\\$/\\$\\$/g
			        |    |
					|    └ заменить на необходимый пароль
					└ заменить на необходимое имя
```

Также нужно разместить сертификаты, полученные в ходе выполнения пунктов раздела [SSL-сертификаты](/docs/deployment/certificates), в папке `certs`

```bash
certs
├ <domain_name>.crt
└ <domain_name>.key
```

Для запуска **Traefik** выполняется команда

```bash
docker stack deploy -c=docker-compose.traefik.yaml traefik
```

После успешного запуска **Traefik** мы должны получить к нему доступ по адресу `traefik.<your_domain.com>`.

## Portainer

Нужно создать файл `docker-compose.portainer.yaml` и директорию `portainer_data`. В файле `docker-compose.portainer.yaml` нужно заменить поле **Host(\`portainer.yourstartup.com\`)** в соответствии с доменом и поддоменом, который был указан при настройке `DNS-записей` в ходе выполнения пунктов раздела [SSL-сертификаты](/docs/deployment/certificates).

После чего в командной строке сервиса запустить их

```bash
docker stack deploy -c=docker-compose.portainer.yaml portainer
```

После успешного запуска **Portainer** мы должны получить к нему доступ по адресу `portainer.<your_domain.com>`.

## Postgres

Нужно создать директорию `postgres_data` и файл `docker-compose.postgres.yaml`

```bash
docker stack deploy -c=docker-compose.postgres.yaml postgres
```

## Adminer

Нужно создать файл `docker-compose.adminer.yaml`. В файле `docker-compose.adminer.yaml` нужно заменить поле **Host(\`adminer.yourstartup.com\`)** в соответствии с доменом и поддоменом, который был указан при настройке `DNS-записей` в ходе выполнения пунктов раздела [SSL-сертификаты](/docs/deployment/certificates).

```bash
docker stack deploy -c=docker-compose.adminer.yaml adminer
```

После успешного запуска **Adminer** мы должны получить к нему доступ по адресу `adminer.<your_domain.com>`.

## Backend

Нужно создать директорию `sps_backend_uploads` и файл `docker-compose.sps_backend.yaml`. В файле `docker-compose.sps_backend.yaml` нужно заменить поле **Host(\`api.yourstartup.com\`)** в соответствии с доменом и поддоменом, который был указан при настройке `DNS-записей` в ходе выполнения пунктов раздела [SSL-сертификаты](/docs/deployment/certificates).

Запуск сервиса осуществляется командой

```bash
docker stack deploy -c=docker-compose.sps_backend.yaml sps_backend
```

После чего нужно добавить `Config` в `Portainer` данного сервиса, куда поместить переменные окружения:

```txt

NODE_ENV=production

APP_KEYS=XXXXXXXXXXXXXXXXXXXXXXXXXXXX
JWT_SECRET=XXXXXXXXXXXXXXXXXXXXXXXXXXXX
ADMIN_JWT_SECRET=XXXXXXXXXXXXXXXXXXXXXXXXXXXX
API_TOKEN_SALT=XXXXXXXXXXXXXXXXXXXXXXXXXXXX

DATABASE_HOST=postgres_postgres
DATABASE_PASSWORD=password
```

**APP_KEYS** - строка

**JWT_SECRET** - ключ JWT, если его поменять после создания пользователя в сервисе бекенда, то зайти в аккаунт пользователя не получится

**ADMIN_JWT_SECRET** - ключ JWT для администратора, если его поменять после создания пользователя в сервисе бекенда, то зайти в аккаунт администратора не получится. Надо будет удалять пользователя через adminer.

**DATABASE_PASSWORD** - был установлен в `docker-compose.db.yaml`

Более детальную информация о передаваемых параметрах можно найти в официальной документации [Strapi](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations.html)

> Созданный файл конфигурации нужно установить в сервисе `sps_backend` в разделе `Config` с параметром `Path in container` равным `/usr/src/app/.env` после чего перезапустить сервис.

После успешного запуска **Backend** мы должны получить к нему доступ по адресу `api.<your_domain.com>`.

## Frontend

Нужно создать файл `docker-compose.sps_frontend.yaml`. В файле `docker-compose.sps_frontend.yaml` нужно заменить поле **Host(\`yourstartup.com\`)** в соответствии с доменом и поддоменом, который был указан при настройке `DNS-записей` в ходе выполнения пунктов раздела [SSL-сертификаты]

Запуск сервиса осуществляется командой

```bash
docker stack deploy -c=docker-compose.sps_frontend.yaml sps_frontend
```

После чего нужно добавить `Config` в `Portainer` данного сервиса, куда поместить следующие данные:

```txt
BACKEND_URL=https://api.apisps.ru
NEXT_PUBLIC_BACKEND_URL=https://api.apisps.ru
```

**BACKEND_URL** - домен, на котором работает `sps_backend`
**NEXT_PUBLIC_BACKEND_URL** - домен, на котором работает `sps_backend`

> Созданный файл конфигурации нужно установить в сервиса `sps_frontend` в разделе `Config` с параметром `Path in container` равным `/usr/src/app/.env.production` после чего перезапустить сервис.

После успешного запуска **Frontend** мы должны получить к нему доступ по адресу `<your_domain.com>`.
