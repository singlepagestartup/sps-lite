---
sidebar_position: 1
---

# Installation and running

To run the frontend, you need to navigate to the `frontend` directory and execute the commands and actions specified on this page.

## Environment Variables

Next.js uses several files with environment variables, depending on the environment where the application is running. More details can be found in the [Official Next.js Documentation](https://nextjs.org/docs/basic-features/environment-variables).

For development, you will need the `.env.development` file, where you need to set/check the presence of several mandatory fields.

### NEXT_PUBLIC_BACKEND_URL

This parameter determines the `backend URL` to which requests for data retrieval are sent. By default, the backend runs on the `http://localhost:1337` or `http://localhost:1337` port, so we check the existence of this parameter in `.env.development`.

```txt title="./frontend/.end.development"

NEXT_PUBLIC_BACKEND_URL=http://localhost:1337
...
```

### NEXT_PUBLIC_FRONTEND_URL

A parameter that defines the URL of the launched frontend. By default, it is `http://localhost:3000` or `http://localhost:3000`.

```txt title="./frontend/.end.development"

...
NEXT_PUBLIC_FRONTEND_URL=http://localhost:3000
```

### NODE_ENV

Is used to determine the environment in which the application is running. This parameter can be set to `development`, `production`, or `test`, depending on the environment. It is often used to configure different settings for different environments, such as API endpoints, logging levels, and error handling. When the application is built for production, the `NODE_ENV` parameter is set to `production` automatically, and the application is optimized for performance.

```txt title="./frontend/.end.development"

...
NODE_ENV=development
```

As a result, the file should contain the following content

```jsx
NEXT_PUBLIC_BACKEND_URL=http://localhost:1337
NEXT_PUBLIC_FRONTEND_URL=http://localhost:3000
NODE_ENV=development
```

## **Launching the application**

When launching the application for the first time, it is necessary to install all the packages used in the project using the command:

```bash
npm install
```

Afterwards, you can launch the application using the command:

```bash
npm run dev
```

After that, the application will be available at the address `http://localhost:3000`.

## **Launching Storybook**

After installing the packages, you can launch Storybook in another console using the command:

```bash
npm run storybook
```

After that, Storybook will be available at the address `http://localhost:6006`

## **Launching Documentation**

The Single Page Startup application has documentation corresponding to the code base in which the application exists.

:::info
Also, up-to-date documentation published on the internet at [doc.singlepagestartup.com](https://doc.singlepagestartup.com/) may differ from yours, as the code base may differ if you have not updated Single Page Startup to the latest version. Therefore, you always have documentation in the `documentation` directory of your project.
:::

If you are currently in the frontend directory, you need to navigate to the `documentation` directory.

```bash
pwd
$ /Users/<your_username>/code/sps-lite/frontend
```

In the above case, we invoked the pwd command and obtained the absolute path to the current directory - we are in the `frontend` directory.

To navigate to the `documentation` directory, execute the following command:

```bash
cd ../documentation
```

```bash
pwd
$ /Users/<your_username>/code/sps-lite/documentation
```

Now that we are in the correct directory, we call the command to launch the documentation.

```bash
npm run start
```

After that, the documentation will be available at the address `http://localhost:3333`
