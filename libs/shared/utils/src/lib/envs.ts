export const BACKEND_URL =
  process.env["NEXT_PUBLIC_BACKEND_URL"] || "http://localhost:3000";
export const FRONTEND_URL =
  process.env["NEXT_PUBLIC_FRONTEND_URL"] || "http://localhost:3000";
export const SENTRY_DSN = process.env["NEXT_PUBLIC_SENTRY_DSN"] || "";
export const TELEGRAM_BOT_USERNAME =
  process.env["NEXT_PUBLIC_TELEGRAM_BOT_USERNAME"] || "";

export const COOKIE_SESSION_SECRET = process.env["COOKIE_SESSION_SECRET"];
export const COOKIE_SESSION_EXPIRATION_SECONDS =
  process.env["COOKIE_SESSION_EXPIRATION_SECONDS"] || "20";
export const COOKIE_SESSION_NAME =
  process.env["COOKIE_SESSION_NAME"] || "sps_ck_sn";

export const DATABASE_HOST = `${process.env["DATABASE_HOST"] || process.env["POSTGRES_HOST"] || "localhost"}`;

export const DATABASE_PORT = parseInt(
  `${process.env["DATABASE_PORT"] || "5432"}`,
);
export const DATABASE_NAME = `${process.env["DATABASE_NAME"] || process.env["POSTGRES_DATABASE"] || "sps"}`;

export const DATABASE_USERNAME = `${process.env["DATABASE_USERNAME"] || process.env["POSTGRES_USER"] || "sps"}`;

export const DATABASE_PASSWORD = `${
  process.env["DATABASE_PASSWORD"] ||
  process.env["POSTGRES_PASSWORD"] ||
  "password"
}`;

export const DATABASE_NO_SSL = process.env["DATABASE_NO_SSL"];

export const DATABASE_URL = `postgres://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`;

const DEFAULT_DATABASE_OPTIONS = {
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  user: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
};

export const DATABASE_OPTIONS = DATABASE_NO_SSL
  ? DEFAULT_DATABASE_OPTIONS
  : {
      ...DEFAULT_DATABASE_OPTIONS,
      ssl: true,
    };
