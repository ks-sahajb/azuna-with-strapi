import { i18nRouter } from "next-i18n-router";

import { NextRequest } from "next/server";

import i18nConfig from "@/app/i18Config";

export const middleware = (request: NextRequest) => {
  const { headers } = request;

  const locale = request.nextUrl.pathname.split("/")[1];

  const language =
    headers.get("accept-language")?.split(",")[0] || i18nConfig.defaultLocale;

  if (i18nConfig.locales.includes(language)) {
    const response = i18nRouter(request, {
      locales: i18nConfig.locales,
      defaultLocale: language,
    });

    response.headers.set("x-locale", locale);

    return response;
  }

  const response = i18nRouter(request, i18nConfig);

  response.headers.set("x-locale", locale);
  return response;
};

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
