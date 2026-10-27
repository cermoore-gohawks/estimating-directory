import { href } from './util';

export function breadcrumbLd(site: URL | undefined, items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: new URL(href(it.path), site).href,
    })),
  };
}
