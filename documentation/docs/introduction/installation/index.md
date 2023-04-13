---
sidebar_position: 1
---

# Создание проекта

## Через интерфейс GitHub

Для создания проекта вы можете воспользоваться шаблоном [sps-lite](https://github.com/singlepagestartup/sps-lite) через инетфейс GitHub, нажав на кнопку **Use this template** появится несколько вариантов использования: **Create a new repository** и **Open in codespace**.

![Use this template](./img/use-this-template.png)

## Через CLI команду

Вы также можете создать пустой репозиторий и затем скачав репозиторий локально в рут репозитория выполнить несколько CLI команд

```bash
git remote add upstream https://github.com/singlepagestartup/sps-lite.git
git pull upstream main
git push origin main
```

:::info
Перед первым коммитом необходимо настроить [Husky](https://github.com/typicode/husky), иначе может появиться ошибка

```bash
git commit -m "Check husky 2" \
.husky/pre-commit: line 2: .husky/\_/husky.sh: No such file or directory
```

Для решения этой задачи нужно вызвать следующую команду в рут директории проекта:

```bash
npx husky install
```

или

```bash
npm i
```

:::

## Объяснение выполняемых команд

Данная команда подключает репозиторий sps-lite как родительский к вашему проекту

```bash
git remote add upstream https://github.com/singlepagestartup/sps-lite.git
```

Данная команда берет изменения из проекта, который подключен как `upstream`

```bash
git pull upstream main
```

:::danger
Если при `git pull` вы получаете ошибку `hint: You have divergent branches and need to specify how to reconcile them.`, то необходимо выполнить команду:

```bash
git config pull.rebase false
```

:::

Эта команда отправляет изменения в ваш репозиторий

```bash
git push origin main
```
