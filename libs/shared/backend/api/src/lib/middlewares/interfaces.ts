import type { MiddlewareGeneric as ParseQueryMiddleware } from "./parse-query";
import type { MiddlewareGeneric as LoggerMiddleware } from "./logger";

export type MiddlewaresGeneric = ParseQueryMiddleware & LoggerMiddleware;

export type ParseQueryMiddlewareGeneric = ParseQueryMiddleware;
export type LoggerMiddlewareGeneric = LoggerMiddleware;
