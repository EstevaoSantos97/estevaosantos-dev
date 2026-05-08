# i18n: English / Portuguese Toggle

**Date:** 2026-05-08  
**Status:** Completed

---

## What was done

Added full internationalization (EN/PT) to the portfolio site using Astro's native i18n routing. Every section of the site now renders in both languages, controlled by a toggle switch in the header.

## Routing strategy

- English is the default locale. URLs stay clean: `/`, `/work/contract-retention-api`.
- Portuguese uses the `/pt` prefix: `/pt/`, `/pt/work/contract-retention-api`.
- Configured in `astro.config.mjs` with `prefixDefaultLocale: false`.

## Files created

| File | Purpose |
|------|---------|
| `src/i18n/en.ts` | English dictionary (all site copy) |
| `src/i18n/pt.ts` | Portuguese dictionary (all site copy) |
| `src/i18n/index.ts` | Helper functions: `useTranslations`, `getLangFromUrl`, `Locale` type |
| `src/pages/pt/index.astro` | Portuguese homepage |
| `src/pages/pt/work/contract-retention-api.mdx` | Case study translated to PT |
| `src/pages/pt/work/third-party-collections-deadlock.mdx` | Case study translated to PT |
| `src/pages/pt/work/invoice-export-refactor.mdx` | Case study translated to PT |

## Files modified

| File | Changes |
|------|---------|
| `astro.config.mjs` | Added `i18n` config block (defaultLocale, locales, routing) |
| `src/layouts/Layout.astro` | Receives `lang` prop, dynamic `<html lang>`, imported `ClientRouter` for view transitions, footer translated via dictionary |
| `src/layouts/CaseStudy.astro` | Detects lang from URL via `getLangFromUrl`, translates "Back to Selected Work" link and breadcrumb label |
| `src/components/Header.astro` | Three-column grid layout (logo / centered nav / toggle). Nav labels from dictionary. Logo href adapts to current lang. Language toggle switch (EN/PT) with sliding indicator |
| `src/components/Hero.astro` | Receives `lang`, all copy from dictionary |
| `src/components/About.astro` | Receives `lang`, all copy from dictionary |
| `src/components/Experience.astro` | Receives `lang`, roles/bullets/periods from dictionary |
| `src/components/Work.astro` | Receives `lang`, case data from dictionary, hrefs computed with lang prefix |
| `src/components/Projects.astro` | Receives `lang`, featured + others from dictionary |
| `src/components/Skills.astro` | Receives `lang`, categories from dictionary |
| `src/components/Contact.astro` | Receives `lang`, title/subtitle from dictionary (links stay hardcoded — not translatable) |
| `src/pages/index.astro` | Passes `lang="en"` to Layout and all components |

## Architecture decisions

**Dictionary-driven components.** All translatable text lives in `en.ts` / `pt.ts`. Components are pure templates that receive `lang` and call `useTranslations(lang)`. No hardcoded copy in any component.

**Slug-based hrefs for case studies.** The Work component stores slugs in the dictionary and computes full hrefs at render time based on `lang` (`/work/slug` vs `/pt/work/slug`). Avoids duplicating URLs across dictionaries.

**Language detection in CaseStudy.** Instead of requiring a `lang` frontmatter field in every MDX file, `CaseStudy.astro` calls `getLangFromUrl(Astro.url)` to infer the locale from the URL path. Less boilerplate in MDX files.

**View Transitions.** Added `<ClientRouter />` (Astro 6 API) to `Layout.astro` for smooth crossfade between pages when toggling language.

## Toggle behavior

The language toggle is an `<a>` tag — no JavaScript required. When on EN, it links to `/pt`. When on PT, it links to `/`. The toggle renders as a sliding switch with "EN" and "PT" labels. Active language label is highlighted (`text-ink`), inactive is dimmed (`text-muted`). The indicator circle slides via `translate-x-5` with a 200ms CSS transition.

## Known limitations / next steps

- **Nav anchor links on case study pages.** Currently `#about`, `#experience`, etc. are relative anchors. On case study pages they don't navigate back to the homepage sections. Should be changed to `{homeHref}#about`.
- **No hreflang tags.** `<link rel="alternate" hreflang="...">` should be added to `<head>` before production for proper SEO indexing of both language versions.
- **No `<meta name="description">`** per language.
- **No mobile hamburger menu.** The header nav with 5 links + toggle will be tight on small screens.
