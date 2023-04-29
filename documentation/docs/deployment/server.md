---
sidebar_position: 3
---

# Конфигурация сервера

## Подключение через SSH-консоль от root-пользователя

Для настройки нужно подключиться к серверу через `SSH-консоль`, если вы пользователь MacOS, то рекомендуем использовать [Termius](https://termius.com/) или стандартную `Terminal-консоль`.

## Создание нового пользователя

После подключение к серверу необходимо создать нового пользователя и выдать ему разрешения на нужные действия на сервере. Не рекомендуем выполнять настройку через `root`-пользователя.

Создаем нового пользователя с именем code, для этого выполняем следующую команду:

```bash
adduser code
```

После чего проставляем все нужные значения и задаем пароль пользователя. Рекомендуется использовать сложный пароль, для этого можете использовать генераторы паролей.

После успешного создания пользователя нужно задать ему разрешения на `sudo`-действия на сервере. Для этого выполняем команду:

```bash
usermod -aG sudo code
```

## Создание директории для проектов

Для дальнейшей работы нам понадобится директория, в которой будут храниться `docker-compose` и другие требуемые для данного способа развертывания файлы. Переходим в коневую директорию сервера:

```bash
cd ..
```

Проверяем что находимся в корневой директории, для этого вызываем команду:

```bash
ls
dist.linux-x86_64  bin  boot  dev  etc  home  initrd.img  initrd.img.old  lib  lib64  lost+found  media  mnt  opt  proc  root  run  sbin  snap  srv  sys  tmp  usr  var  vmlinuz  vmlinuz.old
```

Определить находимся мы в корневой директории или нет, можно по наличию таких директорий, как `etc`,`tmp` и `proc`. Если мы убедились что находимся в коневой директории, тогда выполняем следующую команду, если нет, то повторяем шаг с `cd ..`

```bash
mkdir code && chmod 777 code
```

Данная команда создаст директорию `code` и выдаст ей разрешение на добавление и выполнение любых команд и скриптов имеющимся в системе пользователям.

:::info
Впоследствии мы улучшим безопасность используемых при развертывании практик, с помощью выдачи ограниченных разрешений и добавим RCA ключ для аутентификации на сервере.
:::

## Установка Docker

Необходимо установить **Docker** на сервер, чтобы иметь возможность запускать контейнеры, которые мы создали на предыдущем шаге.

Для установки **Docker** используем следующий список команд.

Сначала обновляем существующий перечень пакетов:

```bash
sudo apt update
```

Затем устанавливаем необходимые пакеты, которые позволяют apt использовать пакеты по HTTPS:

```bash
sudo apt install apt-transport-https ca-certificates curl software-properties-common
```

Затем добавляем в свою систему ключ GPG официального репозитория Docker:

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

Добавляем репозиторий Docker в список источников пакетов APT:

```bash
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
```

Затем обновим базу данных пакетов информацией о пакетах Docker из вновь добавленного репозитория:

```bash
sudo apt update
```

Следует убедиться, что мы устанавливаем Docker из репозитория Docker, а не из репозитория по умолчанию Ubuntu:

```bash
apt-cache policy docker-ce
```

Вывод получится приблизительно следующий. Номер версии Docker может быть иным:

```bash
docker-ce:
  Installed: (none)
  Candidate: 18.03.1~ce~3-0~ubuntu
  Version table:
     18.03.1~ce~3-0~ubuntu 500
        500 https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages
```

Далее устанавливаем Docker:

```bash
sudo apt install docker-ce
```

Теперь Docker установлен, демон запущен, и процесс будет запускаться при загрузке системы. Убедимся, что процесс запущен:

```bash
sudo systemctl status docker
```

Вывод должен быть похож на представленный ниже, сервис должен быть запущен и активен:

```bash
docker.service - Docker Application Container Engine
   Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset: enabled)
   Active: active (running) since Thu 2018-07-05 15:08:39 UTC; 2min 55s ago
     Docs: https://docs.docker.com
 Main PID: 10096 (dockerd)
    Tasks: 16
   CGroup: /system.slice/docker.service
           ├─10096 /usr/bin/dockerd -H fd://
           └─10113 docker-containerd --config /var/run/docker/containerd/containerd.toml
```

Открываем новую консоль, эту можем закрыть, но НЕ через `Cmnd + C`, иначе процесс будет остановлен и надо будет заново запускать **Docker**.

## Использование Docker без sudo

По умолчанию, запуск команды docker требует привилегий пользователя root или пользователя группы docker, которая автоматически создается при установке Docker. При попытке запуска команды docker пользователем без привилегий sudo или пользователем, не входящим в группу docker, выводные данные будут выглядеть следующим образом:

```bash
docker: Cannot connect to the Docker daemon. Is the docker daemon running on this host?.
See 'docker run --help'.
```

Чтобы не вводить sudo каждый раз при запуске команды docker, добавим имя созданного пользователя `code`:

```bash
sudo usermod -aG docker code
```

Теперь мы можем работать с **Docker** без вызова `sudo` при использовании пользователя `code`.

Установка Docker Compose с помощью следующей команды:

```bash
sudo apt install docker-compose-plugin
```

Теперь сервер настроен и мы можем подключиться от имени пользователя `code` и настроить **Docker Swarm** для запуска проектов.
