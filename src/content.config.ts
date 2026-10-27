import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { TRADE_SLUGS } from './data/trades';

const listings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/listings' }),
  schema: z.object({
    name: z.string(),
    vendorUrl: z.string().url(),
    trades: z.array(z.enum(TRADE_SLUGS)).min(1),
    pricingSummary: z.string(),
    // Lowest verified price for a PAID plan, in USD. null = not verified / not published.
    startingPrice: z.number().nonnegative().nullable(),
    startingPricePeriod: z.enum(['month', 'year', 'one-time']).nullable().default(null),
    // Human-readable starting price exactly as the vendor states it.
    startingPriceLabel: z.string(),
    freeTrial: z.boolean(),
    freePlan: z.boolean().default(false),
    platforms: z.array(z.string()).min(1),
    bestFor: z.string(),
    pros: z.array(z.string()).min(1),
    cons: z.array(z.string()).min(1),
    verdict: z.string(),
    lastVerified: z.coerce.date(),
    affiliateUrl: z.string().url().or(z.literal('')).optional().default(''),
    description: z.string().max(170).optional(),
    publishedAt: z.coerce.date().optional(),
  }),
});

export const collections = { listings };
