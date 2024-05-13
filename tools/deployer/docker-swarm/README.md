# 🚀 SPS

## Docker Swarm

Для конфигурации **Docker Swarm** можно воспользоваться [официальной документацией](https://docs.docker.com/engine/swarm/swarm-tutorial/create-swarm/) или просто выполнить создание 1 инстанции **Swarm Manager**

```bash
docker swarm init
```

Пароль для панели администратора должен быть создан через команду

## Traefik

Для настройки **Traefik** нужно создать `docker-compose.traefik.yaml` файл и файл конфигурации **Traefik** `traefik.yml`

Для панели администрирования **Traefik** нужно создать пароль и поместить его в `docker-compose.traefik.yaml`

```bash
echo $(htpasswd -nb user password) | sed -e s/\\$/\\$\\$/g
										|    |
										|    |- заменить на необходимый пароль
										|- заменить на необходимое имя
```

Также нужно разместить сертификаты в папке `certs`

```bash
certs
|- <domain_name>.crt
|- <domain_name>.key
```

Для запуска **Traefik** выполняется команда

```bash
docker stack deploy -c=docker-compose.traefik.yaml traefik
```

## Portainer

Нужно создать файл `docker-compose.portainer.yaml` и директорию `portainer_data`

После чего в командной строке сервиса запустить их

```bash
docker stack deploy -c=docker-compose.portainer.yaml portainer
```

## Postgres

Нужно создать директорию `postgres_data` и файл `docker-compose.postgres.yaml`

```bash
docker stack deploy -c=docker-compose.postgres.yaml postgres
```

## Adminer

```bash
docker stack deploy -c=docker-compose.adminer.yaml adminer
```

## Backend

Нужно создать директорию `sps_backend_uploads` и файл `docker-compose.sps_backend.yaml`

Запуск сервиса осуществляется командой

```bash
docker stack deploy -c=docker-compose.sps_backend.yaml sps_backend
```

После чего нужно добавить `Config` в `Portainer` данного сервиса, куда поместить следующие данные:

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

> Созданный файл конфигурации нужно установить в сервиса `sps_backend` в разделе `Config` с параметром `Path in container` равным `/usr/src/app/.env` после чего перезапустить сервис.

## Frontend

Нужно создать файл `docker-compose.sps_frontend.yaml`

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
