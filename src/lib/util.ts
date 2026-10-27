/** Prefix an internal path with the configured base path. */
export function href(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}

/** Monthly-equivalent of the lowest paid price, used for filtering. */
export function monthlyEquivalent(price: number | null, period: string | null): number | null {
  if (price === null) return null;
  if (period === 'year') return Math.round((price / 12) * 100) / 100;
  return price;
}

export type PriceBand = 'under100' | '100to300' | 'over300' | 'unknown';

export function priceBand(monthly: number | null): PriceBand {
  if (monthly === null) return 'unknown';
  if (monthly < 100) return 'under100';
  if (monthly <= 300) return '100to300';
  return 'over300';
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

export function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}
