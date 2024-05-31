import type { MiddlewareGeneric as ParseQueryMiddleware } from "./parse-query";
import type { MiddlewareGeneric as LoggerMiddleware } from "./logger";
import type { MiddlewareGeneric as ParseBodyMiddleware } from "./parse-body";

export type MiddlewaresGeneric = ParseQueryMiddleware &
  LoggerMiddleware &
  ParseBodyMiddleware;

export type ParseQueryMiddlewareGeneric = ParseQueryMiddleware;
export type LoggerMiddlewareGeneric = LoggerMiddleware;
export type ParseBodyMiddlewareGeneric = ParseBodyMiddleware;
