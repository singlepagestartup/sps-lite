---
sidebar_position: 2
---

# Commands

We have preconfigured a set of tools to facilitate frontend development using Next.js and the BDD (Behavior-Driven Development) approach.

This document contains a list of commands and their descriptions for a frontend project. These commands cover various aspects such as development, debugging, building, testing, linting, and formatting. The document also provides instructions on how to use the commands and explains their respective outputs.

```json
...,
"scripts": {
    "dev": "rm -rf .next && NODE_ENV=development node theme.js && next dev",
    "debug": "NODE_ENV=development node theme.js && NODE_OPTIONS='--inspect' next dev",
    "build": "rm -rf .next && NODE_ENV=production node theme.js && next build",
    "build:icp": "NODE_ENV=production node theme.js && SERVER_ENVIRONMENT=icp next build",
    "start": "next start",
    "test": "npm run test:unit:check && npm run test:bdd",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "test:bdd": "PWVIDEO=true ./node_modules/.bin/cucumber-js tests/bdd/**/*.feature --require tests/bdd/**/steps/**/*.ts --require tests/bdd/bdd-utils/custom-world.ts",
    "test:bdd:only": "BDD_CUCUMBER_PRETTY=true PWVIDEO=true ./node_modules/.bin/cucumber-js $1 --require tests/bdd/**/steps/**/*.ts --require tests/bdd/bdd-utils/custom-world.ts",
    "test:bdd:trace": "playwright show-trace $1",
    "test:unit": "jest --watch",
    "test:unit:check": "jest --coverage",
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "eslint --fix . --ext .js,.jsx,.ts,.tsx",
    "prettier:fix": "prettier --write . --config ./.prettierrc",
    "format": "npm run prettier:fix && npm run lint:fix",
    "precommit": "lint-staged",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build"
  },
...
```

## dev

Command for running frontend in development mode.

- `rm -rf .next` - clear artifacts from previus runs
- `NODE_ENV=development node theme.js` - get theme and fronts config from backend
- `next dev` - runs Next.js

## debug

Run frontend in debug mode

- `NODE_ENV=development node theme.js` - get theme and fronts config from backend
- `NODE_OPTIONS='--inspect' next dev` - runs Next.js in debug mode

## build

Build frontend for deployment

- `rm -rf .next` - clear artifacts from previus runs
- `NODE_ENV=development node theme.js` - get theme and fronts config from backend
- `next build` - build Next.js app

## build:icp

Build frontend for internet computer deployment

- `NODE_ENV=production node theme.js` - get theme and fronts config from backend
- `SERVER_ENVIRONMENT=icp next build` - get theme and fronts config from backend

## start

Runs builded Next.js app

- `next start` - runs Next.js app

## test

Runs all tests

- `npm run test:unit:check` - runs unit tests checking
- `npm run test:bdd` - runs BDD tests checking

## test:e2e

Runs Playwright tests

- `playwright test` - runs Playwright checking tests

## test:e2e:ui

Runs Playwright in UI mode

- `playwright test --ui` - runs Playwright in UI mode

## test:bdd

Runs BDD tests checking

- `PWVIDEO=true ./node_modules/.bin/cucumber-js tests/bdd/**/*.feature --require tests/bdd/**/steps/**/*.ts --require tests/bdd/bdd-utils/custom-world.ts` - runs Cucumber.js with required files

## test:bdd:only

Runs BDD specific tests checking

- `BDD_CUCUMBER_PRETTY=true PWVIDEO=true ./node_modules/.bin/cucumber-js $1 --require tests/bdd/**/steps/**/*.ts --require tests/bdd/bdd-utils/custom-world.ts` - runs Cucumber.js with required files and waits for passed relative path to test file

Example of usage for debugging specific file

```bash
npm run test:bdd:only ./tests/bdd/sps-lite/guest/view_main_page.feature

> frontend@0.1.0 test:bdd:only
> BDD_CUCUMBER_PRETTY=true PWVIDEO=true ./node_modules/.bin/cucumber-js $1 --require tests/bdd/**/steps/**/*.ts --require tests/bdd/bdd-utils/custom-world.ts ./tests/bdd/sps-lite/guest/view_main_page.feature

Feature: Guest can see public pages content # tests/bdd/sps-lite/guest/view_main_page.feature:1

  Scenario: Guest can see the heading # tests/bdd/sps-lite/guest/view_main_page.feature:3
    Given I'm a guest user
    When I am on the "/" page
    Then text "Jumpstart Your Lean Startup with Developer-Friendly Boilerplate" should be shown

1 scenario (1 passed)
3 steps (3 passed)
0m24.731s (executing steps: 0m24.315s)
```

You can also pass line number

```bash
npm run test:bdd:only ./tests/bdd/sps-lite/guest/view_main_page.feature:3

> frontend@0.1.0 test:bdd:only
> BDD_CUCUMBER_PRETTY=true PWVIDEO=true ./node_modules/.bin/cucumber-js $1 --require tests/bdd/**/steps/**/*.ts --require tests/bdd/bdd-utils/custom-world.ts ./tests/bdd/sps-lite/guest/view_main_page.feature:3

Feature: Guest can see public pages content # tests/bdd/sps-lite/guest/view_main_page.feature:1

  Scenario: Guest can see the heading # tests/bdd/sps-lite/guest/view_main_page.feature:3
    Given I'm a guest user
    When I am on the "/" page
    Then text "Jumpstart Your Lean Startup with Developer-Friendly Boilerplate" should be shown

1 scenario (1 passed)
3 steps (3 passed)
0m02.827s (executing steps: 0m02.528s)
```

## test:bdd:trace

Run Playwright UI for showing saved trace file

- `playwright show-trace $1` - run Playwright trace waits for passed relative path to trace file

Example of use for getting information what is wrong in feature scenarios

```bash
npm run test:bdd:trace ./tests/artifacts/traces/Guest-can-see-the-heading-2023-11-27T09_15_34trace.zip
```

## test:unit

Runs Jest test check in watch mode

- `jest --watch` - runs Jest in watch mode

## test:unit:check

Runs Jest test check

- `jest --coverage` - runs Jest with coverage

## lint

Runs ESlint checking

- `eslint . --ext .js,.jsx,.ts,.tsx` - runs ESlint checking

## lint:fix

Runs ESlint in fix mode

- `eslint --fix . --ext .js,.jsx,.ts,.tsx` - runs ESlint in fix mode

## prettier:fix

Runs Prettier in fix mode

- `prettier --write . --config ./.prettierrc` - runs Prettier with config file

## format

Runs formatting utils - ESlint and Prettier

- `npm run prettier:fix` - runs Prettier fix command
- `npm run lint:fix` - runs ESlint fix command

## precommit

Runs lint-staged utils on commit by Husky

- `lint-staged` - runs lint-staged util

## storybook

Runs Storybook for developing components

- `storybook dev -p 6006` - runs Storybook on 6006 port

## build-storybook

Build Storybook for deployment

- `storybook build` - build Storybook
