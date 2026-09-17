import { DEFAULT_LOCALE, LOCALES, type Bilingual, type Locale } from './config';
import { ui } from './ui';

export function getLocaleFromUrl(url: URL): Locale {
  const segments = url.pathname.split('/').filter(Boolean);
  const first = segments[0];
  if (first && (LOCALES as readonly string[]).includes(first)) {
    return first as Locale;
  }
  return DEFAULT_LOCALE;
}

export function localize<T>(field: Bilingual<T>, locale: Locale): T {
  return field[locale] ?? field[DEFAULT_LOCALE];
}

export function t(key: string, locale: Locale): string {
  const dict = ui[locale] ?? ui[DEFAULT_LOCALE];
  const value = dict[key];
  if (value !== undefined) return value;
  // Fallback to default locale dict
  return ui[DEFAULT_LOCALE][key] ?? key;
}

/**
 * Strip the locale prefix from a pathname (returns the canonical FR path).
 * "/eu/services/sites-web" → "/services/sites-web"
 * "/services/sites-web"     → "/services/sites-web"
 */
export function stripLocale(pathname: string): string {
  for (const loc of LOCALES) {
    if (loc === DEFAULT_LOCALE) continue;
    if (pathname === `/${loc}` || pathname === `/${loc}/`) return '/';
    if (pathname.startsWith(`/${loc}/`)) return pathname.slice(`/${loc}`.length);
  }
  return pathname;
}

/**
 * Build a localized URL for the given canonical path and target locale.
 * Default locale = no prefix; other locales prefixed.
 */
export function localePath(path: string, locale: Locale): string {
  // Keep query strings and anchors outside the path normalization.
  const suffixIndex = path.search(/[?#]/);
  const pathname = suffixIndex === -1 ? path : path.slice(0, suffixIndex);
  const suffix = suffixIndex === -1 ? '' : path.slice(suffixIndex);
  const canonical = stripLocale(pathname).replace(/\/+$/, '') || '/';
  const localized = locale === DEFAULT_LOCALE
    ? canonical
    : `/${locale}${canonical === '/' ? '' : canonical}`;
  return `${localized === '/' ? '/' : `${localized}/`}${suffix}`;
}

/**
 * Helper: compute the equivalent URL on another locale, preserving the
 * current page (used by the language switcher), using the same trailing
 * slash convention as canonical URLs and the sitemap.
 */
export function alternateUrl(currentPath: string, targetLocale: Locale): string {
  return localePath(currentPath, targetLocale);
}
