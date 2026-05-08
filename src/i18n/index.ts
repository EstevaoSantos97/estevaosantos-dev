import en from './en';
import pt from './pt';

const dictionaries = { en, pt } as const;

export type Locale = keyof typeof dictionaries;

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang in dictionaries) return lang as Locale;
  return 'en';
}

export function useTranslations(lang: Locale) {
  return dictionaries[lang];
}