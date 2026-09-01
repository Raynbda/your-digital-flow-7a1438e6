# Creator OS — Finishing touches

A few concrete items remain before the site is fully launch-ready. These are quick fixes, not new features.

## 1. Fix root route metadata placeholders (SEO finding, failing)

`src/routes/__root.tsx` still ships the default `Lovable App` title and `Lovable Generated Project` description. The leaf routes (`/`, `/diagnostic`, `/auth`) already have proper metadata, so this only affects pages that fall back to root defaults — but it's a failing SEO finding and looks unprofessional in any share/tab that hits the fallback.

Replace the root defaults with sitewide values only (no per-page title here):

- title → `Creator OS`
- description → `A 14-day creative workflow transformation — record your week, get a personalized operating system for apps, files, info, and projects.`
- og:title → `Creator OS`
- og:description → same as description
- twitter:site → remove `@Lovable` (or set to your own handle if you have one)
- Add `og:site_name` → `Creator OS`

## 2. Refresh the stale SEO + security scans

All SEO scanners are stale (last commit differs from current `ef77183`). Two metadata findings are still failing. After fixing #1, trigger a fresh SEO scan and let it re-verify. Security scans (`supabase`, `supply_chain`) are also slightly stale — a quick rescan confirms no regressions from the recent `has_role`/RLS changes.

## 3. Optional polish (only if you want it)

- **favicon**: still the default `/favicon.ico`. A custom mark (even a simple one) rounds out branding across browser tabs.
- **og:image**: no social preview image is set on any route. When someone shares the link, they get a blank card. I can generate one hero image for the homepage if you'd like.
- **robots.txt**: `sitemap[.]xml.ts` exists; confirm a robots.txt referencing the sitemap is served so crawlers find it.

## What's already done (no action needed)

- Landing page, diagnostic form (one-question-per-page + progress bar), results with $500 offer card, Payoneer checkout link.
- Admin dashboard at `/admin` with Google auth + admin role gating.
- Proof section, FAQ, ROI calculator, transformation visuals, custom domain live.
- Leaf-route metadata, sitemap, RLS, and security definer fix all in place.

## Plan of action

1. Edit `src/routes/__root.tsx` to replace the placeholder metadata.
2. Trigger a fresh SEO scan to clear the failing findings.
3. (Optional) generate og:image + favicon if you approve.

Approve to proceed with #1 and #2. Say the word if you also want #3.   
#3 is also approved