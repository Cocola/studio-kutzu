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
  const canonical = stripLocale(path);
  if (locale === DEFAULT_LOCALE) return canonical;
  if (canonical === '/') return `/${locale}`;
  return `/${locale}${canonical}`;
}

/**
 * Helper: compute the equivalent URL on another locale, preserving the
 * current page (used by the language switcher). Strips trailing slash from
 * non-root paths to avoid double slashes.
 */
export function alternateUrl(currentPath: string, targetLocale: Locale): string {
  return localePath(currentPath, targetLocale);
}
