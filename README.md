# Your Name — Ceramic Artist Portfolio

A four-page portfolio and teaching-application site for a ceramic artist, built with
[Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Stack, and why

- **Astro** — the site is almost entirely static content and photography, with one small
  interactive piece (the gallery lightbox). Astro ships zero JS by default and only adds it
  where a page actually needs it, which keeps the site fast and matches the "quiet,
  intentional" brief instead of just describing it.
- **Tailwind CSS** — the client's five brand colors are wired in as named tokens (see
  `tailwind.config.mjs`) so the design system is legible straight from class names
  (`text-oxblood`, `bg-mist-50`) rather than raw hex codes scattered through the markup.
- **No React/Vue** — the only interactive element, the lightbox, is plain DOM/JS (see
  `src/components/Lightbox.astro`). It didn't need a framework, so it doesn't have one.

## Getting started

```bash
npm install
npm run dev
```

Then visit `http://localhost:4321`.

## Project structure

```
src/
  components/       Reusable pieces (Nav, Footer, PullQuote, gallery grid, lightbox,
                     and PlaceholderImage — the stand-in for real photography)
  data/work.ts       Typed gallery data model: category, alt text, optional caption,
                     image path, aspect ratio
  layouts/
    BaseLayout.astro Shared <head>, nav, and footer across all four pages
  pages/
    index.astro      Home
    work.astro        Work (gallery, 4 categories, lightbox)
    teaching.astro     Teaching (3 sections)
    about.astro        About
  styles/global.css   Fonts, CSS reset, color/typography base styles, placeholder pattern
```

## Replacing the placeholder photography

Every image slot currently renders as a soft, textured, in-palette tile (via
`<PlaceholderImage />`) with its intended alt text printed in the corner, so it's obvious at a
glance what's still missing — never a gray box or broken-image icon.

To swap in real photos:

1. Drop final images into `public/images/` (a `work/` subfolder is already referenced by
   `src/data/work.ts` for gallery pieces — filenames like `functional-01.jpg` are expected but
   can be renamed freely as long as you update the `src` field).
2. In `src/data/work.ts`, each `WorkPiece` already has the right shape
   (`id`, `category`, `alt`, `caption?`, `src`, `aspect`) — point `src` at the real file and
   fill in `caption` if you want one to appear (captions are hidden by default, per the brief).
3. Replace the one-off `<PlaceholderImage alt="..." />` usages on the Home, Teaching, and About
   pages with `astro:assets`' `<Image>` component (or a plain `<img>`) once you have the hero,
   at-the-wheel, and studio photography. Each usage is a single, easy-to-find line.

### Target photo list (from the brief)

- 15–20 finished ceramic pieces, sorted into Functional Ware / Larger Forms / Experiments
- 2–3 photos of the artist throwing on the wheel
- 1 trimming photo
- 1 glazing photo
- 1 studio-wide photo

## Content

All copy is the client's own, taken directly from the brief — nothing here is filler text
except the images themselves.

## Notes for future work

- If the client wants to self-edit gallery content without touching code, `src/data/work.ts`
  is a natural candidate to migrate to an Astro content collection (markdown + frontmatter) or
  a headless CMS.
- Real photography will likely change the ideal aspect ratios in the gallery masonry —
  `aspect` values in `work.ts` are easy to adjust per piece.
