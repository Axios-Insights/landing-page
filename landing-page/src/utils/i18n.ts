import { languages, defaultLang, type Lang } from "@i18n";

export const isLang = (lang: string): lang is Lang => {
  return lang in languages;
};

export const getLangFromUrl = (url: URL): Lang => {
  const [, lang] = url.pathname.split("/");

  if (!lang) return defaultLang;

  if (lang && isLang(lang)) return lang;

  return defaultLang;
};
