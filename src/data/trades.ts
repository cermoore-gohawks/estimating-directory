export interface Trade {
  slug: string;
  name: string;
  blurb: string;
}

// Order here controls display order on the homepage.
export const TRADES: Trade[] = [
  { slug: 'general', name: 'General Contractors', blurb: 'Multi-scope takeoff and estimating for GCs and remodelers who price every trade on a job.' },
  { slug: 'roofing', name: 'Roofing', blurb: 'Roof measurement reports, pitch and waste calculations, and proposal tools for roofers.' },
  { slug: 'concrete', name: 'Concrete', blurb: 'Volume takeoffs for slabs, footings, walls, and flatwork, plus rebar and forming.' },
  { slug: 'electrical', name: 'Electrical', blurb: 'Device counts, conduit and wire runs, and labor units for electrical contractors.' },
  { slug: 'plumbing', name: 'Plumbing', blurb: 'Fixture counts, pipe runs, and fittings for plumbing estimators.' },
  { slug: 'hvac', name: 'HVAC & Mechanical', blurb: 'Ductwork, equipment, and fittings takeoff for HVAC and mechanical contractors.' },
  { slug: 'painting', name: 'Painting', blurb: 'Wall, ceiling, and trim area takeoffs with production rates for painting contractors.' },
  { slug: 'landscaping', name: 'Landscaping', blurb: 'Area, plant count, and hardscape takeoffs for landscape contractors.' },
  { slug: 'drywall', name: 'Drywall', blurb: 'Wall area, board counts, and framing takeoffs for drywall and interiors contractors.' },
  { slug: 'flooring', name: 'Flooring', blurb: 'Area takeoffs with waste factors for flooring installers.' },
  { slug: 'masonry', name: 'Masonry', blurb: 'CMU, brick, stone, and mortar quantities for masons.' },
];

export const TRADE_SLUGS = TRADES.map((t) => t.slug) as [string, ...string[]];

export function tradeBySlug(slug: string): Trade | undefined {
  return TRADES.find((t) => t.slug === slug);
}
