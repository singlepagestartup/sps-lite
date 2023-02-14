export enum PAGES {
  MAIN = `/`,
  TERMS_AND_CONDITIONS = `/terms-conditions`,
  PRIVACY_POLICY = `/privacy-policy`,
  LOGIN = `/auth/login`,
  PROFILE = `/profile`,
  PROFILE_SETTINGS = `/profile/settings`,
  NOT_FOUND = `/404`,
  PRODUCTS = `/products`,
  CHECKOUT = `/checkout`,
  ARTICLES = `/articles`,
  ARTICLE = `/articles/[id]`,
}

type TRoute = {
  [key in PAGES]: {
    readonly isPublic: boolean;
    readonly isAuth?: boolean;
  };
};

export const routes: TRoute = {
  "/": {
    isPublic: true,
  },
  "/products": {
    isPublic: true,
  },
  "/checkout": {
    isPublic: true,
  },
  "/articles": {
    isPublic: true,
  },
  "/articles/[id]": {
    isPublic: true,
  },
  "/terms-conditions": {
    isPublic: true,
  },
  "/privacy-policy": {
    isPublic: true,
  },
  "/auth/login": {
    isPublic: false,
    isAuth: true,
  },
  "/profile": {
    isPublic: false,
  },
  "/profile/settings": {
    isPublic: false,
  },
  "/404": {
    isPublic: true,
  },
};
