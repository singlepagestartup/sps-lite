import type { MiddlewareGeneric as ParseQueryMiddleware } from "./parse-query";
import type { MiddlewareGeneric as LoggerMiddleware } from "./logger";
import type { MiddlewareGeneric as ParseBodyMiddleware } from "./parse-body";
import { SessionMiddlewareGeneric } from "@sps/sps-rbac-backend-sdk";

export type MiddlewaresGeneric = ParseQueryMiddleware &
  LoggerMiddleware &
  ParseBodyMiddleware &
  SessionMiddlewareGeneric;

export type ParseQueryMiddlewareGeneric = ParseQueryMiddleware;
export type LoggerMiddlewareGeneric = LoggerMiddleware;
export type ParseBodyMiddlewareGeneric = ParseBodyMiddleware;
