const path = require("path");

module.exports = ({ env }) => {
  const databaseClient = env("DATABASE_CLIENT", "postgres");
  const connection = connections[databaseClient](env);
  return connection;
};

const connections = {
  sqlite: (env) => ({
    connection: {
      client: "sqlite",
      connection: {
        filename: path.join(
          __dirname,
          "..",
          env("DATABASE_FILENAME", "../.tmp/data.db"),
        ),
      },
      useNullAsDefault: true,
    },
  }),
  postgres: (env) => {
    const config = {
      connection: {
        client: "postgres",
        connection: {
          host: env("DATABASE_HOST", "127.0.0.1"),
          port: env.int("DATABASE_PORT", 5432),
          database: env("DATABASE_NAME", "sps"),
          user: env("DATABASE_USERNAME", "postgres"),
          password: env("DATABASE_PASSWORD", "password"),
          pool: {
            acquireConnectionTimeout: 5000,
            pool: {
              min: 1,
              max: 10,
              createTimeoutMillis: 8000,
              acquireTimeoutMillis: 8000,
              idleTimeoutMillis: 8000,
              reapIntervalMillis: 1000,
              createRetryIntervalMillis: 100,
            },
          },
        },
      },
    };

    if (env.bool("DATABASE_SSL", false)) {
      if (env.bool("DATABASE_SSL_SELF_SIGNED", false)) {
        config.connection.connection["ssl"] = {
          rejectUnauthorized: false,
        };
      } else {
        config.connection.connection["ssl"] = true;
      }
    }

    return config;
  },
};
