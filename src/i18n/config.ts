export const LOCALES = ['fr', 'eu'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'fr';

export type Bilingual<T = string> = { fr: T; eu: T };

export const LOCALE_LABELS: Record<Locale, string> = {
  fr: 'Français',
  eu: 'Euskara',
};

export const LOCALE_SHORT: Record<Locale, string> = {
  fr: 'FR',
  eu: 'EU',
};

export const OG_LOCALE: Record<Locale, string> = {
  fr: 'fr_FR',
  eu: 'eu_ES',
};

export const HTML_LANG: Record<Locale, string> = {
  fr: 'fr',
  eu: 'eu',
};
