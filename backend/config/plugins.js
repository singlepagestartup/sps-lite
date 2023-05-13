module.exports = ({ env }) => {
  const config = {
    ["users-permissions"]: {
      config: {
        appName: env("APP_NAME", "Single Page Startup"),
        registerByEmailCode: false,
        authFactors: [
          "auth.callback",
          "auth.emailConfirmation",
          "user.checkOtp",
        ],
      },
    },
  };

  const emailProvider = env("EMAIL_PROVIDER")
    ? env("EMAIL_PROVIDER")
    : "mailtrap";

  config.email = {
    config: {
      ...emailProviders[emailProvider](env),
      appName: env("APP_NAME", "Single Page Startup"),
    },
  };

  if (env("AWS_S3_ACCESS_KEY_ID")) {
    config.upload = {
      config: {
        provider: "aws-s3",
        providerOptions: {
          accessKeyId: env("AWS_S3_ACCESS_KEY_ID"),
          secretAccessKey: env("AWS_S3_ACCESS_SECRET"),
          region: env("AWS_S3_REGION", "ru-1"),
          endpoint: env("AWS_S3_ENDPOINT"),
          apiVersion: "latest",
          signatureVersion: "v4",
          params: {
            Bucket: env("AWS_S3_BUCKET"),
          },
        },
      },
    };
  }

  if (env("SENTRY_DSN")) {
    config.sentry = {
      enabled: true,
      config: {
        dsn: env("SENTRY_DSN"),
        sendMetadata: true,
      },
    };
  }

  return config;
};

const emailProviders = {
  "amazon-ses": (env) => ({
    provider: "amazon-ses",
    providerOptions: {
      key: env("AWS_SES_ACCESS_KEY_ID"),
      secret: env("AWS_SES_ACCESS_SECRET"),
      amazon: env("AWS_SES_URL"),
    },
    settings: {
      defaultFrom: env("AWS_SES_DEFAULT_FROM"),
      defaultReplyTo: env("AWS_SES_DEFAULT_REPLY_TO"),
    },
  }),
  mailtrap: (env) => ({
    provider: "mailtrap",
    providerOptions: {
      user: env("MAILTRAP_USER", "c94cc3fc1db67b"),
      password: env("MAILTRAP_PASSWORD", "7e018be73f6404"),
    },
    settings: {
      defaultFrom: env(
        "MAILTRAP_DEFAULT_FROM",
        "no-reply@singlepagestartup.com",
      ),
      defaultReplyTo: env(
        "MAILTRAP_DEFAULT_REPLY_TO",
        "contact@singlepagestartup.com",
      ),
    },
  }),
  sendpulse: (env) => ({
    provider: "sendpulse",
    providerOptions: {
      user: env("SENDPULSE_USER_ID"),
      secret: env("SENDPULSE_USER_SECRET"),
    },
    settings: {
      defaultFrom: {
        name: env("SENDPULSE_DEFAULT_FROM_NAME", "SinglePageStartup"),
        email: env("SENDPULSE_DEFAULT_FROM", "no-reply@singlepagestartup.com"),
      },
      defaultReplyTo: env(
        "SENDPULSE_DEFAULT_REPLY_TO",
        "contact@singlepagestartup.com",
      ),
    },
  }),
};
