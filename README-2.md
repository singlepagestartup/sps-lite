# Page Blocks

Концепция отображения информации на страницах сайта на основе данных с бекенда.

## Как работает?

### На бекенде

На бекенде создаются `Components`, которые размещаются в категории `Page-blocks`. Эти блоки имееют в конце приставку `Block`. И имеют содержимое, которое необходимо для отображения компонента (секции/блока) на фронте. Данные компоненты подключаются на страницу в виде повторяемых динамических компонентов.

```json
// Schema

{
  "collectionName": "components_page_blocks_hero_section_blocks",
  "info": {
    "displayName": "Hero Section Block",
    "icon": "window-restore",
    "description": ""
  },
  "options": {},
  "attributes": {
    "title": {
      "type": "text"
    },
    "description": {
      "type": "richtext"
    },
    "media": {
      "type": "media",
      "multiple": true,
      "required": false,
      "allowedTypes": ["images", "files", "videos", "audios"]
    },
    "buttons": {
      "type": "component",
      "repeatable": true,
      "component": "elements.button"
    },
    "variant": {
      "type": "enumeration",
      "enum": ["split"],
      "default": "split",
      "required": true
    }
  }
}
```

```json
// API
// /api/<some-page>

{
  "data": {
    "page_blocks": [
      {
        "buttons": [],
        "description": "All the charts, datepickers, and notifications in the world can't beat checking off some items on a paper card.",
        "id": 1,
        "media": [],
        "title": "Focus on what matters",
        "variant": "split",
        "_Component": "page-blocks.hero-section-block"
      }
    ]
  }
}
```

### На фронтенде

При получении данных с бекенда в `getStaticProps` и передаче их на страницу, необходимо определить какой компонент нужно отобразить. Для этого используется параметр `_Component`. Например для компонента `"page-blocks.hero-section-block"` нужно отобразить `HeroSections`. Массив ассоциаций `pageBlockComponents` находится в файле `~utils/api`.

Для упрощения данной процедуры имееются компоненты высшего порядка `PublicPage` (для публичных страниц), `DashboardPage` (для страниц доступных после аутентификации) и `AuthPage` (для страниц аутентификации). В них передаются все параметры, получаемые из API-функций `get<Some>Page` и после чего определяется какой компонент отобразить.

Также на страницу передаются дополнительные переменные `header`, `footer`, `shoppingCart` для отображения повторяемых элементов.

### Варианты отображаемых компонентов

Большинство используемых Page-блоков содержат ключ `variant`, которые соответствует одному из вариантов отображения. Соответствия ключа и типа отображения находятся непосредственно в компонентах `~components/page-blocks/<component-name>/index.tsx`. Напимер компонент `~components/page-blocks/hero-sections/index.tsx` имеет один вариант `split`, который соответствует компоненту `~components/page-blocks/hero-sections/Split.tsx`.

# First commit

> After first git commit you may get an error: \
> % git commit -m "Check husky 2" \
> .husky/pre-commit: line 2: .husky/\_/husky.sh: No such file or directory

You need call that command in `root` folder

```bash
npx husky install
or
npm i
```

# How to fork?

1. Create a new_repo at github
2. git clone new_repo
3. cd new_repo
4. git checkout -b main
5. git remote add upstream https://github.com/singlepagestartup/sps-lite.git
6. git pull upstream main
7. git push origin main

> If tou get `hint: You have divergent branches and need to specify how to reconcile them.`, run:
>
> ```bash
> git config pull.rebase false
> ```

# Actions Secrets

DOCKER_HUB_URL:

- `registry.hub.docker.com`, если загрузка должна происходить в Docker Hub
- `cr.selcloud.ru` для Selectel

DOCKER_HUB_USERNAME:

- `singlepagestartup` или другой для Docker Hub
- `sps` для Selectel

DOCKER_HUB_LOGIN_USERNAME:

- `singlepagestartup` или другой для Docker Hub
- `token` для Selectel

DOCKER_HUB_PASSWORD:

- `<secret_password>` - пароль от Container Registry

APP_NAME:

- `<repository_name>` - название проекта

PORTAINER_TEST_BACKEND_UPDATE_URL:

- `https://<portainer_host>` - адрес обновления бекенд сервиса Portainer

PORTAINER_TEST_FRONTEND_UPDATE_URL:

- `https://<portainer_host>` - адрес обновления фронтенд сервиса Portainer
