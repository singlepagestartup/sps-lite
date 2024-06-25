export const BACKEND_URL =
  process.env["NEXT_PUBLIC_BACKEND_URL"] || "http://localhost:3000";
export const HOST_URL =
  process.env["NEXT_PUBLIC_HOST_URL"] || "http://localhost:3000";
export const SENTRY_DSN = process.env["NEXT_PUBLIC_SENTRY_DSN"] || "";

export const SPS_RBAC_COOKIE_SESSION_SECRET =
  process.env["SPS_RBAC_COOKIE_SESSION_SECRET"];
export const SPS_RBAC_COOKIE_SESSION_EXPIRATION_SECONDS =
  process.env["SPS_RBAC_COOKIE_SESSION_EXPIRATION_SECONDS"] || "3600";
export const SPS_RBAC_COOKIE_SESSION_NAME =
  process.env["SPS_RBAC_COOKIE_SESSION_NAME"] || "sps_rbac_ce_sn";

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

export const NEXT_PUBLIC_HOST_METADATA_TITLE =
  process.env["NEXT_PUBLIC_HOST_METADATA_TITLE"] || "Single Page Startup";
export const NEXT_PUBLIC_HOST_METADATA_DESCRIPTION =
  process.env["NEXT_PUBLIC_HOST_METADATA_DESCRIPTION"] ||
  "The fastest way to create service oriented Next.js project.";
export const NEXT_PUBLIC_HOST_METADATA_ICON =
  process.env["NEXT_PUBLIC_HOST_METADATA_ICON"] || "/images/favicon.svg";
export const NEXT_PUBLIC_HOST_METADATA_KEYWORDS =
  process.env["NEXT_PUBLIC_HOST_METADATA_KEYWORDS"] ||
  "nextjs,startup,sps,singlepagestartup,nx";

export const KV_HOST = process.env["KV_HOST"] || "localhost";
export const KV_PORT = Number(process.env["KV_PORT"]) || 80;
export const KV_SSL = process.env["KV_SSL"] || "true";
export const KV_URL = process.env["KV_URL"];
export const KV_USERNAME = process.env["KV_USERNAME"] || "default";
export const KV_PASSWORD = process.env["KV_PASSWORD"];
