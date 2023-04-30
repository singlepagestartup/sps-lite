import {
  ISpsLiteMainPage,
  ISpsLiteNotFoundPage,
  ISpsLitePublicPage,
} from "./sps-lite";

export interface IPublicPage extends ISpsLitePublicPage {}

export interface IMainPage extends ISpsLiteMainPage {}

export interface INotFoundPage extends ISpsLiteNotFoundPage {}
