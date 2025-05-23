import { headers } from "next/headers";

import i18nConfig from "@/app/i18Config";

export const getLocale = async () => {
  const headerList = await headers();

  const locale = headerList.get("x-locale");

  return locale
    ? i18nConfig.locales.includes(locale)
      ? locale
      : i18nConfig.defaultLocale
    : i18nConfig.defaultLocale;
};
